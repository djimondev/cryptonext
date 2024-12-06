import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TopBar } from './components/layout/TopBar/TopBar';
import { SideNav } from './components/layout/SideNav/SideNav';
import { Home } from './pages/Home/Home';

const queryClient = new QueryClient();

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <TopBar onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
          <div className="flex h-[calc(100vh-4rem)]">
            <SideNav collapsed={sidebarCollapsed} />
            <main className="flex-1 overflow-auto">
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