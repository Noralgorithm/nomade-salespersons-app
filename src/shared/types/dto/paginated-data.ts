export interface PaginatedItems<T> extends PaginationData {
  items: T[];
}

export interface PaginationData {
  pageIndex: number;
  itemsPerPage: number;
  pageCount: number;
  itemCount: number;
}
