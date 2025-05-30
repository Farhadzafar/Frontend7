import { Star } from "lucide-react";
import { Button } from "./ui/button";
interface CallToActionProps {
  title: string;
  description: string;
  action: string;
}

export default function CallToAction({
  title,
  description,
  action,
}: CallToActionProps) {
  return (
    <div className="py-20 bg-gradient-to-br from-primary/70 to-secondary/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/908055/pexels-photo-908055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
            <p className="text-white/90 text-lg mb-8">{description}</p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                {action}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 bg-transparent"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Why Choose Us?
            </h3>
            <div className="space-y-4">
              {[
                "Qualified and verified scholars",
                "Flexible learning schedules",
                "Interactive live sessions",
                "Comprehensive study materials",
                "Supportive learning community",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
