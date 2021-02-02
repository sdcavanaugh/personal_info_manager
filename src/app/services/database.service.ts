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
  getCards(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl)
      .pipe(
        tap(_ => this.log('fetched cards')),
        catchError(this.handleError<any[]>('getCards', []))
      );
  }

  /** GET GenericCard by id. Return `undefined` when id not found */
  getCardNo404<Data>(id: string): Observable<any> {
    const url = `${this.dataUrl}/?id=${id}`;
    return this.http.get<any[]>(url)
      .pipe(
        map(cards => cards[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} card id=${id}`);
        }),
        catchError(this.handleError<any>(`getCard id=${id}`))
      );
  }

  /** GET GenericCard by id. Will 404 if id not found */
  getCard(id: string): Observable<any> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => {
        this.log(`fetched card id=${id}`);
      }),
      catchError(this.handleError<any>(`getCard id=${id}`))
    );
  }

  /** GET all cards of a given type */
  getCardsByType(cardType: string): Observable<any[]>{
    if (!cardType.trim()) {
      // if no cardType, return empty array.
      return of([]);
    }
    return this.http.get<any[]>(`${this.dataUrl}/?type=${cardType}`)
      .pipe(
        tap( cards => {
          if (cards.length) {
            this.log(`fetched ${cards.length} ${cardType} cards`);
          } else {
            this.log(`no ${cardType} cards `);
          }
        }),
        catchError(this.handleError<any[]>('getCardsByType', []))
      );
  }

  /* GET all cards whose name contains search term */
  searchByName(term: string): Observable<any[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<any[]>(`${this.dataUrl}/?name=${term}`)
      .pipe(
        tap(x => x.length ?
          this.log(`found card matching "${term}"`) :
          this.log(`no card matching "${term}"`)),
        catchError(this.handleError<any[]>('searchCards', []))
     );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addCard(card: any): Observable<any> {
    return this.http.post<any>(this.dataUrl, card, this.httpOptions)
      .pipe(
        tap((newCard: any) => this.log(`added card w/ id=${newCard.id}`)),
        catchError(this.handleError<any>('addCard'))
     );
  }

  /** DELETE: delete the hero from the server */
  deleteCard(card: any | string): Observable<any> {
    const id = typeof card === 'string' ? card : card.id;
    const url = `${this.dataUrl}/${id}`;

    return this.http.delete<any>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted card id=${id}`)),
        catchError(this.handleError<any>('deleteCard'))
     );
  }

  /** PUT: update the hero on the server */
  updateCard(card: any): Observable<any> {
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
