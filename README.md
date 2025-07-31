# 🌱 KrishiConnect - AI-Powered Agricultural Marketplace

**KrishiConnect** is a comprehensive agricultural marketplace platform that connects farmers directly with buyers, powered by advanced AI insights and real-time communication systems. Built with modern web technologies, it provides a seamless experience for both farmers and buyers to trade agricultural products efficiently.

## 🚀 Key Features

### 🤖 **AI-Powered Insights**
- **Google Gemini AI Integration** for intelligent market analysis
- **Location-based Crop Recommendations** for farmers
- **Market Sentiment Analysis** using Hugging Face API
- **Price Prediction Models** with confidence scoring
- **Demand Pattern Analysis** for strategic planning
- **Personalized Recommendations** based on user behavior
- **Weather Integration** for crop planning

### 💬 **Real-Time Communication System**
- **Buy Request System** - Buyers can send purchase requests to farmers
- **Contact Request System** - Direct communication between buyers and farmers
- **Farmer Approval Workflow** - Farmers can approve/reject buy requests
- **Real-Time Notifications** using Socket.IO
- **Order Creation** - Automatic order generation on approval
- **Payment Integration** - Seamless payment processing

### 📱 **Wishlist Management**
- **Add Products** to personalized wishlist
- **Priority Levels** (High, Medium, Low) for wishlist items
- **Edit Notes** and descriptions for each item
- **Contact Farmers** directly from wishlist
- **Contact Status Tracking** - Know when you've contacted farmers
- **Remove Items** with one-click functionality

### 🏪 **Advanced Marketplace**
- **Product Browsing** with advanced filtering
- **Search Functionality** across product names and descriptions
- **Category Filtering** (Grains, Vegetables, Fruits, Pulses, Spices, Dairy)
- **Location-based Filtering** by state and city
- **Real Product Data** fetched from backend
- **Product Images** with fallback handling
- **Availability Status** indicators
- **Farmer Information** display

### 👥 **Dual Dashboard System**
#### **Farmer Dashboard**
- **Farm Analytics** with crop performance metrics
- **Weather Integration** for local weather data
- **Crop Recommendations** based on location and season
- **Product Management** - Add, edit, and track products
- **Order Management** - View and process orders
- **Revenue Analytics** with profit tracking
- **Notification Center** for buy/contact requests

#### **Buyer Dashboard**
- **Purchase Analytics** with spending patterns
- **Wishlist Management** with priority tracking
- **Order History** with detailed tracking
- **Market Trends** analysis
- **Price Alerts** for favorite products
- **Notification Center** for approvals and updates
- **Search History** tracking

### 🔔 **Comprehensive Notification System**
- **Real-Time Updates** using Socket.IO
- **Buy Request Notifications** for farmers
- **Contact Request Notifications** for farmers
- **Approval/Rejection Notifications** for buyers
- **Payment Notifications** for order completion
- **Unread Count Badges** for new notifications
- **Mark as Read** functionality
- **Action Required** indicators

### 🔐 **Security & Authentication**
- **JWT Token Authentication** for secure access
- **Role-based Access** (Farmer/Buyer)
- **Password Hashing** with bcryptjs
- **Rate Limiting** for API protection
- **Input Validation** and sanitization
- **Secure File Uploads** for product images

### 💳 **Payment Integration**
- **Stripe Payment Gateway** integration
- **Deposit/Withdrawal System** for wallet management
- **Order Payment Processing** with secure transactions
- **Payment History** tracking
- **Transaction Status** monitoring

## 🛠️ Technology Stack

### **Backend**
- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM
- **Socket.IO** for real-time communication
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Multer** for file uploads
- **Axios** for HTTP requests
- **Node-cron** for scheduled tasks
- **Stripe** for payment processing

### **Frontend**
- **React.js** with functional components
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Recharts** for data visualization
- **React Dropzone** for file uploads
- **React Hot Toast** for notifications
- **Socket.IO Client** for real-time features

### **AI/ML Integration**
- **Google Gemini AI** for intelligent insights
- **Hugging Face API** for sentiment analysis
- **OpenWeatherMap API** for weather data
- **Custom Statistical Models** for price prediction

## 📊 Database Schema

### **User Model**
```javascript
{
  fullName: String,
  email: String,
  password: String (hashed),
  userType: 'farmer' | 'buyer',
  language: 'english' | 'hindi',
  state: String,
  city: String,
  address: String,
  profileImage: String,
  amount: Number (default: 0),
  coins: Number (default: 0),
  isVerified: Boolean,
  token: String
}
```

### **Product Model**
```javascript
{
  name: String,
  description: String,
  category: String,
  price: Number,
  quantity: Number,
  unit: String,
  images: [String],
  farmer: ObjectId (ref: User),
  location: {
    state: String,
    city: String
  },
  harvestDate: Date,
  isAvailable: Boolean,
  isOrganic: Boolean,
  tags: [String]
}
```

### **Notification Model**
```javascript
{
  recipient: ObjectId (ref: User),
  sender: ObjectId (ref: User),
  type: 'buy_request' | 'contact_request' | 'approval' | 'rejection' | 'payment_received',
  title: String,
  message: String,
  productId: ObjectId (ref: Product),
  orderId: ObjectId (ref: Order),
  status: 'unread' | 'read' | 'actioned',
  actionRequired: Boolean,
  actionType: 'approve' | 'reject' | 'contact' | 'payment',
  metadata: Object,
  isRead: Boolean
}
```

### **Wishlist Model**
```javascript
{
  buyer: ObjectId (ref: User),
  product: ObjectId (ref: Product),
  notes: String,
  priority: 'low' | 'medium' | 'high',
  contactRequested: Boolean,
  contactRequestDate: Date
}
```

### **Order Model**
```javascript
{
  buyer: ObjectId (ref: User),
  farmer: ObjectId (ref: User),
  product: ObjectId (ref: Product),
  quantity: Number,
  totalAmount: Number,
  status: 'pending' | 'approved' | 'rejected' | 'paid' | 'shipped' | 'delivered',
  paymentStatus: 'pending' | 'completed' | 'failed',
  shippingAddress: Object,
  orderDate: Date
}
```

## 🚀 Installation & Setup

### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### **Backend Setup**
```bash
cd server
npm install
```

Create `.env` file:
```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/krishiconnect
JWT_SECRET_KEY=your-secret-key
STRIPE_SECRET_KEY=your-stripe-secret-key
HUGGING_FACE_API_KEY=your-hugging-face-key
GOOGLE_GEMINI_API_KEY=your-gemini-api-key
OPENWEATHER_API_KEY=your-openweather-key
```

Start backend:
```bash
npm run dev
```

### **Frontend Setup**
```bash
cd frontend
npm install
```

Create `.env` file:
```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
REACT_APP_GOOGLE_GEMINI_API_KEY=your-gemini-api-key
REACT_APP_OPENWEATHER_API_KEY=your-openweather-key
```

Start frontend:
```bash
npm start
```

## 📡 API Endpoints

### **Authentication**
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/userData` - Get user data

### **Products**
- `GET /api/products` - Get all products
- `POST /api/products` - Add new product
- `GET /api/products/:id` - Get single product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### **Orders**
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Place new order
- `PUT /api/orders/:id` - Update order status

### **Notifications**
- `GET /api/notifications` - Get user notifications
- `PATCH /api/notifications/:id/read` - Mark notification as read
- `POST /api/buy-request` - Send buy request
- `POST /api/contact-request` - Send contact request
- `POST /api/approve-request` - Approve/reject request

### **Wishlist**
- `GET /api/wishlist` - Get user wishlist
- `POST /api/wishlist/add` - Add to wishlist
- `PUT /api/wishlist/:id` - Update wishlist item
- `DELETE /api/wishlist/:id` - Remove from wishlist
- `POST /api/wishlist/:id/contact` - Contact from wishlist

### **AI Insights**
- `GET /api/ai-insights` - Get AI insights
- `POST /api/ai-insights` - Generate location-based recommendations
- `POST /api/sentiment-analysis` - Analyze market sentiment

### **Payments**
- `POST /api/deposit` - Process deposit
- `POST /api/withdraw` - Process withdrawal

## 🎯 User Workflows

### **For Farmers**
1. **Register/Login** as a farmer
2. **Add Products** to marketplace
3. **Receive Notifications** for buy/contact requests
4. **Review Requests** with buyer details
5. **Approve/Reject** buy requests
6. **Track Orders** and payments
7. **View Analytics** and insights

### **For Buyers**
1. **Register/Login** as a buyer
2. **Browse Marketplace** with filters
3. **Send Buy Requests** with quantity and messages
4. **Contact Farmers** directly
5. **Manage Wishlist** with priorities
6. **Receive Notifications** for approvals
7. **Proceed to Payment** when approved

## 🔧 Configuration

### **Environment Variables**
- **Database**: MongoDB connection string
- **JWT**: Secret key for token generation
- **Stripe**: Payment gateway keys
- **AI APIs**: Google Gemini, Hugging Face, OpenWeatherMap
- **Security**: Rate limiting, CORS settings

### **Features Configuration**
- **Real-time Notifications**: Socket.IO enabled
- **File Uploads**: Multer configuration
- **Payment Processing**: Stripe integration
- **AI Integration**: API key management

## 🚀 Deployment

### **Backend Deployment**
```bash
# Build for production
npm run build

# Start production server
npm start
```

### **Frontend Deployment**
```bash
# Build for production
npm run build

# Deploy to hosting service
# (Netlify, Vercel, AWS, etc.)
```

## 🔒 Security Features

- **JWT Authentication** with token expiration
- **Password Hashing** using bcryptjs
- **Rate Limiting** to prevent abuse
- **Input Validation** and sanitization
- **CORS Configuration** for cross-origin requests
- **Helmet.js** for security headers
- **File Upload Validation** for images

## 📈 Performance Features

- **Database Indexing** for fast queries
- **Image Optimization** for product photos
- **Lazy Loading** for better UX
- **Caching** for frequently accessed data
- **Compression** for API responses
- **Real-time Updates** with Socket.IO

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

---

**KrishiConnect** - Empowering farmers and buyers with AI-driven insights and seamless communication! 🌱💻
