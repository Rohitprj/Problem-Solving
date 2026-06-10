===============================================================================
FURNITURE E-COMMERCE BACKEND ARCHITECTURE
Tech Stack: Express.js + MongoDB + Redis + Socket.io
===============================================================================

                                    CLIENTS
                                       |
      ----------------------------------------------------------------
      |                         |                         |
      ▼                         ▼                         ▼

  Customer Web App       Mobile App (Future)       Admin Dashboard

                                       |
                                       ▼

===============================================================================
                             API GATEWAY (EXPRESS)
===============================================================================

Middleware Layer

- Authentication Middleware
- Authorization Middleware
- Validation Middleware
- Rate Limiter
- Error Handler
- Request Logger
- Response Formatter

                                       |
                                       ▼

===============================================================================
                              BUSINESS MODULES
===============================================================================

┌──────────────────────────────────────────────────────────────┐
│ AUTH MODULE                                                  │
└──────────────────────────────────────────────────────────────┘

Features

- Register
- Login
- Logout
- Forgot Password
- Reset Password
- Email Verification
- OTP Verification
- Refresh Token
- Change Password
- Social Login

Collections

- users
- otp
- refreshTokens

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ USER MODULE                                                  │
└──────────────────────────────────────────────────────────────┘

Features

- Profile Management
- Saved Addresses
- Order History
- Notifications
- Wishlist

Collections

- users
- addresses

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ PRODUCT MODULE                                               │
└──────────────────────────────────────────────────────────────┘

Features

- Add Product
- Update Product
- Delete Product
- Product Variants
- Product Images
- Product Videos
- Product Search
- Featured Products
- Trending Products

Collections

- products
- categories
- subcategories
- brands
- variants

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ CATEGORY MODULE                                              │
└──────────────────────────────────────────────────────────────┘

Features

- Main Categories
- Sub Categories
- Product Filters

Collections

- categories
- subcategories

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ CART MODULE                                                  │
└──────────────────────────────────────────────────────────────┘

Features

- Add To Cart
- Remove From Cart
- Update Quantity
- Apply Coupon
- Cart Summary

Collections

- carts

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ WISHLIST MODULE                                              │
└──────────────────────────────────────────────────────────────┘

Features

- Add Wishlist
- Remove Wishlist
- Share Wishlist
- Move To Cart

Collections

- wishlists

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ ORDER MODULE                                                 │
└──────────────────────────────────────────────────────────────┘

Features

- Create Order
- Cancel Order
- Return Order
- Refund Order
- Track Order
- Download Invoice

Collections

- orders
- orderItems

Order Status

PENDING
CONFIRMED
PROCESSING
PACKED
SHIPPED
OUT_FOR_DELIVERY
DELIVERED
CANCELLED
RETURN_REQUESTED
RETURN_APPROVED
REFUNDED

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ PAYMENT MODULE                                               │
└──────────────────────────────────────────────────────────────┘

Features

- Online Payment
- COD
- Payment Verification
- Refund Processing

Collections

- payments

Payment Gateways

- Razorpay
- Stripe
- PayPal

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ REVIEW MODULE                                                │
└──────────────────────────────────────────────────────────────┘

Features

- Product Ratings
- Product Reviews
- Review Images
- Review Videos
- Admin Replies

Collections

- reviews

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ COUPON MODULE                                                │
└──────────────────────────────────────────────────────────────┘

Features

- Flat Discount
- Percentage Discount
- Coupon Expiry
- Usage Limits

Collections

- coupons

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ BLOG MODULE                                                  │
└──────────────────────────────────────────────────────────────┘

Features

- Furniture Guides
- Interior Design Articles
- SEO Content

Collections

- blogs

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ NOTIFICATION MODULE                                          │
└──────────────────────────────────────────────────────────────┘

Features

- Order Updates
- Promotional Messages
- Push Notifications
- Email Notifications

Collections

- notifications

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ SUPPORT MODULE                                               │
└──────────────────────────────────────────────────────────────┘

Features

- Raise Ticket
- Ticket Replies
- Live Chat
- Customer Support

Collections

- tickets

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ INVENTORY MODULE                                             │
└──────────────────────────────────────────────────────────────┘

Features

- Stock Tracking
- Low Stock Alerts
- Warehouse Management

Collections

- inventories

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ ANALYTICS MODULE                                             │
└──────────────────────────────────────────────────────────────┘

Features

- Revenue Analytics
- Sales Reports
- Top Products
- Top Categories
- Customer Reports

Uses MongoDB Aggregation Pipeline

------------------------------------------------------------

┌──────────────────────────────────────────────────────────────┐
│ BANNER MANAGEMENT                                            │
└──────────────────────────────────────────────────────────────┘

Features

- Homepage Hero Banner
- Promotional Banner
- Festival Banner

Collections

- banners

===============================================================================
                          FURNITURE SPECIFIC MODULES
===============================================================================

Product Dimensions

{
  width,
  height,
  depth,
  weight
}

------------------------------------------------------------

Product Material

{
  woodType,
  fabricType,
  finishType
}

------------------------------------------------------------

Assembly Information

{
  assemblyRequired,
  assemblyInstructions
}

------------------------------------------------------------

Delivery Availability

{
  pincode,
  deliveryDays
}

------------------------------------------------------------

3D Product Models

{
  glbModel,
  usdzModel,
  modelThumbnail
}

Collections

- roomAssets

===============================================================================
                                REDIS LAYER
===============================================================================

Uses

- JWT Blacklisting
- OTP Storage
- Caching
- Product Cache
- Homepage Cache
- Rate Limiting
- Session Storage

===============================================================================
                              SOCKET.IO LAYER
===============================================================================

Features

- Live Order Tracking
- Real Time Notifications
- Admin Alerts
- Customer Support Chat

===============================================================================
                            FILE STORAGE LAYER
===============================================================================

Cloudinary OR AWS S3

Stores

- Product Images
- Product Videos
- Review Images
- Review Videos
- Banner Images
- 3D Models

===============================================================================
                          BACKGROUND JOBS SYSTEM
===============================================================================

BullMQ

Jobs

- Email Queue
- Notification Queue
- Inventory Sync
- Order Status Update
- Report Generation
- Payment Reconciliation

===============================================================================
                              DATABASE COLLECTIONS
===============================================================================

users
otp
refreshTokens

addresses

products
categories
subcategories
brands
variants

wishlists
carts

orders
orderItems

payments

reviews

coupons

blogs

banners

notifications

tickets

inventories

roomAssets

===============================================================================
                               USER ROLES
===============================================================================

ADMIN

Permissions
- Full Access

------------------------------------------------------------

SUB_ADMIN

Permissions
- Product Management
- Order Management
- Customer Support

------------------------------------------------------------

CUSTOMER

Permissions
- Shopping
- Wishlist
- Orders
- Reviews

------------------------------------------------------------

DELIVERY_PARTNER

Permissions
- Assigned Deliveries
- Delivery Status Updates

===============================================================================
                            FUTURE SCALABILITY
===============================================================================

Phase 1

- Auth
- Product
- Category
- Cart
- Wishlist
- Orders
- Payments
- Reviews
- Admin Dashboard

------------------------------------------------------------

Phase 2

- Coupons
- Blogs
- Notifications
- Analytics
- Support System

------------------------------------------------------------

Phase 3

- AI Recommendations
- Room Visualizer
- 3D Furniture Models
- AR Furniture Placement
- Personalized Suggestions
- Loyalty Program

===============================================================================
EXPECTED API COUNT
===============================================================================

Auth APIs           : 15+
Product APIs        : 25+
Category APIs       : 10+
Cart APIs           : 10+
Wishlist APIs       : 5+
Order APIs          : 20+
Payment APIs        : 10+
Review APIs         : 10+
Admin APIs          : 30+
Analytics APIs      : 15+

TOTAL               : 150+ APIs

===============================================================================