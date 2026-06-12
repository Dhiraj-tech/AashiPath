# MERN Stack Backend Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
```bash
cp .env.example .env
```

Edit `.env` with your MongoDB and email credentials:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ashipath
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Email (Gmail recommended)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@ashipath.com

JWT_SECRET=your_secret_key_here
```

### 3. Seed Database
```bash
node scripts/seedDatabase.js
```

This will create:
- 6 Services
- 6 Industries  
- 4 Team Members
- 1 Admin User (admin@ashipath.com / admin123)

### 4. Start Development Server
```bash
npm run dev
```

Server runs on `http://localhost:5000`

## MongoDB Setup

### Option A: MongoDB Atlas (Cloud - Recommended)
1. Go to [mongodb.com/cloud](https://www.mongodb.com/cloud)
2. Create free account
3. Create a cluster
4. Get connection string
5. Add to `.env`

### Option B: Local MongoDB
```bash
# Windows (if installed)
net start MongoDB

# macOS with Homebrew
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

Connection string:
```
MONGODB_URI=mongodb://localhost:27017/ashipath
```

## Email Setup (Gmail)

1. Enable 2-Factor Authentication on Gmail
2. Create [App Password](https://myaccount.google.com/apppasswords)
3. Use the app password in `.env` (not your regular Gmail password)

## Frontend Integration

Update frontend `.env`:
```
VITE_API_BASE=http://localhost:5000
```

Or update [src/api/client.js](../AashiPath-Scientific-Solution-Frontend/src/api/client.js):
```javascript
const API_BASE = "http://localhost:5000";
```

## API Testing

Use Postman or curl:

```bash
# Health Check
curl http://localhost:5000/health

# Create Booking
curl -X POST http://localhost:5000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "company": "ABC Labs",
    "serviceType": "Incubation Solutions",
    "industryType": "Pharmaceutical Manufacturing",
    "message": "Interested in your incubation solutions"
  }'

# Login as Admin
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@ashipath.com",
    "password": "admin123"
  }'

# Get All Bookings (with token)
curl http://localhost:5000/api/bookings \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Project Structure

```
AashiPath-Scientific-Solution-Backend/
├── config/              # Database & configuration
├── controllers/         # Business logic
├── middleware/          # CORS, validation, auth
├── models/             # MongoDB schemas
├── routes/             # API endpoints
├── scripts/            # Database seeding
├── utils/              # Helper functions
├── server.js           # Main server file
├── package.json        # Dependencies
├── .env.example        # Environment template
└── README.md           # Full documentation
```

## Database Models

### Booking
Stores customer booking inquiries with status tracking

### Contact
Manages contact form submissions from website

### Service
Catalog of lab equipment and services

### Industry
Target industries and use cases

### Team
Company team members and staff

### User
Admin users for authentication

## Common Issues

### Port Already in Use
```bash
# Find process on port 5000
netstat -ano | findstr :5000

# Kill process (Windows)
taskkill /PID <PID> /F
```

### MongoDB Connection Error
- Verify `MONGODB_URI` in `.env`
- Check MongoDB Atlas IP whitelist
- Ensure network connectivity

### Email Not Sending
- Verify SMTP credentials
- For Gmail, use App Password not regular password
- Check `ADMIN_EMAIL` is valid
- Review error logs in console

## Development Tips

- Use `npm run dev` for auto-reload with nodemon
- Check console logs for debugging
- Error responses include stack traces in development mode
- All requests are logged to console

## Deployment

For production deployment:

1. Set `NODE_ENV=production`
2. Use strong `JWT_SECRET`
3. Configure MongoDB Atlas IP whitelist
4. Use environment-specific email credentials
5. Deploy with PM2 or similar process manager:

```bash
npm install -g pm2
pm2 start server.js --name "ashipath-backend"
pm2 save
```

## Next Steps

1. ✅ Install dependencies
2. ✅ Configure `.env` 
3. ✅ Connect MongoDB
4. ✅ Run seed script
5. ✅ Start development server
6. ✅ Test API endpoints
7. ✅ Connect frontend
8. ✅ Deploy to production

Need help? Check [README.md](./README.md) for detailed API documentation.
