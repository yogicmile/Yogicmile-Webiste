# YogicMile Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Deploy to Netlify (Recommended)

#### Method A: GitHub Integration (Best for Updates)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial YogicMile website"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy site"

#### Method B: Drag & Drop Deployment

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `out` folder to Netlify dashboard
   - Your site is live!

### Option 2: Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Option 3: Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   "scripts": {
     "deploy": "gh-pages -d out"
   }
   ```

3. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 🌐 Custom Domain Setup

### For www.yogicmile.com

1. **In Netlify Dashboard**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `www.yogicmile.com`

2. **DNS Configuration**
   Add these records to your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

3. **SSL Certificate**
   - Netlify automatically provides HTTPS
   - Certificate will be active within 24 hours

## ✅ Pre-Deployment Checklist

- [ ] All images optimized and compressed
- [ ] Logo files in place (`public/yogic logo.png`)
- [ ] Privacy policy and terms updated
- [ ] Contact information verified
- [ ] App store links ready (when available)
- [ ] Social media links configured
- [ ] Analytics tracking set up (if needed)
- [ ] SEO meta tags optimized
- [ ] Mobile responsiveness tested
- [ ] Performance optimized (Lighthouse score 90+)

## 🔧 Build Configuration

The project is configured for static export:

- `next.config.js` - Static export enabled
- `netlify.toml` - Netlify build settings
- Images unoptimized for static hosting
- All routes pre-rendered at build time

## 📊 Performance Optimization

- **Images**: Compressed and optimized
- **Fonts**: Google Fonts with display swap
- **CSS**: Tailwind CSS purged and minified
- **JavaScript**: Code splitting and tree shaking
- **Caching**: Static assets cached by CDN

## 🚨 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Ensure all image paths are correct
- Check file names match exactly (case-sensitive)
- Verify images are in `public/` directory

### Routing Issues
- All routes are pre-rendered for static hosting
- 404 pages redirect to index.html
- No server-side routing required

## 📱 Mobile App Integration

When your mobile apps are ready:

1. **Update download links** in `app/page.tsx`
2. **Add app store badges** 
3. **Configure deep linking** (if needed)
4. **Update meta tags** for app store optimization

## 🔄 Continuous Deployment

Once connected to GitHub:

1. **Make changes** to your code
2. **Commit and push**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```
3. **Automatic deployment** - Netlify rebuilds automatically
4. **Live in 2-3 minutes**

Your YogicMile website is now ready for production! 🎉