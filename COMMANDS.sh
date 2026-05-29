#!/bin/bash

# Development & Build Commands Cheatsheet
# Copy and paste these commands when needed

# ============================================
# SETUP & INSTALLATION
# ============================================

# Initial setup
npm install

# Install specific package
npm install package-name

# Update dependencies
npm update


# ============================================
# DEVELOPMENT
# ============================================

# Start dev server (http://localhost:3000)
npm run dev

# Stop dev server
# Press Ctrl+C in terminal


# ============================================
# BUILDING
# ============================================

# Build for production
npm run build

# Preview production build
npm run preview


# ============================================
# USEFUL COMMANDS
# ============================================

# Check Node version
node --version

# Check npm version
npm --version

# List installed packages
npm list

# Clear npm cache
npm cache clean --force

# List outdated packages
npm outdated

# Audit for security issues
npm audit

# Fix security issues
npm audit fix


# ============================================
# DEBUGGING
# ============================================

# Start dev with verbose logging
npm run dev -- --debug

# Clear all caches and reinstall
rm -rf node_modules package-lock.json
npm install


# ============================================
# COMMON ISSUES & FIXES
# ============================================

# If "command not found: npm"
# Install Node.js from nodejs.org

# If port 3000 is in use
# Edit vite.config.js and change port number

# If styles not updating
# Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

# If images not loading
# Check public/assets/ folder structure
# Verify paths in src/config/imageConfig.js


# ============================================
# USEFUL FILE PATHS
# ============================================

# Main app file
src/App.jsx

# Global styles
src/styles/global.css

# Components directory
src/components/

# Images
public/assets/images/

# Logos
public/assets/logos/

# Build output
dist/

# Node modules
node_modules/


# ============================================
# DEPLOY COMMANDS
# ============================================

# Build for deployment
npm run build

# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy to Netlify (if connected)
# Just push to GitHub, auto-deploys


# ============================================
# GIT COMMANDS
# ============================================

# Initialize git repo
git init

# Add files
git add .

# Commit changes
git commit -m "Your message"

# Check status
git status

# View logs
git log

# View changes
git diff


# ============================================
# FILE ORGANIZATION
# ============================================

# Create a new component
touch src/components/ComponentName.jsx
touch src/components/ComponentName.css

# Create assets folder
mkdir -p public/assets/images/{vehicles,environments,industries}
mkdir -p public/assets/logos


# ============================================
# OPTIMIZATION
# ============================================

# Minify and optimize images
# Use: https://tinypng.com or https://squoosh.app

# Check bundle size
# After build: Use https://bundle.js.org


# ============================================
# TIPS
# ============================================

# Always commit before major changes
git add . && git commit -m "Before major update"

# Test locally before deploying
npm run build && npm run preview

# Backup important files
cp -r src backup-src/

# Clear browser cache if styles not updating
# Chrome DevTools > Settings > Disable cache (while DevTools open)
