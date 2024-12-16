import { Navigate, useLocation } from 'react-router-dom'
import { sitemap } from '@/constants/sitemap'

export const CategoryRedirect = () => {
  const location = useLocation()
  const path = location.pathname.slice(1) // Remove leading slash
  
  // Find the category that matches the current path
  const category = sitemap.categories.find(cat => cat.id === path)
  
  if (!category || category.items.length === 0) {
    console.warn('No category found or category has no items:', path)
    return <Navigate to="/" replace />
  }
  
  const firstItemPath = category.items[0].path
  console.log('Redirecting to:', firstItemPath)
  
  return <Navigate to={firstItemPath} replace />
} 