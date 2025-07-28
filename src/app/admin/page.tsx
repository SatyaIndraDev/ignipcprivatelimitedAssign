import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { OrderCard } from "@/components/order-card";
import { StatsCard } from "@/components/stats-card";
import { OrderStatusBadge } from "@/components/order-status-badge";
import { mockOrders, mockCustomers, mockProducts, OrderStatus } from "@/lib/mock-data";

export default function AdminDashboard() {
  // Calculate comprehensive statistics
  const totalOrders = mockOrders.length;
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.totalAmount, 0);
  const totalCustomers = mockCustomers.length;
  const activeProducts = mockProducts.filter(product => product.active).length;
  
  const statusCounts = {
    placed: mockOrders.filter(o => o.status === OrderStatus.PLACED).length,
    picked: mockOrders.filter(o => o.status === OrderStatus.PICKED).length,
    shipped: mockOrders.filter(o => o.status === OrderStatus.SHIPPED).length,
    delivered: mockOrders.filter(o => o.status === OrderStatus.DELIVERED).length,
    cancelled: mockOrders.filter(o => o.status === OrderStatus.CANCELLED).length,
  };

  const recentOrders = mockOrders.slice(0, 3);
  const completionRate = totalOrders > 0 ? (statusCounts.delivered / totalOrders) * 100 : 0;

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Comprehensive system overview and management tools
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Orders"
          value={totalOrders}
          description="All time orders"
          trend={{ value: 12, label: "from last month", isPositive: true }}
          icon="📦"
          color="blue"
        />
        <StatsCard
          title="Revenue"
          value={`$${totalRevenue.toFixed(2)}`}
          description="Total revenue"
          trend={{ value: 8, label: "from last month", isPositive: true }}
          icon="💰"
          color="green"
        />
        <StatsCard
          title="Customers"
          value={totalCustomers}
          description="Registered customers"
          trend={{ value: 5, label: "from last month", isPositive: true }}
          icon="👥"
          color="purple"
        />
        <StatsCard
          title="Products"
          value={activeProducts}
          description="Active products"
          icon="🛍️"
          color="orange"
        />
      </div>

      {/* Order Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Order Analytics</CardTitle>
            <CardDescription>
              Detailed breakdown of order statuses and performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Order Completion Rate</span>
                <span className="font-medium">{completionRate.toFixed(1)}%</span>
              </div>
              <Progress value={completionRate} className="h-2" />
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(statusCounts).map(([status, count]) => (
                <div key={status} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-2">
                    <OrderStatusBadge status={status as OrderStatus} />
                  </div>
                  <span className="font-semibold text-lg">{count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start">
              📊 View All Orders
            </Button>
            <Button variant="outline" className="w-full justify-start">
              📤 Export Data
            </Button>
            <Button variant="outline" className="w-full justify-start">
              📦 Manage Products
            </Button>
            <Button variant="outline" className="w-full justify-start">
              👥 Manage Users
            </Button>
            <Separator />
            <Button variant="outline" className="w-full justify-start">
              ⚙️ System Settings
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Tabs defaultValue="orders" className="space-y-4">
        <TabsList>
          <TabsTrigger value="orders">Recent Orders</TabsTrigger>
          <TabsTrigger value="customers">New Customers</TabsTrigger>
          <TabsTrigger value="products">Product Updates</TabsTrigger>
        </TabsList>
        
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Latest Orders</CardTitle>
              <CardDescription>
                Most recent order activity across the system
              </CardDescription>
            </CardHeader>
            <CardContent>
              {recentOrders.length > 0 ? (
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <OrderCard key={order.id} order={order} showCustomer showActions />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No recent orders found
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>New Customers</CardTitle>
              <CardDescription>
                Recently registered customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockCustomers.map((customer) => (
                  <div key={customer.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{customer.firstName} {customer.lastName}</p>
                      <p className="text-sm text-muted-foreground">{customer.email}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(customer.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Inventory</CardTitle>
              <CardDescription>
                Current product status and inventory levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">${product.price}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-sm font-medium">Stock: {product.inventoryCount}</p>
                      <p className="text-xs text-muted-foreground">Reserved: {product.reservedCount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}