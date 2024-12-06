import { Activity } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <a href="/">
        <div className="flex items-center gap-2">
      <Activity className="w-6 h-6 text-primary-600 dark:text-primary-400" />
      <span className="text-lg font-semibold text-foreground">
        CryptoNext
          </span>
        </div>
      </a>
    </div>
  );
}