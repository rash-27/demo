import { ProcessingStatus as ProcessingStatusType } from '@/types/well';

interface ProcessingStatusProps {
  data: ProcessingStatusType[];
}

export function ProcessingStatus({ data }: ProcessingStatusProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'yellow':
        return { dot: 'bg-warning', bar: 'bg-warning' };
      case 'green':
        return { dot: 'bg-success', bar: 'bg-success' };
      default:
        return { dot: 'bg-muted-foreground', bar: 'bg-muted-foreground' };
    }
  };

  return (
    <div className="p-4 border-b border-crisp">
      <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
        Processing Status
      </h3>
      <div className="space-y-3">
        {data.map((status, index) => {
          const colors = getColorClasses(status.color);
          return (
            <div key={index}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  <span className="text-xs text-foreground">{status.label}</span>
                </div>
                <span className="text-xs font-mono font-semibold text-foreground">
                  {status.count}
                </span>
              </div>
              <div className="w-full bg-crisp rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full ${colors.bar}`}
                  style={{ width: `${status.percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
