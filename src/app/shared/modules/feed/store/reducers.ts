import { createReducer, on, Action } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';

import { ArticleStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface';
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from 'src/app/shared/modules/feed/store/actions/getFeed.action';

const initialState: ArticleStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): ArticleStateInterface => initialState)
);

export function reducers(state: ArticleStateInterface, action: Action) {
  return feedReducer(state, action);
}
