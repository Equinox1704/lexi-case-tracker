'use client';

import { useState } from 'react';
import { Case, SearchCriteria, SearchState } from '@/types';
import { searchCases, validateSearchCriteria } from '@/lib/searchLogic';

export const useSearch = () => {
  const [searchState, setSearchState] = useState<SearchState>({
    isLoading: false,
    results: [],
    error: null,
    hasSearched: false,
  });

  const performSearch = async (criteria: SearchCriteria) => {
    // Validate criteria
    const validationError = validateSearchCriteria(criteria);
    if (validationError) {
      setSearchState(prev => ({
        ...prev,
        error: validationError,
        results: [],
        hasSearched: false
      }));
      return;
    }

    // Start loading
    setSearchState(prev => ({
      ...prev,
      isLoading: true,
      error: null,
      hasSearched: true
    }));

    try {
      const results = await searchCases(criteria);
      setSearchState(prev => ({
        ...prev,
        isLoading: false,
        results,
        error: null
      }));
    } catch (error) {
      setSearchState(prev => ({
        ...prev,
        isLoading: false,
        error: 'An error occurred while searching. Please try again.',
        results: []
      }));
    }
  };

  const clearResults = () => {
    setSearchState({
      isLoading: false,
      results: [],
      error: null,
      hasSearched: false,
    });
  };

  return {
    ...searchState,
    performSearch,
    clearResults,
  };
};
