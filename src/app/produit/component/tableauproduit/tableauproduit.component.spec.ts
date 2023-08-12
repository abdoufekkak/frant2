import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauproduitComponent } from './tableauproduit.component';

describe('TableauproduitComponent', () => {
  let component: TableauproduitComponent;
  let fixture: ComponentFixture<TableauproduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableauproduitComponent]
    });
    fixture = TestBed.createComponent(TableauproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
