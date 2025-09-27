'use client';

import React from 'react';
import { Case } from '@/types';
import { ExternalLink } from 'lucide-react';

interface CaseCardProps {
  case: Case;
}

export const CaseCard: React.FC<CaseCardProps> = ({ case: caseData }) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* Case Header */}
      <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-gray-600">
        <span className="font-semibold text-blue-800">Case: {caseData.case_number}</span>
        <span>|</span>
        <span>Stage: <span className="font-medium">{caseData.case_stage}</span></span>
        <span>|</span>
        <span>Filed: {formatDate(caseData.filing_date)}</span>
      </div>

      {/* Parties */}
      <div className="space-y-2 mb-4">
        <div>
          <span className="text-gray-700">
            <span className="font-medium">Complainant:</span> {caseData.complainant}
          </span>
          <span className="text-gray-600"> ({caseData.complainant_advocate})</span>
        </div>
        <div>
          <span className="text-gray-700">
            <span className="font-medium">Respondent:</span> {caseData.respondent}
          </span>
          <span className="text-gray-600"> ({caseData.respondent_advocate})</span>
        </div>
      </div>

      {/* Document Link */}
      <div>
        <a
          href={caseData.document_link}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View Document
        </a>
      </div>
    </div>
  );
};
