import { Card, CardContent } from "@/components/ui/card";
import dividerImage from "@assets/generated_images/Islamic_geometric_divider_f5b87287.png";

export default function AboutSection() {
  return (
    <section 
      className="py-16 lg:py-24 bg-background"
      id="about"
      data-testid="section-about"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="font-serif text-3xl lg:text-4xl font-bold text-center text-foreground mb-6"
            data-testid="text-about-title"
          >
            عن أكاديمية البيان
          </h2>
          
          <div className="flex justify-center mb-8">
            <img 
              src={dividerImage} 
              alt="زخرفة إسلامية" 
              className="h-8 opacity-70"
              data-testid="img-divider"
            />
          </div>

          <Card className="shadow-md">
            <CardContent className="p-8 lg:p-12">
              <p 
                className="text-lg leading-relaxed text-foreground/90 text-center"
                data-testid="text-about-content"
              >
                أكاديمية البيان هي مؤسسة متخصصة عبر الإنترنت في تعليم وحفظ القرآن الكريم. نسعى لنشر نور القرآن في جميع أنحاء العالم من خلال تقديم تجارب تعليمية عالية الجودة يسهل الوصول إليها للطلاب من جميع الأعمار. نؤمن بأن كل مسلم يستحق فرصة التواصل مع كلام الله من خلال معلمين مؤهلين وبرامج دراسية متقنة.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
