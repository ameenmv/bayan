import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CallToAction() {
  const handleEnroll = () => {
    console.log('Enroll button clicked');
  };
 
  return (
    <section 
      className="py-20 lg:py-28 bg-accent/20"
      id="join"
      data-testid="section-cta"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6"
            data-testid="text-cta-title"
          >
            انضم إلى أكاديمية البيان اليوم وابدأ رحلتك مع القرآن
          </h2>
          <p 
            className="text-lg text-foreground/80 mb-8"
            data-testid="text-cta-subtitle"
          >
            استثمر في آخرتك وابدأ مسيرة التعلم مع نخبة من المعلمين المتخصصين
          </p>
          <Button 
            size="lg"
            onClick={handleEnroll}
            className="group text-lg px-8 shadow-lg hover:shadow-xl transition-all"
            data-testid="button-enroll"
          >
            سجّل الآن
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
