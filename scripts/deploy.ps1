# Eventure Deployment Script
# Deploys the React app to Firebase Hosting

param(
    [switch]$SkipBuild,
    [switch]$Production
)

Write-Host "Starting Eventure deployment..." -ForegroundColor Green

# Check if we're in the correct directory
if (-not (Test-Path "package.json")) {
    Write-Host "Error: Not in project root directory. Run from c:\Owais\eventure" -ForegroundColor Red
    exit 1
}

# Check for .env file
if (-not (Test-Path ".env")) {
    Write-Host "Error: .env file not found. Please create it with Firebase configuration." -ForegroundColor Red
    exit 1
}

Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Failed to install dependencies" -ForegroundColor Red
    exit 1
}

# Build the project unless skipped
if (-not $SkipBuild) {
    Write-Host "Building project..." -ForegroundColor Yellow
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Error: Build failed" -ForegroundColor Red
        exit 1
    }
    Write-Host "Build successful!" -ForegroundColor Green
} else {
    Write-Host "Skipping build (using existing dist/ folder)" -ForegroundColor Yellow
}

# Check if dist folder exists
if (-not (Test-Path "dist")) {
    Write-Host "Error: dist/ folder not found. Run build first." -ForegroundColor Red
    exit 1
}

# Deploy to Firebase
Write-Host "Deploying to Firebase..." -ForegroundColor Yellow
firebase deploy --only hosting

if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Deployment failed" -ForegroundColor Red
    exit 1
}

Write-Host "Deployment successful!" -ForegroundColor Green
Write-Host "Your app is now live at: https://eventure-fest.web.app" -ForegroundColor Cyan
Write-Host "Admin console: https://console.firebase.google.com/project/eventure-fest" -ForegroundColor Cyan
