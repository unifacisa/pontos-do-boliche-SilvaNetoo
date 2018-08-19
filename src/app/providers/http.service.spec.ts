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

  it('Deve fazer uma simples soma dos valores', inject([HttpService], (service: HttpService) => {
    let nums: Array<number> = new Array<number>();
    nums.push(2);
    nums.push(2);
    nums.push(2);
    nums.push(2);
    nums.push(2);
    nums.push(2);
    expect(service.soma(nums)).toBe(12);
  }));
  
  it('Deve fazer uma soma errada dos valores', inject([HttpService], (service: HttpService) => {
    let nums: Array<number> = new Array<number>();
    nums.push(2);
    nums.push(2);
    nums.push(2);
    nums.push(2);
    nums.push(2);
    nums.push(2);
    expect(service.soma(nums)).not.toBe(13);
  }));

  it('Deve ser o valor esperado do spare', inject([HttpService], (service: HttpService) => {
   let nums: Array<number> = new Array<number>();
    nums.push(1);
    nums.push(9);
    nums.push(2);
    nums.push(1);
    expect(service.soma(nums)).toBe(15);
  }));

  it('Deve ser o valor errado do spare', inject([HttpService], (service: HttpService) => {
    let nums: Array<number> = new Array<number>();
     nums.push(1);
     nums.push(9);
     nums.push(2);
     nums.push(1);
     nums.push(1);
     expect(service.soma(nums)).not.toBe(15);
   }));

  it('Deve ser o valor esperado do strike', inject([HttpService], (service: HttpService) => {
    let nums: Array<number> = new Array<number>();
     nums.push(10);
     nums.push(1);
     nums.push(1);
     nums.push(1);
     expect(service.soma(nums)).toBe(15);
   }));

   it('Deve ser o valor errado do strike', inject([HttpService], (service: HttpService) => {
    let nums: Array<number> = new Array<number>();
     nums.push(10);
     nums.push(1);
     nums.push(1);
     nums.push(1);
     nums.push(1);
     expect(service.soma(nums)).not.toBe(15);
   }));

});
