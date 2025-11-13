'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export function Tabs({ tabs, defaultTab, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={cn('w-full', className)}>
      <div className="flex space-x-1 rounded-lg bg-gray-900/50 p-1 backdrop-blur-sm border border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900',
              activeTab === tab.id
                ? 'bg-primary text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {activeContent}
      </div>
    </div>
  );
}


