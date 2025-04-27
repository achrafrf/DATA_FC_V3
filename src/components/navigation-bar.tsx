"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from 'next/image';

export function NavigationBar() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="border-b py-2 px-4 flex items-center justify-between">
      <Image src="/logo.jpg" alt="Logo" width={200} height={15} />


      <div className="hidden md:flex space-x-4">
        <Link href="#values">Values</Link>
        <Link href="#team">Team</Link>
        <Link href="#alignment">Value Alignment</Link>
        <Link href="#contact">Contact Us</Link>
        <Link href="/about">About Us</Link>
        <Link href="/formation">Formation</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          checked={theme === "dark"}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
        {mounted && (theme === "light" ? <Moon /> : <Sun />)}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="md:hidden">
              Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="#values">Values</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#team">Team</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#alignment">Value Alignment</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#contact">Contact Us</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/about">About Us</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/formation">Formation</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/register">Register</Link>
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
