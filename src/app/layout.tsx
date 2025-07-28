import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, User, Users, Settings, Menu } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Order Management System",
  description: "Full-stack order management system with real-time updates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">O</span>
                  </div>
                  <span className="text-xl font-bold">OrderMS</span>
                </Link>
                <div className="hidden md:flex items-center space-x-1">
                  <Link href="/">
                    <Button variant="ghost" size="sm">Home</Button>
                  </Link>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                        <span>Portals</span>
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      <DropdownMenuItem asChild>
                        <Link href="/customer" className="flex items-center space-x-2 w-full">
                          <User className="h-4 w-4" />
                          <span>Customer Portal</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/staff" className="flex items-center space-x-2 w-full">
                          <Users className="h-4 w-4" />
                          <span>Staff Dashboard</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/admin" className="flex items-center space-x-2 w-full">
                          <Settings className="h-4 w-4" />
                          <span>Admin Panel</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="secondary" className="hidden sm:inline-flex">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5" />
                  Online
                </Badge>
                
                {/* Mobile Menu */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm" className="md:hidden">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80">
                    <div className="flex flex-col space-y-4 mt-6">
                      <Link href="/" className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent">
                        <span>🏠</span>
                        <span>Home</span>
                      </Link>
                      
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-muted-foreground px-2">Portals</h3>
                        <Link href="/customer" className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent">
                          <User className="h-4 w-4" />
                          <span>Customer Portal</span>
                        </Link>
                        <Link href="/staff" className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent">
                          <Users className="h-4 w-4" />
                          <span>Staff Dashboard</span>
                        </Link>
                        <Link href="/admin" className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent">
                          <Settings className="h-4 w-4" />
                          <span>Admin Panel</span>
                        </Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">U</AvatarFallback>
                </Avatar>
              </div>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xs">O</span>
                  </div>
                  <span className="font-semibold">OrderMS</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Modern order management system built with Next.js and shadcn/ui.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Portals</h4>
                <div className="space-y-2">
                  <Link href="/customer" className="block text-sm text-muted-foreground hover:text-foreground">
                    Customer Portal
                  </Link>
                  <Link href="/staff" className="block text-sm text-muted-foreground hover:text-foreground">
                    Staff Dashboard
                  </Link>
                  <Link href="/admin" className="block text-sm text-muted-foreground hover:text-foreground">
                    Admin Panel
                  </Link>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Features</h4>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Order Tracking</p>
                  <p className="text-sm text-muted-foreground">Inventory Management</p>
                  <p className="text-sm text-muted-foreground">Real-time Updates</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">System</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-muted-foreground">All Systems Operational</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t mt-8 pt-6 text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 Order Management System. Built with Next.js and shadcn/ui.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}