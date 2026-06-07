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

  const AmazonLogo = ({ size }: { size: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className="text-white" aria-hidden="true">
      <path fill="currentColor" d="M20.677 19.768c-9.79 4.688-15.858.761-19.743-1.623-.239-.161-.652.032-.292.445C1.941 20.169 6.18 24 11.719 24s8.841-3.054 9.249-3.59v.001c.413-.536.107-.841-.291-.643z" />
      <path fill="currentColor" d="M13.76 7.001c-2.581.096-8.984.831-8.984 6.295 0 5.867 7.331 6.108 9.727 2.314.345.546 1.876 2.009 2.401 2.508l3.011-3s-1.712-1.355-1.712-2.829v-7.88C18.203 3.054 16.905 0 12.251 0 7.587 0 5.112 2.946 5.112 5.588l3.895.365c.864-2.652 2.873-2.652 2.873-2.652 2.158-.006 1.882 1.597 1.882 3.702l-.002-.002zm0 4.65c0 4.286-4.463 3.644-4.463.921 0-2.528 2.676-3.038 4.463-3.096v2.175z" />
      <path fill="currentColor" d="M23.422 18.219c-.264-.347-1.606-.401-2.438-.305-.838.106-2.11.632-1.988.937.053.123.17.07.742.016.583-.059 2.199-.273 2.544.171.35.455-.514 2.598-.673 2.946-.158.349.053.445.345.203.276-.225.779-.814 1.124-1.661h-.001c.345-.855.541-2.034.345-2.307z" />
    </svg>
  );

  const MercadoLivreLogo = ({ size }: { size: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="text-white" aria-hidden="true">
  <path d="M11.115 16.479a.93.927 0 0 1-.939-.886c-.002-.042-.006-.155-.103-.155-.04 0-.074.023-.113.059-.112.103-.254.206-.46.206a.816.814 0 0 1-.305-.066c-.535-.214-.542-.578-.521-.725.006-.038.007-.08-.02-.11l-.032-.03h-.034c-.027 0-.055.012-.093.039a.788.786 0 0 1-.454.16.7.699 0 0 1-.253-.05c-.708-.27-.65-.928-.617-1.126.005-.041-.005-.072-.03-.092l-.05-.04-.047.043a.728.726 0 0 1-.505.203.73.728 0 0 1-.732-.725c0-.4.328-.722.732-.722.364 0 .675.27.721.63l.026.195.11-.165c.01-.018.307-.46.852-.46.102 0 .21.016.316.05.434.13.508.52.519.68.008.094.075.1.09.1.037 0 .064-.024.083-.045a.746.744 0 0 1 .54-.225c.128 0 .263.03.402.09.69.293.379 1.158.374 1.167-.058.144-.061.207-.005.244l.027.013h.02c.03 0 .07-.014.134-.035.093-.032.235-.08.367-.08a.944.942 0 0 1 .94.93.936.934 0 0 1-.94.928zm7.302-4.171c-1.138-.98-3.768-3.24-4.481-3.77-.406-.302-.685-.462-.928-.533a1.559 1.554 0 0 0-.456-.07c-.182 0-.376.032-.58.095-.46.145-.918.505-1.362.854l-.023.018c-.414.324-.84.66-1.164.73a1.986 1.98 0 0 1-.43.049c-.362 0-.687-.104-.81-.258-.02-.025-.007-.066.04-.125l.008-.008 1-1.067c.783-.774 1.525-1.506 3.23-1.545h.085c1.062 0 2.12.469 2.24.524a7.03 7.03 0 0 0 3.056.724c1.076 0 2.188-.263 3.354-.795a9.135 9.11 0 0 0-.405-.317c-1.025.44-2.003.66-2.946.66-.962 0-1.925-.229-2.858-.68-.05-.022-1.22-.567-2.44-.57-.032 0-.065 0-.096.002-1.434.033-2.24.536-2.782.976-.528.013-.982.138-1.388.25-.361.1-.673.186-.979.185-.125 0-.35-.01-.37-.012-.35-.01-2.115-.437-3.518-.962-.143.1-.28.203-.415.31 1.466.593 3.25 1.053 3.812 1.089.157.01.323.027.491.027.372 0 .744-.103 1.104-.203.213-.059.446-.123.692-.17l-.196.194-1.017 1.087c-.08.08-.254.294-.14.557a.705.703 0 0 0 .268.292c.243.162.677.27 1.08.271.152 0 .297-.015.43-.044.427-.095.874-.448 1.349-.82.377-.296.913-.672 1.323-.782a1.494 1.49 0 0 1 .37-.05.611.61 0 0 1 .095.005c.27.034.533.125 1.003.472.835.62 4.531 3.815 4.566 3.846.002.002.238.203.22.537-.007.186-.11.352-.294.466a.902.9 0 0 1-.484.15.804.802 0 0 1-.428-.124c-.014-.01-1.28-1.157-1.746-1.543-.074-.06-.146-.115-.22-.115a.122.122 0 0 0-.096.045c-.073.09.01.212.105.294l1.48 1.47c.002 0 .184.17.204.395.012.244-.106.447-.35.606a.957.955 0 0 1-.526.171.766.764 0 0 1-.42-.127l-.214-.206a21.035 20.978 0 0 0-1.08-1.009c-.072-.058-.148-.112-.221-.112a.127.127 0 0 0-.094.038c-.033.037-.056.103.028.212a.698.696 0 0 0 .075.083l1.078 1.198c.01.01.222.26.024.511l-.038.048a1.18 1.178 0 0 1-.1.096c-.184.15-.43.164-.527.164a.8.798 0 0 1-.147-.012c-.106-.018-.178-.048-.212-.089l-.013-.013c-.06-.06-.602-.609-1.054-.98-.059-.05-.133-.11-.21-.11a.128.128 0 0 0-.096.042c-.09.096.044.24.1.293l.92 1.003a.204.204 0 0 1-.033.062c-.033.044-.144.155-.479.196a.91.907 0 0 1-.122.007c-.345 0-.712-.164-.902-.264a1.343 1.34 0 0 0 .13-.576 1.368 1.365 0 0 0-1.42-1.357c.024-.342-.025-.99-.697-1.274a1.455 1.452 0 0 0-.575-.125c-.146 0-.287.025-.42.075a1.153 1.15 0 0 0-.671-.564 1.52 1.515 0 0 0-.494-.085c-.28 0-.537.08-.767.242a1.168 1.165 0 0 0-.903-.43 1.173 1.17 0 0 0-.82.335c-.287-.217-1.425-.93-4.467-1.613a17.39 17.344 0 0 1-.692-.189 4.822 4.82 0 0 0-.077.494l.67.157c3.108.682 4.136 1.391 4.309 1.525a1.145 1.142 0 0 0-.09.442 1.16 1.158 0 0 0 1.378 1.132c.096.467.406.821.879 1.003a1.165 1.162 0 0 0 .415.08c.09 0 .179-.012.266-.034.086.22.282.493.722.668a1.233 1.23 0 0 0 .457.094c.122 0 .241-.022.355-.063a1.373 1.37 0 0 0 1.269.841c.37.002.726-.147.985-.41.221.121.688.341 1.163.341.06 0 .118-.002.175-.01.47-.059.689-.24.789-.382a.571.57 0 0 0 .048-.078c.11.032.234.058.373.058.255 0 .501-.086.75-.265.244-.174.418-.424.444-.637v-.01c.083.017.167.026.251.026.265 0 .527-.082.773-.242.48-.31.562-.715.554-.98a1.28 1.279 0 0 0 .978-.194 1.04 1.04 0 0 0 .502-.808 1.088 1.085 0 0 0-.16-.653c.804-.342 2.636-1.003 4.795-1.483a4.734 4.721 0 0 0-.067-.492 27.742 27.667 0 0 0-5.049 1.62zm5.123-.763c0 4.027-5.166 7.293-11.537 7.293-6.372 0-11.538-3.266-11.538-7.293 0-4.028 5.165-7.293 11.539-7.293 6.371 0 11.537 3.265 11.537 7.293zm.46.004c0-4.272-5.374-7.755-12-7.755S.002 7.277.002 11.55L0 12.004c0 4.533 4.695 8.203 11.999 8.203 7.347 0 12-3.67 12-8.204z"></path>
</svg>
  );

  const KwaiLogo = ({ size }: { size: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-white" aria-hidden="true">
  <path fill="currentColor" fillRule="evenodd" d="M21.5 14.5A2.5 2.5 0 0 0 19 12h-8a2.5 2.5 0 0 0-2.5 2.5v5A2.5 2.5 0 0 0 11 22h8a2.5 2.5 0 0 0 2.5-2.5v-5ZM19 13a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 19 21h-8a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 11 13h8Z" clipRule="evenodd"></path>
  <path fill="currentColor" fillRule="evenodd" d="M3.947 12.915a1 1 0 0 0-1.447.894v6.382a1 1 0 0 0 1.447.894l5.277-2.638A.5.5 0 0 0 9.5 18v-2a.5.5 0 0 0-.276-.447l-5.277-2.638zM8.5 16.309v1.382l-5 2.5v-6.382l5 2.5zm2-13.809a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM6 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z" clipRule="evenodd"></path>
  <path fill="currentColor" fillRule="evenodd" d="M17.5 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM14 7a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z" clipRule="evenodd"></path>
</svg>
  );

  return (
    <div className="text-zinc-200 bg-zinc-950 antialiased selection:bg-accent-500 selection:text-white flex flex-col min-h-screen">
      {/* Fixed grain overlay */}
      <div className="grain" />

      {/* Navbar - darker, tighter */}
      <header className="fixed w-full top-0 z-50 bg-zinc-950/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src="/logo-transparente.png" alt="PoliCommerce" className="h-20 w-auto" />
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
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-x-0 top-16 z-40 md:hidden bg-zinc-950 border-t border-white/10 overflow-hidden transition-all ${mobileMenuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-6 py-6 space-y-1 text-base font-medium">
          <a href="#inicio" onClick={handleMobileLinkClick} className="block py-3 text-white/90 hover:text-accent-500">Para Revendedores</a>
          <a href="#produtos" onClick={handleMobileLinkClick} className="block py-3 text-white/90 hover:text-accent-500">Produtos</a>
          <a href="#vantagens" onClick={handleMobileLinkClick} className="block py-3 text-white/90 hover:text-accent-500">Vantagens</a>
          <a href="#contato" onClick={handleMobileLinkClick} className="block py-3 text-white/90 hover:text-accent-500">Contato</a>
          <a href="#contato" onClick={handleMobileLinkClick} className="block mt-4 bg-white text-zinc-950 text-center py-3 rounded-full font-semibold">Quero revender</a>
        </div>
      </div>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section id="inicio" className="relative min-h-[100dvh] flex items-center overflow-hidden border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-20 pb-20">
            <div className="grid lg:grid-cols-12 gap-x-8 items-center">
              {/* Left content */}
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
                      {[
                        { name: 'Shopee', type: 'img', src: 'https://cdn.simpleicons.org/shopee/ffffff', size: 42, top: '18%', left: '12%', delay: '0s', duration: '28s', opacity: 0.85 },
                        { name: 'Mercado Livre', type: 'svg', svg: (<MercadoLivreLogo size={38} />), size: 38, top: '8%', left: '42%', delay: '-4s', duration: '32s', opacity: 0.75 },
                        { name: 'Amazon', type: 'svg', svg: (<AmazonLogo size={40} />), size: 40, top: '22%', left: '78%', delay: '-9s', duration: '26s', opacity: 0.8 },
                        { name: 'TikTok Shop', type: 'img', src: 'https://cdn.simpleicons.org/tiktok/ffffff', size: 36, top: '68%', left: '82%', delay: '-15s', duration: '30s', opacity: 0.7 },
                        { name: 'Kwai', type: 'svg', svg: (<KwaiLogo size={34} />), size: 34, top: '72%', left: '18%', delay: '-20s', duration: '34s', opacity: 0.75 },
                      ].map((logo, index) => (
                        <div key={index} className="absolute" style={{ top: logo.top, left: logo.left, animation: `orbit ${logo.duration} linear infinite`, animationDelay: logo.delay }}>
                          <div className="flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10" style={{ width: logo.size + 18, height: logo.size + 18, opacity: logo.opacity }}>
                            {logo.type === 'img' ? <img src={logo.src} alt={logo.name} width={logo.size} height={logo.size} className="object-contain" /> : logo.svg}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Orbiting (3 logos) */}
                  <div className="absolute -inset-6 z-10 block lg:hidden">
                    <div className="relative w-full h-full">
                      {[
                        { name: 'Shopee', type: 'img', src: 'https://cdn.simpleicons.org/shopee/ffffff', size: 28, top: '12%', left: '5%', delay: '0s', duration: '38s', opacity: 0.7 },
                        { name: 'Amazon', type: 'svg', svg: (<AmazonLogo size={26} />), size: 26, top: '15%', left: '78%', delay: '-8s', duration: '42s', opacity: 0.65 },
                        { name: 'Mercado Livre', type: 'svg', svg: (<MercadoLivreLogo size={26} />), size: 26, top: '72%', left: '8%', delay: '-18s', duration: '40s', opacity: 0.65 },
                      ].map((logo, index) => (
                        <div key={index} className="absolute" style={{ top: logo.top, left: logo.left, animation: `orbit ${logo.duration} linear infinite`, animationDelay: logo.delay }}>
                          <div className="flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10" style={{ width: logo.size + 12, height: logo.size + 12, opacity: logo.opacity }}>
                            {logo.type === 'img' ? <img src={logo.src} alt={logo.name} width={logo.size} height={logo.size} className="object-contain" /> : logo.svg}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Laptop with video */}
                  <div className="relative w-full max-w-[520px] rotate-[1.2deg] lg:rotate-[2.5deg] transition-transform duration-700 z-20" style={{ filter: 'drop-shadow(0 35px 55px rgba(0,0,0,0.55)) drop-shadow(0 15px 25px rgba(0,0,0,0.35))' }}>
                    <div className="relative rounded-[2.25rem] bg-zinc-900 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(255,255,255,0.06)] border border-white/10">
                      <div className="relative aspect-[16/10] rounded-[1.35rem] overflow-hidden bg-black">
                        <video autoPlay loop muted playsInline preload="metadata" poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400" className="absolute inset-0 w-full h-full object-cover">
                          <source src="/animacao.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/40 pointer-events-none" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.35rem] pointer-events-none" />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[82%] h-8 bg-black/60 blur-2xl rounded-full pointer-events-none" />
                  </div>

                  {/* Stats badge */}
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
            <img src="/logo-transparente.png" alt="PoliCommerce" className="h-8 mb-6 opacity-90" />
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
