import { Breadcrumb } from '@/components/Breadcrumb'
import { Sidebar } from '@/components/Sidebar'
import { CollectorProvider } from '@/contexts/CollectorContext'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

export function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarCollapsed(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <CollectorProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          onCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
        />
        <main
          className={`relative transition-all duration-300 ${
            !isSidebarCollapsed ? 'md:ml-64' : 'md:ml-20'
          } p-8`}
        >
          <Breadcrumb />
          <Outlet />
        </main>
      </div>
    </CollectorProvider>
  )
} 