"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import Image from 'next/image';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showAlert, setShowAlert] = useState<boolean>(false); // حالة لإظهار/إخفاء التنبيه
  const [selectedService, setSelectedService] = useState('');



  // إخفاء التنبيه بعد مدة معينة (مثلاً 5 ثواني)
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 50000); // التنبيه سيختفي بعد 5 ثواني
      return () => clearTimeout(timer); // تنظيف التايمر عند التغيير
    }
  }, [showAlert]);

  return (
    <section className="w-full py-12 px-6 xl:px-20">
  <div className="flex flex-col lg:flex-row gap-12 items-start justify-center max-w-7xl mx-auto">

    {/* Left Banner */}
    <div className="flex flex-col items-center bg-white shadow-md overflow-hidden w-full lg:w-1/4  ">
      <Image
        src="https://i.ibb.co/xGZ4hRm/pexels-dmitry-zvolskiy-2082090-1.png"
        alt="Left Banner"
        width={800}
        height={1000}
        className="w-full object-cover h-[400px]"
      />
      <div className="bg-teal-600 text-white px-4 py-2 text-lg font-bold w-full text-center">50% OFF</div>
      <div className="p-4 text-center">
        <p className="text-lg font-semibold text-gray-800 mb-2">Act before it’s too late!</p>
        <p className="text-sm text-gray-600">Furniture that looks modern and is comfortable as well.</p>
      </div>
    </div>

    {/* Contact Form (Center) */}
    <Card className="w-full lg:w-2/4">
      <CardHeader>
        <CardTitle className="text-2xl">Planifier une consultation gratuite</CardTitle>
        <CardDescription>We d love to hear from you!</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="service">Service</Label>
            <select
              id="service"
              className="border border-gray-300 rounded-md p-2"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
            >
              <option value="">-- Sélectionner un service --</option>
              <option value="Ingénierie de formation">Ingénierie de formation</option>
              <option value="Formation continue">Formation continue</option>
              <option value="Assistance conseil en recrutement">Assistance conseil en recrutement</option>
              <option value="Fourniture de personnel intérimaire">Fourniture de personnel intérimaire</option>
              <option value="Le placement ou l’externalisation des ressources humaines">Le placement ou l’externalisation des ressources humaines</option>
              <option value="Domiciliation des Entreprises">Domiciliation des Entreprises</option>
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button className="bg-teal-600 font-bold" type="submit" disabled={submissionStatus === 'submitting'}>
            {submissionStatus === 'submitting' ? 'Submitting...' : 'Envoyer'}
          </Button>
        </form>

        {/* Success Alert */}
        {showAlert && submissionStatus === 'success' && (
          <Alert
            style={{ position: 'fixed', top: '120px', left: '20px', zIndex: 9999, width: 'auto' }}
            className="bg-teal-300 text-white"
          >
            <Terminal className="h-4 w-4" />
            <AlertTitle>Attention !</AlertTitle>
            <AlertDescription className="text-black font-bold">
              Merci pour votre message ! Nous vous contacterons prochainement.
            </AlertDescription>
          </Alert>
        )}

        {/* Error Alert */}
        {showAlert && submissionStatus === 'error' && (
          <Alert
            variant="destructive"
            style={{ position: 'fixed', top: '75px', left: '20px', zIndex: 9999, width: 'auto' }}
            className="bg-red-300 text-white"
          >
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>C’est ça !</AlertTitle>
            <AlertDescription>
              J’ai entendu parler de toi et de Rong. S’il vous plaît, essayez la pâte.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>

    {/* Right Banner */}
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden w-full lg:w-1/4">
      <Image
        src="https://i.ibb.co/KWgn5zQ/pexels-dmitry-zvolskiy-2082090-1-1.png"
        alt="Right Banner"
        width={800}
        height={1000}
        className="w-full object-cover h-[400px]"
      />
      <div className="bg-teal-600 text-white px-4 py-2 text-lg font-bold w-full text-center">50% OFF</div>
      <div className="p-4 text-center">
        <p className="text-lg font-semibold text-gray-600 mb-2">Don’t miss this deal!</p>
        <p className="text-sm text-gray-600">Grab stylish comfort today and save big.</p>
      </div>
    </div>

  </div>
</section>

  );
};
