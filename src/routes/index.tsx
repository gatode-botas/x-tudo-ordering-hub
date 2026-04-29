import { createFileRoute } from "@tanstack/react-router";
import { Flame, MapPin, Clock, Phone, Instagram, MessageCircle } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";
import burgerTradicional from "@/assets/burger-tradicional.jpg";
import burgerBacon from "@/assets/burger-bacon.jpg";
import burgerFrango from "@/assets/burger-frango.jpg";
import burgerMonstro from "@/assets/burger-monstro.jpg";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "X Tudo da Galera — O sabor que junta a galera" },
      {
        name: "description",
        content:
          "Hambúrgueres artesanais em destaque. Peça já pelo WhatsApp e receba o sabor que junta a galera. Promoção do dia: X Tudo + Batata por R$20.",
      },
      { property: "og:title", content: "X Tudo da Galera — Hamburgueria" },
      { property: "og:description", content: "O sabor que junta a galera. Peça já pelo WhatsApp." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const menu: MenuItem[] = [
  {
    name: "X Tudo Tradicional",
    description: "Pão brioche, hambúrguer 150g, queijo, alface, tomate, ovo e molho da casa.",
    price: "R$ 22",
    image: burgerTradicional,
  },
  {
    name: "X Bacon Supremo",
    description: "Duplo hambúrguer, cheddar cremoso, bacon crocante e cebola caramelizada.",
    price: "R$ 28",
    image: burgerBacon,
  },
  {
    name: "X Frango Crocante",
    description: "Filé de frango empanado, alface americana, maionese verde e queijo.",
    price: "R$ 24",
    image: burgerFrango,
  },
  {
    name: "X Tudo Monstro",
    description: "Triplo hambúrguer, bacon, ovo, cheddar, calabresa, onion rings. Coragem!",
    price: "R$ 39",
    image: burgerMonstro,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Promo Marquee */}
      <div className="bg-[var(--yellow)] text-primary-foreground py-2.5 overflow-hidden border-b-4 border-black">
        <div className="flex whitespace-nowrap promo-marquee font-bold text-sm md:text-base">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-8 flex items-center gap-2">
              🔥 PROMOÇÃO DO DIA: X Tudo + Batata por R$20 🍔 PEÇA AGORA NO WHATSAPP 🔥
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold tracking-wider">
              X TUDO <span className="text-[var(--yellow)]">DA GALERA</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#cardapio" className="hover:text-[var(--yellow)] transition-colors">CARDÁPIO</a>
            <a href="#promo" className="hover:text-[var(--yellow)] transition-colors">PROMOÇÕES</a>
            <a href="#contato" className="hover:text-[var(--yellow)] transition-colors">CONTATO</a>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[var(--yellow)] text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-4 h-4" /> Pedir
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.85_0.18_95/0.15),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-card border border-[var(--yellow)]/40 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6">
              <Flame className="w-4 h-4 text-[var(--yellow)]" />
              Hamburgueria artesanal
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-4">
              X TUDO
              <br />
              <span className="text-[var(--yellow)]">DA GALERA</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 italic">
              "O sabor que junta a galera"
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[var(--yellow)] text-primary-foreground px-6 md:px-10 py-4 md:py-5 rounded-xl text-base md:text-xl font-bold w-full sm:w-auto hover:scale-105 active:scale-95 transition-transform animate-pulse-yellow"
              style={{ boxShadow: "var(--shadow-yellow)" }}
            >
              <MessageCircle className="w-6 h-6" />
              PEDIR AGORA NO WHATSAPP
            </a>
            <div className="flex flex-wrap gap-6 mt-8 justify-center md:justify-start text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[var(--yellow)]" /> Entrega rápida</span>
              <span className="flex items-center gap-2"><Flame className="w-4 h-4 text-[var(--yellow)]" /> 100% artesanal</span>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-[var(--yellow)] rounded-full blur-3xl opacity-30" />
            <img
              src={heroBurger}
              alt="Hambúrguer artesanal X Tudo da Galera com bacon, queijo derretido e alface"
              width={1024}
              height={1024}
              className="relative w-full max-w-md mx-auto animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Promo Highlight */}
      <section id="promo" className="px-4 md:px-8 py-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[var(--yellow)] to-[var(--yellow-glow)] rounded-3xl p-6 md:p-10 text-primary-foreground relative overflow-hidden">
          <div className="absolute -top-10 -right-10 text-[200px] opacity-10">🔥</div>
          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="text-6xl md:text-8xl">🔥</div>
            <div className="flex-1 text-center md:text-left">
              <div className="text-xs md:text-sm font-bold tracking-widest mb-2">PROMOÇÃO DO DIA</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2">X TUDO + BATATA</h2>
              <p className="text-lg md:text-xl font-semibold">por apenas <span className="text-4xl md:text-6xl font-bold">R$20</span></p>
            </div>
            <a
              href={whatsappLink("Olá! Quero a promoção: X Tudo + Batata por R$20")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-[var(--yellow)] px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform whitespace-nowrap"
            >
              QUERO ESSA!
            </a>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="cardapio" className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[var(--yellow)] font-bold tracking-widest text-sm mb-2">NOSSO CARDÁPIO</div>
            <h2 className="text-4xl md:text-6xl font-bold">ESCOLHE O TEU <span className="text-[var(--yellow)]">FAVORITO</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menu.map((item) => (
              <article
                key={item.name}
                className="group bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:border-[var(--yellow)]/60 transition-all hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{item.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-[var(--yellow)]">{item.price}</span>
                  </div>
                  <a
                    href={whatsappLink(`Olá, quero fazer um pedido: ${item.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[var(--yellow)] text-primary-foreground py-3 rounded-lg font-bold text-sm hover:bg-[var(--yellow-glow)] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Pedir no WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-5xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">FICOU COM <span className="text-[var(--yellow)]">FOME?</span></h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Faça seu pedido agora pelo WhatsApp e receba o melhor X Tudo da cidade na sua casa.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--yellow)] text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
            style={{ boxShadow: "var(--shadow-yellow)" }}
          >
            <MessageCircle className="w-6 h-6" /> PEDIR AGORA
          </a>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[var(--yellow)] font-bold tracking-widest text-sm mb-2">FALE COM A GENTE</div>
            <h2 className="text-4xl md:text-6xl font-bold">VENHA <span className="text-[var(--yellow)]">NOS VISITAR</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto bg-[var(--yellow)]/15 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-[var(--yellow)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">ENDEREÇO</h3>
              <p className="text-muted-foreground text-sm">
                Rua dos Hambúrgueres, 123<br />
                Centro — Sua Cidade<br />
                CEP 00000-000
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto bg-[var(--yellow)]/15 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-[var(--yellow)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">HORÁRIO</h3>
              <p className="text-muted-foreground text-sm">
                Terça a Domingo<br />
                <span className="text-foreground font-semibold">18h às 23h30</span><br />
                Segunda fechado
              </p>
            </div>
            <div className="bg-[var(--yellow)] text-primary-foreground rounded-2xl p-6 text-center flex flex-col">
              <div className="w-14 h-14 mx-auto bg-black/10 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">WHATSAPP</h3>
              <p className="text-sm mb-4 flex-1 opacity-80">
                Atendimento rápido e pedido fácil. Bora?
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-[var(--yellow)] py-3 rounded-lg font-bold hover:scale-105 transition-transform"
              >
                CHAMAR NO ZAP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 px-4 md:px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
          <div className="font-bold text-foreground">
            X TUDO <span className="text-[var(--yellow)]">DA GALERA</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--yellow)]"><Phone className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[var(--yellow)]"><Instagram className="w-5 h-5" /></a>
          </div>
          <div>© {new Date().getFullYear()} X Tudo da Galera. Todos os direitos reservados.</div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-[var(--yellow)] text-primary-foreground p-4 rounded-full animate-pulse-yellow hover:scale-110 transition-transform"
        style={{ boxShadow: "var(--shadow-yellow)" }}
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
