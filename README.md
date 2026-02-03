# Financial Advisor Landing Page - React

A high-converting, professional landing page built with React and Framer Motion, designed to generate qualified leads and book consultations for financial advisors.

## 🚀 Features

- **Modern React Architecture** - Built with React 18 + Vite for blazing-fast development
- **Smooth Animations** - Powered by Framer Motion for professional interactions
- **Fully Responsive** - Mobile-first design that works on all devices
- **Lead Capture Form** - Pre-qualification questionnaire with form validation
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Production Ready** - Optimized build with code splitting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **VSCode** (recommended) - [Download here](https://code.visualstudio.com/)
- **Git** - [Download here](https://git-scm.com/)

## 🛠️ Step-by-Step Setup in VSCode

### Step 1: Install Node.js

1. Download Node.js from [nodejs.org](https://nodejs.org/)
2. Run the installer and follow the prompts
3. Verify installation by opening your terminal and running:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install VSCode Extensions (Recommended)

Open VSCode and install these extensions:

1. **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
2. **ESLint** - dbaeumer.vscode-eslint
3. **Prettier - Code formatter** - esbenp.prettier-vscode
4. **Auto Rename Tag** - formulahendry.auto-rename-tag
5. **Path Intellisense** - christian-kohler.path-intellisense

To install extensions:
- Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
- Search for each extension and click "Install"

### Step 3: Clone/Create Project

**Option A: If you have the files**

1. Open VSCode
2. Click `File > Open Folder`
3. Navigate to the `financial-advisor-react` folder and select it

**Option B: Create from scratch**

1. Open VSCode
2. Open terminal in VSCode: `Terminal > New Terminal` or `Ctrl+\``
3. Navigate to where you want to create the project:
   ```bash
   cd path/to/your/workspace
   ```
4. Create project folder:
   ```bash
   mkdir financial-advisor-react
   cd financial-advisor-react
   ```
5. Copy all the project files into this folder

### Step 4: Install Dependencies

In the VSCode terminal (make sure you're in the project root):

```bash
npm install
```

This will install all required packages:
- React & ReactDOM
- Vite (build tool)
- Framer Motion (animations)
- ESLint (code quality)

**Note:** This may take 1-3 minutes depending on your internet speed.

### Step 5: Start Development Server

```bash
npm run dev
```

You should see output like:
```
VITE v5.1.0  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

The browser should automatically open to `http://localhost:3000`

If it doesn't open automatically, manually navigate to `http://localhost:3000` in your browser.

### Step 6: Verify Everything Works

You should see the landing page with:
- Hero section with animations
- Problem/Solution section
- How It Works steps
- Trust & credibility section
- Lead capture form
- Final CTA
- Footer

Try:
1. Scrolling through the page (animations should trigger)
2. Clicking the CTA buttons (should scroll to form)
3. Filling out and submitting the form
4. Resizing the browser window (responsive design)

## 🏗️ Project Structure

```
financial-advisor-react/
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main App component
│   ├── App.css            # App styles
│   ├── index.css          # Global styles
│   └── components/
│       ├── Header.jsx
│       ├── Header.css
│       ├── Hero.jsx
│       ├── Hero.css
│       ├── ProblemSection.jsx
│       ├── ProblemSection.css
│       ├── HowItWorks.jsx
│       ├── HowItWorks.css
│       ├── TrustSection.jsx
│       ├── TrustSection.css
│       ├── LeadForm.jsx
│       ├── LeadForm.css
│       ├── FinalCTA.jsx
│       ├── FinalCTA.css
│       ├── Footer.jsx
│       ├── Footer.css
│       └── hooks/
│           └── useInView.js
└── dist/                   # Production build (created after build)
```

## 📝 Development Workflow

### Making Changes

1. **Edit Components:**
   - Navigate to `src/components/`
   - Open the component you want to edit
   - Save the file (`Ctrl+S` or `Cmd+S`)
   - Changes will hot-reload automatically in the browser

2. **Edit Styles:**
   - Each component has its own CSS file
   - Edit the corresponding `.css` file
   - Changes appear instantly

3. **Add New Components:**
   ```jsx
   // src/components/NewComponent.jsx
   import './NewComponent.css'
   
   export default function NewComponent() {
     return (
       <section className="new-component">
         <h2>New Section</h2>
       </section>
     )
   }
   ```
   
   Then import it in `App.jsx`:
   ```jsx
   import NewComponent from './components/NewComponent'
   ```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## 🚢 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Free hosting for personal projects
- Automatic HTTPS
- Global CDN
- Continuous deployment from Git
- Zero configuration needed

**Steps:**

1. **Create account:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub/GitLab/Bitbucket

2. **Push to GitHub:**
   ```bash
   # Initialize git (if not already)
   git init
   git add .
   git commit -m "Initial commit"
   
   # Create repository on GitHub, then:
   git remote add origin https://github.com/yourusername/financial-advisor-landing.git
   git push -u origin main
   ```

3. **Deploy on Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

4. **Done!**
   - Your site will be live at `https://your-project.vercel.app`
   - Every push to main branch auto-deploys

### Option 2: Netlify

**Steps:**

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   
   **Method A: Drag & Drop**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `dist` folder onto the page
   - Done! Site is live
   
   **Method B: Git Integration**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import existing project"
   - Connect to GitHub
   - Select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

### Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update vite.config.js:**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // Add this line
     // ... rest of config
   })
   ```

3. **Add to package.json scripts:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub:**
   - Go to your repo settings
   - Scroll to "Pages"
   - Source: "Deploy from branch"
   - Branch: `gh-pages`
   - Save

Site will be live at: `https://yourusername.github.io/your-repo-name/`

### Option 4: Traditional Web Hosting (cPanel/FTP)

**Steps:**

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Open your FTP client (FileZilla, etc.)
   - Connect to your hosting
   - Navigate to public_html or www folder
   - Upload ALL files from the `dist` folder
   - Make sure `index.html` is in the root

3. **Configure .htaccess** (for proper routing):
   Create `.htaccess` in the root:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## 🔧 Customization Guide

### Change Colors

Edit `src/index.css`:

```css
:root {
  --navy: #0A2540;        /* Primary dark color */
  --gold: #D4AF37;        /* Accent color */
  --gray: #F5F7FA;        /* Background color */
  /* ... other colors */
}
```

### Change Text Content

1. **Hero Section:** `src/components/Hero.jsx`
2. **Problem Cards:** `src/components/ProblemSection.jsx`
3. **Steps:** `src/components/HowItWorks.jsx`
4. **Testimonials:** `src/components/TrustSection.jsx`
5. **Form:** `src/components/LeadForm.jsx`

### Integrate with Backend/CRM

In `src/components/LeadForm.jsx`, modify the `handleSubmit` function:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  
  try {
    // Send to your backend
    const response = await fetch('https://your-api.com/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setFormSubmitted(true)
      // Reset form, redirect, etc.
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    // Handle error
  }
}
```

### Add Google Analytics

In `index.html`, add before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Kill the process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill
```

Or use a different port:
```bash
npm run dev -- --port 3001
```

### Dependencies Won't Install

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### Build Fails

```bash
# Check Node version (should be 18+)
node --version

# Update npm
npm install -g npm@latest

# Try clean build
rm -rf dist
npm run build
```

### Animations Not Working

Make sure Framer Motion is installed:
```bash
npm install framer-motion
```

## 📱 Testing

### Browser Testing

Test in multiple browsers:
- Chrome (primary)
- Firefox
- Safari
- Edge

### Mobile Testing

**Option 1: Chrome DevTools**
1. Press F12 or right-click → Inspect
2. Click device toggle icon (Ctrl+Shift+M)
3. Select different devices

**Option 2: Real Device**
1. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. On mobile, navigate to: `http://YOUR-IP:3000`

### Performance Testing

1. **Lighthouse:**
   - Open Chrome DevTools
   - Click "Lighthouse" tab
   - Click "Generate report"
   
2. **GTmetrix:**
   - Deploy site first
   - Go to [gtmetrix.com](https://gtmetrix.com)
   - Enter your URL
   - Analyze

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🔒 Security Best Practices

1. **Never commit sensitive data:**
   - Create `.env` for API keys
   - Add `.env` to `.gitignore`

2. **Validate form inputs:**
   - Already implemented in LeadForm component
   - Add server-side validation too

3. **Use HTTPS:**
   - Vercel/Netlify provide free SSL
   - For custom hosting, use Let's Encrypt

## 📄 License

This project is provided as-is for commercial use.

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Search for error messages online
3. Check package documentation
4. Review browser console for errors (F12)

## 🎉 You're Ready!

Your landing page is now set up and ready to generate leads. Good luck with your financial advisory business!

---

**Quick Command Reference:**

```bash
# Development
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Deployment
git add .
git commit -m "message"
git push             # Push to GitHub
vercel              # Deploy to Vercel (after installing CLI)
```
