import { Well, Activity, ProcessingStatus, QuickFilter, FieldFilter } from '@/types/well';

export const wellsData: Well[] = [
  { id: '1', name: 'A-15ST1', uwi: '42-123-30456-00', field: 'North Sea', dateUploaded: '2024-12-20', status: 'ready', quality: 92, depthRange: '2000-3550m' },
  { id: '2', name: 'B-23ST2', uwi: '42-124-31567-01', field: 'North Sea', dateUploaded: '2024-12-27', status: 'raw', quality: 78, depthRange: '1800-3200m' },
  { id: '3', name: 'C-08HZ', uwi: '42-125-32678-02', field: 'North Sea', dateUploaded: '2024-12-26', status: 'splicing', quality: 85, depthRange: '2200-3800m' },
  { id: '4', name: 'D-12V', uwi: '42-126-33789-03', field: 'Gulf of Mexico', dateUploaded: '2024-12-24', status: 'quality-issue', quality: 45, depthRange: '1500-2800m' },
  { id: '5', name: 'E-19ST3', uwi: '42-127-34890-04', field: 'Gulf of Mexico', dateUploaded: '2024-12-23', status: 'raw', quality: 88, depthRange: '2100-3400m' },
  { id: '6', name: 'F-07HZ', uwi: '42-128-35901-05', field: 'Persian Gulf', dateUploaded: '2024-12-22', status: 'ready', quality: 95, depthRange: '1900-3300m' },
  { id: '7', name: 'G-33ST1', uwi: '42-129-36012-06', field: 'Persian Gulf', dateUploaded: '2024-12-21', status: 'splicing', quality: 81, depthRange: '2300-3700m' },
  { id: '8', name: 'H-21V', uwi: '42-130-37123-07', field: 'Persian Gulf', dateUploaded: '2024-12-20', status: 'raw', quality: 68, depthRange: '1700-3100m' },
  { id: '9', name: 'I-09ST4', uwi: '42-131-38234-08', field: 'North Sea', dateUploaded: '2024-12-19', status: 'ready', quality: 94, depthRange: '2050-3600m' },
  { id: '10', name: 'J-16HZ', uwi: '42-132-39345-09', field: 'North Sea', dateUploaded: '2024-12-18', status: 'splicing', quality: 83, depthRange: '2150-3500m' },
  { id: '11', name: 'K-28ST2', uwi: '42-133-40456-10', field: 'Gulf of Mexico', dateUploaded: '2024-12-17', status: 'raw', quality: 75, depthRange: '1850-3250m' },
  { id: '12', name: 'L-05V', uwi: '42-134-41567-11', field: 'Persian Gulf', dateUploaded: '2024-12-16', status: 'ready', quality: 90, depthRange: '2000-3450m' },
  { id: '13', name: 'M-31HZ', uwi: '42-135-42678-12', field: 'North Sea', dateUploaded: '2024-12-15', status: 'quality-issue', quality: 52, depthRange: '1650-2950m' },
  { id: '14', name: 'N-14ST5', uwi: '42-136-43789-13', field: 'Gulf of Mexico', dateUploaded: '2024-12-14', status: 'splicing', quality: 79, depthRange: '2250-3650m' },
  { id: '15', name: 'O-22V', uwi: '42-137-44890-14', field: 'Persian Gulf', dateUploaded: '2024-12-13', status: 'raw', quality: 70, depthRange: '1950-3350m' },
];

export const activitiesData: Activity[] = [
  { id: '1', type: 'upload', title: 'New file uploaded', description: 'Well B-23ST2 - North Sea', timestamp: '2 minutes ago' },
  { id: '2', type: 'complete', title: 'Analysis completed', description: 'Well A-15ST1 processed', timestamp: '15 minutes ago' },
  { id: '3', type: 'splice', title: 'Auto-splice initiated', description: 'Well C-08 - 3 runs detected', timestamp: '1 hour ago' },
  { id: '4', type: 'alert', title: 'Quality alert', description: 'Well D-12 - Low quality score', timestamp: '3 hours ago' },
];

export const processingStatusData: ProcessingStatus[] = [
  { label: 'Raw', count: 142, percentage: 57.5, color: 'gray' },
  { label: 'Splicing Needed', count: 68, percentage: 27.5, color: 'yellow' },
  { label: 'Ready for Analysis', count: 37, percentage: 15, color: 'green' },
];

export const quickFiltersData: QuickFilter[] = [
  { id: 'all', label: 'All Wells', count: 247, color: 'gray' },
  { id: 'splicing', label: 'Needs Splicing', count: 68, color: 'yellow' },
  { id: 'quality', label: 'Quality Issues', count: 18, color: 'red' },
  { id: 'ready', label: 'Ready', count: 37, color: 'green' },
];

export const fieldFiltersData: FieldFilter[] = [
  { id: 'north-sea', name: 'North Sea', count: 142, checked: true },
  { id: 'gulf-mexico', name: 'Gulf of Mexico', count: 68, checked: true },
  { id: 'persian-gulf', name: 'Persian Gulf', count: 37, checked: false },
];

export const statsData = {
  totalWells: 247,
  wellsChange: '+12 this month',
  totalFiles: '1,842',
  storageUsed: '2.4TB',
  storageCapacity: '5TB',
  pending: 18,
};
