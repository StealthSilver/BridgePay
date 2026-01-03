# BridgePay Deployment Guide

## Overview

This guide covers deploying the BridgePay application:

- **Backend**: Node.js + Express + MongoDB on Render
- **Frontend**: React + Vite on Vercel
- **Frontend URL**: https://bridge-pay.vercel.app

---

## Backend Deployment (Render)

### Prerequisites

- Render account (render.com)
- MongoDB Atlas account or MongoDB connection string
- GitHub repository pushed

### Steps

1. **Connect Render to GitHub**

   - Go to render.com and sign in
   - Click "New +" → "Web Service"
   - Select your GitHub repository
   - Select the `BridgePay/Backend` directory

2. **Configure Environment Variables**
   Set these in Render's environment variables panel:

   ```
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/bridgepay
   JWT_SECRET=your_strong_jwt_secret_here
   PORT=8000
   ```

3. **Build and Deploy Settings**

   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Node Version**: 18+ (auto-detected from package.json)

4. **After Deployment**
   - Note the Render backend URL (e.g., `https://bridgepay-backend.onrender.com`)
   - This URL will be used for frontend API configuration

### Testing Backend

```bash
curl https://your-render-url/api/v1/user/bulk
```

---

## Frontend Deployment (Vercel)

### Prerequisites

- Vercel account (vercel.com)
- GitHub repository pushed
- Backend Render URL ready

### Steps

1. **Connect Vercel to GitHub**

   - Go to vercel.com and sign in
   - Click "Add New..." → "Project"
   - Import your GitHub repository

2. **Configure Build Settings**

   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

3. **Add Environment Variables**
   Set this in Vercel's environment variables:

   ```
   VITE_API_URL=https://your-render-backend-url/api/v1
   ```

   Replace `your-render-backend-url` with actual Render backend URL

4. **Domain Configuration**

   - Default: auto-assigned Vercel URL
   - Custom domain: Configure in Vercel dashboard if needed
   - Application is configured to work at: https://bridge-pay.vercel.app

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Test at https://bridge-pay.vercel.app

### Testing Frontend

- Navigate to https://bridge-pay.vercel.app
- Test signup with new account
- Test signin
- Test balance retrieval
- Test money transfer

---

## CORS Configuration

The backend CORS configuration in `Backend/src/index.ts` includes:

```typescript
origin: [
  "http://localhost:5173", // Local dev
  "http://localhost:5174", // Local dev fallback
  "https://bridge-pay.vercel.app", // Production Vercel
];
```

**No additional CORS changes needed** - already configured for production.

---

## Environment Variables Summary

### Frontend (.env)

```
VITE_API_URL=https://your-render-backend-url/api/v1
```

### Backend (.env)

```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/bridgepay
JWT_SECRET=your_strong_secret_key
PORT=8000
```

---

## Troubleshooting

### CORS Errors

- Check backend CORS origin includes `https://bridge-pay.vercel.app`
- Verify `VITE_API_URL` in Vercel environment matches actual Render backend URL

### API Connection Errors

- Verify `VITE_API_URL` in frontend matches backend Render URL
- Check backend is running and accessible: `curl https://your-render-url/api/v1/user/bulk`

### MongoDB Connection Errors

- Verify MongoDB Atlas IP whitelist includes Render IP
- Ensure `MONGO_URL` is correct format
- Check MongoDB username/password

### Build Failures

- Backend: Run `npm run build` locally to test
- Frontend: Run `npm run build` locally to test
- Check Node version compatibility

---

## Post-Deployment Checklist

- [ ] Backend deployed on Render
- [ ] Backend URL noted
- [ ] Frontend environment variable `VITE_API_URL` set in Vercel
- [ ] Frontend deployed on Vercel
- [ ] Signup test passed
- [ ] Signin test passed
- [ ] Balance retrieval test passed
- [ ] Money transfer test passed
- [ ] No CORS errors in browser console
- [ ] App is live at https://bridge-pay.vercel.app

---

## Rollback Instructions

If issues occur during deployment:

1. **Backend**: Return to previous Render build via "Deployments" tab
2. **Frontend**: Return to previous Vercel build via "Deployments" tab
3. **Code**: Revert commits via `git revert` if needed

---

## Monitoring

- **Backend Logs**: View in Render dashboard under "Logs"
- **Frontend Errors**: Check browser console and Vercel analytics
- **MongoDB**: Monitor Atlas dashboard for connection issues

---

## Additional Resources

- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com)
