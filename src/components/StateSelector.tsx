'use client';

import React from 'react';
import { State } from '@/types';

interface StateSelectorProps {
  states: State[];
  selectedState: string;
  onStateChange: (stateId: string) => void;
  disabled?: boolean;
}

export const StateSelector: React.FC<StateSelectorProps> = ({
  states,
  selectedState,
  onStateChange,
  disabled = false
}) => {
  return (
    <div className="mb-4">
      <label htmlFor="state-select" className="block text-sm font-medium text-gray-700 mb-2">
        State *
      </label>
      <select
        id="state-select"
        value={selectedState}
        onChange={(e) => onStateChange(e.target.value)}
        disabled={disabled}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
        required
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state.id} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
};
