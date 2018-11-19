import * as generateId from 'uuid';

export const createItem = (value) => ({
  id: generateId,
  value,
});
