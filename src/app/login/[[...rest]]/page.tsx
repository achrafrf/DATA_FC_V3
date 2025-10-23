'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignIn } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LoginPage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Loader animation 3s
useEffect(() => {
  let interval: ReturnType<typeof setInterval>; // ✅ type-safe

  if (showLoading) {
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowLoading(false);
          return 100;
        }
        return prev + 1.5; // approx 3s
      });
    }, 45);
  }

  return () => clearInterval(interval);
}, [showLoading]);


  // Redirect if already signed in
  useEffect(() => {
    if (isLoaded && isSignedIn && !showLoading) {
      router.replace('/Formations');
    }
  }, [isLoaded, isSignedIn, showLoading, router]);

  // Show loading
  if (!isLoaded || showLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-200">
        <Image 
         width={800}
        height={1000} 
        src="/logo.png" 
        alt="Logo" 
        className="w-28 h-28 mb-6 animate-bounce" />
        <div className="w-64 h-4 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-teal-800 via-green-400 to-teal-700"
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'linear', duration: 0.05 }}
          />
        </div>
        <p className="mt-4 text-gray-700 font-medium">Chargement...</p>
      </div>
    );
  }

  // If signed in but loader finished
  if (isSignedIn) return null;

  // Show Clerk SignIn form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-100 via-white to-green-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/30 backdrop-blur-md border border-white/30"
      >
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">Se connecter</h2>

        <SignIn
          path="/login"
          routing="path"
          signUpUrl="/signup"
          afterSignInUrl="/Formations"
          afterSignUpUrl="/Formations"
          appearance={{
            variables: {
              colorPrimary: "#10B981",
              colorBackground: "rgba(255, 255, 255, 0.2)",
              borderRadius: "1rem",
            },
            elements: {
              card: "bg-white/20 backdrop-blur-md shadow-xl rounded-xl p-6",
              formFieldInput: `
                relative
                bg-white/20
                border
                border-gray-200
                rounded-lg
                px-4
                py-2
                pl-10
                focus:ring-2
                focus:ring-green-500
                focus:outline-none
                transition
                duration-200
              `,
              buttonPrimary: `
                bg-teal-800
                hover:bg-green-600
                text-white
                font-semibold
                py-2
                rounded-lg
                w-full
                transition
                duration-200
                transform
                hover:scale-105
              `,
            },
          }}
        />
      </motion.div>
    </div>
  );
}
