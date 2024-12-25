import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <Card>
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Input placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Your Email" required />
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Your Message" className="min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};