import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ProfileButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/profile')}
      className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
      aria-label="Profile"
    >
      <User className="w-5 h-5" />
    </button>
  );
}