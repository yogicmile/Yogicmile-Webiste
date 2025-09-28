# YogicMile Website - Netlify Deployment Guide

## 🚀 How to Deploy to Netlify

### Method 1: Direct Deployment (Recommended)

1. **Download Your Project Files**
   - Download all project files from this editor
   - Create a ZIP file with all the code

2. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign up for a free account (if you don't have one)

3. **Deploy via Drag & Drop**
   - Go to your Netlify dashboard
   - Look for "Want to deploy a new site without connecting to Git?"
   - Drag and drop your project folder or ZIP file
   - Netlify will automatically build and deploy your site

### Method 2: GitHub Integration (Best for Updates)

1. **Create GitHub Repository**
   - Go to [github.com](https://github.com)
   - Create a new repository called "yogicmile-website"
   - Upload all your project files

2. **Connect to Netlify**
   - In Netlify dashboard, click "New site from Git"
   - Choose "GitHub" as your Git provider
   - Select your "yogicmile-website" repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Click "Deploy site"

### Method 3: Netlify CLI (Advanced)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build your project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=out
```

## 🌐 Custom Domain Setup (www.yogicmile.com)

### After Your Site is Deployed:

1. **Get Your Netlify URL**
   - Your site will get a URL like: `https://amazing-site-123456.netlify.app`

2. **Add Custom Domain**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `www.yogicmile.com`

3. **Configure DNS**
   - Go to your domain provider (GoDaddy, Namecheap, etc.)
   - Add these DNS records:
   ```
   Type: CNAME
   Name: www
   Value: amazing-site-123456.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

4. **Enable HTTPS**
   - Netlify will automatically provide SSL certificate
   - Your site will be available at `https://www.yogicmile.com`

## ✅ Project is Ready for Deployment

Your YogicMile website includes:
- ✅ Optimized Next.js build configuration
- ✅ Static export for Netlify hosting
- ✅ Proper routing and navigation
- ✅ Mobile-responsive design
- ✅ SEO optimization
- ✅ Fast loading performance

## 🔧 Build Configuration

The project is configured with:
- `next.config.js` - Static export enabled
- `netlify.toml` - Netlify build settings
- `package.json` - Build scripts ready

## 📞 Need Help?

If you encounter any issues:
1. Check the Netlify build logs
2. Ensure all dependencies are installed
3. Verify the build command works locally: `npm run build`