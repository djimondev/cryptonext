
import { Activity } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <a href="/">
        <div className="flex items-center gap-2">
      <Activity className="w-6 h-6 text-blue-600" />
      <span className="text-lg font-semibold text-gray-900 dark:text-white">
        CryptoNext
          </span>
        </div>
      </a>
    </div>
  );
}