# Lexi Case Tracker

A professional legal case search dashboard for District Consumer Courts (DCDRC) in India, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏛️ **Professional Legal Interface** - Clean, lawyer-friendly design
- 🔍 **Advanced Search** - Multiple search types including case number, parties, advocates
- 🏗️ **TypeScript Architecture** - Fully typed with interfaces and type safety
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Next.js Performance** - Fast loading and optimal user experience
- 🎨 **Modern UI** - Built with Tailwind CSS for consistent styling

## Search Types Supported

- Case Number
- Complainant
- Respondent  
- Complainant Advocate
- Respondent Advocate
- Industry Type
- Judge

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/lexi-case-tracker.git
cd lexi-case-tracker
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
lexi-case-tracker/
 ├── src/
 │   ├── app/
 │   │   ├── globals.css
 │   │   ├── layout.tsx
 │   │   └── page.tsx
 │   ├── components/
 │   │   ├── CaseCard.tsx
 │   │   ├── CaseResults.tsx
 │   │   ├── CommissionSelector.tsx
 │   │   ├── ErrorMessage.tsx
 │   │   ├── LoadingSpinner.tsx
 │   │   ├── SearchPanel.tsx
 │   │   ├── SearchTypeTabs.tsx
 │   │   └── StateSelector.tsx
 │   ├── types/
 │   │   └── index.ts
 │   ├── lib/
 │   │   ├── mockData.ts
 │   │   └── searchLogic.ts
 │   └── hooks/
 │       
└── useSearch.ts
 ├── public/
 ├── README.md
 └── package.json
\`\`\`

## Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Manual Deployment

\`\`\`bash
npm run build
\`\`\`

Upload the \`.next\` folder and \`package.json\` to your hosting provider.

## Development Guidelines

### Component Architecture

- **Separation of Concerns**: Logic separated from UI components
- **Type Safety**: All components use TypeScript interfaces
- **Reusability**: Modular components for easy maintenance

### State Management

- Uses custom hooks for search functionality
- Local state for form inputs and UI state
- Mock data simulation with realistic delay

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
