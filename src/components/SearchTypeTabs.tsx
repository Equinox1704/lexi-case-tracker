'use client';

import React from 'react';
import { SearchType } from '@/types';

interface SearchTypeTabsProps {
  activeSearchType: SearchType;
  onSearchTypeChange: (type: SearchType) => void;
}

const searchTypeOptions: { value: SearchType; label: string }[] = [
  { value: 'case_number', label: 'Case Number' },
  { value: 'complainant', label: 'Complainant' },
  { value: 'respondent', label: 'Respondent' },
  { value: 'complainant_advocate', label: 'Complainant Advocate' },
  { value: 'respondent_advocate', label: 'Respondent Advocate' },
  { value: 'industry', label: 'Industry Type' },
  { value: 'judge', label: 'Judge' },
];

export const SearchTypeTabs: React.FC<SearchTypeTabsProps> = ({
  activeSearchType,
  onSearchTypeChange
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Search Type *
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {searchTypeOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onSearchTypeChange(option.value)}
            className={`p-2 text-sm rounded-lg border transition-colors ${
              activeSearchType === option.value
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
