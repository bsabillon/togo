import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresListPage } from './stores-list.page';

describe('StoresListPage', () => {
  let component: StoresListPage;
  let fixture: ComponentFixture<StoresListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
