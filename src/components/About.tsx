import { useEffect, useRef } from 'react';
const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, {
      threshold: 0.1
    });
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-card">
      <div ref={aboutRef} className="max-w-4xl mx-auto opacity-0">
        <div className="mb-12">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">About Me</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-4 mb-8">
            Creative Soul
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate graphic designer and illustrator who believes in the power of visual storytelling. 
              My work blends modern aesthetics with playful, organic elements to create designs that resonate.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a keen eye for detail and a love for experimentation, I specialize in creating unique visual 
              identities, illustrations, and designs that bring ideas to life.
            </p>
            
            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground">Brand Identity Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-foreground">Digital Illustration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="text-foreground">Print & Poster Design</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/40 relative overflow-hidden bg-fuchsia-200">
              <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-primary/30"></div>
              <div className="absolute bottom-12 left-8 w-32 h-32 rounded-full bg-accent/30"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-card/50 backdrop-blur-sm flex items-center justify-center">
                <span className="text-6xl">
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;