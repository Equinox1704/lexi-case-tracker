'use client';

import React from 'react';
import { SearchPanel } from '@/components/SearchPanel';
import { CaseResults } from '@/components/CaseResults';
import { useSearch } from '@/hooks/useSearch';

export default function Home() {
  const { isLoading, results, error, hasSearched, performSearch } = useSearch();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Lexi Case Tracker</h1>
          <p className="text-gray-600 mt-2">District Consumer Courts (DCDRC)</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Search Panel */}
          <div className="lg:col-span-1">
            <SearchPanel onSearch={performSearch} isLoading={isLoading} />
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Search Results</h2>
              <CaseResults
                cases={results}
                isLoading={isLoading}
                error={error}
                hasSearched={hasSearched}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
