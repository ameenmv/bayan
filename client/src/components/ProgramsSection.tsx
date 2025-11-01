import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, BookMarked, Compass } from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      icon: BookOpen,
      title: "حفظ القرآن الكريم",
      description: "لجميع الأعمار، بإشراف معلمين معتمدين في القراءات العشر. برامج مخصصة تناسب قدرات كل طالب.",
    },
    {
      icon: BookMarked,
      title: "دورات التجويد والتفسير",
      description: "عمّق فهمك للقرآن الكريم من خلال دراسة أحكام التجويد وتفسير الآيات على أيدي علماء متخصصين.",
    },
    {
      icon: Compass,
      title: "العقيدة والعلوم الإسلامية",
      description: "بناء أساس قوي في العقيدة والفقه والسيرة النبوية لتكوين شخصية إسلامية متوازنة.",
    },
  ];

  return (
    <section 
      className="py-16 lg:py-24 bg-background"
      id="programs"
      data-testid="section-programs"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="font-serif text-3xl lg:text-4xl font-bold text-center text-foreground mb-4"
          data-testid="text-programs-title"
        >
          ما نقدمه
        </h2>
        <p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          data-testid="text-programs-subtitle"
        >
          برامج تعليمية شاملة مصممة لتلبية احتياجاتك الروحية والعلمية
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="hover-elevate transition-all duration-300 border-t-4 border-t-accent shadow-md"
              data-testid={`card-program-${index}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <program.icon className="h-10 w-10 text-primary" data-testid={`icon-program-${index}`} />
                  </div>
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-foreground/80 leading-relaxed" data-testid={`text-program-${index}`}>
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
