import { useState, useEffect } from 'react'

// Logo Component
const Logo = ({ variant = 'dark' }: { variant?: 'dark' | 'light' }) => {
  const textColor = variant === 'dark' ? 'text-ivory' : 'text-charcoal'
  const subColor = variant === 'dark' ? 'text-ivory/50' : 'text-charcoal/50'
  
  return (
    <div className="flex flex-col items-start gap-0.5">
      <span className={`text-xl md:text-2xl font-display font-semibold tracking-widest ${textColor}`}>
        CANTATA
      </span>
      <span className={`text-[10px] md:text-xs font-body tracking-[0.3em] uppercase ${subColor}`}>
        Commercial Photography
      </span>
    </div>
  )
}

// Navigation
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
      scrolled ? 'bg-charcoal/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-10">
          <a href="#works" className="nav-link">Works</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="btn-outline text-xs">Contact</a>
        </div>
        <button className="md:hidden text-ivory">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

// Hero Section
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-deepblack via-charcoal to-deepblack opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-ivory mb-6 animate-fade-in">
          让产品会说话
        </h1>
        <p className="text-lg md:text-xl text-ivory/60 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          专业商业产品摄影 — 精准呈现，高级质感
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a href="#works" className="btn-primary">
            查看作品
          </a>
          <a href="#contact" className="btn-outline">
            预约拍摄
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

// Works Section
const Works = () => {
  const works = [
    { id: 1, title: '珠宝配饰', category: '产品摄影', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop' },
    { id: 2, title: '电子产品', category: '商业广告', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop' },
    { id: 3, title: '美妆护肤', category: '产品摄影', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=800&fit=crop' },
    { id: 4, title: '食品饮品', category: '商业广告', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop' },
    { id: 5, title: '时尚服装', category: '品牌合作', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop' },
    { id: 6, title: '家居生活', category: '产品摄影', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop' },
  ]

  return (
    <section id="works" className="py-24 md:py-32 px-6 bg-deepblack">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="section-title">精选作品</h2>
          <p className="section-subtitle mx-auto">
            每一帧画面，都是对产品美学的极致诠释
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {works.map((work) => (
            <div key={work.id} className="work-card aspect-[4/5] bg-charcoal">
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="work-card-overlay">
                <div className="text-center">
                  <p className="text-champagne text-sm mb-1">{work.category}</p>
                  <h3 className="text-ivory text-xl font-display">{work.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a href="/portfolio" className="btn-outline">
            查看全部作品
          </a>
        </div>
      </div>
    </section>
  )
}

// Services Section
const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: '产品摄影',
      description: '专业灯光、精细构图，完美呈现产品质感与细节'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: '商业广告',
      description: '创意视觉策划，打造品牌记忆点'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: '后期修图',
      description: '专业调色、精修合成，确保每一张作品达到商用标准'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: '视频内容',
      description: '产品短视频、品牌宣传片，多维度展示产品魅力'
    }
  ]

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="section-title">服务内容</h2>
          <p className="section-subtitle mx-auto">
            从拍摄到交付，全程专业把控
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="card p-8 text-center group">
              <div className="text-champagne mb-6 flex justify-center transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-display text-ivory mb-3">{service.title}</h3>
              <p className="text-ivory/60 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section
const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-deepblack">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[4/3] bg-charcoal relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=800&h=600&fit=crop"
              alt="Cantata Studio"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepblack to-transparent" />
          </div>

          {/* Content */}
          <div>
            <h2 className="section-title mb-8">关于我们</h2>
            <div className="space-y-6 text-ivory/70 leading-relaxed">
              <p>
                Cantata Studio 成立于 2018 年，专注于商业产品摄影领域。
                我们相信，好的产品摄影不仅是技术，更是艺术——
                用光影雕刻质感，用构图讲述故事。
              </p>
              <p>
                团队成员均来自专业摄影与设计背景，
                服务过 200+ 品牌客户，累计交付 10,000+ 商用级作品。
              </p>
              <p>
                我们不追求"差不多"，每一张作品都值得被认真对待。
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-graphite/30">
              <div>
                <div className="text-3xl md:text-4xl font-display text-champagne mb-2">200+</div>
                <div className="text-sm text-ivory/50">合作品牌</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display text-champagne mb-2">10K+</div>
                <div className="text-sm text-ivory/50">交付作品</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display text-champagne mb-2">7</div>
                <div className="text-sm text-ivory/50">年专业经验</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-charcoal">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title mb-6">开始合作</h2>
        <p className="section-subtitle mx-auto mb-12">
          无论您有明确的拍摄需求，还是想探讨合作可能，
          都欢迎随时联系我们。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="mailto:hello@cantata.studio" className="btn-primary">
            发送邮件
          </a>
          <a href="#" className="btn-outline">
            微信咨询
          </a>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-graphite/30">
          <div>
            <div className="text-ivory/50 text-sm mb-2">邮箱</div>
            <div className="text-ivory">hello@cantata.studio</div>
          </div>
          <div>
            <div className="text-ivory/50 text-sm mb-2">微信</div>
            <div className="text-ivory">CantataStudio</div>
          </div>
          <div>
            <div className="text-ivory/50 text-sm mb-2">小红书</div>
            <div className="text-ivory">@CantataStudio</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-deepblack border-t border-graphite/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo />
        <div className="text-ivory/40 text-sm">
          © 2026 Cantata Studio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <div className="bg-deepblack min-h-screen">
      <Navigation />
      <Hero />
      <Works />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
