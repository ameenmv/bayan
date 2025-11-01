import globeImage from "@assets/generated_images/World_globe_illustration_d8ee149e.png";

export default function GlobalLearning() {
  return (
    <section 
      className="py-16 lg:py-24 bg-muted/30"
      data-testid="section-global"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <img 
              src={globeImage} 
              alt="التعلم العالمي" 
              className="w-full max-w-md h-auto"
              data-testid="img-globe"
            />
          </div>

          <div className="order-1 md:order-2 text-center md:text-right">
            <h2 
              className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6"
              data-testid="text-global-title"
            >
              تعلّم من أي مكان في العالم
            </h2>
            <p 
              className="text-lg leading-relaxed text-foreground/80 mb-6"
              data-testid="text-global-content"
            >
              انضم إلى آلاف الطلاب من مختلف أنحاء العالم الذين يتعلمون القرآن الكريم من خلال جلسات مباشرة عبر الإنترنت مع جداول زمنية مرنة تناسب أوقاتك.
            </p>
            <p 
              className="text-foreground/70"
              data-testid="text-global-detail"
            >
              نوفر لك بيئة تعليمية تفاعلية مع أحدث التقنيات التعليمية، حيث يمكنك التواصل مباشرة مع معلمك والاستفادة من الموارد التعليمية المتنوعة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
