import { useLocation } from "react-router-dom";
import { menuItems } from "../constants/menuItems";

export function useCurrentSection() {
  const location = useLocation();
  const path = location.pathname;

  const currentSection = menuItems.find(item => path.startsWith(item.path));

  return currentSection?.id || null;
}
