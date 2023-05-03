import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import { ArticleInterface } from '../../shared/types/article.interface';

export interface ArticleStateInterface {
  isLoading: boolean;
  error: string | null;
  data: ArticleInterface | null;
}
