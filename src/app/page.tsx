import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <Badge variant="secondary" className="text-sm animate-pulse">
            ✨ Modern Order Management
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Order Management
            <span className="block text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              System
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Streamline your order processing with our comprehensive management platform. 
            Built with modern technologies for efficiency and reliability.
          </p>
        </div>
      </div>

      {/* Portal Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="group text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 hover:scale-[1.02] bg-gradient-to-br from-blue-50/50 to-white">
          <CardHeader className="pb-4">
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">👤</div>
            <CardTitle className="text-xl text-blue-900">Customer Portal</CardTitle>
            <CardDescription className="text-base">
              Place orders and track your purchases in real-time with our intuitive interface
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center space-x-2 text-xs">
              <Badge variant="secondary">Order tracking</Badge>
              <Badge variant="secondary">Product catalog</Badge>
              <Badge variant="secondary">Order history</Badge>
            </div>
            <Link href="/customer">
              <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                Access Customer Portal
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="group text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200 hover:scale-[1.02] bg-gradient-to-br from-green-50/50 to-white">
          <CardHeader className="pb-4">
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">👨‍💼</div>
            <CardTitle className="text-xl text-green-900">Staff Dashboard</CardTitle>
            <CardDescription className="text-base">
              Manage orders, update status, and handle customer requests efficiently
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center space-x-2 text-xs">
              <Badge variant="secondary">Order management</Badge>
              <Badge variant="secondary">Status updates</Badge>
              <Badge variant="secondary">Customer support</Badge>
            </div>
            <Link href="/staff">
              <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50" size="lg">
                Staff Dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="group text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 hover:scale-[1.02] bg-gradient-to-br from-purple-50/50 to-white">
          <CardHeader className="pb-4">
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">⚙️</div>
            <CardTitle className="text-xl text-purple-900">Admin Panel</CardTitle>
            <CardDescription className="text-base">
              Complete system oversight with analytics, reporting, and management tools
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center space-x-2 text-xs">
              <Badge variant="secondary">Analytics</Badge>
              <Badge variant="secondary">User management</Badge>
              <Badge variant="secondary">System settings</Badge>
            </div>
            <Link href="/admin">
              <Button variant="outline" className="w-full border-purple-600 text-purple-700 hover:bg-purple-50" size="lg">
                Admin Panel
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Features and Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>🚀</span>
              <span>Key Features</span>
            </CardTitle>
            <CardDescription>
              Everything you need for efficient order management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Real-time order status tracking",
                "Inventory management with reservation system", 
                "Role-based access control",
                "Comprehensive reporting and analytics",
                "Customer self-service portal",
                "Staff order management tools"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Badge variant="secondary" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">
                    ✓
                  </Badge>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>📊</span>
              <span>System Status</span>
            </CardTitle>
            <CardDescription>
              Real-time system health and performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: "Frontend Application", status: "Online", color: "bg-green-500" },
                { label: "User Interface", status: "Responsive", color: "bg-green-500" },
                { label: "Component System", status: "Active", color: "bg-green-500" },
                { label: "Mock Data", status: "Loaded", color: "bg-blue-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.label}</span>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    <Badge variant="outline" className="text-xs">
                      {item.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Ready to get started?</h2>
        <p className="text-muted-foreground">
          Choose your role and access the appropriate dashboard
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/customer">
            <Button size="lg">I&apos;m a Customer</Button>
          </Link>
          <Link href="/staff">
            <Button variant="outline" size="lg">I&apos;m Staff</Button>
          </Link>
          <Link href="/admin">
            <Button variant="outline" size="lg">I&apos;m an Admin</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
