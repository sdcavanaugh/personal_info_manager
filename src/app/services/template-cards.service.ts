import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { TemplateCard } from '../models/template-card';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateCardsService {
  private dataUrl = 'api/templateCards';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /* GET cards from server */
  getCards(): Observable<TemplateCard[]> {
    return this.http.get<TemplateCard[]>(this.dataUrl)
    .pipe(
      tap(_ => this.log('fetched cards')),
      catchError(this.handleError<TemplateCard[]>('getCards', []))
    );

  }

  /** GET dataCard by id. Return `undefined` when id not found */
  getCardNo404<Data>(id: string): Observable<TemplateCard> {
    const url = `${this.dataUrl}/?id=${id}`;
    return this.http.get<TemplateCard[]>(url)
      .pipe(
        map(cards => cards[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} card id=${id}`);
        }),
        catchError(this.handleError<TemplateCard>(`getCard id=${id}`))
      );
  }

  /** GET dataCard by id. Will 404 if id not found */
  getCard(id: string): Observable<TemplateCard> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.get<TemplateCard>(url).pipe(
      tap(_ => { 
        this.log(`fetched card id=${id}`); 
        this.log(`type: ${_.type}`);
        this.log(`type: ${_.category}`);
        this.log(`name: ${_.name}`);
        for( let p in _.properties) {
          this.log(`${p}: ${_[p]}`);
        }
      }),
      catchError(this.handleError<TemplateCard>(`getCard id=${id}`))
    );
  }

  /* GET dataCard whose name contains search term */
  searchCards(term: string): Observable<TemplateCard[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<TemplateCard[]>(`${this.dataUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found card matching "${term}"`) :
         this.log(`no card matching "${term}"`)),
      catchError(this.handleError<TemplateCard[]>('searchCards', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addCard(card: TemplateCard): Observable<TemplateCard> {
    return this.http.post<TemplateCard>(this.dataUrl, card, this.httpOptions).pipe(
      tap((newCard: TemplateCard) => this.log(`added card w/ id=${newCard.id}`)),
      catchError(this.handleError<TemplateCard>('addCard'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteCard(card: TemplateCard | string): Observable<TemplateCard> {
    const id = typeof card === 'string' ? card : card.id;
    const url = `${this.dataUrl}/${id}`;

    return this.http.delete<TemplateCard>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted card id=${id}`)),
      catchError(this.handleError<TemplateCard>('deleteCard'))
    );
  }

  /** PUT: update the hero on the server */
  updateCard(card: TemplateCard): Observable<any> {
    return this.http.put(this.dataUrl, card, this.httpOptions).pipe(
      tap(_ => this.log(`updated card id=${card.id}`)),
      catchError(this.handleError<any>('updateCard'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`TemplateCardsService: ${message}`);
  }
}
