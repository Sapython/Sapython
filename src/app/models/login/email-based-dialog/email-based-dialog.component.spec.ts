import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBasedDialogComponent } from './email-based-dialog.component';

describe('EmailBasedDialogComponent', () => {
  let component: EmailBasedDialogComponent;
  let fixture: ComponentFixture<EmailBasedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailBasedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailBasedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
