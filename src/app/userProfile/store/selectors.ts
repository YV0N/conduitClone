import { AppStateInterface } from '../../shared/types/appState.interface';
import { createSelector } from '@ngrx/store';
import { UserProfileStateInterface } from '../types/userProfileState.interface';

export const userProfileFeatureSelector = (state: AppStateInterface) =>
  state.userProfile;

export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.data
);

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.isLoading
);

export const errorSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.error
);
