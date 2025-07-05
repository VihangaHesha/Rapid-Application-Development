# 🪵 Wood Craft Shop Backend 🏪

Welcome to the **Wood Craft Shop** backend project! This Express.js and Node.js application powers the backend services for our beautiful wood craft e-commerce platform. 

## 🚀 Getting Started

Follow these steps to set up your development environment and get the project running locally.

### 📋 Prerequisites

Before you begin, ensure you have the following installed:
- ✅ **Node.js** (v14 or higher)
- ✅ **npm** (Node Package Manager)
- ✅ **IntelliJ IDEA** (or your preferred IDE)

### 🛠️ Project Setup

#### Step 1: Create Empty Project 📁
1. Open **IntelliJ IDEA**
2. Click on `File` → `New` → `Project`
3. Select `Empty Project`
4. Choose your project location and name it `wood-craft-shop-backend`
5. Click `Create`

#### Step 2: Create Source Directory 📂
```bash
mkdir src
```
Create a `src` folder in your project root directory. This will contain all your TypeScript source files.

#### Step 3: Initialize npm Project 📦
```bash
npm init -y
```
This command creates a `package.json` file with default settings for your project.

#### Step 4: Install Dependencies 📚

**Main Dependencies:**
```bash
npm install express
```

**Development Dependencies:**
```bash
npm install --save-dev typescript @types/node @types/express
```

#### Step 5: Create TypeScript Configuration ⚙️
```bash
npx tsc --init
```

After creating the `tsconfig.json` file, make the following changes:

**📝 Required tsconfig.json Modifications:**
```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

**🔧 Key Changes Made (In tsconfig.ts file):**
- `"rootDir": "./src"` - Sets source directory
- `"outDir": "./dist"` - Sets output directory for compiled JavaScript

**Install Nodemon dependency for efficient work 📚**
```bash
npm -i nodemon
```

**After the installation make these changes**
- `Step 01 : Add **nodemon.json** to the **src** file.`
- `Step 02 : Add these values :
        ```json
        {
          "watch": ["src"],
          "ext": "ts",
          "ignore": ["src/**/*.spec.ts"],
            "exec": "ts-node ./src/index.ts"
        }
        ```
        `

## 🏗️ Project Structure

```
wood-craft-shop-backend/
├── 📁 src/
│   ├── 📄 index.ts
│   ├── 📁 routes/
│   ├── 📁 models/
│   ├── 📁 controllers/
│   └── 📁 middleware/
├── 📁 dist/          (generated after build)
├── 📄 package.json
├── 📄 tsconfig.json
└── 📄 README.md
```

## 🎯 Quick Start Scripts

Add these helpful scripts to your `package.json`:

```json
{
  "scripts": {
    "start": "node dist/index.js",
    "dev": "npx ts-node src/index.ts",
    "build": "npx tsc",
    "clean": "rm -rf dist"
  }
}
```

## 📝 Sample Express Server

Create a basic Express server in `src/index.ts`:

```typescript
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: '🪵 Welcome to Wood Craft Shop API! 🏪',
    status: 'Server is running smoothly'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Wood Craft Shop server is running on port ${PORT}`);
});
```

## 🔨 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | 🔥 Start development server with hot reload |
| `npm run build` | 🏗️ Build TypeScript to JavaScript |
| `npm start` | ▶️ Start production server |
| `npm run clean` | 🧹 Clean build directory |

## 🌟 Features Coming Soon

- 🛒 Product catalog management
- 👤 User authentication
- 📦 Order processing
- 💳 Payment integration
- 📊 Analytics dashboard
- 🔍 Search functionality
