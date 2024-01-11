import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() pages!: number;
  @Input() currentPage!: number;
  showInput = false;
  left!: boolean;
  @ViewChild('pageInput', { static: false }) pageInput!: ElementRef;
  pageForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.pageForm = new FormGroup({
      page: new FormControl(),
    });
  }

  goToPage(page: number) {
    if (this.currentPage != page) {
      this.currentPage = page;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          title: this.route.snapshot?.queryParamMap.get('title'),
          page: page || this.pageForm.value.page,
        },
      });
      this.pageForm.reset();
      this.showInput = false;
    }
  }

  showInputFunc(position: string) {
    this.left = position === 'left';
    this.showInput = true;
    this.changeDetectorRef.detectChanges();
    this.pageInput?.nativeElement.focus();
  }

  onBlur() {
    this.showInput = false;
    this.left = false;
  }
}
