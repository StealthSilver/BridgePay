# BridgePay - Money Transfer Application

A modern, full-stack web application for secure peer-to-peer money transfers with a beautiful UI and robust backend.

## 🌟 Features

- **User Authentication**: Secure signup and signin with JWT tokens
- **Account Management**: View account balance and user profiles
- **Money Transfer**: Transfer funds between users with validation
- **Real-time Updates**: Instant balance updates after transfers
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: User-friendly error messages and validation
- **Security**: Password hashing with bcrypt, JWT authentication

## 📁 Project Structure

```
BridgePay/
├── Backend/                 # Node.js + Express + MongoDB
│   ├── src/
│   │   ├── index.ts        # Server entry point
│   │   ├── db.ts           # Database schema
│   │   ├── config.ts       # Configuration
│   │   ├── middleware.ts   # JWT auth middleware
│   │   └── routes/
│   │       ├── index.ts    # Route aggregator
│   │       ├── user.ts     # User routes
│   │       └── account.ts  # Account routes
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
│
├── Frontend/                # React + TypeScript + Vite + Tailwind
│   ├── src/
│   │   ├── main.tsx        # Entry point
│   │   ├── App.tsx         # Main app with routing
│   │   ├── api.ts          # Axios configuration
│   │   ├── components/
│   │   │   └── Navbar.tsx  # Navigation bar
│   │   ├── pages/
│   │   │   ├── Signin.tsx  # Sign in page
│   │   │   ├── Signup.tsx  # Sign up page
│   │   │   └── Dashboard.tsx # Main dashboard
│   │   ├── assets/
│   │   └── index.css       # Global styles
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.ts
│
├── start-dev.sh            # Quick start script
├── IMPROVEMENTS.md         # Detailed improvements & fixes
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Option 1: Using the startup script

```bash
chmod +x start-dev.sh
./start-dev.sh
```

### Option 2: Manual startup

**Terminal 1 - Backend:**

```bash
cd Backend
npm install
npm run dev
```

**Terminal 2 - Frontend:**

```bash
cd Frontend
npm install
npm run dev
```

## 🌐 Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000/api/v1

## 📝 Environment Setup

### Backend (.env)

Create a `.env` file in the `Backend` directory:

```env
MONGO_URL=mongodb://localhost:27017/bridgepay
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=development
```

### MongoDB Setup

**Local MongoDB:**

```bash
# Make sure MongoDB is running
mongod
```

**MongoDB Atlas (Cloud):**

1. Create a cluster at https://www.mongodb.com/cloud/atlas
2. Get your connection string
3. Update `MONGO_URL` in `.env`

## 🔐 Authentication Flow

1. **Signup**: User creates an account with email, password, and name
2. **Account Creation**: Backend creates user record and initial account with random balance
3. **Signin**: User logs in with email and password
4. **Token Generation**: Backend issues JWT token valid for the session
5. **Protected Routes**: Frontend stores token in localStorage
6. **API Requests**: Token is automatically included in all API requests
7. **Token Validation**: Backend verifies token on protected endpoints

## 💾 Database Schema

### User Collection

```typescript
{
  _id: ObjectId,
  username: string (email),
  password: string (hashed),
  firstName: string,
  lastName: string,
  createdAt: Date
}
```

### Account Collection

```typescript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  balance: number,
  createdAt: Date
}
```

## 📡 API Endpoints

### User Routes

**POST /api/v1/user/signup**

- Create new user account
- Body: `{ username, password, firstName, lastName }`
- Response: `{ message, token }`

**POST /api/v1/user/signin**

- Authenticate user and get token
- Body: `{ username, password }`
- Response: `{ token }`

**GET /api/v1/user/bulk**

- Get all users (optional filter query param)
- Response: `{ user: [...] }`

**PUT /api/v1/user**

- Update user profile (protected)
- Body: `{ firstName?, lastName?, password? }`
- Response: `{ message }`

### Account Routes

**GET /api/v1/account/balance** (Protected)

- Get current account balance
- Response: `{ balance }`

**POST /api/v1/account/transfer** (Protected)

- Transfer money to another user
- Body: `{ to: userId, amount: number }`
- Response: `{ message }`

## 🎨 Frontend Pages

### Signin Page (`/signin`)

- Email input with validation
- Password input
- Error message display
- Link to signup
- Keyboard support (Enter to submit)

### Signup Page (`/signup`)

- Email input with validation
- Password input (min 6 chars)
- First name input
- Last name input
- Error message display
- Link to signin
- Client-side validation

### Dashboard Page (`/dashboard`)

- View account balance with loading state
- Transfer money form
- User directory with quick send buttons
- Real-time balance updates
- Success messages with auto-dismiss
- Logout button

## 🛡️ Security Features

1. **Password Security**

   - Passwords hashed with bcrypt (rounds: 10)
   - Minimum 6 character requirement
   - Field length supports full bcrypt hash (60 chars)

2. **Authentication**

   - JWT tokens for stateless authentication
   - Token includes user ID and issued time
   - Protected routes require valid token

3. **Input Validation**

   - Zod schema validation on backend
   - Client-side validation on frontend
   - Email format validation
   - Amount validation (must be > 0)

4. **API Security**
   - CORS configured for frontend origin
   - Credentials enabled for secure requests
   - Error messages don't leak sensitive info

## 🧪 Testing Endpoints

### Create a test user

```bash
curl -X POST http://localhost:8000/api/v1/user/signup \
  -H "Content-Type: application/json" \
  -d '{
    "username": "test@example.com",
    "password": "password123",
    "firstName": "Test",
    "lastName": "User"
  }'
```

### Get users

```bash
curl http://localhost:8000/api/v1/user/bulk
```

### Get balance (requires token)

```bash
TOKEN="your-jwt-token-here"
curl -H "Authorization: Bearer $TOKEN" \
  http://localhost:8000/api/v1/account/balance
```

## 🐛 Troubleshooting

### MongoDB Connection Failed

- Ensure MongoDB is running: `mongod`
- Check `MONGO_URL` in `.env`
- Verify network access if using Atlas

### Port Already in Use

```bash
# Backend (8000)
lsof -i :8000
kill -9 <PID>

# Frontend (5173)
lsof -i :5173
kill -9 <PID>
```

### Token Issues

- Clear browser localStorage: DevTools → Application → LocalStorage → Clear
- Make sure token is being sent in Authorization header
- Check token expiry and regenerate if needed

### Build Errors

```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📊 Technologies Used

### Backend

- **Node.js**: Runtime
- **Express**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM
- **JWT**: Authentication
- **Bcrypt**: Password hashing
- **Zod**: Input validation
- **TypeScript**: Type safety

### Frontend

- **React 19**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool
- **React Router**: Navigation
- **Axios**: HTTP client
- **Tailwind CSS**: Styling
- **ESLint**: Code quality

## 📈 Performance Optimizations

- Lazy loading for user lists
- Debounced search on user bulk endpoint
- Efficient balance updates
- Optimized component re-renders
- CSS animations for smooth UX

## 🔄 Future Enhancements

- [ ] Transaction history
- [ ] Email verification
- [ ] Password reset
- [ ] Refresh tokens
- [ ] Two-factor authentication
- [ ] User profiles with avatars
- [ ] Transaction receipts
- [ ] Export statements
- [ ] Push notifications
- [ ] Rate limiting
- [ ] Database migrations
- [ ] Unit tests
- [ ] E2E tests

## 📄 License

MIT License - Feel free to use this project for learning and development.

## 👨‍💻 Author

Created as a full-stack web development project demonstrating:

- Modern React patterns
- TypeScript best practices
- Express.js API design
- MongoDB data modeling
- JWT authentication
- Responsive UI design
- Error handling
- Input validation

## 📞 Support

For issues, questions, or improvements, please refer to the `IMPROVEMENTS.md` file for detailed documentation of all changes made.

---

**Happy Transferring! 💰**
