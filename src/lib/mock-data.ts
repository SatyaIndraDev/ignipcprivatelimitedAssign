import { Order, Product, Customer, OrderStatus, OrderItem } from "@/types";

// Re-export types for convenience
export { OrderStatus } from "@/types";

// Mock customers
export const mockCustomers: Customer[] = [
  {
    id: "1",
    email: "john.doe@email.com",
    firstName: "John",
    lastName: "Doe",
    phone: "+1234567890",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      country: "USA"
    },
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "2",
    email: "jane.smith@email.com",
    firstName: "Jane",
    lastName: "Smith",
    phone: "+1987654321",
    address: {
      street: "456 Oak Ave",
      city: "Somewhere",
      state: "NY",
      zipCode: "67890",
      country: "USA"
    },
    createdAt: "2024-01-16T11:00:00Z",
    updatedAt: "2024-01-16T11:00:00Z"
  }
];

// Mock products
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Laptop Computer",
    description: "High-performance laptop for business and gaming",
    price: 999.99,
    inventoryCount: 50,
    reservedCount: 5,
    active: true,
    createdAt: "2024-01-10T09:00:00Z",
    updatedAt: "2024-01-10T09:00:00Z"
  },
  {
    id: "2",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with long battery life",
    price: 29.99,
    inventoryCount: 200,
    reservedCount: 10,
    active: true,
    createdAt: "2024-01-10T09:00:00Z",
    updatedAt: "2024-01-10T09:00:00Z"
  },
  {
    id: "3",
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard",
    price: 149.99,
    inventoryCount: 75,
    reservedCount: 3,
    active: true,
    createdAt: "2024-01-10T09:00:00Z",
    updatedAt: "2024-01-10T09:00:00Z"
  }
];

// Mock order items
const mockOrderItems: OrderItem[] = [
  {
    id: "1",
    orderId: "1",
    productId: "1",
    quantity: 1,
    unitPrice: 999.99,
    totalPrice: 999.99,
    createdAt: "2024-01-20T14:00:00Z",
    product: mockProducts[0]
  },
  {
    id: "2",
    orderId: "1",
    productId: "2",
    quantity: 2,
    unitPrice: 29.99,
    totalPrice: 59.98,
    createdAt: "2024-01-20T14:00:00Z",
    product: mockProducts[1]
  },
  {
    id: "3",
    orderId: "2",
    productId: "3",
    quantity: 1,
    unitPrice: 149.99,
    totalPrice: 149.99,
    createdAt: "2024-01-21T10:00:00Z",
    product: mockProducts[2]
  }
];

// Mock orders
export const mockOrders: Order[] = [
  {
    id: "1",
    customerId: "1",
    status: OrderStatus.SHIPPED,
    paymentCollected: true,
    totalAmount: 1059.97,
    shippingAddress: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      country: "USA"
    },
    createdAt: "2024-01-20T14:00:00Z",
    updatedAt: "2024-01-22T16:00:00Z",
    statusUpdatedAt: "2024-01-22T16:00:00Z",
    items: mockOrderItems.filter(item => item.orderId === "1"),
    customer: mockCustomers[0]
  },
  {
    id: "2",
    customerId: "2",
    status: OrderStatus.PLACED,
    paymentCollected: false,
    totalAmount: 149.99,
    shippingAddress: {
      street: "456 Oak Ave",
      city: "Somewhere",
      state: "NY",
      zipCode: "67890",
      country: "USA"
    },
    createdAt: "2024-01-21T10:00:00Z",
    updatedAt: "2024-01-21T10:00:00Z",
    statusUpdatedAt: "2024-01-21T10:00:00Z",
    items: mockOrderItems.filter(item => item.orderId === "2"),
    customer: mockCustomers[1]
  },
  {
    id: "3",
    customerId: "1",
    status: OrderStatus.DELIVERED,
    paymentCollected: true,
    totalAmount: 29.99,
    shippingAddress: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      country: "USA"
    },
    createdAt: "2024-01-18T09:00:00Z",
    updatedAt: "2024-01-25T11:00:00Z",
    statusUpdatedAt: "2024-01-25T11:00:00Z",
    items: [
      {
        id: "4",
        orderId: "3",
        productId: "2",
        quantity: 1,
        unitPrice: 29.99,
        totalPrice: 29.99,
        createdAt: "2024-01-18T09:00:00Z",
        product: mockProducts[1]
      }
    ],
    customer: mockCustomers[0]
  }
];

// Helper functions
export const getOrderById = (id: string): Order | undefined => {
  return mockOrders.find(order => order.id === id);
};

export const getOrdersByCustomerId = (customerId: string): Order[] => {
  return mockOrders.filter(order => order.customerId === customerId);
};

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};

export const getCustomerById = (id: string): Customer | undefined => {
  return mockCustomers.find(customer => customer.id === id);
};