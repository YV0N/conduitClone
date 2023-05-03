import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PopularTagsType } from '../../../types/popularTags.type';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';
import { GetPopularTagsResponseInterface } from '../types/getPopularTagsResponse.interface';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagsType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http.get(url).pipe(
      map((response: GetPopularTagsResponseInterface) => {
        return response.tags;
      })
    );
  }
}
