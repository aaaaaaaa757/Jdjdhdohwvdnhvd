# Banking App - OKX Inspired Design

A modern banking application built with React and TypeScript, featuring a sleek dark theme with green neon accents inspired by OKX's design language.

## Features

- **Dark Theme with Neon Accents**: Beautiful dark interface with green neon highlights
- **Balance Display**: Toggle-able balance visibility with growth indicators
- **Credit Card View**: Modern card design with secure masked information
- **Transaction History**: Comprehensive list of recent transactions with categorized icons
- **Responsive Design**: Optimized for mobile and desktop viewing
- **Smooth Animations**: Fade-in animations and hover effects

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Custom CSS animations**

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd banking-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Design Features

### Color Palette
- **Primary Dark**: `#0a0a0a` (Background)
- **Secondary Dark**: `#1a1a1a`, `#2a2a2a`, `#3a3a3a` (Cards and components)
- **Neon Green**: `#00ff88` (Accents and highlights)
- **Neon Blue**: `#00d4ff` (Secondary accents)

### Components

1. **Header**: User greeting with navigation icons
2. **BalanceCard**: Main balance display with toggle visibility
3. **CreditCard**: Secure card information display
4. **TransactionList**: Recent transactions with categorized icons

## Customization

The app uses Tailwind CSS with custom color definitions. You can modify the color scheme in `tailwind.config.js`:

```javascript
colors: {
  neon: {
    green: '#00ff88',
    blue: '#00d4ff',
  },
  dark: {
    900: '#0a0a0a',
    800: '#1a1a1a',
    700: '#2a2a2a',
    600: '#3a3a3a',
  }
}
```

## Future Enhancements

- [ ] User authentication
- [ ] Real-time transaction updates
- [ ] Multiple account support
- [ ] Transaction filtering and search
- [ ] Payment functionality
- [ ] Settings and preferences
- [ ] Dark/light theme toggle

## License

This project is open source and available under the [MIT License](LICENSE).
