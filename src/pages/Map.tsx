
import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Map from '@/components/map/Map';
import { toast } from '@/hooks/use-toast';

const MapPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
      toast({
        title: "Map loaded successfully",
        description: "You can now search for locations and plan your journey.",
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 p-4 glass z-40">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-primary">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xs font-medium text-primary">JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Map Container */}
      <main className="h-screen">
        {loading ? (
          <div className="h-full flex flex-col items-center justify-center">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Loading Your Map</h2>
            <p className="text-muted-foreground">Preparing your navigation experience...</p>
          </div>
        ) : (
          <Map />
        )}
      </main>
    </div>
  );
};

export default MapPage;
