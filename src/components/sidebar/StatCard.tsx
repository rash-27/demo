import { ArrowUp, File, AlertTriangle } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  subtext: string;
  type?: 'default' | 'success' | 'info' | 'danger';
}

export function StatCard({ label, value, subtext, type = 'default' }: StatCardProps) {
  const getSubtextStyles = () => {
    switch (type) {
      case 'success':
        return 'text-success';
      case 'info':
        return 'text-primary';
      case 'danger':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <ArrowUp className="h-2.5 w-2.5 mr-1" />;
      case 'info':
        return <File className="h-2.5 w-2.5 mr-1" />;
      case 'danger':
        return <AlertTriangle className="h-2.5 w-2.5 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-lightgrey border border-crisp rounded p-3">
      <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">
        {label}
      </div>
      <div className={`text-2xl font-bold font-mono ${type === 'danger' ? 'text-destructive' : 'text-foreground'}`}>
        {value}
      </div>
      <div className={`text-[10px] mt-1 flex items-center ${getSubtextStyles()}`}>
        {getIcon()}
        {subtext}
      </div>
    </div>
  );
}
