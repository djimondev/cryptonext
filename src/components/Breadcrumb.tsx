import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { sitemap } from '@/constants/sitemap'
import type { MenuItem, MenuCategory } from '@/types/common'

export const Breadcrumb = () => {
  const location = useLocation()
  const pathSegments = location.pathname.split('/').filter(Boolean)

  // Function to find menu item and its category
  const findMenuItemAndCategory = (path: string): { menuItem: MenuItem; category?: MenuCategory } | undefined => {
    // Check main items
    const mainItem = sitemap.items.find((item) => item.path === path)
    if (mainItem) return { menuItem: mainItem }

    // Check category items
    for (const category of sitemap.categories) {
      const categoryItem = category.items.find((item) => item.path === path)
      if (categoryItem) {
        return { menuItem: categoryItem, category }
      }
    }
  }

  // Build breadcrumb items
  const breadcrumbItems = pathSegments.reduce<Array<{ label: string; path: string }>>((items, _, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/')
    const result = findMenuItemAndCategory(path)
    
    if (result) {
      // If item belongs to a category, add the category first
      if (result.category && !items.some(item => item.label === result.category?.label)) {
        items.push({ 
          label: result.category.label, 
          path: `/${result.category.id}` // Use category ID for the path
        })
      }
      items.push({ label: result.menuItem.label, path })
    }
    
    return items
  }, [])

  if (breadcrumbItems.length === 0) return null

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
      <Link to="/" className="hover:text-foreground" aria-label="Home">
        <Home className="h-4 w-4" />
      </Link>

      {breadcrumbItems.map((item, index) => (
        <div key={item.path} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4" />
          {index === breadcrumbItems.length - 1 ? (
            <span className="text-foreground font-medium">{item.label}</span>
          ) : (
            <Link to={item.path} className="hover:text-foreground">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
} 