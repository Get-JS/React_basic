import createReducer from '../../common/createReducer';
import createItemsLogic from '../../common/createItemsLogic';
import mergeReducers from '../../common/mergeReducers';

const { add, remove, edit, reducer: timelinesReducer } = createItemsLogic('timelines');

export const types = { // * 리덕스 사가에서 사용할 목적으로 모든 액션 타입을 하나의 객체에 담아서 내보낸다.
  INCREASE_NEXT_PAGE: 'timeline/INCREASE_NEXT_PAGE',
  REQUEST_LIKE: 'timeline/REQUEST_LIKE', // * 리덕스 사가에서만 사용되고 리듀서 함수에서는 사용되지 않는다.
  ADD_LIKE: 'timeline/ADD_LIKE',
  SET_LOADING: 'timeline/SET_LOADING',
};

export const actions = {
  addTimeline: add,
  removeTimeline: remove,
  editTimeline: edit,
  increaseNextPage: () => ({ type: types.INCREASE_NEXT_PAGE }),
  requestLike: timeline => ({ type: types.REQUEST_LIKE, timeline }),
  addLike: (timelineId, value) => ({ type: types.ADD_LIKE, timelineId, value }),
  setLoading: isLoading => ({ type: types.SET_LOADING, isLoading }),
};

const INITIAL_STATE = { nextPage: 0, isLoading: false };
const reducer = createReducer(INITIAL_STATE, {
  [types.INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
  [types.ADD_LIKE]: (state, action) => {
    const timeline = state.timelines.find(item => item.id === action.timelineId);
    if (timeline) timeline.likes += action.value;
  },
  [types.SET_LOADING]: (state, action) => (state.isLoading = action.isLoading),
});
const reducers = [reducer, timelinesReducer];
export default mergeReducers(reducers);
