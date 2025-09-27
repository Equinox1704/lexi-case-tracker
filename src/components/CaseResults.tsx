'use client';

import React from 'react';
import { Case } from '@/types';
import { CaseCard } from './CaseCard';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';

interface CaseResultsProps {
  cases: Case[];
  isLoading: boolean;
  error: string | null;
  hasSearched: boolean;
}

export const CaseResults: React.FC<CaseResultsProps> = ({
  cases,
  isLoading,
  error,
  hasSearched
}) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!hasSearched) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>Select search criteria and click search to find cases</p>
      </div>
    );
  }

  if (cases.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No cases found matching your search criteria</p>
        <p className="text-sm mt-2">Try adjusting your search parameters</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 text-sm text-gray-600">
        Found {cases.length} case{cases.length !== 1 ? 's' : ''}
      </div>
      <div className="space-y-4">
        {cases.map((caseData) => (
          <CaseCard key={caseData.case_number} case={caseData} />
        ))}
      </div>
    </div>
  );
};
