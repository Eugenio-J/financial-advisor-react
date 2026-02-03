# Deployment Guide

Comprehensive guide to deploying your Financial Advisor landing page to various platforms.

## Table of Contents

1. [Vercel (Recommended)](#vercel)
2. [Netlify](#netlify)
3. [GitHub Pages](#github-pages)
4. [AWS S3 + CloudFront](#aws-s3--cloudfront)
5. [Traditional Hosting (cPanel/FTP)](#traditional-hosting)
6. [Custom Domain Setup](#custom-domain-setup)

---

## Vercel

**Best for:** Easiest deployment, automatic SSL, global CDN, free tier

### Method 1: GitHub Integration (Recommended)

**Step 1: Push to GitHub**

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/financial-advisor-landing.git
git push -u origin main
```

**Step 2: Deploy on Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Vite:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

**Step 3: Done!**

Your site is live at: `https://your-project.vercel.app`

Every push to `main` branch automatically deploys!

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

1. Go to your project on Vercel
2. Settings → Environment Variables
3. Add variables (e.g., API keys)
4. Redeploy

---

## Netlify

**Best for:** Drag-and-drop deployment, form handling, serverless functions

### Method 1: Drag & Drop

**Step 1: Build**

```bash
npm run build
```

**Step 2: Deploy**

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `dist` folder onto the page
3. Done! Site is live at random URL

**To update:**
- Build again: `npm run build`
- Drag new `dist` folder to your site's dashboard

### Method 2: Git Integration

**Step 1: Push to GitHub** (same as Vercel)

**Step 2: Deploy on Netlify**

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose Git provider (GitHub)
4. Select repository
5. Build settings:
   - Base directory: (leave empty)
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Step 3: Done!**

Site is live at: `https://random-name.netlify.app`

### Method 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Custom Build Settings

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## GitHub Pages

**Best for:** Free hosting on GitHub, good for portfolios

### Setup

**Step 1: Install gh-pages**

```bash
npm install --save-dev gh-pages
```

**Step 2: Update vite.config.js**

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/financial-advisor-landing/', // Your repo name
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

**Step 3: Update package.json**

Add these scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**Step 4: Deploy**

```bash
# First time setup - push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/financial-advisor-landing.git
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

**Step 5: Configure GitHub**

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: `gh-pages` → `/root`
5. Save

**Your site will be live at:**
`https://YOUR_USERNAME.github.io/financial-advisor-landing/`

### Update Deployment

```bash
# Make changes, then:
npm run deploy
```

---

## AWS S3 + CloudFront

**Best for:** Enterprise deployment, full AWS integration

### Prerequisites

- AWS Account
- AWS CLI installed: `aws configure`

### Step 1: Build

```bash
npm run build
```

### Step 2: Create S3 Bucket

```bash
# Create bucket
aws s3 mb s3://your-landing-page-bucket

# Enable static website hosting
aws s3 website s3://your-landing-page-bucket/ --index-document index.html --error-document index.html
```

### Step 3: Upload Files

```bash
# Upload dist folder
aws s3 sync dist/ s3://your-landing-page-bucket/ --delete

# Make files public
aws s3api put-bucket-policy --bucket your-landing-page-bucket --policy '{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::your-landing-page-bucket/*"
  }]
}'
```

### Step 4: Create CloudFront Distribution

1. Go to AWS Console → CloudFront
2. Create Distribution
3. Origin: Your S3 bucket
4. Viewer Protocol Policy: Redirect HTTP to HTTPS
5. Default Root Object: `index.html`
6. Create Distribution

Wait 10-15 minutes for deployment.

**Your site will be at:** CloudFront URL (e.g., `d1234.cloudfront.net`)

### Step 5: Add Custom Domain (Optional)

1. Route 53 → Create Hosted Zone
2. Add A record pointing to CloudFront
3. Request SSL certificate in ACM
4. Update CloudFront to use custom domain

---

## Traditional Hosting

**Best for:** Existing web hosting (cPanel, Plesk, etc.)

### Step 1: Build

```bash
npm run build
```

### Step 2: Upload via FTP

**Using FileZilla:**

1. Download FileZilla
2. Connect to your host:
   - Host: ftp.yourdomain.com
   - Username: your-ftp-username
   - Password: your-ftp-password
   - Port: 21
3. Navigate to `public_html` or `www` folder
4. Upload ALL files from `dist` folder
5. Ensure `index.html` is in the root

### Step 3: Configure Server

**Create .htaccess** (Apache servers):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Set caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

**For Nginx:**

Create or edit `nginx.conf`:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
    }
}
```

---

## Custom Domain Setup

### Vercel

1. Go to your project settings
2. Domains → Add domain
3. Enter your domain: `www.yourdomain.com`
4. Add DNS records as shown:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

### Netlify

1. Site settings → Domain management
2. Add custom domain
3. Update DNS:
   - Type: A
   - Name: @
   - Value: (Netlify's IP)
   - Type: CNAME
   - Name: www
   - Value: (your-site.netlify.app)

### Cloudflare (Recommended for any host)

1. Transfer DNS to Cloudflare (free)
2. Benefits:
   - Free SSL
   - CDN
   - DDoS protection
   - Better performance

---

## CI/CD Pipeline

### GitHub Actions (Automatic deployment)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './dist'
        production-deploy: true
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## Performance Optimization

### Before Deployment

1. **Optimize images:**
   - Use WebP format
   - Compress images (TinyPNG, Squoosh)
   - Use appropriate sizes

2. **Minify assets:**
   - Already done by Vite build

3. **Enable caching:**
   - Set in server config (see above)

4. **Test performance:**
   ```bash
   npm run build
   npm run preview
   # Open http://localhost:4173
   # Run Lighthouse in Chrome DevTools
   ```

### After Deployment

1. Test with [PageSpeed Insights](https://pagespeed.web.dev/)
2. Check [GTmetrix](https://gtmetrix.com/)
3. Verify mobile responsiveness
4. Test all CTAs and forms

---

## Rollback Strategy

### Vercel/Netlify

- Both keep deployment history
- Click "Rollback" to previous version in dashboard

### Manual Hosting

- Keep previous `dist` folder as backup
- Upload backup if issues arise

---

## Monitoring

### Free Tools

1. **Google Analytics:** Track visitors
2. **Hotjar:** See user behavior
3. **Google Search Console:** Monitor SEO
4. **Uptime Robot:** Monitor downtime

### Setup Google Analytics

Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Troubleshooting Deployments

### Build Fails

```bash
# Check Node version
node --version  # Should be 18+

# Clear cache
rm -rf node_modules dist
npm cache clean --force
npm install
npm run build
```

### 404 Errors on Page Refresh

- Add proper redirects (see platform-specific sections above)
- Ensure single-page app routing is configured

### Slow Load Times

- Check image sizes
- Enable CDN
- Use Cloudflare
- Optimize assets

### Form Doesn't Work

- Check CORS settings
- Verify API endpoints
- Check browser console for errors

---

## Cost Comparison

| Platform | Free Tier | Paid Plans | Best For |
|----------|-----------|------------|----------|
| Vercel | Unlimited deploys | $20/mo per member | Easy deployment |
| Netlify | 100GB bandwidth | $19/mo | Form handling |
| GitHub Pages | Unlimited | Free forever | Open source |
| AWS S3 | 5GB free year 1 | Pay-as-you-go | Enterprise |
| Traditional | Depends on host | $5-20/mo | Existing hosting |

---

## Security Checklist

- [ ] HTTPS enabled (SSL certificate)
- [ ] Environment variables secured
- [ ] API keys not in source code
- [ ] CORS configured properly
- [ ] Form validation on backend
- [ ] Rate limiting on API endpoints
- [ ] Regular dependency updates: `npm audit`

---

## Next Steps After Deployment

1. **Set up analytics** - Track visitor behavior
2. **Submit to Google** - Search Console
3. **Test thoroughly** - All devices and browsers
4. **Monitor uptime** - Use monitoring service
5. **Backup regularly** - Keep code in version control
6. **Update content** - Keep information current

---

## Support & Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Guide](https://pages.github.com)
- [AWS Documentation](https://docs.aws.amazon.com)

---

**Quick Reference:**

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod

# Deploy to GitHub Pages
npm run deploy
```

Good luck with your deployment! 🚀
