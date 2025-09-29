# YogicMile - Walk More. Earn More.

![YogicMile Logo](./public/yogic%20logo.png)

A modern fitness rewards app that transforms your daily steps into valuable rewards. Track your fitness journey, achieve your goals, and earn YogiCoins that you can redeem for amazing prizes.

## 🚀 Features

- **Smart Activity Tracking** - AI-powered step counting and activity detection
- **Earn YogiCoins** - Get rewarded for every step you take
- **Instant Rewards** - Redeem coins for gift cards, discounts, and more
- **Personalized Goals** - AI-adapted fitness targets
- **Social Challenges** - Compete with friends and family
- **Advanced Analytics** - Beautiful progress tracking and insights

## 🛠️ Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Deployment**: Netlify (Static Export)
- **Language**: TypeScript

## 📱 Live Demo

- **Website**: [https://yogicmile.netlify.app](https://yogicmile.netlify.app)
- **App Store**: Coming Soon
- **Google Play**: Coming Soon

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/yogicmile-website.git
   cd yogicmile-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🚀 Deployment

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `out`
   - Deploy!

### Manual Deployment

1. **Build static files**
   ```bash
   npm run build
   ```

2. **Upload the `out` folder** to your hosting provider

## 📁 Project Structure

```
yogicmile-website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── privacy/           # Privacy policy page
│   └── terms/             # Terms & conditions page
├── components/            # Reusable components
│   ├── Logo.tsx          # YogicMile logo component
│   └── ui/               # Shadcn/ui components
├── lib/                  # Utilities
├── public/               # Static assets
│   └── yogic logo.png    # Main logo
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── netlify.toml          # Netlify deployment config
```

## 🎨 Design System

### Colors
- **Primary**: Purple (#7C3AED)
- **Secondary**: Blue (#3B82F6)
- **Accent**: Various gradients
- **Text**: Gray scale

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes
- **Body**: Regular weight, readable sizes

## 📄 Pages

- **Homepage** (`/`) - Main landing page with features, testimonials, and download links
- **Privacy Policy** (`/privacy`) - Comprehensive privacy policy for Indian users
- **Terms & Conditions** (`/terms`) - Terms of service

## 🔧 Configuration

### Environment Variables
No environment variables required for static deployment.

### Build Configuration
- **Output**: Static export (`next.config.js`)
- **Images**: Unoptimized for static hosting
- **ESLint**: Disabled during builds for faster deployment

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly interactions
- Optimized for iOS and Android browsers
- Progressive Web App ready

## 🚀 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

- **Email**: support@yogicmile.com
- **Website**: [www.yogicmile.com](https://www.yogicmile.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/yogicmile-website/issues)

## 📄 License

This project is proprietary software. All rights reserved by YogicMile.

## 🙏 Acknowledgments

- Design inspiration from leading fitness apps
- Icons by [Lucide](https://lucide.dev)
- UI components by [Shadcn/ui](https://ui.shadcn.com)
- Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com)

---

**Made with ❤️ in India** 🇮🇳

*Transform your daily steps into rewards with YogicMile!*