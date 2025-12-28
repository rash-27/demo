import { Database, LineChart, Settings, Search, Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import logo from '@/assets/logo.png';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { icon: <Database className="h-3 w-3" />, label: 'Data Management', active: true },
  { icon: <LineChart className="h-3 w-3" />, label: 'Well Analysis' },
  { icon: <Settings className="h-3 w-3" />, label: 'Settings' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left Section - Logo & Navigation */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Techlog Modern Logo" className="w-8 h-8 object-contain" />
            <span className="font-bold text-lg text-foreground">Techlog Modern</span>
          </div>
          
          <Separator orientation="vertical" className="h-6" />
          
          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors flex items-center gap-1.5 ${
                  item.active
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Section - Search, Notifications, User */}
        <div className="flex items-center space-x-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search wells, fields, UWI..."
              className="w-72 pl-8 h-8 text-xs"
            />
          </div>

          {/* Notifications */}
          <Button variant="outline" size="icon" className="relative h-8 w-8">
            <Bell className="h-4 w-4 text-foreground" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground text-[9px] font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </Button>

          <Separator orientation="vertical" className="h-6" />

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
              alt="User"
              className="w-8 h-8 rounded-full border border-border"
            />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-foreground">John Mitchell</span>
              <span className="text-[10px] text-muted-foreground">Geologist</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
