import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedayComponent } from './manageday.component';

describe('ManagedayComponent', () => {
  let component: ManagedayComponent;
  let fixture: ComponentFixture<ManagedayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagedayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
