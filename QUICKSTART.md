# Quick Start Guide

Get your landing page running in 5 minutes!

## Prerequisites Check

```bash
# Check if Node.js is installed (should show v18+)
node --version

# Check if npm is installed
npm --version
```

Don't have Node.js? Download from [nodejs.org](https://nodejs.org/)

## 3 Simple Steps

### 1. Install Dependencies

Open terminal in the project folder:

```bash
npm install
```

Wait 1-3 minutes while dependencies download.

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open in Browser

Navigate to: `http://localhost:3000`

That's it! 🎉

## Next Steps

- **Customize content:** Edit files in `src/components/`
- **Change colors:** Edit `src/index.css`
- **Deploy:** See README.md for deployment options

## Having Issues?

### Port Already in Use?

```bash
npm run dev -- --port 3001
```

### Dependencies Won't Install?

```bash
npm cache clean --force
npm install
```

### Still Stuck?

Check the full README.md for detailed troubleshooting.

## Deploy in 2 Minutes

**Vercel (Easiest):**

1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click Deploy
5. Done! ✅

**Netlify:**

1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist` folder
4. Done! ✅

## Common Commands

```bash
npm run dev      # Start development
npm run build    # Build for production
npm run preview  # Preview production build
```

---

For detailed instructions, see [README.md](./README.md)
