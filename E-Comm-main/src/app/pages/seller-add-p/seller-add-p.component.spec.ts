import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAddPComponent } from './seller-add-p.component';

describe('SellerAddPComponent', () => {
  let component: SellerAddPComponent;
  let fixture: ComponentFixture<SellerAddPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAddPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAddPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
