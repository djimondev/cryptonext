import { useNavigate } from 'react-router-dom'
import { sitemap } from '@/constants/sitemap'
import { Button } from '@/components/ui/button'

export const HomePage = () => {
  const navigate = useNavigate()

  const handleCategoryClick = (categoryId: string) => {
    const category = sitemap.categories.find(cat => cat.id === categoryId)
    if (category?.items.length) {
      navigate(category.items[0].path)
    }
  }

  return (
    <div className="max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-semibold text-foreground">
            Welcome to CryptoNext Security
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select a category below to explore our security features and data analysis tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemap.categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                variant="ghost"
                className="h-auto bg-card hover:bg-card/80 rounded p-8 transition-all duration-200 border border-border hover:border-primary text-left flex flex-col justify-start"
              >
                <div className="flex items-start gap-4 mb-6 w-full border-b border-border pb-4 border-b-primary">
                  {Icon && (
                    <div className="p-3 bg-primary/10 rounded group-hover:bg-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <h2 className="text-xl font-medium text-foreground">{category.label}</h2>
                </div>
                
                {category.items.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-border w-full">
                    {category.items.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                    ))}
                    {category.items.length > 3 && (
                      <div className="text-sm text-primary">
                        +{category.items.length - 3} more items
                      </div>
                    )}
                  </div>
                )}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
} 