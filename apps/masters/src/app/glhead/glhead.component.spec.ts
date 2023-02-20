import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlheadComponent } from './glhead.component';

describe('GlheadComponent', () => {
  let component: GlheadComponent;
  let fixture: ComponentFixture<GlheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlheadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GlheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
