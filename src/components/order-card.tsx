import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { OrderStatusBadge } from "@/components/order-status-badge";
import { Order } from "@/types";

interface OrderCardProps {
  order: Order;
  showCustomer?: boolean;
  showActions?: boolean;
}

export function OrderCard({ order, showCustomer = false, showActions = false }: OrderCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border-l-4 border-l-primary/20 hover:border-l-primary">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <CardTitle className="text-lg font-semibold">
                #{order.id.slice(-8).toUpperCase()}
              </CardTitle>
              <Badge variant="outline" className="text-xs">
                Order
              </Badge>
            </div>
            <CardDescription className="flex items-center text-sm">
              {showCustomer && order.customer && (
                <>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs">👤</span>
                    <span className="font-medium">
                      {order.customer.firstName} {order.customer.lastName}
                    </span>
                  </div>
                  <Separator orientation="vertical" className="mx-3 h-4" />
                </>
              )}
              <div className="flex items-center space-x-1">
                <span className="text-xs">📅</span>
                <span>
                  {new Date(order.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </CardDescription>
          </div>
          <OrderStatusBadge status={order.status} />
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Items</p>
            <p className="text-lg font-bold">{order.items?.length || 0}</p>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Total</p>
            <p className="text-lg font-bold text-primary">${order.totalAmount.toFixed(2)}</p>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Payment</p>
            <Badge 
              variant={order.paymentCollected ? "default" : "secondary"}
              className="text-xs"
            >
              {order.paymentCollected ? "✓ Paid" : "⏳ Pending"}
            </Badge>
          </div>
        </div>
        
        {showActions && (
          <>
            <Separator />
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1">
                View Details
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                Update Status
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}