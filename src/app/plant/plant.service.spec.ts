import {TestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PlantService} from './plant.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

describe('PlantService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantService]
    });
  });

  it('should be created', inject([PlantService],(service: PlantService) => {
    expect(service).toBeTruthy();
  }));
});
