export type WellStatus = 'ready' | 'raw' | 'splicing' | 'quality-issue';

export interface Well {
  id: string;
  name: string;
  uwi: string;
  field: string;
  dateUploaded: string;
  status: WellStatus;
  quality: number;
  depthRange: string;
}

export interface Activity {
  id: string;
  type: 'upload' | 'complete' | 'splice' | 'alert';
  title: string;
  description: string;
  timestamp: string;
}

export interface ProcessingStatus {
  label: string;
  count: number;
  percentage: number;
  color: 'gray' | 'yellow' | 'green';
}

export interface QuickFilter {
  id: string;
  label: string;
  count: number;
  color: 'gray' | 'yellow' | 'red' | 'green';
}

export interface FieldFilter {
  id: string;
  name: string;
  count: number;
  checked: boolean;
}
