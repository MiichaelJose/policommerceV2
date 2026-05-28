import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, List, X, Truck, Users, Trophy,
  ChatCircle, Star, CheckCircle, Package, Plant
} from '@phosphor-icons/react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleMobileLinkClick = () => setMobileMenuOpen(false);

  // Motion variants for staggered reveals (MOTION_INTENSITY 6)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1.0, 0.32, 1] as const } }
  };

  return (
    <div className="text-zinc-200 bg-zinc-950 antialiased selection:bg-accent-500 selection:text-white flex flex-col min-h-screen">
      {/* Fixed grain overlay */}
      <div className="grain" />

      {/* Navbar - darker, tighter */}
      <header className="fixed w-full top-0 z-50 bg-zinc-950/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src="/logov2.jpg" alt="PoliCommerce" className="h-9 w-auto" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-9 text-sm font-medium">
              <a href="#inicio" className="hover:text-accent-500 transition-colors focus-ring">Para Revendedores</a>
              <a href="#produtos" className="hover:text-accent-500 transition-colors focus-ring">Produtos</a>
              <a href="#vantagens" className="hover:text-accent-500 transition-colors focus-ring">Vantagens</a>
              <a href="#contato" className="hover:text-accent-500 transition-colors focus-ring">Contato</a>
            </nav>

            <div className="hidden md:block">
              <a href="#contato" className="inline-flex items-center gap-2 bg-white text-zinc-950 px-5 py-2 rounded-full text-sm font-semibold hover:bg-accent-500 hover:text-white active:scale-[0.985] transition-all focus-ring">
                Quero revender <ArrowRight weight="bold" className="w-4 h-4" />
              </a>
            </div>

            <button onClick={handleMobileMenuToggle} className="md:hidden p-2 text-white focus-ring" aria-label="Menu">
              {mobileMenuOpen ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-zinc-950 border-t border-white/10 overflow-hidden transition-all ${mobileMenuOpen ? 'max-h-80' : 'max-h-0'}`}>
          <div className="px-6 py-6 space-y-1 text-base font-medium">
            {['inicio','produtos','vantagens','contato'].map((id,i) => (
              <a key={i} href={`#${id}`} onClick={handleMobileLinkClick} className="block py-3 text-white/90 hover:text-accent-500">{id === 'inicio' ? 'Para Revendedores' : id.charAt(0).toUpperCase()+id.slice(1)}</a>
            ))}
            <a href="#contato" onClick={handleMobileLinkClick} className="block mt-4 bg-white text-zinc-950 text-center py-3 rounded-full font-semibold">Quero revender</a>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {/* HERO — Asymmetric (DESIGN_VARIANCE 7-8) */}
        <section id="inicio" className="relative min-h-[100dvh] flex items-center overflow-hidden border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-12 pb-20">
            <div className="grid lg:grid-cols-12 gap-x-8 items-center">
              {/* Left content - offset */}
              <div className="lg:col-span-7 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 text-accent-500 text-xs tracking-[3px] font-mono mb-8 border border-white/10">
                  ATACADO EXCLUSIVO PARA LOJISTAS
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-7xl font-extrabold tracking-[-3.2px] leading-[0.92] mb-8 text-white">
                  Utilidades que<br />giram. Margens<br />que valem.
                </h1>

                <p className="max-w-[42ch] text-xl text-white/70 mb-10">
                  Canecas, potes e vasos direto da fábrica. Pronta entrega, condições de atacado e suporte feito para quem revende.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#produtos" className="inline-flex justify-center items-center gap-3 bg-accent-500 hover:bg-accent-600 active:scale-[0.985] text-white px-8 py-4 rounded-full text-base font-semibold transition-all focus-ring">
                    Ver produtos para revenda <ArrowRight weight="bold" />
                  </a>
                  <a href="#vantagens" className="inline-flex justify-center items-center gap-3 border border-white/20 hover:bg-white/5 px-8 py-4 rounded-full text-base font-medium transition-all focus-ring">
                    Como funciona
                  </a>
                </div>

                <div className="mt-12 flex items-center gap-8 text-sm text-white/60 font-medium tabular-nums">
                  <div className="flex items-center gap-2"><CheckCircle weight="fill" className="text-accent-500" /> Margens até 150%</div>
                  <div className="flex items-center gap-2"><CheckCircle weight="fill" className="text-accent-500" /> +10 mil envios</div>
                </div>
              </div>

              {/* Right visual — Premium integrated notebook with orbiting marketplaces */}
              <div className="lg:col-span-5 mt-12 lg:mt-0 lg:-mr-8 relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[520px]">
                  {/* Orbiting Marketplaces Container (behind laptop) */}
                  <div className="absolute -inset-8 z-10 hidden lg:block">
                    <div className="relative w-full h-full">
                      {/* Orbiting logos - slow elegant rotation */}
                      {[
                        { 
                          name: 'Shopee', 
                          type: 'img', 
                          src: 'https://cdn.simpleicons.org/shopee/ffffff', 
                          size: 42, top: '18%', left: '12%', delay: '0s', duration: '28s', opacity: 0.85 
                        },
                        { 
                          name: 'Mercado Livre', 
                          type: 'svg', 
                          svg: (
                            <svg viewBox="0 0 24 24" fill="white" width="38" height="38">
                              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-3-5H7v-2h10v2z"/>
                            </svg>
                          ), 
                          size: 38, top: '8%', left: '42%', delay: '-4s', duration: '32s', opacity: 0.75 
                        },
                        { 
                          name: 'Amazon', 
                          type: 'svg', 
                          svg: (
                            <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                              <path d="M.045 18.02c.072-.116.187-.124.332-.124 1.653 0 3.18.932 4.307 2.24.2.23.3.3.5.3.2 0 .3-.07.5-.3 1.127-1.308 2.654-2.24 4.307-2.24.145 0 .26.008.332.124.072.116.072.3 0 .416-.072.116-.187.124-.332.124-1.653 0-3.18-.932-4.307-2.24-.2-.23-.3-.3-.5-.3-.2 0-.3.07-.5.3-1.127 1.308-2.654 2.24-4.307 2.24-.145 0-.26-.008-.332-.124-.072-.116-.072-.3 0-.416z"/>
                              <path d="M15.93 8.5c-.2-.3-.5-.5-.9-.5s-.7.2-.9.5l-1.4 2.1-1.4-2.1c-.2-.3-.5-.5-.9-.5s-.7.2-.9.5l-2.3 3.4c-.2.3-.2.7 0 1 .2.3.5.5.9.5s.7-.2.9-.5l1.4-2.1 1.4 2.1c.2.3.5.5.9.5s.7-.2.9-.5l2.3-3.4c.2-.3.2-.7 0-1z"/>
                            </svg>
                          ), 
                          size: 40, top: '22%', left: '78%', delay: '-9s', duration: '26s', opacity: 0.8 
                        },
                        { 
                          name: 'TikTok Shop', 
                          type: 'img', 
                          src: 'https://cdn.simpleicons.org/tiktok/ffffff', 
                          size: 36, top: '68%', left: '82%', delay: '-15s', duration: '30s', opacity: 0.7 
                        },
                        { 
                          name: 'Kwai', 
                          type: 'svg', 
                          svg: (
                            <svg viewBox="0 0 24 24" fill="white" width="34" height="34">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          ), 
                          size: 34, top: '72%', left: '18%', delay: '-20s', duration: '34s', opacity: 0.75 
                        },
                      ].map((logo, index) => (
                        <div
                          key={index}
                          className="absolute"
                          style={{
                            top: logo.top,
                            left: logo.left,
                            animation: `orbit ${logo.duration} linear infinite`,
                            animationDelay: logo.delay,
                          }}
                        >
                          <div 
                            className="flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                            style={{ 
                              width: logo.size + 18, 
                              height: logo.size + 18,
                              opacity: logo.opacity 
                            }}
                          >
                            {logo.type === 'img' ? (
                              <img 
                                src={logo.src} 
                                alt={logo.name} 
                                width={logo.size} 
                                height={logo.size}
                                className="object-contain"
                              />
                            ) : (
                              logo.svg
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Laptop with video */}
                  <div 
                    className="relative w-full max-w-[520px] rotate-[1.2deg] lg:rotate-[2.5deg] transition-transform duration-700 z-20"
                    style={{
                      filter: 'drop-shadow(0 35px 55px rgba(0,0,0,0.55)) drop-shadow(0 15px 25px rgba(0,0,0,0.35))'
                    }}
                  >
                    {/* Laptop bezel + video */}
                    <div className="relative rounded-[2.25rem] bg-zinc-900 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(255,255,255,0.06)] border border-white/10">
                      <div className="relative aspect-[16/10] rounded-[1.35rem] overflow-hidden bg-black">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400"
                          className="absolute inset-0 w-full h-full object-cover"
                        >
                          <source src="/animacao.mp4" type="video/mp4" />
                        </video>
                        {/* Subtle screen glow + inner highlight */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/40 pointer-events-none" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.35rem] pointer-events-none" />
                      </div>
                    </div>

                    {/* Laptop base shadow / reflection */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[82%] h-8 bg-black/60 blur-2xl rounded-full pointer-events-none" />
                  </div>

                  {/* Stats badge — stays grounded */}
                  <div className="absolute -bottom-2 right-4 lg:right-8 bg-zinc-900 border border-white/10 rounded-2xl px-5 py-3.5 text-sm hidden lg:block z-30">
                    <div className="font-mono text-[10px] tracking-[2px] text-white/50 mb-0.5">ÚLTIMO MÊS</div>
                    <div className="text-white font-semibold tabular-nums">2.847 pedidos enviados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VANTAGENS — Asymmetric staggered cards (no timeline) */}
        <section id="vantagens" className="py-24 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-xl mb-16">
              <div className="text-accent-500 text-xs tracking-[3px] font-mono mb-3">POR QUE POLICOMMERCE</div>
              <h2 className="text-5xl font-extrabold tracking-[-1.5px] leading-none text-white">Vantagens reais.<br />Sem intermediário.</h2>
            </div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {[
                { icon: <Package weight="duotone" size={42} />, title: "Giro rápido garantido", desc: "Curadoria focada em itens de alta demanda diária. O que entra no seu estoque sai rápido." },
                { icon: <Truck weight="duotone" size={42} />, title: "Reposição sem dor", desc: "Estoque robusto + centro de distribuição eficiente. Pediu, chegou. Sem burocracia." },
                { icon: <Trophy weight="duotone" size={42} />, title: "Condições de atacado", desc: "Combos com preços progressivos e margens de até 150% para revendedores sérios." },
                { icon: <Users weight="duotone" size={42} />, title: "Suporte B2B real", desc: "Atendimento humanizado feito exclusivamente para lojistas. Entendemos seu nicho." },
                { icon: <Plant weight="duotone" size={42} />, title: "Envio nacional", desc: "Melhores transportadoras, rastreamento e segurança até a porta do seu estabelecimento." },
                { icon: <Star weight="duotone" size={42} />, title: "Qualidade que converte", desc: "Produtos com avaliações reais e alta recompra. Seus clientes voltam." }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-zinc-900 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-accent-500/40 transition-colors"
                >
                  <div className="text-accent-500 mb-8">{item.icon}</div>
                  <h3 className="text-2xl font-semibold tracking-tight mb-4 text-white">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed text-[15px]">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PRODUTOS — Asymmetric grid (2 + 1) + motion */}
        <section id="produtos" className="py-24 bg-zinc-900 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
              <div>
                <div className="text-accent-500 text-xs tracking-[3px] font-mono mb-3">LINHAS PARA REVENDA</div>
                <h2 className="text-5xl font-extrabold tracking-[-1.5px] text-white">Produtos que vendem sozinhos.</h2>
              </div>
              <a href="https://wa.me/5519990047324?text=Ol%C3%A1%21%20Gostaria%20de%20ver%20o%20cat%C3%A1logo%20de%20produtos." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-accent-500 hover:text-white font-semibold text-sm tracking-widest transition-colors">
                VER CATÁLOGO COMPLETO <ArrowRight />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6">
              {/* Large card - Vasos */}
              <motion.div whileHover={{ scale: 1.005 }} className="lg:col-span-7 group rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 flex flex-col">
                <div className="relative h-80">
                  <img src="/products/vasos-gem.png" alt="Vasos" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 text-zinc-950 text-xs font-semibold flex items-center gap-2">
                    <Plant weight="fill" /> JARDINAGEM
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="text-3xl font-semibold tracking-tight">Vasos &amp; Floreiras</h3>
                    <div className="flex items-center gap-1 text-sm text-white/60 tabular-nums"><Star weight="fill" className="text-amber-400" /> 4.9 <span className="text-white/40">(+20k)</span></div>
                  </div>
                  <p className="text-white/70 max-w-md">Parede verticais, mini vasos para suculentas e floreiras. Excelente saída em floriculturas e garden centers.</p>
                  <div className="mt-auto pt-6 text-sm text-accent-500 font-medium flex items-center gap-2">Alta rotatividade no varejo</div>
                </div>
              </motion.div>

              {/* Two stacked cards */}
              <div className="lg:col-span-5 space-y-6">
                {/* Potes */}
                <motion.div whileHover={{ scale: 1.005 }} className="group rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 flex flex-col">
                  <div className="relative h-48">
                    <img src="/products/pote-gem.png" alt="Potes" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-accent-500 text-white text-xs font-semibold flex items-center gap-2">
                      MAIS VENDIDO
                    </div>
                  </div>
                  <div className="p-8 flex-1">
                    <div className="flex items-baseline justify-between mb-3">
                      <h3 className="text-3xl font-semibold tracking-tight">Potes &amp; Marmitas</h3>
                      <div className="flex items-center gap-1 text-sm text-white/60 tabular-nums"><Star weight="fill" className="text-amber-400" /> 4.7</div>
                    </div>
                    <p className="text-white/70">Kits 750ml–1000ml com trava segura. Alta recompra no varejo.</p>
                  </div>
                </motion.div>

                {/* Canecas */}
                <motion.div whileHover={{ scale: 1.005 }} className="group rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 flex flex-col">
                  <div className="relative h-48">
                    <img src="/products/pratos-copos-gem.png" alt="Canecas" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 text-zinc-950 text-xs font-semibold flex items-center gap-2">
                      RECORRENTE
                    </div>
                  </div>
                  <div className="p-8 flex-1">
                    <div className="flex items-baseline justify-between mb-3">
                      <h3 className="text-3xl font-semibold tracking-tight">Canecas &amp; Pratos</h3>
                      <div className="flex items-center gap-1 text-sm text-white/60 tabular-nums"><Star weight="fill" className="text-amber-400" /> 4.7</div>
                    </div>
                    <p className="text-white/70">Plástico resistente para creches, merendas e personalização.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO / WHATSAPP — Strong conversion with motion */}
        <section id="contato" className="py-24 relative">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 text-xs tracking-[3px] font-mono mb-6 border border-white/10">
              ATENDIMENTO EXCLUSIVO PARA LOJISTAS
            </div>

            <h2 className="text-6xl font-extrabold tracking-[-2px] mb-6 text-white">Fale direto com<br />nossa equipe de atacado.</h2>
            <p className="text-xl text-white/70 max-w-lg mx-auto mb-12">Inicie no WhatsApp. Receba tabela de preços, condições e defina seu pedido ideal.</p>

            <a 
              href="https://wa.me/5519990047324?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20consultor%20de%20vendas." 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BE5A] active:scale-[0.985] text-white px-10 py-5 rounded-full text-xl font-semibold transition-all shadow-xl shadow-green-950/50 focus-ring"
            >
              <ChatCircle weight="fill" size={26} /> Falar com consultor agora
            </a>

            <div className="mt-6 text-sm text-white/50 flex items-center justify-center gap-2">
              <CheckCircle weight="fill" className="text-accent-500" /> Atendimento em horário comercial
            </div>
          </div>
        </section>
      </main>

      {/* Footer — clean & minimal */}
      <footer className="bg-black border-t border-white/10 py-16 text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-y-12">
          <div>
            <img src="/logov2.jpg" alt="PoliCommerce" className="h-8 mb-6 opacity-90" />
            <p className="max-w-xs text-white/60">Especialistas em fabricação e distribuição atacadista de utilidades plásticas duráveis e rentáveis.</p>
          </div>

          <div className="grid grid-cols-2 gap-y-10 text-white/70">
            <div>
              <div className="font-semibold text-white mb-4 tracking-widest text-xs">NAVEGAÇÃO</div>
              <div className="space-y-2.5">
                <a href="#inicio" className="block hover:text-white">Para Revendedores</a>
                <a href="#produtos" className="block hover:text-white">Produtos</a>
                <a href="#vantagens" className="block hover:text-white">Vantagens</a>
                <a href="#contato" className="block hover:text-white">Contato</a>
              </div>
            </div>
            <div>
              <div className="font-semibold text-white mb-4 tracking-widest text-xs">EMPRESA</div>
              <div className="space-y-1 text-white/60">
                <div>POLICOMMERCE LTDA - ME</div>
                <div>55.041.199/0001-98</div>
              </div>
              <div className="mt-8 text-[10px] text-white/40">© 2025 Todos os direitos reservados</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
