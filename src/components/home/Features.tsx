
import { Map, Navigation, Clock, Star, Shield, UserCircle, BuildingLibrary, AlertTriangle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <UserCircle className="h-6 w-6 text-primary" />,
      title: "Personalized Profiles",
      description: "Create your profile to get personalized recommendations based on your preferences and travel history."
    },
    {
      icon: <Navigation className="h-6 w-6 text-primary" />,
      title: "Route Optimization",
      description: "Get the most efficient routes based on real-time traffic data and your preferred mode of transportation."
    },
    {
      icon: <Map className="h-6 w-6 text-primary" />,
      title: "Public Transport Integration",
      description: "Access real-time schedules, track buses and trains, and get estimated arrival times for seamless travel."
    },
    {
      icon: <BuildingLibrary className="h-6 w-6 text-primary" />,
      title: "Attraction Discovery",
      description: "Discover nearby tourist places, restaurants, hotels, and shopping areas with user ratings and reviews."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      title: "Safety Features",
      description: "Quickly locate nearby emergency services like police stations and hospitals, or send SOS alerts."
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Smart Recommendations",
      description: "Get AI-powered suggestions and create personalized travel itineraries based on your interests."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Real-Time Updates",
      description: "Stay informed with instant updates on transport delays, route changes, and local events."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Multilingual Support",
      description: "Navigate foreign cities with ease thanks to our multilingual interface and translation capabilities."
    }
  ];

  return (
    <section id="features" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block glass-dark rounded-full px-4 py-2 mb-4">
            <p className="text-sm font-medium text-primary">
              Powerful Features
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need For Smart Urban Travel
          </h2>
          <p className="text-muted-foreground">
            Our platform combines cutting-edge technology with thoughtful design to make city 
            navigation efficient, intuitive, and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="bg-primary/10 rounded-full p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
