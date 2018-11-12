export const savingStarted = () => ({
  type: 'SAVING_STUFF_STARTED',
});

export const savingFinished = () => ({
  type: 'SAVING_STUFF_FINISHED',
});

export const saveStuff = () =>
  async (dispatch, getState) => {
    dispatch(savingStarted());

    // saving stuffs
    // stop eslint complaining
    (() => getState())();

    return new Promise((resolve) => {
      setTimeout(() => {
        // some more saving

        dispatch(savingFinished());
        resolve();
      }, 50);
    });
  };

