import { useState } from 'react';
import { FieldFilter } from '@/types/well';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface FieldFiltersProps {
  filters: FieldFilter[];
}

export function FieldFilters({ filters: initialFilters }: FieldFiltersProps) {
  const [filters, setFilters] = useState(initialFilters);

  const handleChange = (id: string, checked: boolean) => {
    setFilters(filters.map(f => 
      f.id === id ? { ...f, checked } : f
    ));
  };

  return (
    <div className="p-4">
      <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
        Filter by Field
      </h3>
      <div className="space-y-2">
        {filters.map((filter) => (
          <Label
            key={filter.id}
            className="flex items-center space-x-2 text-xs cursor-pointer"
          >
            <Checkbox
              checked={filter.checked}
              onCheckedChange={(checked) => handleChange(filter.id, !!checked)}
              className="w-3 h-3"
            />
            <span className="text-foreground flex-1">{filter.name}</span>
            <span className="font-mono text-muted-foreground text-[10px]">
              {filter.count}
            </span>
          </Label>
        ))}
      </div>
    </div>
  );
}
