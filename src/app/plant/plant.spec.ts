import {Plant} from './plant';
import {faker} from '@faker-js/faker';

describe('Plant', () => {
  it('should create an instance', () => {
    const plant = new Plant(
      1,
      faker.lorem.word(),
      faker.lorem.word(),
      'Interior',
      150,
      ['Tropical'],
      ['Tierra orgánica']
    );
    expect(plant).toBeTruthy();
    expect(plant.nombre_comun).toBeTruthy();
    expect(plant.nombre_cientifico).toBeTruthy();
  });
});
