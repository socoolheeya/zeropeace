import { TestBed } from '@angular/core/testing';

import { AnotherCommonService } from './another-common.service';

describe('AnotherCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnotherCommonService = TestBed.get(AnotherCommonService);
    expect(service).toBeTruthy();
  });
});
