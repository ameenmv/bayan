import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Globe } from "lucide-react";

export default function MissionVision() {
  return (
    <section 
      className="py-16 lg:py-24 bg-muted/30"
      data-testid="section-mission-vision"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="hover-elevate transition-all duration-300 shadow-md" data-testid="card-mission">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Heart className="h-12 w-12 text-primary" data-testid="icon-mission" />
                </div>
              </div>
              <CardTitle className="font-serif text-2xl">مهمتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-foreground/80 leading-relaxed" data-testid="text-mission">
                إلهام القلوب من خلال تلاوة القرآن الكريم وحفظه وفهمه. نسعى لتوفير بيئة تعليمية محفزة تجمع بين الأصالة والمعاصرة لخدمة كتاب الله.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all duration-300 shadow-md" data-testid="card-vision">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Globe className="h-12 w-12 text-primary" data-testid="icon-vision" />
                </div>
              </div>
              <CardTitle className="font-serif text-2xl">رؤيتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-foreground/80 leading-relaxed" data-testid="text-vision">
                أن نصبح منصة عالمية تربط المسلمين بكلام الله في أي وقت وفي أي مكان. نطمح لنكون المرجع الأول في تعليم القرآن الكريم عبر الإنترنت.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
