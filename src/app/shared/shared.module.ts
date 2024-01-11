import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SelectorComponent } from './components/selector/selector.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PrintJsonPrettyPipe } from './pipe/print-json-pretty.pipe';
import { CheckTypePipe } from './pipe/check-type.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PosterComponent } from './components/poster/poster.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SelectorComponent,
    SearchBarComponent,
    SpinnerComponent,
    PrintJsonPrettyPipe,
    CheckTypePipe,
    PaginationComponent,
    PosterComponent,
  ],
  exports: [
    ButtonComponent,
    SpinnerComponent,
    SearchBarComponent,
    PrintJsonPrettyPipe,
    CheckTypePipe,
    PaginationComponent,
    PosterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgOptimizedImage,
  ],
})
export class SharedModule {}
