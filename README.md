# 💼 React JS Developer Assessment - Novel Office

This project is a technical assessment for the React JS Developer position at **Novel Office**. It showcases core React concepts, TypeScript usage, responsive design, and external API integration through a live currency conversion and EMI calculation app.

🔗 **Live Demo**: [https://novel-office-assessment.vercel.app](https://novel-office-assessment.vercel.app)

---

## 🛠 Tech Stack

- **React** with **TypeScript**
- **Material UI (MUI)** for modern UI components
- **Axios** for HTTP requests
- **ExchangeRate API** for live currency conversion
- **React Context & Custom Hooks** for clean, modular state management
- **Responsive Design** across devices

---

## 📁 Project Structure

```text
/
├── Home (EMI Calculator with Amortization Schedule)
├── /exchange-rates-live (Live Currency Conversion for EMI)
├── /error (Generic Error Page)
├── /404 (Custom 404 Page for unknown routes)
├── contexts/ThemeContext.tsx (Global theme toggle support)
├── hooks/
│   ├── useTheme.ts
│   ├── useAmortizationSchedule.ts
│   └── useCurrencyConverter.ts
└── utils/
    ├── data.ts (Currency data)
    └── axiosInstance.ts (Configured Axios client)
```
---

## ✨ Features

### 🔢 EMI Calculator with Amortization Schedule
- Accepts loan amount, interest rate, and tenure
- Calculates EMI using standard formula
- Generates a detailed monthly breakdown with interest, principal, and remaining balance

### 💱 Live Currency Converter
- Converts EMI to user-selected target currency in real-time
- Pulls latest exchange rates from [ExchangeRate API](https://www.exchangerate-api.com/)
- Displays conversion results with symbols and last updated timestamp

### ⚙️ Error Handling
- Dedicated `/error` route to show fallback UI for unexpected app errors
- Handles API failures gracefully in UI with user-friendly messages

### 🔄 Custom Hooks
- `useAmortizationSchedule`: Calculates EMI and builds repayment schedule
- `useCurrencyConverter`: Fetches exchange rates and converts amounts
- `useTheme`: Manages light/dark theme state

### 📱 Responsive Layout
- Fully responsive across desktop, tablet, and mobile devices using MUI Grid and breakpoints

---

## 🧪 Running Locally

```bash
# Clone the repository
git clone https://github.com/your-username/novel-office-assessment.git
cd novel-office-assessment

# Install dependencies
npm install

# Set environment variable
touch .env
# Add the following line:
VITE_EXCHANGE_RATE_API_KEY=your_api_key_here

# Start the dev server
npm run dev
