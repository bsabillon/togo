import { CardService } from './../../../../services/card.service';
import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {
  public user: user;
  public userCards: any = [];

  constructor(public cardService: CardService) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getUserCards();
  }

  getUserCards() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.cardService.getCards(this.user.userEmail).subscribe((iCard: ICard) => {
      this.userCards = iCard;
    });
  }

  deleteUserCards(cardId) {
    this.cardService.deleteCards(cardId).subscribe((data) => {
      this.getUserCards();
    });
  }

}
