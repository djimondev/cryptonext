import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { sitemap } from "@/constants/sitemap";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-12">
        <div className="space-y-6">
          <h1 className="text-7xl font-bold text-primary">404</h1>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Page Not Found</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              We couldn't find the page you're looking for. Please check the URL or navigate back to the homepage.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-muted-foreground">Or explore our main categories:</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-2xl">
            {sitemap.categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant="secondary"
                  size="default"
                  className="bg-primary/10 hover:bg-primary/20 text-primary border-0"
                  asChild
                >
                  <Link to={category.items[0].path} className="gap-2 flex items-center">
                    <Icon className="h-5 w-5" />
                    {category.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>

        <Button 
          variant="secondary" 
          size="lg" 
          className="bg-primary/20 hover:bg-primary/30 text-primary border-0"
          asChild
        >
          <Link to="/" className="gap-2 flex items-center">
            <HomeIcon className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
} 