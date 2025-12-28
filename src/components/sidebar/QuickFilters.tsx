import { QuickFilter } from '@/types/well';
import { Button } from '@/components/ui/button';

interface QuickFiltersProps {
  filters: QuickFilter[];
  onFilterClick?: (filterId: string) => void;
}

export function QuickFilters({ filters, onFilterClick }: QuickFiltersProps) {
  const getDotColor = (color: QuickFilter['color']) => {
    switch (color) {
      case 'yellow':
        return 'bg-warning';
      case 'red':
        return 'bg-destructive';
      case 'green':
        return 'bg-success';
      default:
        return 'bg-muted-foreground';
    }
  };

  return (
    <div className="p-4 border-b border-border">
      <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
        Quick Filters
      </h3>
      <div className="space-y-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant="outline"
            className="w-full px-3 py-2 h-auto text-xs text-left justify-between hover:bg-secondary"
            onClick={() => onFilterClick?.(filter.id)}
          >
            <span className="flex items-center">
              <span className={`w-2 h-2 rounded-full ${getDotColor(filter.color)} mr-2`} />
              {filter.label}
            </span>
            <span className="font-mono text-muted-foreground">{filter.count}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
