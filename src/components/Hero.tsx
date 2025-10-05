import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div ref={heroRef} className="text-center opacity-0 max-w-4xl">
        <div className="mb-8 inline-block">
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </div>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-6 tracking-tight">
          Tran Ngoc<br />Minh Han
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-12">
          graphic designer / illustrator
        </p>
        
        <div className="flex gap-3 justify-center items-center">
          <div className="w-12 h-12 rounded-full bg-primary/20"></div>
          <div className="w-8 h-8 rounded-full bg-accent/40"></div>
          <div className="w-16 h-16 rounded-full bg-secondary/60"></div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-primary hover:text-primary/70 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
