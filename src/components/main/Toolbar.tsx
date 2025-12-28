import { Download, Trash2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export function Toolbar() {
  return (
    <div className="bg-card border border-border rounded-lg p-3 mb-4 relative z-10">
      <div className="flex items-center justify-between">
        {/* Left Section - Sorting & Display */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Label className="text-xs text-muted-foreground">Sort by:</Label>
            <Select defaultValue="date-newest">
              <SelectTrigger className="w-[140px] h-7 text-xs">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-newest">Date (Newest)</SelectItem>
                <SelectItem value="date-oldest">Date (Oldest)</SelectItem>
                <SelectItem value="name-asc">Well Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Well Name (Z-A)</SelectItem>
                <SelectItem value="quality">Quality Score</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-4 w-px bg-border" />

          <div className="flex items-center space-x-2">
            <Label className="text-xs text-muted-foreground">Show:</Label>
            <Select defaultValue="25">
              <SelectTrigger className="w-[90px] h-7 text-xs">
                <SelectValue placeholder="Rows" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="25">25 rows</SelectItem>
                <SelectItem value="50">50 rows</SelectItem>
                <SelectItem value="100">100 rows</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="h-7 text-xs">
            <Download className="h-3 w-3 mr-1" />
            Export CSV
          </Button>
          <Button variant="outline" size="sm" className="h-7 text-xs">
            <Trash2 className="h-3 w-3 mr-1" />
            Bulk Delete
          </Button>
          <Button size="sm" className="h-7 text-xs">
            <RefreshCw className="h-3 w-3 mr-1" />
            Refresh
          </Button>
        </div>
      </div>
    </div>
  );
}
