# AashiPath Scientific Solutions - Backend

A complete MERN Stack backend built with Node.js, Express, and MongoDB for the AashiPath Scientific Solutions website.

## Features

- ✅ RESTful API with Express.js
- ✅ MongoDB database with Mongoose ODM
- ✅ User authentication with JWT
- ✅ CORS enabled for frontend integration
- ✅ Email notifications (Nodemailer)
- ✅ Input validation with express-validator
- ✅ Error handling middleware
- ✅ Admin dashboard ready
- ✅ Booking management system
- ✅ Contact form management
- ✅ Services & Industries management
- ✅ Team member management

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** express-validator
- **Email:** Nodemailer
- **Password Hashing:** bcryptjs

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Steps

1. **Clone the repository**

```bash
git clone <repository-url>
cd AashiPath-Scientific-Solution-Backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```bash
cp .env
```

Edit `.env` and add your configuration:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/ashipath

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
CLIENT_URL=http://localhost:5173

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@ashipath.com

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here
```

4. **Start the server**

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - Register new user (admin)
- `GET /api/auth/me` - Get current user (protected)

### Bookings
- `POST /api/bookings` - Create booking (public)
- `GET /api/bookings` - Get all bookings (admin)
- `GET /api/bookings/:id` - Get single booking (admin)
- `PUT /api/bookings/:id` - Update booking (admin)
- `DELETE /api/bookings/:id` - Delete booking (admin)

### Contacts
- `POST /api/contacts` - Create contact (public)
- `GET /api/contacts` - Get all contacts (admin)
- `GET /api/contacts/:id` - Get single contact (admin)
- `PUT /api/contacts/:id` - Update contact (admin)
- `DELETE /api/contacts/:id` - Delete contact (admin)

### Services
- `GET /api/services` - Get all services (public)
- `GET /api/services/:id` - Get single service (public)
- `GET /api/services/service/:serviceId` - Get service by service ID (public)
- `POST /api/services` - Create service (admin)
- `PUT /api/services/:id` - Update service (admin)
- `DELETE /api/services/:id` - Delete service (admin)

### Industries
- `GET /api/industries` - Get all industries (public)
- `GET /api/industries/:id` - Get single industry (public)
- `GET /api/industries/industry/:industryId` - Get industry by industry ID (public)
- `POST /api/industries` - Create industry (admin)
- `PUT /api/industries/:id` - Update industry (admin)
- `DELETE /api/industries/:id` - Delete industry (admin)

### Team
- `GET /api/team` - Get all team members (public)
- `GET /api/team/:id` - Get single team member (public)
- `POST /api/team` - Create team member (admin)
- `PUT /api/team/:id` - Update team member (admin)
- `DELETE /api/team/:id` - Delete team member (admin)

## Database Models

### Booking
- firstName, lastName, email, phone
- company, serviceType, industryType
- message, status, budget, timeline

### Contact
- firstName, lastName, email, phone
- subject, message, category, status, priority

### Service
- id, title, category, description
- longDescription, image, features, benefits
- specifications, price, isActive, sortOrder

### Industry
- id, title, description, longDescription
- image, challenges, solutions, relatedServices
- isActive, sortOrder

### Team
- firstName, lastName, title, department
- bio, email, phone, image
- socialLinks, expertise, yearsOfExperience

### User
- name, email, password, role (admin/user)
- isActive, lastLogin

## Authentication

The backend uses JWT for authentication. To access protected routes:

1. Login at `/api/auth/login` to get a token
2. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| MONGODB_URI | MongoDB connection string | mongodb+srv://user:pass@cluster.mongodb.net/db |
| PORT | Server port | 5000 |
| NODE_ENV | Environment | development/production |
| CLIENT_URL | Frontend URL for CORS | http://localhost:5173 |
| SMTP_HOST | Email service host | smtp.gmail.com |
| SMTP_PORT | Email service port | 587 |
| SMTP_USER | Email username | your-email@gmail.com |
| SMTP_PASS | Email password/app-password | password |
| ADMIN_EMAIL | Admin email for notifications | admin@ashipath.com |
| JWT_SECRET | JWT secret key | random_secret_key |

## Error Handling

The API returns standardized error responses:

```json
{
  "success": false,
  "error": {
    "status": 400,
    "message": "Error message",
    "stack": "Error stack trace (development only)"
  }
}
```

## CORS Configuration

CORS is enabled and configured to allow requests from the frontend URL specified in `CLIENT_URL` environment variable.

## Email Configuration

To enable email notifications:

1. Set up SMTP credentials (Gmail recommended)
2. For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833)
3. Configure SMTP variables in `.env`

## Development

- Use `npm run dev` to start with auto-reload via nodemon
- Logs are printed to console
- Error stack traces shown in development mode

## Production

- Set `NODE_ENV=production`
- Use `npm start` to run the server
- Ensure all environment variables are configured
- Use a process manager like PM2

## License

ISC
