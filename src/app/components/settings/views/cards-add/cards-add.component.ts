import { Router } from '@angular/router';
import { CardService } from './../../../../services/card.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-cards-add',
  templateUrl: './cards-add.component.html',
  styleUrls: ['./cards-add.component.scss'],
})
export class CardsAddComponent implements OnInit {
  formGroupCards: FormGroup;
  public user: user;

  constructor(
    public cardService: CardService,
    private router: Router,
    public formBuilder: FormBuilder,
  ) {
    this.formGroupCards = this.formBuilder.group({
      cardName: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      cardNumber: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      expiration: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      description: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      cvv: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
   }

  ngOnInit() {}

  addNewCard() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.cardService.setCards(
      this.formGroupCards.get('cardNumber').value,
      this.formGroupCards.get('cardName').value,
      this.formGroupCards.get('expiration').value,
      this.formGroupCards.get('cvv').value,
      this.formGroupCards.get('description').value,
      this.user.userEmail
    ).subscribe((data) => {
    });
    this.router.navigate(['settings']);
  }

}
