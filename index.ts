export class mapDtoValuesToEntity<T, E> {
  map(DTOInstance: T, Entity: E): E {
    Object.keys(DTOInstance).forEach(key => {
      Entity[key] = DTOInstance[key];
    });
    return Entity;
  }
}
