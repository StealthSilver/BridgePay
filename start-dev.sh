#!/bin/bash

# BridgePay Development Server Startup Script
# This script starts both the backend and frontend servers

set -e

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$PROJECT_DIR/Backend"
FRONTEND_DIR="$PROJECT_DIR/Frontend"

echo "🚀 Starting BridgePay Development Servers..."
echo ""

# Kill existing processes
echo "🧹 Cleaning up old processes..."
pkill -f "node dist" || true
pkill -f "vite" || true
sleep 1

# Start backend
echo "📡 Starting Backend Server..."
cd "$BACKEND_DIR"
npm run dev > /tmp/bridgepay_backend.log 2>&1 &
BACKEND_PID=$!
echo "✓ Backend PID: $BACKEND_PID"

# Wait for backend to be ready
sleep 3

# Start frontend
echo "🎨 Starting Frontend Server..."
cd "$FRONTEND_DIR"
npm run dev > /tmp/bridgepay_frontend.log 2>&1 &
FRONTEND_PID=$!
echo "✓ Frontend PID: $FRONTEND_PID"

# Wait for both to start
sleep 3

echo ""
echo "✅ Servers started!"
echo ""
echo "📡 Backend: http://localhost:8000"
echo "🎨 Frontend: http://localhost:5173"
echo ""
echo "📋 Logs:"
echo "  Backend:  tail -f /tmp/bridgepay_backend.log"
echo "  Frontend: tail -f /tmp/bridgepay_frontend.log"
echo ""
echo "⏹️  To stop servers, run: pkill -f 'node dist' && pkill -f 'vite'"
echo ""

wait
