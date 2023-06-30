import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() totalRecords: number = 0;
  @Input() recordsPerPage: number = 20;

  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  currentPage: number = 1;

  get currentPageStart(): number {
    return (this.currentPage - 1) * this.recordsPerPage + 1;
  }

  get currentPageEnd(): number {
    const lastRecord = this.currentPage * this.recordsPerPage;
    return Math.min(lastRecord, this.totalRecords);
  }

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.recordsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(page);
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }
}

