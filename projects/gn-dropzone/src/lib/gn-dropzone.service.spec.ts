import { TestBed } from '@angular/core/testing';

import { GnDropzoneService } from './gn-dropzone.service';

describe('GnDropzoneService', () => {
  let service: GnDropzoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GnDropzoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
