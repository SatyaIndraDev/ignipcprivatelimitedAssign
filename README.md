# Order Management System (OMS)

A full-stack order management system built with Next.js, Fastify, and PostgreSQL. This system provides comprehensive order processing, inventory management, and real-time tracking capabilities.

## 🚀 Features

- **Order Processing**: Complete order lifecycle management from placement to delivery
- **Inventory Management**: Real-time inventory tracking with reservation system
- **Role-Based Access**: Customer, Staff, and Admin portals with appropriate permissions
- **Real-Time Updates**: WebSocket integration for live order status updates
- **Comprehensive Reporting**: Advanced search, filtering, and CSV export capabilities
- **Responsive Design**: Modern UI built with shadcn/ui components

## 🛠 Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL 14+
- npm or yarn

## 🏗 Project Structure

```
├── .kiro/specs/order-management-system/    # Project specifications
│   ├── requirements.md                     # Detailed requirements
│   ├── design.md                          # System design document
│   └── tasks.md                           # Implementation tasks
├── src/                                   # Next.js frontend
│   ├── app/                               # App router pages
│   │   ├── customer/                      # Customer portal
│   │   ├── staff/                         # Staff dashboard
│   │   └── admin/                         # Admin dashboard
│   ├── components/ui/                     # Reusable UI components
│   ├── lib/                               # Utility functions
│   └── types/                             # Frontend type definitions
├── docs/                                  # Documentation
│   └── high-level-design.md               # Architecture overview
└── README.md
```

## 🚀 Quick Start

### 1. Clone and Install Dependencies

```bash
# Install dependencies
npm install
```

### 2. Start Development Server

```bash
# Start the development server
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000

## 🎨 Frontend Features

### Customer Portal (`/customer`)
- Product browsing and order placement
- Order tracking by ID
- Real-time status updates

### Staff Dashboard (`/staff`)
- Internal order creation
- Order status management
- Customer management tools

### Admin Dashboard (`/admin`)
- Comprehensive order overview
- System analytics and reporting
- User and product management

## 🧪 Testing

```bash
# Run tests
npm test

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📖 Documentation

- [High-Level Design](docs/high-level-design.md) - System architecture overview
- [Requirements](/.kiro/specs/order-management-system/requirements.md) - Detailed functional requirements
- [Design Document](/.kiro/specs/order-management-system/design.md) - Technical design specifications
- [Implementation Tasks](/.kiro/specs/order-management-system/tasks.md) - Development task breakdown

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Check the documentation in the `docs/` folder
- Review the specifications in `.kiro/specs/order-management-system/`
- Open an issue on GitHub

---

Built with ❤️ using modern web technologies