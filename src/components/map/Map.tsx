
import { useState, useEffect } from 'react';
import { Compass, Layers, Navigation, Map as MapIcon, Circle, Bus, Car, Train } from 'lucide-react';
import SearchBar from './SearchBar';

const mockTransitOptions = [
  {
    id: 1,
    type: 'bus',
    icon: <Bus className="h-4 w-4" />,
    route: 'B25',
    from: 'Downtown',
    to: 'Uptown',
    departsIn: '5 min',
    duration: '25 min'
  },
  {
    id: 2,
    type: 'subway',
    icon: <Train className="h-4 w-4" />,
    route: 'L',
    from: 'Union Square',
    to: 'Bedford Ave',
    departsIn: '3 min',
    duration: '15 min'
  },
  {
    id: 3,
    type: 'car',
    icon: <Car className="h-4 w-4" />,
    route: 'Via I-95',
    from: 'Current Location',
    to: 'Central Park',
    departsIn: 'Now',
    duration: '20 min'
  }
];

const mockNearbyPlaces = [
  {
    id: 1,
    name: 'Central Park',
    type: 'Park',
    distance: '0.5 miles',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Metropolitan Museum',
    type: 'Museum',
    distance: '0.8 miles',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Shake Shack',
    type: 'Restaurant',
    distance: '0.3 miles',
    rating: 4.5
  }
];

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Simulate map loading
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setMapLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (location: string) => {
    setSelectedLocation(location);
    // In a real app, we would pan the map to this location
    console.log(`Searching for: ${location}`);
  };

  return (
    <div className="w-full h-screen relative">
      {/* Map Container */}
      <div className="absolute inset-0 bg-secondary flex items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            <p className="text-muted-foreground">Loading map...</p>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="absolute inset-0 flex items-center justify-center">
              {!selectedLocation && <p className="text-muted-foreground">Search for a location to begin</p>}
            </div>
          </div>
        )}
      </div>

      {/* Search Bar - Fixed at Top */}
      <div className="absolute top-20 left-0 right-0 p-4 flex justify-center z-10">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Map Controls - Fixed at Right */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 space-y-2 z-10">
        <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-all">
          <Compass className="h-5 w-5 text-primary" />
        </button>
        <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-all">
          <Layers className="h-5 w-5" />
        </button>
        <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-all">
          <MapIcon className="h-5 w-5" />
        </button>
        <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-all">
          <Circle className="h-5 w-5" />
        </button>
      </div>

      {/* Bottom Sheet */}
      <div className="absolute bottom-0 left-0 right-0 glass rounded-t-2xl p-4 z-10 animate-slide-in-up">
        <div className="w-16 h-1 bg-foreground/10 rounded-full mx-auto mb-6"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Transit Options */}
          <div className="space-y-4">
            <h3 className="font-semibold">Transit Options</h3>
            {mockTransitOptions.map((option) => (
              <div key={option.id} className="glass-card p-4 transition-all hover:translate-y-[-2px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 bg-primary/10 rounded-full">
                      {option.icon}
                    </div>
                    <span className="font-medium">{option.route}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{option.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <span>{option.from}</span>
                  <div className="flex-1 border-t border-dashed border-muted"></div>
                  <span>{option.to}</span>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Departs in {option.departsIn}
                </div>
              </div>
            ))}
          </div>

          {/* Nearby Places */}
          <div className="space-y-4">
            <h3 className="font-semibold">Nearby Places</h3>
            {mockNearbyPlaces.map((place) => (
              <div key={place.id} className="glass-card p-4 transition-all hover:translate-y-[-2px]">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{place.name}</h4>
                    <p className="text-xs text-muted-foreground">{place.type} • {place.distance}</p>
                  </div>
                  <div className="flex items-center bg-primary/10 px-2 py-0.5 rounded-full">
                    <span className="text-xs font-medium text-primary">{place.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Button */}
        <div className="mt-6 flex justify-center">
          <button className="btn-primary w-full max-w-xs flex items-center justify-center space-x-2">
            <Navigation className="h-4 w-4" />
            <span>Start Navigation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;
