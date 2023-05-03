import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { PopularTagsType } from '../../../../types/popularTags.type';

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);
export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ popularTags: PopularTagsType[] }>()
);
export const getPopularTagsFailureAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
);
