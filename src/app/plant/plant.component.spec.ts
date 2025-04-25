import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PlantComponent} from './plant.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {PlantService} from './plant.service';
import {Plant} from './plant';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {faker} from '@faker-js/faker';


describe('PlantComponent', () => {
  let component: PlantComponent;
  let fixture: ComponentFixture<PlantComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantComponent],
      providers: [PlantService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantComponent);
    component = fixture.componentInstance;
    component.plants = [];
    for (let i = 0; i < 3; i++) {
      component.plants.push(
        new Plant(
          i + 1,
          faker.lorem.word(),
          faker.lorem.word(),
          'Interior',
          150,
          ['Tropical'],
          ['Tierra orgánica']
        )
      );
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it('should create a table con 3 filas', () => {
    const rows = debug.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });

  it('should create a table con encabezado', () => {
    const header = debug.queryAll(By.css('thead tr')).length;
    expect(header).toBe(1);
  });
});
