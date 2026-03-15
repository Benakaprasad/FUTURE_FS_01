import { Download } from 'lucide-react';
import photo from '@/assets/photo.jpeg';

const HomePage = () => {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="relative group flex-shrink-0">
          <div className="absolute -inset-1.5 bg-gradient-to-br from-primary to-accent rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
          <img
            src={photo}
            alt="Benaka Prasad M"
            className="relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border-4 border-card shadow-2xl"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm md:text-base font-sans font-medium tracking-widest uppercase text-primary mb-2 opacity-80">
            Full Stack Developer
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
            Benaka Prasad M
          </h1>
          <a
            href="/resume.pdf"
            download="Benaka_Prasad_M_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-sans font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>

      <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />

      {/* Professional Summary */}
      <div>
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-5">
          Professional Summary
        </h3>
        <div className="space-y-4 font-sans">
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            Full Stack Developer with hands-on experience building secure, role-based web applications
            from the ground up — designing REST APIs, JWT authentication systems, and relational
            database schemas in Node.js and PostgreSQL, through to interactive frontend interfaces
            in React.js.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            My projects span the full request lifecycle: a Gym Management System with Admin, Trainer,
            and Customer role separation; a real-time Bingo game with WebSocket-driven multiplayer
            rooms; and a Child Vaccination Reminder system integrating Twilio and Gmail OAuth2 for
            automated multi-channel notifications.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            I focus on building systems that are predictable and maintainable — with clean API
            contracts, indexed schemas, and frontend interfaces that consume them reliably. This
            portfolio is itself a product of that approach.
          </p>
        </div>
      </div>

      <div className="glass-card p-5 md:p-6 border-l-4 border-primary font-sans">
        <p className="text-sm md:text-base text-foreground leading-relaxed">
          <span className="font-semibold text-primary">💡 Interactive Tip:</span> Try clicking on the owl in different modes! In dark mode, the owl stays awake and alert. In light mode, it prefers to rest peacefully.
        </p>
      </div>
    </div>
  );
};

export default HomePage;