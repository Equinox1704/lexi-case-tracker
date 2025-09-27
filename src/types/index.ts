export interface Case {
  case_number: string;
  case_stage: string;
  filing_date: string;
  complainant: string;
  complainant_advocate: string;
  respondent: string;
  respondent_advocate: string;
  document_link: string;
  state: string;
  commission: string;
  search_tags: string[];
}

export interface State {
  id: string;
  name: string;
  commissions: Commission[];
}

export interface Commission {
  id: string;
  name: string;
  state_id: string;
}

export type SearchType = 
  | 'case_number'
  | 'complainant' 
  | 'respondent'
  | 'complainant_advocate'
  | 'respondent_advocate'
  | 'industry'
  | 'judge';

export interface SearchCriteria {
  state: string;
  commission: string;
  searchType: SearchType;
  searchValue: string;
}

export interface SearchState {
  isLoading: boolean;
  results: Case[];
  error: string | null;
  hasSearched: boolean;
}
