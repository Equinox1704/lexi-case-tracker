'use client';

import React from 'react';
import { Commission } from '@/types';

interface CommissionSelectorProps {
  commissions: Commission[];
  selectedCommission: string;
  onCommissionChange: (commission: string) => void;
  disabled?: boolean;
}

export const CommissionSelector: React.FC<CommissionSelectorProps> = ({
  commissions,
  selectedCommission,
  onCommissionChange,
  disabled = false
}) => {
  return (
    <div className="mb-4">
      <label htmlFor="commission-select" className="block text-sm font-medium text-gray-700 mb-2">
        Commission *
      </label>
      <select
        id="commission-select"
        value={selectedCommission}
        onChange={(e) => onCommissionChange(e.target.value)}
        disabled={disabled || commissions.length === 0}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
        required
      >
        <option value="">Select Commission</option>
        {commissions.map((commission) => (
          <option key={commission.id} value={commission.name}>
            {commission.name}
          </option>
        ))}
      </select>
    </div>
  );
};
