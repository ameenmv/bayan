import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "الدروس قربتني من القرآن الكريم بشكل لم أتخيله من قبل. المعلمون متمكنون والبيئة التعليمية محفزة ومريحة.",
      author: "عائشة",
      location: "مصر",
    },
    {
      quote: "تجربة ملهمة غيرت علاقتي بكتاب الله. الجمع بين التقنية الحديثة والتعليم الأصيل جعل التعلم سهلاً وممتعاً.",
      author: "عمر",
      location: "المملكة المتحدة",
    },
  ];

  return (
    <section 
      className="py-16 lg:py-24 bg-background"
      data-testid="section-testimonials"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="font-serif text-3xl lg:text-4xl font-bold text-center text-foreground mb-12"
          data-testid="text-testimonials-title"
        >
          ماذا يقول طلابنا
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-elevate transition-all duration-300 shadow-md"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-accent mb-4" data-testid={`icon-quote-${index}`} />
                <p 
                  className="text-foreground/90 leading-relaxed mb-6 text-lg"
                  data-testid={`text-testimonial-quote-${index}`}
                >
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground" data-testid={`text-testimonial-author-${index}`}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-location-${index}`}>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
