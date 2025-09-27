'use client';

import React, { useState, useMemo } from 'react';
import { SearchType, SearchCriteria } from '@/types';
import { states } from '@/lib/mockData';
import { StateSelector } from './StateSelector';
import { CommissionSelector } from './CommissionSelector';
import { SearchTypeTabs } from './SearchTypeTabs';
import { Search } from 'lucide-react';

interface SearchPanelProps {
  onSearch: (criteria: SearchCriteria) => void;
  isLoading: boolean;
}

export const SearchPanel: React.FC<SearchPanelProps> = ({ onSearch, isLoading }) => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCommission, setSelectedCommission] = useState('');
  const [searchType, setSearchType] = useState<SearchType>('case_number');
  const [searchValue, setSearchValue] = useState('');

  // Get available commissions for selected state
  const availableCommissions = useMemo(() => {
    if (!selectedState) return [];
    const state = states.find(s => s.name === selectedState);
    return state?.commissions || [];
  }, [selectedState]);

  // Reset commission when state changes
  const handleStateChange = (stateId: string) => {
    setSelectedState(stateId);
    setSelectedCommission('');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const criteria: SearchCriteria = {
      state: selectedState,
      commission: selectedCommission,
      searchType,
      searchValue: searchValue.trim(),
    };

    onSearch(criteria);
  };

  const isFormValid = selectedState && selectedCommission && searchValue.trim();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Search Cases</h2>
      
      <form onSubmit={handleSearch} className="space-y-6">
        {/* Location Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StateSelector
            states={states}
            selectedState={selectedState}
            onStateChange={handleStateChange}
            disabled={isLoading}
          />
          
          <CommissionSelector
            commissions={availableCommissions}
            selectedCommission={selectedCommission}
            onCommissionChange={setSelectedCommission}
            disabled={isLoading || !selectedState}
          />
        </div>

        {/* Search Type Tabs */}
        <SearchTypeTabs
          activeSearchType={searchType}
          onSearchTypeChange={setSearchType}
        />

        {/* Search Input */}
        <div>
          <label htmlFor="search-value" className="block text-sm font-medium text-gray-700 mb-2">
            Search Value *
          </label>
          <input
            type="text"
            id="search-value"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={`Enter ${searchType.replace('_', ' ')}`}
            disabled={isLoading}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            required
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Searching...
            </>
          ) : (
            <>
              <Search className="w-4 h-4 mr-2" />
              Search Cases
            </>
          )}
        </button>
      </form>
    </div>
  );
};
