import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number;
    label: string;
    isPositive?: boolean;
  };
  icon?: string;
  className?: string;
  color?: "blue" | "green" | "purple" | "orange" | "red";
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  trend, 
  icon, 
  className,
  color = "blue"
}: StatsCardProps) {
  const colorClasses = {
    blue: "border-l-blue-500 bg-blue-50/50 hover:bg-blue-50",
    green: "border-l-green-500 bg-green-50/50 hover:bg-green-50",
    purple: "border-l-purple-500 bg-purple-50/50 hover:bg-purple-50",
    orange: "border-l-orange-500 bg-orange-50/50 hover:bg-orange-50",
    red: "border-l-red-500 bg-red-50/50 hover:bg-red-50"
  };

  const iconColorClasses = {
    blue: "text-blue-600",
    green: "text-green-600", 
    purple: "text-purple-600",
    orange: "text-orange-600",
    red: "text-red-600"
  };

  return (
    <Card className={cn(
      "hover:shadow-lg transition-all duration-200 border-l-4 hover:scale-[1.02]",
      colorClasses[color],
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <div className={cn("text-2xl", iconColorClasses[color])}>
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-3xl font-bold tracking-tight">{value}</div>
        {(description || trend) && (
          <div className="flex items-center space-x-2">
            {trend && (
              <Badge 
                variant="secondary" 
                className={cn(
                  "text-xs font-medium",
                  trend.isPositive 
                    ? "bg-green-100 text-green-700 border-green-200" 
                    : "bg-red-100 text-red-700 border-red-200"
                )}
              >
                {trend.isPositive ? "↗" : "↘"} {Math.abs(trend.value)}%
              </Badge>
            )}
            <span className="text-xs text-muted-foreground">
              {description || trend?.label}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}