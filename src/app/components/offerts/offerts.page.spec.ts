import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertsPage } from './offerts.page';

describe('OffertsPage', () => {
  let component: OffertsPage;
  let fixture: ComponentFixture<OffertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffertsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
