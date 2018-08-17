import { TestBed, inject } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService]
    });
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));

  // it('Deve somar', inject([HttpService], (service: HttpService) => {
  //   expect(service.calcT(2)).toBe(2);
  // }));

});
