import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Breadcrumb } from "./components/common/Breadcrumb/Breadcrumb";
import { RedirectToChild } from "./components/common/RedirectToChild";
import { SideNav } from "./components/layout/SideNav/SideNav";
import { TopBar } from "./components/layout/TopBar/TopBar";
import { routeConfig } from "./config/routes";
import { useColorPaletteEffect } from "./hooks/useColorPalette";
import { Home } from "./pages/Home/Home";
import { getAllRoutes } from "./utils/routing";

const queryClient = new QueryClient();

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  useColorPaletteEffect();

  const routes = getAllRoutes(routeConfig);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <TopBar />
          <div className="flex h-[calc(100vh-4rem)]">
            <SideNav collapsed={sidebarCollapsed} onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} />
            <main className="flex-1 overflow-auto">
              <div className="h-full flex flex-col">
                <Breadcrumb />
                <div className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/acquisition" element={<Navigate to="/acquisition/overview" replace />} />
                    {routes.map(route => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={
                          <>
                            <RedirectToChild />
                            <route.component />
                          </>
                        }
                      />
                    ))}
                  </Routes>
                </div>
              </div>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
