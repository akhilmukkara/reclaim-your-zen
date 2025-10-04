import { Card } from "@/components/ui/card";
import habitIcon from "@/assets/habit-icon.png";
import blockerIcon from "@/assets/blocker-icon.png";
import timerIcon from "@/assets/timer-icon.png";

const features = [
  {
    icon: habitIcon,
    title: "Habit Tracker",
    description: "Build powerful routines and track your progress with beautiful, intuitive habit tracking that keeps you motivated.",
    color: "from-primary to-primary-dark",
  },
  {
    icon: blockerIcon,
    title: "App Blocker",
    description: "Take control of your time by blocking distracting apps when you need to focus. Set custom schedules and stay on track.",
    color: "from-secondary to-primary",
  },
  {
    icon: timerIcon,
    title: "Focus Timer",
    description: "Boost productivity with customizable focus sessions. Use proven techniques like Pomodoro to maximize your concentration.",
    color: "from-primary to-secondary",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Stay Focused
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful tools designed to help you break free from distractions and achieve your goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="gradient-card shadow-card hover:shadow-glow transition-smooth p-8 space-y-6 group cursor-pointer border-0"
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 rounded-xl blur-xl group-hover:opacity-20 transition-smooth`} />
                <img 
                  src={feature.icon} 
                  alt={`${feature.title} icon`}
                  className="relative w-16 h-16 object-contain group-hover:scale-110 transition-smooth"
                />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
