import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from 'src/app/shared/modules/loading/components/loading/loading.component';
import { TagListComponent } from './components/tagList/tagList.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TagListComponent],
  exports: [TagListComponent],
})
export class TagListModule {}
