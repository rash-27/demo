import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({
  currentPage = 1,
  totalPages = 17,
  totalItems = 247,
  itemsPerPage = 15,
}: PaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getVisiblePages = () => {
    const pages: (number | 'ellipsis')[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push('ellipsis');
      }

      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 3) {
        pages.push('ellipsis');
      }

      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="mt-4 flex items-center justify-between bg-white border border-crisp rounded-lg p-3">
      <div className="text-xs text-muted-foreground">
        Showing <span className="font-mono font-semibold text-foreground">{startItem}-{endItem}</span> of{' '}
        <span className="font-mono font-semibold text-foreground">{totalItems}</span> wells
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="h-7 w-7 p-0 hover:bg-lightgrey border-crisp"
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {getVisiblePages().map((page, index) =>
          page === 'ellipsis' ? (
            <span key={`ellipsis-${index}`} className="px-2 text-xs text-muted-foreground">
              ...
            </span>
          ) : (
            <Button
              key={page}
              variant={page === currentPage ? 'default' : 'outline'}
              size="sm"
              className={`h-7 w-7 p-0 text-xs ${page !== currentPage ? 'hover:bg-lightgrey border-crisp' : ''}`}
            >
              {page}
            </Button>
          )
        )}

        <Button
          variant="outline"
          size="sm"
          className="h-7 w-7 p-0 hover:bg-lightgrey border-crisp"
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
