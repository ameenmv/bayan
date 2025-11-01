import { Phone, Globe, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="bg-primary text-primary-foreground py-12"
      id="contact"
      data-testid="section-footer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-right">
            <h3 className="font-serif text-xl font-bold mb-4" data-testid="text-footer-contact-title">
              تواصل معنا
            </h3>
            <div className="space-y-3">
              <a 
                href="tel:+966509043367" 
                className="flex items-center justify-center md:justify-end gap-2 hover-elevate p-2 rounded-md"
                data-testid="link-phone-1"
              >
                <span className="text-accent">+966509043367</span>
                <Phone className="h-4 w-4 text-accent" />
              </a>
              <a 
                href="tel:+9660571474369" 
                className="flex items-center justify-center md:justify-end gap-2 hover-elevate p-2 rounded-md"
                data-testid="link-phone-2"
              >
                <span className="text-accent">+9660571474369</span>
                <Phone className="h-4 w-4 text-accent" />
              </a>
              <a 
                href="https://www.albayanacademy.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 hover-elevate p-2 rounded-md"
                data-testid="link-website"
              >
                <span className="text-accent">www.albayanacademy.com</span>
                <Globe className="h-4 w-4 text-accent" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-serif text-xl font-bold mb-4" data-testid="text-footer-links-title">
              روابط سريعة
            </h3>
            <div className="space-y-2">
              <a href="#home" className="block hover-elevate p-2 rounded-md" data-testid="link-footer-home">
                الرئيسية
              </a>
              <a href="#about" className="block hover-elevate p-2 rounded-md" data-testid="link-footer-about">
                من نحن
              </a>
              <a href="#programs" className="block hover-elevate p-2 rounded-md" data-testid="link-footer-programs">
                البرامج
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-bold mb-4" data-testid="text-footer-social-title">
              تابعنا
            </h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="#" 
                className="p-2 hover-elevate rounded-md transition-all"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="h-6 w-6 text-accent" />
              </a>
              <a 
                href="#" 
                className="p-2 hover-elevate rounded-md transition-all"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter className="h-6 w-6 text-accent" />
              </a>
              <a 
                href="#" 
                className="p-2 hover-elevate rounded-md transition-all"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="h-6 w-6 text-accent" />
              </a>
              <a 
                href="#" 
                className="p-2 hover-elevate rounded-md transition-all"
                aria-label="YouTube"
                data-testid="link-youtube"
              >
                <Youtube className="h-6 w-6 text-accent" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80" data-testid="text-copyright">
            © 2025 أكاديمية البيان - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
