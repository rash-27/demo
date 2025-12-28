import { Upload, Check, Link, AlertCircle } from 'lucide-react';
import { Activity } from '@/types/well';

interface RecentActivityProps {
  activities: Activity[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  const getActivityStyles = (type: Activity['type']) => {
    switch (type) {
      case 'upload':
        return { bg: 'bg-primary', icon: <Upload className="h-2.5 w-2.5 text-primary-foreground" /> };
      case 'complete':
        return { bg: 'bg-success', icon: <Check className="h-2.5 w-2.5 text-success-foreground" /> };
      case 'splice':
        return { bg: 'bg-warning', icon: <Link className="h-2.5 w-2.5 text-warning-foreground" /> };
      case 'alert':
        return { bg: 'bg-destructive', icon: <AlertCircle className="h-2.5 w-2.5 text-destructive-foreground" /> };
    }
  };

  return (
    <div className="p-4 border-b border-border">
      <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
        Recent Activity
      </h3>
      <div className="space-y-3">
        {activities.map((activity) => {
          const styles = getActivityStyles(activity.type);
          return (
            <div key={activity.id} className="flex items-start space-x-2">
              <div className={`w-6 h-6 ${styles.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                {styles.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-foreground font-semibold">{activity.title}</div>
                <div className="text-[10px] text-muted-foreground truncate">{activity.description}</div>
                <div className="text-[10px] text-muted-foreground/70 mt-0.5">{activity.timestamp}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
