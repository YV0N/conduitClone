import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';

export interface ArticleStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetFeedResponseInterface | null;
}
