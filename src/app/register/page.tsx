"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  

  return (
    <div className="container mx-auto py-12">
      <Card className="w-full md:w-2/3 lg:w-1/2 mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-center">Register</CardTitle>
          <CardDescription className="text-center">
            Create a new account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form  className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>
            <Button type="submit">
              
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
