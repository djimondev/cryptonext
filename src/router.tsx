import { createBrowserRouter } from "react-router-dom";
import { sitemap } from "./constants/sitemap";
import { App } from "./components/App";
import NotFound from "./components/NotFound";
import { CategoryRedirect } from "./components/CategoryRedirect";
import { HomePage } from "./components/HomePage";
import type { RouteObject } from "react-router-dom";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { LoginPage } from "./components/auth/LoginPage";

const HomeLayout = () => (
  <div className="min-h-screen bg-background">
    <HomePage />
  </div>
);

// Helper function to extract all routes from sitemap
const generateRoutes = (): RouteObject[] => {
  const routes: RouteObject[] = [];

  // Add category routes that redirect to their first item
  sitemap.categories.forEach(category => {
    routes.push({
      path: category.path.slice(1), // Remove leading slash
      element: (
        <ProtectedRoute>
          <CategoryRedirect />
        </ProtectedRoute>
      )
    });

    // Add all items from this category
    category.items.forEach(item => {
      routes.push({
        path: item.path.slice(1), // Remove leading slash
        element: (
          <ProtectedRoute>
            <item.component />
          </ProtectedRoute>
        )
      });
    });
  });

  // Add standalone items (not in categories)
  sitemap.items.filter(item => item.path !== "/").forEach(item => {
    routes.push({
      path: item.path.slice(1), // Remove leading slash
      element: <item.component />
    });
  });

  return routes;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    )
  },
  {
    path: "/*",
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
    errorElement: <NotFound />,
    children: generateRoutes()
  }
]); 