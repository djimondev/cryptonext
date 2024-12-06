import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Breadcrumb } from "./components/common/Breadcrumb/Breadcrumb";
import { SideNav } from "./components/layout/SideNav/SideNav";
import { TopBar } from "./components/layout/TopBar/TopBar";
import { useColorPaletteEffect } from "./hooks/useColorPalette";
import { Home } from "./pages/Home/Home";

const queryClient = new QueryClient();

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  useColorPaletteEffect();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <TopBar />
          <div className="flex h-[calc(100vh-4rem)]">
            <SideNav collapsed={sidebarCollapsed} onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} />
            <main className="flex-1 overflow-auto">
              <Breadcrumb />
              <Routes>
                <Route path="/" element={<Home />} />
                {/* Other routes will be added here */}
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
