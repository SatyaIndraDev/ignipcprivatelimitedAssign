# Requirements Document

## Introduction

The Order Management System (OMS) is a full-stack application that enables online order processing, inventory management, and order tracking. The system serves both customers who can place and track orders, and internal staff who can manage orders, inventory, and view comprehensive dashboards. The application follows a modern tech stack with Next.js frontend, Fastify backend, and PostgreSQL database.

## Requirements

### Requirement 1

**User Story:** As a customer, I want to submit orders online, so that I can purchase products conveniently from anywhere.

#### Acceptance Criteria

1. WHEN a customer accesses the online ordering interface THEN the system SHALL display available products with current inventory status
2. WHEN a customer selects products and quantities THEN the system SHALL validate inventory availability before allowing order submission
3. WHEN a customer submits a valid order THEN the system SHALL create an order record with unique ID and set status to "Placed"
4. WHEN an order is successfully placed THEN the system SHALL immediately reserve the required inventory to prevent double-selling
5. IF inventory is insufficient for requested quantities THEN the system SHALL reject the order and display appropriate error message

### Requirement 2

**User Story:** As internal staff, I want to create orders through a simple form interface, so that I can process phone or in-person orders efficiently.

#### Acceptance Criteria

1. WHEN staff accesses the internal order creation form THEN the system SHALL require staff authentication and authorization
2. WHEN staff creates an order THEN the system SHALL allow selection of existing customers or creation of new customer records
3. WHEN staff submits an order THEN the system SHALL follow the same inventory reservation process as online orders
4. WHEN staff creates an order THEN the system SHALL allow immediate marking of payment status (collected/not collected)

### Requirement 3

**User Story:** As a business operator, I want inventory to be immediately locked when orders are placed, so that I can prevent overselling and maintain accurate stock levels.

#### Acceptance Criteria

1. WHEN an order is placed THEN the system SHALL immediately decrement available inventory by the ordered quantities
2. WHEN inventory reservation occurs THEN the system SHALL use database transactions to ensure atomicity
3. WHEN an order is cancelled THEN the system SHALL restore the reserved inventory back to available stock
4. IF multiple orders attempt to reserve the same inventory simultaneously THEN the system SHALL handle concurrency using database locks

### Requirement 4

**User Story:** As a business operator, I want to track payment collection status for each order, so that I can manage cash flow and outstanding receivables.

#### Acceptance Criteria

1. WHEN an order is created THEN the system SHALL initialize payment status as "not collected"
2. WHEN payment is received THEN authorized staff SHALL be able to update payment status to "collected"
3. WHEN viewing order details THEN the system SHALL clearly display current payment status
4. WHEN generating reports THEN the system SHALL include payment status information

### Requirement 5

**User Story:** As internal staff, I want to track orders through defined stages (Placed → Picked → Shipped → Delivered), so that I can manage fulfillment workflow efficiently.

#### Acceptance Criteria

1. WHEN an order is created THEN the system SHALL set initial status to "Placed"
2. WHEN staff updates order status THEN the system SHALL only allow progression through valid status transitions: Placed → Picked → Shipped → Delivered
3. WHEN staff needs to correct an order status THEN the system SHALL allow authorized users to set any valid status regardless of current state
4. WHEN order status changes THEN the system SHALL record timestamp and user who made the change
5. WHEN order status is updated THEN the system SHALL send real-time notifications to connected clients via WebSockets or Server-Sent Events

### Requirement 6

**User Story:** As a customer, I want to look up my order by ID and see current status and details, so that I can track my purchase without contacting support.

#### Acceptance Criteria

1. WHEN a customer enters a valid order ID THEN the system SHALL display order status, items, quantities, and estimated delivery information
2. WHEN a customer enters an invalid order ID THEN the system SHALL display appropriate error message
3. WHEN order status is updated THEN the customer view SHALL reflect changes in real-time
4. WHEN displaying order information THEN the system SHALL only show customer-appropriate details (no internal notes or staff information)

### Requirement 7

**User Story:** As an administrator, I want a dashboard that lists all orders with search and filtering capabilities, so that I can efficiently manage and monitor order operations.

#### Acceptance Criteria

1. WHEN an admin accesses the dashboard THEN the system SHALL display paginated list of all orders with key information (ID, customer, status, date, total)
2. WHEN an admin uses search functionality THEN the system SHALL support searching by order ID, customer name, and date ranges
3. WHEN an admin applies filters THEN the system SHALL support filtering by order status, payment status, and date ranges
4. WHEN an admin requests data export THEN the system SHALL generate CSV file containing filtered order data
5. WHEN the dashboard loads THEN the system SHALL display real-time order counts and status distribution

### Requirement 8

**User Story:** As a system administrator, I want comprehensive CRUD operations for orders, products, and customers, so that I can maintain accurate system data.

#### Acceptance Criteria

1. WHEN managing products THEN the system SHALL support create, read, update, and delete operations with inventory tracking
2. WHEN managing customers THEN the system SHALL support create, read, update, and delete operations with order history
3. WHEN managing orders THEN the system SHALL support create, read, update operations (delete should be restricted to prevent data loss)
4. WHEN performing any CRUD operation THEN the system SHALL validate data integrity and enforce business rules
5. WHEN deleting records THEN the system SHALL check for dependencies and prevent deletion if references exist

### Requirement 9

**User Story:** As a system user, I want real-time updates when order statuses change, so that I can see current information without manual refresh.

#### Acceptance Criteria

1. WHEN order status changes THEN the system SHALL broadcast updates to all connected clients viewing relevant order information
2. WHEN a client connects THEN the system SHALL establish WebSocket or Server-Sent Events connection for real-time updates
3. WHEN connection is lost THEN the system SHALL attempt automatic reconnection and sync any missed updates
4. WHEN multiple users view the same order THEN all SHALL receive simultaneous status updates

### Requirement 10

**User Story:** As a system administrator, I want secure authentication and role-based access control, so that sensitive operations are properly protected.

#### Acceptance Criteria

1. WHEN users access the system THEN the system SHALL require authentication via NextAuth with JWT tokens
2. WHEN authenticated users perform actions THEN the system SHALL enforce role-based permissions (customer, staff, admin)
3. WHEN API requests are made THEN the system SHALL validate JWT tokens and user permissions
4. WHEN unauthorized access is attempted THEN the system SHALL return appropriate error responses and log security events
5. WHEN user sessions expire THEN the system SHALL require re-authentication for continued access