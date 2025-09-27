import { Case, SearchCriteria, SearchType } from '@/types';
import { cases } from './mockData';

export const searchCases = async (criteria: SearchCriteria): Promise<Case[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const { state, commission, searchType, searchValue } = criteria;
  
  if (!state || !commission || !searchValue.trim()) {
    return [];
  }
  
  const filteredCases = cases.filter(caseItem => {
    // Filter by state and commission
    const matchesLocation = caseItem.state === state && caseItem.commission === commission;
    if (!matchesLocation) return false;
    
    // Filter by search criteria
    return matchesSearchCriteria(caseItem, searchType, searchValue);
  });
  
  return filteredCases;
};

const matchesSearchCriteria = (caseItem: Case, searchType: SearchType, searchValue: string): boolean => {
  const lowerSearchValue = searchValue.toLowerCase().trim();
  
  switch (searchType) {
    case 'case_number':
      return caseItem.case_number.toLowerCase().includes(lowerSearchValue);
    
    case 'complainant':
      return caseItem.complainant.toLowerCase().includes(lowerSearchValue);
    
    case 'respondent':
      return caseItem.respondent.toLowerCase().includes(lowerSearchValue);
    
    case 'complainant_advocate':
      return caseItem.complainant_advocate.toLowerCase().includes(lowerSearchValue);
    
    case 'respondent_advocate':
      return caseItem.respondent_advocate.toLowerCase().includes(lowerSearchValue);
    
    case 'industry':
    case 'judge':
      return caseItem.search_tags.some(tag => 
        tag.toLowerCase().includes(lowerSearchValue)
      );
    
    default:
      return false;
  }
};

export const validateSearchCriteria = (criteria: Partial<SearchCriteria>): string | null => {
  if (!criteria.state) return 'Please select a state';
  if (!criteria.commission) return 'Please select a commission';
  if (!criteria.searchValue?.trim()) return 'Please enter a search value';
  return null;
};
