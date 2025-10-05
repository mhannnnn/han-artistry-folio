import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioCategory {
  title: string;
  description: string;
  color: string;
  icon: string;
}

const categories: PortfolioCategory[] = [
  {
    title: 'Design for Club',
    description: 'Creative designs for clubs, events, and organizations with vibrant energy and unique identity.',
    color: 'from-primary/20 to-primary/5',
    icon: '🎨',
  },
  {
    title: 'Artworks',
    description: 'Personal illustrations and artistic explorations that showcase creativity and imagination.',
    color: 'from-accent/20 to-accent/5',
    icon: '🖌️',
  },
  {
    title: 'Posters',
    description: 'Eye-catching poster designs that communicate messages with bold visuals and typography.',
    color: 'from-secondary/40 to-secondary/10',
    icon: '📐',
  },
];

const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

    if (portfolioRef.current) {
      const cards = portfolioRef.current.querySelectorAll('.portfolio-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div ref={portfolioRef} className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
            Selected Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of my favorite projects across different creative domains
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="portfolio-card opacity-0 group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-full">
                <div
                  className={`
                    bg-gradient-to-br ${category.color} 
                    rounded-3xl p-8 h-full 
                    transition-all duration-500 ease-out
                    border-2 border-transparent
                    ${hoveredIndex === index ? 'scale-105 border-primary/20 shadow-2xl' : 'hover:scale-[1.02]'}
                  `}
                >
                  <div className="mb-6 text-5xl transform transition-transform duration-300 group-hover:scale-110">
                    {category.icon}
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    <span className="text-sm">View Projects</span>
                    <ExternalLink size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-card/30 opacity-0 group-hover:opacity-100 transition-opacity delay-75"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
