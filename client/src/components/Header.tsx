import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/WhatsApp Image 2025-11-01 at 14.24.55_522d9a97_1762002511365.jpg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "الرئيسية", href: "#home" },
    { label: "من نحن", href: "#about" },
    { label: "البرامج", href: "#programs" },
    { label: "انضم إلينا", href: "#join" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <a href="#home" className="flex items-center gap-3" data-testid="link-logo">
              <img 
                src={logoImage} 
                alt="أكاديمية البيان" 
                className="h-12 w-12 rounded-md object-contain"
                data-testid="img-logo"
              />
              <span className="font-serif text-lg font-bold text-foreground hidden sm:inline-block" data-testid="text-logo">
                أكاديمية البيان
              </span>
            </a>
            
            <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover-elevate rounded-md transition-all relative group"
                  data-testid={`link-nav-${item.label}`}
                >
                  {item.label}
                  <span className="absolute bottom-1 right-4 left-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                </a>
              ))}
            </nav>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-card" data-testid="nav-mobile">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-foreground/80 hover-elevate rounded-md"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.label}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
