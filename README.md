# 🪵 Wood Craft Shop

A modern, responsive e-commerce platform for handcrafted wooden products built with React, TypeScript, and Vite.

## ✨ Features

- 🛍️ **Product Catalog** - Browse beautiful handcrafted wooden items
- 🛒 **Shopping Cart** - Add items and manage your order
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎨 **Modern UI** - Clean and intuitive user interface

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** CSS Modules / Tailwind CSS
- **State Management:** React Context API / Redux Toolkit
- **Routing:** React Router
- **Package Manager:** npm 

## 📋 Prerequisites

Before you begin, ensure you have installed:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/wood-craft-shop.git
cd wood-craft-shop
```

### 2. Install dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 3. Start the development server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

### 4. Open your browser

Navigate to `http://localhost:5173` to see the application running.

## 📁 Project Structure

```
wood-crafts-shop/
├── .idea/                    # IDE configuration files
├── node_modules/             # Project dependencies
├── public/                   # Static assets
├── src/
│   ├── assets/              # Images, fonts, and other assets
│   ├── model/               # Data models and types
│   ├── slices/              # Redux slices (state management)
│   ├── store/               # Redux store configuration
│   ├── view/
│       ├── common/          # Reusable components
│       └── pages/           # Page components
│   ├── App.css          # Main application styles
│   ├── App.tsx          # Root component
│   ├── index.css        # Global styles
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite environment types
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run type checking
npm run type-check

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Run tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## 🏗️ Build and Deployment

### Production Build

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Drag and drop the 'dist' folder to Netlify
```

## 🎨 Customization

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://your-api-url.com
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### Styling

The project uses CSS Modules for component-specific styles. Global styles are in `src/styles/`.

To use Tailwind CSS instead:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 🔧 Configuration

### Vite Configuration

The `vite.config.ts` file contains build and development configurations:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
```

### TypeScript Configuration

TypeScript settings are in `tsconfig.json` with strict mode enabled for better type safety.

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Vihanga Heshan Bandara - *Initial work* - [VihangaHesha ((https://github.com/VihangaHesha))

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- TypeScript team for type safety
- All contributors who helped shape this project

## 📞 Support

If you have any questions or need help, please:

- 📧 Email: support@woodcraftshop.com
- 🐛 [Open an issue](https://github.com/yourusername/wood-craft-shop/issues)
- 💬 [Discussions](https://github.com/yourusername/wood-craft-shop/discussions)

---

Made with ❤️ and 🪵 by the Wood Craft Shop team
