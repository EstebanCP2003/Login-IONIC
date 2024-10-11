import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HolaPage } from './hola.page';

describe('HolaPage', () => {
  let component: HolaPage;
  let fixture: ComponentFixture<HolaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
