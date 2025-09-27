import { State, Case } from '@/types';

export const states: State[] = [
  {
    id: "KA",
    name: "KARNATAKA",
    commissions: [
      {id: "KA_BLR1", name: "Bangalore 1st & Rural Additional", state_id: "KA"},
      {id: "KA_BLR2", name: "Bangalore 2nd Additional", state_id: "KA"},
      {id: "KA_MYS", name: "Mysore", state_id: "KA"},
      {id: "KA_HUB", name: "Hubli-Dharwad", state_id: "KA"}
    ]
  },
  {
    id: "MH",
    name: "MAHARASHTRA", 
    commissions: [
      {id: "MH_MUM1", name: "Mumbai 1st", state_id: "MH"},
      {id: "MH_MUM2", name: "Mumbai 2nd", state_id: "MH"},
      {id: "MH_PUNE", name: "Pune", state_id: "MH"},
      {id: "MH_NASH", name: "Nashik", state_id: "MH"}
    ]
  },
  {
    id: "DL",
    name: "DELHI",
    commissions: [
      {id: "DL_CENT", name: "Central Delhi", state_id: "DL"},
      {id: "DL_EAST", name: "East Delhi", state_id: "DL"},
      {id: "DL_WEST", name: "West Delhi", state_id: "DL"}
    ]
  },
  {
    id: "TN",
    name: "TAMIL NADU",
    commissions: [
      {id: "TN_CHE1", name: "Chennai 1st", state_id: "TN"},
      {id: "TN_CHE2", name: "Chennai 2nd", state_id: "TN"},
      {id: "TN_COI", name: "Coimbatore", state_id: "TN"}
    ]
  }
];

export const cases: Case[] = [
  {
    case_number: "CC/123/2025",
    case_stage: "Hearing",
    filing_date: "2025-02-01",
    complainant: "John Doe",
    complainant_advocate: "Adv. Reddy",
    respondent: "XYZ Ltd.",
    respondent_advocate: "Adv. Mehta",
    document_link: "#",
    state: "KARNATAKA",
    commission: "Bangalore 1st & Rural Additional",
    search_tags: ["john doe", "xyz ltd", "reddy", "mehta", "cc/123/2025", "electronics", "judge sharma"]
  },
  {
    case_number: "CC/456/2024",
    case_stage: "Evidence",
    filing_date: "2024-11-15",
    complainant: "Priya Sharma",
    complainant_advocate: "Adv. Kumar",
    respondent: "ABC Telecom Pvt Ltd",
    respondent_advocate: "Adv. Gupta",
    document_link: "#",
    state: "KARNATAKA",
    commission: "Bangalore 1st & Rural Additional",
    search_tags: ["priya sharma", "abc telecom", "kumar", "gupta", "cc/456/2024", "telecom", "judge patel"]
  },
  {
    case_number: "CC/789/2024",
    case_stage: "Argument",
    filing_date: "2024-09-10",
    complainant: "Rajesh Verma",
    complainant_advocate: "Adv. Singh",
    respondent: "Delhi Motors Ltd",
    respondent_advocate: "Adv. Jain",
    document_link: "#",
    state: "DELHI",
    commission: "Central Delhi",
    search_tags: ["rajesh verma", "delhi motors", "singh", "jain", "cc/789/2024", "automotive", "judge agarwal"]
  },
  {
    case_number: "CC/321/2025",
    case_stage: "Judgment",
    filing_date: "2025-01-20",
    complainant: "Sunita Nair",
    complainant_advocate: "Adv. Pillai",
    respondent: "Mumbai Bank Ltd",
    respondent_advocate: "Adv. Desai",
    document_link: "#",
    state: "MAHARASHTRA",
    commission: "Mumbai 1st",
    search_tags: ["sunita nair", "mumbai bank", "pillai", "desai", "cc/321/2025", "banking", "judge iyer"]
  },
  {
    case_number: "CC/654/2024",
    case_stage: "Disposed",
    filing_date: "2024-08-05",
    complainant: "Arun Kumar",
    complainant_advocate: "Adv. Reddy",
    respondent: "TechCorp Solutions",
    respondent_advocate: "Adv. Shah",
    document_link: "#",
    state: "TAMIL NADU",
    commission: "Chennai 1st",
    search_tags: ["arun kumar", "techcorp solutions", "reddy", "shah", "cc/654/2024", "technology", "judge krishnan"]
  },
  {
    case_number: "CC/987/2024",
    case_stage: "Hearing",
    filing_date: "2024-12-03",
    complainant: "Meera Joshi",
    complainant_advocate: "Adv. Patil",
    respondent: "Green Energy Corp",
    respondent_advocate: "Adv. Rao",
    document_link: "#",
    state: "MAHARASHTRA",
    commission: "Pune",
    search_tags: ["meera joshi", "green energy corp", "patil", "rao", "cc/987/2024", "energy", "judge kulkarni"]
  },
  {
    case_number: "CC/147/2025",
    case_stage: "Evidence",
    filing_date: "2025-01-08",
    complainant: "Vikram Singh",
    complainant_advocate: "Adv. Bhatt",
    respondent: "Smart Appliances Ltd",
    respondent_advocate: "Adv. Mehta",
    document_link: "#",
    state: "KARNATAKA",
    commission: "Mysore",
    search_tags: ["vikram singh", "smart appliances", "bhatt", "mehta", "cc/147/2025", "appliances", "judge nair"]
  },
  {
    case_number: "CC/258/2024",
    case_stage: "Argument",
    filing_date: "2024-10-22",
    complainant: "Kavya Krishnan",
    complainant_advocate: "Adv. Kumar",
    respondent: "Digital Services Inc",
    respondent_advocate: "Adv. Gupta",
    document_link: "#",
    state: "DELHI",
    commission: "East Delhi",
    search_tags: ["kavya krishnan", "digital services", "kumar", "gupta", "cc/258/2024", "digital", "judge sharma"]
  }
];
