import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <span>&copy; 2024 Techlog Modern. All rights reserved.</span>
            <Separator orientation="vertical" className="h-3" />
            <a href="#" className="hover:text-primary transition-colors">Documentation</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
            <a href="#" className="hover:text-primary transition-colors">API Reference</a>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <span>Version 2.1.4</span>
            <Separator orientation="vertical" className="h-3" />
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse-subtle" />
              <span>System Operational</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
