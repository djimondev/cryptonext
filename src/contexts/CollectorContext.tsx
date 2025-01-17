import React, { createContext, useContext, useState } from 'react';

export interface Collector {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

interface CollectorContextType {
  collectors: Collector[];
  addCollector: (collector: Omit<Collector, 'id' | 'createdAt'>) => void;
  updateCollector: (id: string, collector: Partial<Collector>) => void;
  deleteCollector: (id: string) => void;
}

const CollectorContext = createContext<CollectorContextType | undefined>(undefined);

export function CollectorProvider({ children }: { children: React.ReactNode }) {
  const [collectors, setCollectors] = useState<Collector[]>([]);

  const addCollector = (collector: Omit<Collector, 'id' | 'createdAt'>) => {
    const newCollector: Collector = {
      ...collector,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    setCollectors(prev => [...prev, newCollector]);
  };

  const updateCollector = (id: string, collector: Partial<Collector>) => {
    setCollectors(prev =>
      prev.map(c => (c.id === id ? { ...c, ...collector } : c))
    );
  };

  const deleteCollector = (id: string) => {
    setCollectors(prev => prev.filter(c => c.id !== id));
  };

  return (
    <CollectorContext.Provider value={React.useMemo(() => ({ collectors, addCollector, updateCollector, deleteCollector }), [collectors])}>
      {children}
    </CollectorContext.Provider>
  );
}

export function useCollectors() {
  const context = useContext(CollectorContext);
  if (context === undefined) {
    throw new Error('useCollectors must be used within a CollectorProvider');
  }
  return context;
} 