# Tempus Frontend - X-Sähkö

A React-based web application for comparing fixed and spot electricity prices. Users can upload their electricity consumption files from Fingrid or use the calculator to estimate consumption and determine which pricing model suits them better.

## Features

- **Electricity Price Comparison**: Compare fixed vs spot electricity prices
- **File Upload**: Upload electricity consumption files (.csv) from Fingrid customer portal
- **Consumption Calculator**: Estimate electricity consumption without uploading files
- **Data Visualization**: View consumption and cost data with interactive charts (daily, weekly, monthly)
- **Multi-language Support**: Internationalization support using i18next
- **Responsive Design**: Built with Bootstrap and Material-UI for a modern, responsive interface

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **Bootstrap & React Bootstrap** - UI components and styling
- **Material-UI** - Additional UI components and icons
- **Chart.js & React-Chartjs-2** - Data visualization
- **Axios** - HTTP client
- **i18next & React-i18next** - Internationalization
- **date-fns** - Date manipulation
- **Lottie React** - Animations

## Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tempus-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure backend URL (if needed):
   
   Create a `.env` file in the root directory and add the following environment variables:
   ```env
   VITE_BASE_URL=http://localhost:5000
   VITE_FINGRID_PATH=/api/fingrid
   VITE_CALCULATION_PATH=/api/calculation
   VITE_PRICES=/api/prices
   ```
   
   **Note**: Replace `http://localhost:5000` with your actual backend API URL.
   
   The backend URL is used in the following service files:
   - `src/services/FetchDataService.ts` - Uses `VITE_BASE_URL` + `VITE_FINGRID_PATH` for FinGrid file uploads
   - `src/services/FetchDirectiveData.ts` - Uses `VITE_BASE_URL` + `VITE_CALCULATION_PATH` for consumption calculations
   - `src/services/FetchElectricityPricesService.ts` - Uses `VITE_BASE_URL` + `VITE_PRICES` for electricity price data
   
   **Important**: After changing environment variables, restart the development server for changes to take effect.

## Available Scripts

### `npm run dev`

Runs the app in development mode using Vite.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload automatically when you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run preview`

Preview the production build locally. This command will start a local server to preview the built application.

## Project Structure

```
tempus-frontend/
├── public/              # Static assets and public files
│   ├── assets/         # Images and logos
│   └── FavIcons/       # Favicon files
├── src/
│   ├── components/     # React components
│   │   ├── FinGridCalculation.tsx
│   │   ├── DirectiveCalculation.tsx
│   │   ├── PricesChart.tsx
│   │   └── ...
│   ├── Routes/         # Routing configuration
│   ├── services/       # API and data fetching services
│   ├── models/         # TypeScript type definitions
│   ├── localization/   # i18n translation files
│   ├── styles/         # CSS stylesheets
│   └── validation/     # Form validation utilities
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## Usage

1. Start the development server:
```bash
npm run dev
```

2. Navigate to the application in your browser at `http://localhost:3000`

3. Choose between:
   - **FinGrid Calculation**: Upload your consumption file from Fingrid
   - **Directive Calculation**: Use the calculator to estimate consumption

4. Follow the instructions on the page to upload files or enter data

5. View the results with interactive charts showing daily, weekly, and monthly breakdowns

## Development

The application uses:
- **TypeScript** for type safety
- **ESLint** for code linting (configured via `package.json`)
- **Vite** for fast development and optimized builds

## Browser Support

The application supports modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contributing

This is a private project. For contributions or issues, please contact the project maintainers.
