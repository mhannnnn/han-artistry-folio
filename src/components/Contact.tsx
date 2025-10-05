import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-card">
      <div ref={contactRef} className="max-w-5xl mx-auto opacity-0">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
            Let's Create Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-background hover:bg-secondary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">hello@minhhan.design</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-background hover:bg-secondary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">Available for remote work worldwide</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/20">
              <p className="text-lg text-foreground mb-4 font-medium">Open for opportunities</p>
              <p className="text-muted-foreground">
                Currently accepting freelance projects and collaborations. Let's make something amazing together!
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="h-12 rounded-xl border-2 focus:border-primary transition-colors"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="h-12 rounded-xl border-2 focus:border-primary transition-colors"
              />
            </div>

            <div>
              <Textarea
                placeholder="Tell me about your project..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="min-h-[150px] rounded-xl border-2 focus:border-primary transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium group"
            >
              <span>Send Message</span>
              <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
