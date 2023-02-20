import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousAccountsComponent } from './miscellaneous-accounts.component';

describe('MiscellaneousAccountsComponent', () => {
  let component: MiscellaneousAccountsComponent;
  let fixture: ComponentFixture<MiscellaneousAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiscellaneousAccountsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MiscellaneousAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
