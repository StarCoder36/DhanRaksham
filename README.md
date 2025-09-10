# DhanRaksham - AI-Powered Finance Management Platform 🛡️💰

<p align="center">
  <img src="public/Dhan_logo.png" alt="DhanRaksham Logo" width="500"/>
</p>


> **DhanRaksham** - Your intelligent financial guardian that protects and grows your wealth through cutting-edge AI technology.

## 🌟 Overview

DhanRaksham is a comprehensive AI-powered finance platform that revolutionizes how you manage, track, and grow your wealth. Built with modern technologies and intelligent automation, it provides personalized financial insights while ensuring global accessibility through multi-currency support.

## ✨ Key Features

### 🔍 Smart Receipt Scanning
- **AI-Powered OCR**: Automatically extract transaction details from receipts and bills
- **Multi-format Support**: Process images, PDFs, and digital receipts seamlessly
- **Intelligent Categorization**: Auto-categorize expenses using machine learning
- **Expense Tracking**: Real-time transaction monitoring and analysis

### 🌍 Multi-Currency Conversion
- **Global Coverage**: Support for 150+ currencies worldwide
- **Real-time Exchange Rates**: Live currency conversion with accurate rates
- **Currency Analytics**: Track spending across different currencies
- **Travel-Friendly**: Perfect for international users and frequent travelers

### 📊 Personalized Budget Planning
- **Dynamic Insights**: AI-driven budget recommendations based on spending patterns
- **Goal-Based Planning**: Set and track financial objectives with smart milestones
- **Behavioral Analysis**: Understanding spending habits to optimize financial health
- **Custom Categories**: Flexible budget categories tailored to your lifestyle

### 🤖 ML-Based Predictions
- **Stock Market Intelligence**: AI-powered stock price predictions and market analysis
- **Insurance Optimization**: Smart insurance recommendations based on risk assessment
- **Investment Insights**: Personalized investment strategies using machine learning
- **Risk Assessment**: Advanced algorithms to evaluate financial risks

### 🔐 Security & Privacy
- **ArcJet Protection**: Advanced security measures for data protection
- **Encrypted Data**: End-to-end encryption for all financial information
- **Secure Authentication**: Multi-factor authentication with Clerk
- **Privacy First**: GDPR compliant with user data control

## 🛠️ Tech Stack

### Frontend
- **[Next.js](https://nextjs.org/)** - React framework for production-grade applications
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Modern, accessible component library
- **TypeScript** - Type-safe development

### Backend & Database
- **[Supabase](https://supabase.com/)** - Open-source Firebase alternative
- **[Prisma](https://prisma.io/)** - Next-generation ORM for database management
- **PostgreSQL** - Robust relational database

### AI & ML
- **[Gemini AI](https://ai.google.dev/)** - Advanced AI for financial insights
- **Machine Learning Models** - Custom ML algorithms for predictions
- **OCR Technology** - Intelligent text extraction from receipts

### Services & Integrations
- **[Clerk](https://clerk.com/)** - Complete authentication solution
- **[Inngest](https://inngest.com/)** - Background job processing and workflows
- **[ArcJet](https://arcjet.com/)** - Security and rate limiting
- **[Resend](https://resend.com/)** - Transactional email service

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dhanraksham.git
   cd dhanraksham
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL=your_supabase_database_url
   DIRECT_URL=your_supabase_direct_url

   # Authentication (Clerk)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

   # AI Services
   GEMINI_API_KEY=your_gemini_api_key

   # Email Service
   RESEND_API_KEY=your_resend_api_key

   # Security
   ARCJET_KEY=your_arcjet_key
   ```

4. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Features Demo

### Dashboard Overview
- Real-time financial summary
- Interactive charts and graphs
- Quick expense entry
- Currency converter widget

### Receipt Scanning
- Camera integration for instant scanning
- Drag-and-drop file upload
- Automatic data extraction
- Manual editing capabilities

### Budget Management
- Visual budget tracking
- Category-wise spending analysis
- Goal progress monitoring
- Smart alerts and notifications

### Investment Insights
- Stock market predictions
- Portfolio analysis
- Risk assessment tools
- Insurance recommendations

## 🔧 Configuration

### Database Schema
The application uses Prisma for database management. Key models include:
- Users and Authentication
- Transactions and Receipts
- Budgets and Categories
- Investments and Predictions
- Currency and Exchange Rates

### API Routes
- `/api/auth/*` - Authentication endpoints
- `/api/receipts/*` - Receipt processing
- `/api/predictions/*` - ML predictions
- `/api/currency/*` - Currency conversion

## 🤝 Contributing

We welcome contributions to DhanRaksham! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all the open-source libraries that make this project possible
- Special recognition to the AI/ML community for advancing financial technology
- Appreciation for the modern web development ecosystem

---

**DhanRaksham** - Where technology meets financial wisdom. Protect and grow your wealth with AI-powered insights.

Built with ❤️ and cutting-edge technology.
