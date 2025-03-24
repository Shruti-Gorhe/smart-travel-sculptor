
import { ArrowRight, Map, Navigation, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center fade-in-stagger">
          <div className="inline-block glass-dark rounded-full px-4 py-2 mb-6">
            <p className="text-sm font-medium text-primary">
              Discover a smarter way to navigate cities
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Navigate Urban Landscapes with
            <span className="text-primary"> Intelligence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Smart City Traveller uses real-time data to help you navigate cities efficiently, 
            finding the fastest routes and discovering amazing places along the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/map" className="btn-primary">
              <span className="flex items-center justify-center gap-2">
                Explore Map <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link to="/auth" className="btn-ghost">
              Sign Up Free
            </Link>
          </div>
          
          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Map className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Smart Navigation</h3>
              <p className="text-muted-foreground text-sm">
                Intelligent routing based on real-time traffic data.
              </p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Navigation className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Transport Options</h3>
              <p className="text-muted-foreground text-sm">
                Combine various modes of transportation for optimal routes.
              </p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Real-Time Updates</h3>
              <p className="text-muted-foreground text-sm">
                Stay informed with live schedules and arrival times.
              </p>
            </div>
          </div>
        </div>

        {/* Mockup Image */}
        <div className="mt-20 max-w-5xl mx-auto relative">
          <div className="glass-card p-3 rounded-2xl shadow-xl overflow-hidden">
            <div className="w-full h-[600px] bg-secondary rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
              <div className="text-primary font-medium">Map Interface Preview</div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-md border-t border-border p-4">
                <div className="flex justify-between items-center h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Navigation className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Navigating to</p>
                      <p className="text-xs text-muted-foreground">Central Park</p>
                    </div>
                  </div>
                  <div className="bg-primary text-white rounded-full px-3 py-1 text-sm">
                    15 min
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
