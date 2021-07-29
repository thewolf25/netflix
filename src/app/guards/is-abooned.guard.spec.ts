import { TestBed } from '@angular/core/testing';

import { IsAboonedGuard } from './is-abooned.guard';

describe('IsAboonedGuard', () => {
  let guard: IsAboonedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAboonedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
