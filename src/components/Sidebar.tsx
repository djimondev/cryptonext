import { NavLink, useNavigate, useLocation, Link } from 'react-router-dom'
import { sitemap } from '@/constants/sitemap'
import type { MenuItem, MenuCategory } from '@/types/common'
import logo from '@/assets/logo-white.svg'
import { LogOut, ChevronDown, Network, PanelLeftClose, PanelLeft } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SidebarProps {
  isCollapsed: boolean;
  onCollapse: () => void;
}

export const Sidebar = ({ isCollapsed, onCollapse }: SidebarProps) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { logout } = useAuth()

  // Update selected category based on URL
  useEffect(() => {
    const currentPath = location.pathname
    const activeCategory = sitemap.categories.find(category =>
      category.items.some(item => item.path === currentPath)
    )
    if (activeCategory) {
      setSelectedCategory(activeCategory)
    }
  }, [location.pathname])

  const handleCategorySelect = (category: MenuCategory) => {
    setSelectedCategory(category)
    setIsDropdownOpen(false)
    
    if (category.items.length > 0) {
      navigate(category.items[0].path)
    }
  }

  const handleLogout = () => {
    navigate('/');
    // Petit délai pour s'assurer que la navigation est terminée avant le logout
    setTimeout(() => {
      logout();
    }, 0);
  };

  const renderNavItem = (item: MenuItem) => {
    const Icon = item.icon

    return (
      <NavLink
        key={item.id}
        to={item.path}
      >
        {({ isActive }) => (
          <Button
            variant={isActive ? 'secondaryActive' : 'ghost'}
            className="w-full justify-start gap-2 mb-2"
          >
            <Icon className="h-5 w-5" />
            {!isCollapsed && <span>{item.label}</span>}
            {isCollapsed && (
              <div className="fixed left-[5.5rem] px-2 py-1 bg-popover text-popover-foreground text-sm rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[100]">
                {item.label}
              </div>
            )}
          </Button>
        )}
      </NavLink>
    )
  }

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-64'} min-h-screen bg-card border-r border-border flex flex-col transition-all duration-300 fixed z-20`}>
      <div className="p-6 py-8 border-b border-border flex items-center justify-between">
        {!isCollapsed && (
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
        )}
        <Button
          onClick={onCollapse}
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground hover:bg-accent relative group"
        >
          {isCollapsed ? (
            <>
              <PanelLeft className="h-5 w-5" />
              <div className="fixed left-[5.5rem] px-2 py-1 bg-popover text-popover-foreground text-sm rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[100]">
                Expand Sidebar
              </div>
            </>
          ) : (
            <>
              <PanelLeftClose className="h-5 w-5" />
              <div className="fixed left-[5.5rem] px-2 py-1 bg-popover text-popover-foreground text-sm rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[100]">
                Collapse Sidebar
              </div>
            </>
          )}
        </Button>
      </div>

      <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
        {/* Category Dropdown */}
        {!isCollapsed && (
          <div className="relative">
            <Button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-2">
                {selectedCategory?.icon ? (
                  <selectedCategory.icon className="h-5 w-5" />
                ) : (
                  <Network className="h-5 w-5" />
                )}
                <span className="font-light">
                  {selectedCategory ? selectedCategory.label : 'Select Category'}
                </span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-primary rounded shadow-lg z-[90]">
                {sitemap.categories.map((category) => {
                  const isActive = selectedCategory?.id === category.id
                  return (
                    <Button
                      key={category.id}
                      onClick={() => handleCategorySelect(category)}
                      variant="ghost"
                      className={cn(
                        'flex items-left justify-start gap-2 w-full',
                        'text-primary-foreground hover:bg-primary/90',
                        isActive && 'bg-primary/80'
                      )}
                    >
                      {category.icon && <category.icon className="h-5 w-5" />}
                      <span>{category.label}</span>
                    </Button>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* Selected Category Items */}
        {selectedCategory && (
          <div className="space-y-1">
            {selectedCategory.items.map(renderNavItem)}
          </div>
        )}
      </nav>

      {/* Logout button */}
      <div className="border-t border-border">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className={cn(
            'w-full gap-2 py-8',
            'text-muted-foreground hover:text-foreground hover:bg-accent',
            isCollapsed && 'justify-center'
          )}
        >
          <LogOut className="h-5 w-5" />
          {!isCollapsed && <span>Logout</span>}
          {isCollapsed && (
            <div className="fixed left-[5.5rem] px-2 py-1 bg-popover text-popover-foreground text-sm rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[100]">
              Logout
            </div>
          )}
        </Button>
      </div>
    </aside>
  )
}