import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { OrderCard } from "@/components/order-card";
import { StatsCard } from "@/components/stats-card";
import { mockOrders, mockCustomers, OrderStatus } from "@/lib/mock-data";

export default function StaffDashboard() {
  // Calculate statistics
  const totalOrders = mockOrders.length;
  const pendingOrders = mockOrders.filter(order => 
    order.status === OrderStatus.PLACED || order.status === OrderStatus.PICKED
  ).length;
  const completedOrders = mockOrders.filter(order => 
    order.status === OrderStatus.DELIVERED
  ).length;
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.totalAmount, 0);
  const recentOrders = mockOrders.slice(0, 3);
  const workloadProgress = totalOrders > 0 ? (completedOrders / totalOrders) * 100 : 0;

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Staff Dashboard</h1>
        <p className="text-muted-foreground">
          Manage orders and assist customers efficiently
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2">
              <span>📝</span>
              <span>Create Order</span>
            </CardTitle>
            <CardDescription>
              Process walk-in customers and phone orders
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Available Customers</span>
              <Badge variant="secondary">{mockCustomers.length}</Badge>
            </div>
            <Button className="w-full" size="lg">
              New Order
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2">
              <span>📋</span>
              <span>Manage Orders</span>
            </CardTitle>
            <CardDescription>
              Update order status and handle requests
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Active Orders</span>
              <Badge variant="outline">{totalOrders}</Badge>
            </div>
            <Button variant="outline" className="w-full" size="lg">
              View All Orders
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2">
              <span>👥</span>
              <span>Customer Support</span>
            </CardTitle>
            <CardDescription>
              Assist customers and manage accounts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total Customers</span>
              <Badge variant="outline">{mockCustomers.length}</Badge>
            </div>
            <Button variant="outline" className="w-full" size="lg">
              Customer Directory
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Today's Orders"
          value={totalOrders}
          description="Total orders processed"
          icon="📋"
          color="blue"
        />
        <StatsCard
          title="Pending Tasks"
          value={pendingOrders}
          description="Orders requiring attention"
          icon="⏳"
          color="orange"
        />
        <StatsCard
          title="Completed"
          value={completedOrders}
          description="Successfully delivered"
          icon="✅"
          color="green"
        />
        <StatsCard
          title="Revenue"
          value={`$${totalRevenue.toFixed(2)}`}
          description="Total order value"
          icon="💵"
          color="purple"
        />
      </div>

      {/* Work Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Work Progress</CardTitle>
          <CardDescription>
            Your daily performance and task completion
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Order Completion Rate</span>
              <span className="font-medium">{workloadProgress.toFixed(1)}%</span>
            </div>
            <Progress value={workloadProgress} className="h-3" />
          </div>
          
          <Separator />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-blue-600">{mockOrders.filter(o => o.status === OrderStatus.PLACED).length}</p>
              <p className="text-xs text-muted-foreground">New Orders</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-yellow-600">{mockOrders.filter(o => o.status === OrderStatus.PICKED).length}</p>
              <p className="text-xs text-muted-foreground">In Progress</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-purple-600">{mockOrders.filter(o => o.status === OrderStatus.SHIPPED).length}</p>
              <p className="text-xs text-muted-foreground">Shipped</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-green-600">{completedOrders}</p>
              <p className="text-xs text-muted-foreground">Delivered</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>
            Latest orders requiring your attention
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
              <p>No recent orders found</p>
              <p className="text-sm">All caught up! 🎉</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}