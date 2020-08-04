import { TestBed } from '@angular/core/testing';

import { AngularD3GraphLibService } from './angular-d3-graph-lib.service';

describe('AngularD3GraphLibService', () => {
  let service: AngularD3GraphLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularD3GraphLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
