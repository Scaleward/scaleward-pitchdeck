# Scaleward.ai Pitch Deck

**Build Smarter. Ship Faster. Scale Infinitely.**

A modern, responsive web application for viewing and sharing the Scaleward.ai pitch deck.

## 🚀 Live Demo

Visit the live site: [scaleward-pitchdeck.vercel.app](https://scaleward-pitchdeck.vercel.app)

## ✨ Features

- 📱 Fully responsive design for all devices
- 🎨 Beautiful gradient UI with modern aesthetics
- 📄 Embedded PDF viewer with smooth loading
- ⬇️ Direct PDF download functionality
- 🚀 Optimized for fast loading and performance
- 🔒 Secure static site generation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Custom CSS with responsive design
- **Deployment**: Vercel
- **Output**: Static site (no server required)

## 📦 Installation

1. **Clone the repository**:
```bash
git clone https://github.com/Scaleward/scaleward-pitchdeck.git
cd scaleward-pitchdeck
```

2. **Install dependencies**:
```bash
npm install
```

## 🏃 Running Locally

1. **Development mode**:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

2. **Production build**:
```bash
npm run build
npm start
```

## 🚀 Deploying to Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Deploy to production**:
```bash
vercel --prod
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically detect Next.js and configure everything for you.

### Option 3: Drag & Drop

1. Build the project:
```bash
npm run build
```

2. Go to [vercel.com](https://vercel.com)
3. Drag and drop the `out` folder

## 📁 Project Structure

```
scaleward-pitchdeck/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page with PDF viewer
│   └── globals.css         # Global styles
├── public/
│   └── pitch-deck.pdf      # The pitch deck PDF file
├── next.config.js          # Next.js configuration (static export)
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
├── vercel.json             # Vercel deployment settings
└── README.md               # This file
```

## 🎨 Customization

### Update the PDF

Replace `public/pitch-deck.pdf` with your updated pitch deck file.

### Modify Styling

Edit `app/globals.css` to customize:
- Color scheme (currently purple gradient)
- Button styles
- Layout and spacing
- Responsive breakpoints

### Update Metadata

Edit `app/layout.tsx` to change:
- Page title
- Description
- Other SEO metadata

## 🔧 Configuration

The project uses static site generation for optimal performance. Key configurations:

- **next.config.js**: Exports as static site
- **vercel.json**: Vercel deployment settings
- **tsconfig.json**: TypeScript strict mode enabled

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: < 480px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔗 Links

- **Website**: [https://www.scaleward.ai](https://www.scaleward.ai)
- **Waitlist**: [https://www.scaleward.ai/waitlist](https://www.scaleward.ai/waitlist)

## 📄 License

© 2025 Scaleward.ai - All rights reserved

---

**Built with ❤️ by the Scaleward team**

