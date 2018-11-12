import generateId from 'uuid';
import { sendRequest } from "./base";

export const createItem = value => ({
  id: generateId(),
  value,
  createdAt: new Date(),
});

export const onNewItemCreated = item => ({
  type: 'New_Item_created',
  payload: {
    item,
  }
});

export const transferItemToDto = item =>
  JSON.stringify(item);

export const onSaveSuccess = data => ({
  type: 'Saving_Item_Has_Failed',
  payload: {
    data,
  },
});

export const onSaveFailed = () => ({
  type: 'Saving_Item_Has_Failed',
});

export const saveItemThunkCreator = (value) =>
  async (dispatch) => {
    const newItem = createItem(value);
    dispatch(onNewItemCreated(newItem));
    const itemDto = transferItemToDto(newItem);

    return sendRequest("http://..", itemDto)
      .then(response => response.json())
      .then(data => dispatch(onSaveSuccess(data)))
      .catch(() => dispatch(onSaveFailed()));
  };
