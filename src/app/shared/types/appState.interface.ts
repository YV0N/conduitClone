import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { ArticleStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface';
import { PopularTagsStateInterface } from '../modules/popularTags/types/popularTagsState.interface';
import { CreateArticleStateInterface } from '../../createArticle/types/createArticleState.interface';
import { EditArticleStateInterface } from '../../editArticle/types/editArticleState.interface';
import { SettingsStateInterface } from '../../settings/types/settingsState.interface';
import { UserProfileStateInterface } from '../../userProfile/types/userProfileState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: ArticleStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
  settings: SettingsStateInterface;
  userProfile: UserProfileStateInterface;
}
