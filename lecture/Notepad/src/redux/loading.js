import { createAction, handleActions } from 'redux-actions';

export const START_LOADING = 'loading/START_LOADING';
export const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType,
);
export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType,
);

export const loadingTypeList = {
  START_LOADING,
  FINISH_LOADING,
};
export const loadingActionList = {
  startLoading,
  finishLoading,
};

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, { payload }) => ({
      ...state,
      [payload]: true,
    }),
    [FINISH_LOADING]: (state, { payload }) => ({
      ...state,
      [payload]: false,
    }),
  },
  initialState,
);

export default loading;
