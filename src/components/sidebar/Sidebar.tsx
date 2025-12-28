import { BarChart3 } from 'lucide-react';
import { StatCard } from './StatCard';
import { ProcessingStatus } from './ProcessingStatus';
import { RecentActivity } from './RecentActivity';
import { QuickFilters } from './QuickFilters';
import { FieldFilters } from './FieldFilters';
import { statsData, processingStatusData, activitiesData, quickFiltersData, fieldFiltersData } from '@/data/mockData';

export function Sidebar() {
  return (
    <aside className="w-80 bg-white border-r border-crisp flex flex-col min-h-0">
      {/* Header */}
      <div className="p-4 border-b border-crisp flex-shrink-0">
        <h2 className="text-sm font-semibold text-foreground flex items-center">
          <BarChart3 className="h-4 w-4 text-primary mr-2" />
          Data Overview
        </h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Summary Stats */}
        <div className="p-4 border-b border-crisp">
          <div className="grid grid-cols-2 gap-3">
            <StatCard
              label="Total Wells"
              value={statsData.totalWells}
              subtext={statsData.wellsChange}
              type="success"
            />
            <StatCard
              label="Total Files"
              value={statsData.totalFiles}
              subtext="LAS/CSV"
              type="info"
            />
            <StatCard
              label="Storage Used"
              value={statsData.storageUsed}
              subtext={`of ${statsData.storageCapacity} capacity`}
            />
            <StatCard
              label="Pending"
              value={statsData.pending}
              subtext="Need review"
              type="danger"
            />
          </div>
        </div>

        {/* Processing Status */}
        <ProcessingStatus data={processingStatusData} />

        {/* Recent Activity */}
        <RecentActivity activities={activitiesData} />

        {/* Quick Filters */}
        <QuickFilters filters={quickFiltersData} />

        {/* Field Filters */}
        <FieldFilters filters={fieldFiltersData} />
      </div>
    </aside>
  );
}
