import { Badge } from "@/components/ui/badge";
import { OrderStatus } from "@/types";
import { cn } from "@/lib/utils";

interface OrderStatusBadgeProps {
  status: OrderStatus;
  className?: string;
}

export function OrderStatusBadge({ status, className }: OrderStatusBadgeProps) {
  const getStatusConfig = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.PLACED:
        return { 
          variant: "secondary" as const, 
          label: "Placed",
          className: "bg-blue-100 text-blue-800 hover:bg-blue-200"
        };
      case OrderStatus.PICKED:
        return { 
          variant: "default" as const, 
          label: "Picked",
          className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
        };
      case OrderStatus.SHIPPED:
        return { 
          variant: "default" as const, 
          label: "Shipped",
          className: "bg-purple-100 text-purple-800 hover:bg-purple-200"
        };
      case OrderStatus.DELIVERED:
        return { 
          variant: "default" as const, 
          label: "Delivered",
          className: "bg-green-100 text-green-800 hover:bg-green-200"
        };
      case OrderStatus.CANCELLED:
        return { 
          variant: "destructive" as const, 
          label: "Cancelled",
          className: "bg-red-100 text-red-800 hover:bg-red-200"
        };
      default:
        return { 
          variant: "secondary" as const, 
          label: "Unknown",
          className: "bg-gray-100 text-gray-800 hover:bg-gray-200"
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <Badge 
      variant={config.variant}
      className={cn(config.className, className)}
    >
      {config.label}
    </Badge>
  );
}