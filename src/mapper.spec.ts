import {mapDtoValuesToEntity} from './mapper';

class MockEntity {
  x: string;
  y: number;
}

class MockDTO {
  x: string;
  y: number;
}

let dtoInstance = new MockDTO();
dtoInstance.x = 'Something';
dtoInstance.y = 40;

const mockEntityInstance = new MockEntity();

describe('Entity mapper test', () => {
  let mapResult;
  let entityMapper;
  beforeEach(() => {
    entityMapper = new mapDtoValuesToEntity<MockDTO, MockEntity>();
    mapResult = entityMapper.map(dtoInstance, mockEntityInstance);
  });

  it('should return type of MockEntity ', () => {
    expect(mapResult).toBeDefined();
    expect(mapResult).toBeInstanceOf(MockEntity);
  });

  it('both instances should have similar properties', () => {
    expect(mapResult.x).toBe(dtoInstance.x);
    expect(mapResult.y).toBe(dtoInstance.y);
  });
});
