import heroImage from "@assets/generated_images/Open_Quran_hero_image_6083a118.png";

export default function Hero() {
  return (
    <section 
      className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden"
      id="home"
      data-testid="section-hero"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/80" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
          data-testid="text-hero-title"
        >
          نور لقلبك، ورفعة في دنياك وآخرتك
        </h1>
        <p 
          className="text-xl sm:text-2xl text-primary-foreground/90 font-light"
          data-testid="text-hero-subtitle"
        >
          A light for your heart, and an elevation in this life and the Hereafter.
        </p>
      </div>
    </section>
  );
}
