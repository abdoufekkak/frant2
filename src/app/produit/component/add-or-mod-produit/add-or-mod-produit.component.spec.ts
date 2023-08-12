import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrModProduitComponent } from './add-or-mod-produit.component';

describe('AddOrModProduitComponent', () => {
  let component: AddOrModProduitComponent;
  let fixture: ComponentFixture<AddOrModProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrModProduitComponent]
    });
    fixture = TestBed.createComponent(AddOrModProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
