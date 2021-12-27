import { TestBed } from '@angular/core/testing';

import { AlertsAndNotificationsService } from './alerts-and-notifications.service';

describe('AlertsAndNotificationsService', () => {
  let service: AlertsAndNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertsAndNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
