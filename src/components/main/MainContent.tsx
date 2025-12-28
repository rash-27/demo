import { UploadZone } from './UploadZone';
import { Toolbar } from './Toolbar';
import { WellsTable } from './WellsTable';
import { Pagination } from './Pagination';
import { wellsData } from '@/data/mockData';

export function MainContent() {
  return (
    <main className="flex-1 min-h-0 bg-background overflow-y-auto">
      <div className="p-6">
        <UploadZone />
        <Toolbar />
        <WellsTable wells={wellsData} />
        <Pagination
          currentPage={1}
          totalPages={17}
          totalItems={247}
          itemsPerPage={15}
        />
      </div>
    </main>
  );
}
