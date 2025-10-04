import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Target, Shield, Clock, Zap, Brain, Lock } from "lucide-react";
import habitIcon from "@/assets/habit-icon.png";
import blockerIcon from "@/assets/blocker-icon.png";
import timerIcon from "@/assets/timer-icon.png";

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LearnMoreModal = ({ isOpen, onClose }: LearnMoreModalProps) => {
  const features = [
    {
      icon: habitIcon,
      title: "Habit Tracker",
      description: "Build powerful routines and track your progress with beautiful, intuitive habit tracking that keeps you motivated.",
      benefits: ["Visual progress tracking", "Streak counters", "Custom reminders", "Achievement badges"],
      color: "from-primary to-primary-dark",
    },
    {
      icon: blockerIcon,
      title: "App Blocker",
      description: "Take control of your time by blocking distracting apps when you need to focus. Set custom schedules and stay on track.",
      benefits: ["Smart blocking schedules", "Emergency override", "Focus mode activation", "Usage analytics"],
      color: "from-secondary to-primary",
    },
    {
      icon: timerIcon,
      title: "Focus Timer",
      description: "Boost productivity with customizable focus sessions. Use proven techniques like Pomodoro to maximize your concentration.",
      benefits: ["Pomodoro technique", "Custom intervals", "Break reminders", "Session history"],
      color: "from-primary to-secondary",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-2 border-primary/10">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl font-black flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center shadow-md">
                <Target className="w-6 h-6 text-white" />
              </div>
              Why Choose Locked In?
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full hover:bg-muted"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Monk Mode Explanation */}
          <Card className="gradient-card border-2 border-primary/20 p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center shadow-glow">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">What is Monk Mode?</h3>
                <p className="text-muted-foreground">Enter a state of deep focus and productivity</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-primary">Monk Mode</span> is a powerful productivity technique where you eliminate all distractions and focus entirely on your most important tasks. It's about creating a sacred space for deep work, free from the constant interruptions of modern life.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    The Science
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Research shows it takes 23 minutes to fully refocus after an interruption. Monk Mode eliminates these costly context switches.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    The Result
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Users report 3x productivity increases and significantly reduced stress when practicing Monk Mode regularly.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Why Use Locked In */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">
              Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Locked In</span>?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center space-y-4 border-2 border-primary/10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-lg">Privacy First</h4>
                <p className="text-sm text-muted-foreground">
                  Your data stays on your device. No tracking, no ads, no data collection.
                </p>
              </Card>
              
              <Card className="p-6 text-center space-y-4 border-2 border-primary/10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-lg">Proven Methods</h4>
                <p className="text-sm text-muted-foreground">
                  Built on scientifically-backed productivity techniques like Pomodoro and habit stacking.
                </p>
              </Card>
              
              <Card className="p-6 text-center space-y-4 border-2 border-primary/10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-lg">Results Driven</h4>
                <p className="text-sm text-muted-foreground">
                  Join thousands who've transformed their productivity and achieved their goals.
                </p>
              </Card>
            </div>
          </div>

          {/* Detailed Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">
              Powerful Features for <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Maximum Focus</span>
            </h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card key={index} className="gradient-card border-2 border-primary/10 p-6 hover:shadow-glow transition-smooth">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 rounded-xl blur-xl`} />
                      <img 
                        src={feature.icon} 
                        alt={`${feature.title} icon`}
                        className="relative w-20 h-20 object-contain"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold">{feature.title}</h4>
                        <p className="text-muted-foreground text-lg">{feature.description}</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="gradient-card border-2 border-primary/20 p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold">Ready to Enter Monk Mode?</h3>
            <p className="text-muted-foreground">
              Join thousands of users who've transformed their productivity with Locked In.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => {
                  onClose();
                  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group"
              >
                Join the Waitlist
                <Target className="ml-2 w-5 h-5 group-hover:rotate-12 transition-smooth" />
              </Button>
              <Button variant="outline" size="lg" onClick={onClose}>
                Learn More Later
              </Button>
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};
