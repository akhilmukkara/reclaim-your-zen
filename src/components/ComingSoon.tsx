import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smartphone } from "lucide-react";

export const ComingSoon = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-card shadow-glow rounded-3xl p-12 md:p-16 text-center space-y-8 border-2 border-primary/10">
            {/* Play Store icon placeholder */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center shadow-glow">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black">
                Coming Soon to{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Play Store
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Be among the first to experience the future of focus. Join our waitlist for exclusive early access and special launch perks.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 h-12 bg-background"
                />
                <Button variant="hero" size="lg" type="submit" className="sm:w-auto">
                  Join Waitlist
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative blur elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  );
};
