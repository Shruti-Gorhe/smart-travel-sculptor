
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your City Experience?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of smart travelers who navigate urban landscapes with 
            intelligence and ease. Get started for free today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/map" className="btn-primary">
              <span className="flex items-center justify-center gap-2">
                Explore the Map <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link to="/auth" className="btn-ghost">
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
