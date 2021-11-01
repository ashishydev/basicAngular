import { TestBed } from '@angular/core/testing';

import { User123Resolver } from './user123.resolver';

describe('User123Resolver', () => {
  let resolver: User123Resolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(User123Resolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
