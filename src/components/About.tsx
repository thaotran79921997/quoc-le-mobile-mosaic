import { Card, CardContent } from "@/components/ui/card";
import { Code2, Smartphone, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="reveal">
            <CardContent className="pt-6">
              <div className="text-primary mb-4">
                <Smartphone className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
              <p className="text-gray-600">
                Specialized in creating native and cross-platform mobile applications
                that deliver exceptional user experiences.
              </p>
            </CardContent>
          </Card>
          <Card className="reveal">
            <CardContent className="pt-6">
              <div className="text-primary mb-4">
                <Code2 className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clean Code</h3>
              <p className="text-gray-600">
                Writing maintainable, scalable, and efficient code following best
                practices and design patterns.
              </p>
            </CardContent>
          </Card>
          <Card className="reveal">
            <CardContent className="pt-6">
              <div className="text-primary mb-4">
                <Rocket className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-gray-600">
                Optimizing applications for speed and reliability while maintaining
                a smooth user experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};