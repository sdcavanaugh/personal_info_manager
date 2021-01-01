import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { DataCard } from '../models/data-card';
import { MessageService } from '../services/message.service';


@Injectable({
  providedIn: 'root'
})
export class DataCardsService {

  private dataCardsUrl = 'api/dataCards';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /* GET dataCards from server */
  getDataCards(): Observable<DataCard[]> {
    return this.http.get<DataCard[]>(this.dataCardsUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<DataCard[]>('getDataCards', []))
    );

  }

  /** GET dataCard by id. Return `undefined` when id not found */
  getDataCardNo404<Data>(id: number): Observable<DataCard> {
    const url = `${this.dataCardsUrl}/?id=${id}`;
    return this.http.get<DataCard[]>(url)
      .pipe(
        map(cards => cards[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} dataCard id=${id}`);
        }),
        catchError(this.handleError<DataCard>(`getDataCard id=${id}`))
      );
  }

  /** GET dataCard by id. Will 404 if id not found */
  getDataCard(id: number): Observable<DataCard> {
    const url = `${this.dataCardsUrl}/${id}`;
    return this.http.get<DataCard>(url).pipe(
      tap(_ => this.log(`fetched dataCard id=${id}`)),
      catchError(this.handleError<DataCard>(`getDataCard id=${id}`))
    );
  }

  /* GET dataCard whose name contains search term */
  searchDataCards(term: string): Observable<DataCard[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<DataCard[]>(`${this.dataCardsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found dataCard matching "${term}"`) :
         this.log(`no dataCard matching "${term}"`)),
      catchError(this.handleError<DataCard[]>('searchDataCards', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addDataCard(card: DataCard): Observable<DataCard> {
    return this.http.post<DataCard>(this.dataCardsUrl, card, this.httpOptions).pipe(
      tap((newCard: DataCard) => this.log(`added dataCard w/ id=${newCard.id}`)),
      catchError(this.handleError<DataCard>('addDataCard'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteDataCard(card: DataCard | string): Observable<DataCard> {
    const id = typeof card === 'string' ? card : card.id;
    const url = `${this.dataCardsUrl}/${id}`;

    return this.http.delete<DataCard>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted dataCard id=${id}`)),
      catchError(this.handleError<DataCard>('deleteDataCard'))
    );
  }

  /** PUT: update the hero on the server */
  updateDataCard(card: DataCard): Observable<any> {
    return this.http.put(this.dataCardsUrl, card, this.httpOptions).pipe(
      tap(_ => this.log(`updated card id=${card.id}`)),
      catchError(this.handleError<any>('updateDataCard'))
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
