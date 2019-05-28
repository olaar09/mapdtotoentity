# mapdtotoentity
A tiny typescript package to map data transfer objects to entity class. (Especially TypeOrm entities)


# Usage

# - Install package 
npm install mapdtotoentity


# - Import module
import { mapDtoValuesToEntity } from 'mapdtotoentity/dist';


# - Entity class
class MockEntity {\
  x: string;\
  y: number;\
}


# - DTO class
class MockDTO {\
  x: string;\
  y: number;\
}


# - Instantiate DTO class and add values
let dtoInstance = new MockDTO();\
dtoInstance.x = 'Something';\
dtoInstance.y = 40;

# - Instantiate Mapper class;
const entityMapper = new mapDtoValuesToEntity<MockDTO, MockEntity>();

# - Map DTO to Entity
const mapResult = entityMapper.map(dtoInstance, mockEntityInstance);

# - Would print put your entity class with all the values from DTO class
console.log(mapResult)
