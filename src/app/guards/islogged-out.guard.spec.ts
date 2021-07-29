import { TestBed } from '@angular/core/testing';

import { IsloggedOutGuard } from './islogged-out.guard';

describe('IsloggedOutGuard', () => {
  let guard: IsloggedOutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsloggedOutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
