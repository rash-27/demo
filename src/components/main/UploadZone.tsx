import { CloudUpload, FolderOpen, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function UploadZone() {
  return (
    <div className="mb-6">
      <div className="bg-card border-2 border-dashed border-primary rounded-lg p-8 text-center hover:border-primary/80 hover:bg-primary/5 transition-colors cursor-pointer">
        <div className="flex flex-col items-center space-y-3">
          {/* Upload Icon */}
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <CloudUpload className="h-8 w-8 text-primary" />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-1">
              Drag & Drop LAS/CSV Files
            </h3>
            <p className="text-xs text-muted-foreground">
              or click to browse your computer
            </p>
          </div>

          {/* Features */}
          <div className="flex items-center space-x-4 text-[10px] text-muted-foreground">
            <span className="flex items-center">
              <CheckCircle className="h-3 w-3 text-success mr-1" />
              Auto header parsing
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-3 w-3 text-success mr-1" />
              Quality scoring
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-3 w-3 text-success mr-1" />
              Duplicate detection
            </span>
          </div>

          {/* Browse Button */}
          <Button className="mt-2">
            <FolderOpen className="h-4 w-4 mr-2" />
            Browse Files
          </Button>
        </div>
      </div>
    </div>
  );
}
