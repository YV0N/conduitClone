import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ArticleStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface';

export const feedFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ArticleStateInterface
>('feed');

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: ArticleStateInterface) => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: ArticleStateInterface) => feedState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: ArticleStateInterface) => feedState.data
);
