import {
  saveStuff,
  savingFinished,
  savingStarted
} from "./03_mockingExample";

xtest('dispatches actions in the correct order', async () => {
  const dispatch = jest.fn();
  const getState = () => ({
    todoApp: {
      items: []
    }
  });

  const dispatchable = saveStuff();

  await dispatchable(dispatch, getState);

  expect(dispatch.mock.calls.length).toEqual(2);
  expect(dispatch).toHaveBeenCalledWith(savingStarted());
  expect(dispatch).toHaveBeenLastCalledWith(savingFinished());
});
