import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { OrderCard } from "@/components/order-card";
import { mockOrders, mockProducts } from "@/lib/mock-data";

export default function CustomerPortal() {
  // Mock customer orders (in real app, this would be filtered by logged-in customer)
  const customerOrders = mockOrders.slice(0, 2);
  const availableProducts = mockProducts.filter(p => p.active && p.inventoryCount > 0);

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Customer Portal</h1>
        <p className="text-muted-foreground">
          Welcome back! Place orders and track your purchases
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2">
              <span>🛍️</span>
              <span>Place New Order</span>
            </CardTitle>
            <CardDescription>
              Browse our product catalog and create a new order
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Available Products</span>
              <Badge variant="secondary">{availableProducts.length}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">In Stock Items</span>
              <Badge variant="outline">
                {mockProducts.reduce((sum, p) => sum + p.inventoryCount, 0)}
              </Badge>
            </div>
            <Separator />
            <Button className="w-full" size="lg">
              Browse Products
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2">
              <span>📦</span>
              <span>Track Order</span>
            </CardTitle>
            <CardDescription>
              Enter your order ID to check current status and delivery info
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input 
                placeholder="Enter order ID (e.g., ORD-12345)" 
                className="text-center font-mono"
              />
              <Button variant="outline" className="w-full" size="lg">
                Track Order
              </Button>
            </div>
            <Separator />
            <p className="text-xs text-muted-foreground text-center">
              Order ID can be found in your confirmation email
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Order History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Order History</span>
            <Badge variant="outline">{customerOrders.length} orders</Badge>
          </CardTitle>
          <CardDescription>
            Your recent purchases and their current status
          </CardDescription>
        </CardHeader>
        <CardContent>
          {customerOrders.length > 0 ? (
            <div className="space-y-4">
              {customerOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
              <Separator />
              <div className="text-center">
                <Button variant="outline">
                  View All Orders
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="text-6xl">📦</div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">No orders yet</h3>
                <p className="text-muted-foreground">
                  Start shopping to see your orders here
                </p>
              </div>
              <Button>
                Browse Products
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Featured Products Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Products</CardTitle>
          <CardDescription>
            Popular items you might be interested in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="space-y-2">
                  <h4 className="font-semibold">{product.name}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">${product.price}</span>
                    <Badge variant={product.inventoryCount > 0 ? "default" : "secondary"}>
                      {product.inventoryCount > 0 ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Separator className="my-4" />
          <div className="text-center">
            <Button variant="outline">
              View All Products
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}