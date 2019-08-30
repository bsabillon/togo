import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, CanActivate } from '@angular/router';
import { ICard } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public icard: ICard;
  public endpoint = 'https://togo01.herokuapp.com';
  headers = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient) { }

  getCards(userEmail: string) {
    return this.http.get(`${this.endpoint}/cardByUser/${userEmail}`);
  }

  deleteCards(cardId: string) {
    return this.http.delete(`${this.endpoint}/deleteCard/${cardId}`);
  }

  setCards(cardNumber: string, cardName: string, cardExpiration: string, cardCVV: string, cardDescription: string, userEmail: string) {
    // tslint:disable-next-line: max-line-length
    const body = `{"cardNumber": "${cardNumber}", "cardName": "${cardName}", "cardExpiration": "${cardExpiration}", "cardCVV": ${cardCVV}, "cardDescription": "${cardDescription}", "userEmail": "${userEmail}" }`;
    return this.http.post(`${this.endpoint}/addCard`, body, {headers: this.headers});
  }
}
