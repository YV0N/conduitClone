import { PopularTagsType } from '../../../types/popularTags.type';

export interface PopularTagsStateInterface {
  data: PopularTagsType[] | null;
  isLoading: boolean;
  error: string | null;
}
