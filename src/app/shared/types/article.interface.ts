import { ProfileInterface } from 'src/app/shared/types/profile.interface';
import { PopularTagsType } from './popularTags.type';

export interface ArticleInterface {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: PopularTagsType[];
  description: string;
  author: ProfileInterface;
  favorited: boolean;
  favoritesCount: number;
}
