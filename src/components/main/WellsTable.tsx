import { useState } from 'react';
import { ArrowUpDown, FileText, LineChart, Download, Pencil } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Well } from '@/types/well';

interface WellsTableProps {
  wells: Well[];
}

export function WellsTable({ wells }: WellsTableProps) {
  const [selectedWells, setSelectedWells] = useState<string[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedWells(wells.map(w => w.id));
    } else {
      setSelectedWells([]);
    }
  };

  const handleSelectWell = (wellId: string, checked: boolean) => {
    if (checked) {
      setSelectedWells([...selectedWells, wellId]);
    } else {
      setSelectedWells(selectedWells.filter(id => id !== wellId));
    }
  };

  const getStatusBadge = (status: Well['status']) => {
    switch (status) {
      case 'ready':
        return (
          <span className="px-2 py-1 bg-green-100 text-gammaray text-[10px] font-semibold rounded">
            Ready
          </span>
        );
      case 'raw':
        return (
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-semibold rounded">
            Raw
          </span>
        );
      case 'splicing':
        return (
          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-[10px] font-semibold rounded">
            Splicing
          </span>
        );
      case 'quality-issue':
        return (
          <span className="px-2 py-1 bg-red-100 text-deepred text-[10px] font-semibold rounded">
            Quality Issue
          </span>
        );
    }
  };

  const getQualityBar = (quality: number) => {
    let barColor = 'bg-gammaray';
    if (quality < 60) {
      barColor = 'bg-deepred';
    } else if (quality < 80) {
      barColor = 'bg-yellow-500';
    }

    return (
      <div className="flex items-center space-x-1">
        <div className="w-12 bg-gray-200 rounded-full h-1.5">
          <div
            className={`h-1.5 rounded-full ${barColor}`}
            style={{ width: `${quality}%` }}
          />
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">{quality}%</span>
      </div>
    );
  };

  return (
    <div className="bg-white border border-crisp rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-lightgrey hover:bg-lightgrey">
              <TableHead className="w-[40px]">
                <Checkbox
                  checked={selectedWells.length === wells.length && wells.length > 0}
                  onCheckedChange={handleSelectAll}
                  className="w-4 h-4"
                />
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wide">
                Well Name
                <ArrowUpDown className="inline-block h-3 w-3 ml-1 text-muted-foreground" />
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wide">
                UWI/API
                <ArrowUpDown className="inline-block h-3 w-3 ml-1 text-muted-foreground" />
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wide">
                Field
                <ArrowUpDown className="inline-block h-3 w-3 ml-1 text-muted-foreground" />
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wide">
                Date Uploaded
                <ArrowUpDown className="inline-block h-3 w-3 ml-1 text-muted-foreground" />
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wide">
                Status
                <ArrowUpDown className="inline-block h-3 w-3 ml-1 text-muted-foreground" />
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wide">
                Quality
                <ArrowUpDown className="inline-block h-3 w-3 ml-1 text-muted-foreground" />
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wide">
                Depth Range
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wide text-center">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {wells.map((well) => (
              <TableRow key={well.id} className="hover:bg-secondary/30 transition-colors">
                <TableCell>
                  <Checkbox
                    checked={selectedWells.includes(well.id)}
                    onCheckedChange={(checked) => handleSelectWell(well.id, !!checked)}
                    className="w-4 h-4"
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="font-mono font-semibold text-foreground">{well.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="font-mono text-foreground">{well.uwi}</span>
                </TableCell>
                <TableCell>
                  <span className="text-foreground">{well.field}</span>
                </TableCell>
                <TableCell>
                  <span className="text-muted-foreground">{well.dateUploaded}</span>
                </TableCell>
                <TableCell>{getStatusBadge(well.status)}</TableCell>
                <TableCell>{getQualityBar(well.quality)}</TableCell>
                <TableCell>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {well.depthRange}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center space-x-1">
                    <Button variant="outline" size="icon" className="h-7 w-7" title="Analyze">
                      <LineChart className="h-3 w-3 text-primary" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-7 w-7" title="Download">
                      <Download className="h-3 w-3 text-muted-foreground" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-7 w-7" title="Edit">
                      <Pencil className="h-3 w-3 text-muted-foreground" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
