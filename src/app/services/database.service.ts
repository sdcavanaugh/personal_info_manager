import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../services/message.service';
import { GenericCard } from '../models/generic-card';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dataUrl = 'api/cards';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /* GET ALL cards from server */
  getCards(): Observable<GenericCard[]> {
    return this.http.get<GenericCard[]>(this.dataUrl)
      .pipe(
        tap(_ => this.log('fetched cards')),
        catchError(this.handleError<GenericCard[]>('getCards', []))
      );
  }

  /** GET GenericCard by id. Return `undefined` when id not found */
  getCardNo404<Data>(id: string): Observable<GenericCard> {
    const url = `${this.dataUrl}/?id=${id}`;
    return this.http.get<GenericCard[]>(url)
      .pipe(
        map(cards => cards[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} card id=${id}`);
        }),
        catchError(this.handleError<GenericCard>(`getCard id=${id}`))
      );
  }

  /** GET GenericCard by id. Will 404 if id not found */
  getCard(id: string): Observable<GenericCard> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.get<GenericCard>(url).pipe(
      tap(_ => {
        this.log(`fetched card id=${id}`);
      }),
      catchError(this.handleError<GenericCard>(`getCard id=${id}`))
    );
  }

  /** GET all cards of a given type */
  getCardsByType(cardType: string): Observable<GenericCard[]>{
    if (!cardType.trim()) {
      // if no cardType, return empty array.
      return of([]);
    }
    return this.http.get<GenericCard[]>(`${this.dataUrl}/?type=${cardType}`)
      .pipe(
        tap( cards => {
          if (cards.length) {
            this.log(`fetched ${cards.length} ${cardType} cards`);
          } else {
            this.log(`no ${cardType} cards `);
          }
        }),
        catchError(this.handleError<GenericCard[]>('getCardsByType', []))
      );
  }

  /* GET all cards whose name contains search term */
  searchByName(term: string): Observable<GenericCard[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<GenericCard[]>(`${this.dataUrl}/?name=${term}`)
      .pipe(
        tap(x => x.length ?
          this.log(`found card matching "${term}"`) :
          this.log(`no card matching "${term}"`)),
        catchError(this.handleError<GenericCard[]>('searchCards', []))
     );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addCard(card: GenericCard): Observable<GenericCard> {
    return this.http.post<GenericCard>(this.dataUrl, card, this.httpOptions)
      .pipe(
        tap((newCard: GenericCard) => this.log(`added card w/ id=${newCard.id}`)),
        catchError(this.handleError<GenericCard>('addCard'))
     );
  }

  /** DELETE: delete the hero from the server */
  deleteCard(card: GenericCard | string): Observable<GenericCard> {
    const id = typeof card === 'string' ? card : card.id;
    const url = `${this.dataUrl}/${id}`;

    return this.http.delete<GenericCard>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted card id=${id}`)),
        catchError(this.handleError<GenericCard>('deleteCard'))
     );
  }

  /** PUT: update the hero on the server */
  updateCard(card: GenericCard): Observable<any> {
    return this.http.put(this.dataUrl, card, this.httpOptions)
      .pipe(
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
    this.messageService.add(`DataCardsService: ${message}`);
  }
}
