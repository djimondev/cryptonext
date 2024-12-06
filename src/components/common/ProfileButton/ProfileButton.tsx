import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ProfileButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/profile")}
      className="p-2 text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-700 rounded-lg transition-colors"
      aria-label="Profile"
    >
      <User className="w-5 h-5" />
    </button>
  );
}
