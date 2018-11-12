import 'isomorphic-fetch';
import { saveItemThunkCreator } from './exercise01';

describe('saveItemThunk', () => {
  test('does stuff', async () => {
    saveItemThunkCreator();
    expect(true).toBeTruthy();
  });
});
