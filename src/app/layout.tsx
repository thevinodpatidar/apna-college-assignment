import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "next-themes";
import { getSession, SessionProvider } from "next-auth/react";
import { auth, signOut } from "@/auth";
import { redirect, useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DSA Learning Platform",
  description: "Learn Data Structures and Algorithms",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  const handleLogout = async () => {
    "use server";
    await signOut();
    redirect("/");
  };

  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <SessionProvider session={session}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                {session && (
                  <div className="container flex h-14 items-center">
                    <div className="mr-4 hidden md:flex">
                      <Link
                        href="/"
                        className="mr-6 flex items-center space-x-2"
                      >
                        <span className="hidden font-bold sm:inline-block">
                          DSA Learning
                        </span>
                      </Link>
                      <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                          href="/topics"
                          className="transition-colors hover:text-foreground/80 text-foreground"
                        >
                          Topics
                        </Link>
                        <Link
                          href="/practice"
                          className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                          Practice
                        </Link>
                        <Link
                          href="/discuss"
                          className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                          Discuss
                        </Link>
                      </nav>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mr-6 md:hidden"
                    >
                      Menu
                    </Button>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                      <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Button
                          variant="outline"
                          className="w-full justify-start text-sm font-normal md:w-[260px]"
                        >
                          <span className="hidden lg:inline-flex">
                            Search topics...
                          </span>
                          <span className="inline-flex lg:hidden">
                            Search...
                          </span>
                          <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                            <span className="text-xs">⌘</span>K
                          </kbd>
                        </Button>
                      </div>
                      <ThemeToggle />
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="relative h-8 w-8 rounded-full"
                          >
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src="/placeholder.svg?height=32&width=32"
                                alt="@username"
                              />
                              <AvatarFallback>
                                {session.user?.name?.charAt(0).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className="w-56"
                          align="end"
                          forceMount
                        >
                          <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                              <p className="text-sm font-medium leading-none">
                                {session.user?.name}
                              </p>
                              <p className="text-xs leading-none text-muted-foreground">
                                {session.user?.email}
                              </p>
                            </div>
                          </DropdownMenuLabel>
                          {/* <DropdownMenuSeparator /> */}
                          {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
                          {/* <DropdownMenuItem>Settings</DropdownMenuItem> */}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Link href="/api/auth/signout">Sign out</Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                )}
              </header>
              <main className="flex-1">{children}</main>
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
