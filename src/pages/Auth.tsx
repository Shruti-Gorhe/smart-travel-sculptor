
import AuthForm from '@/components/auth/AuthForm';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Brand section */}
      <div className="md:w-1/2 bg-primary p-8 py-12 flex flex-col justify-between relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/90"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <Link to="/" className="flex items-center space-x-2 text-white">
            <MapPin className="h-8 w-8" />
            <span className="text-2xl font-semibold tracking-tight">SmartCityTraveller</span>
          </Link>
        </div>
        
        <div className="relative z-10 text-white space-y-6 max-w-md">
          <h1 className="text-4xl font-bold">Navigate Cities Like a Local</h1>
          <p className="text-white/80">
            Join our community of smart travelers to unlock real-time navigation, 
            transportation updates, and intelligent recommendations.
          </p>
          <div className="flex space-x-3 pt-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-white/30 first:bg-white"></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 text-white/80 text-sm">
          &copy; {new Date().getFullYear()} SmartCityTraveller. All rights reserved.
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Right side - Form section */}
      <div className="md:w-1/2 p-8 flex items-center justify-center animate-fade-in">
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
