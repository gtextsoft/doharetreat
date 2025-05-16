import { Calendar, MapPin, Star, CheckCircle2, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHostInfo, setShowHostInfo] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleHostInfo = () => {
    setShowHostInfo(!showHostInfo);
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed text-white relative" style={{ backgroundImage: "url('https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=')" }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/95 to-purple-800/95"></div>
      
      {/* Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-purple-950/95 shadow-lg' : 'bg-transparent'} backdrop-blur-sm border-b border-purple-800/50`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <a href="#home" className="text-xl font-bold text-yellow-500 flex items-center">
              <img src="/images/logo.png" alt="Stephen Akintayo Logo" className="w-30 h-10" />
            </a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white p-2 rounded-md hover:bg-purple-800/30 transition-all"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1 lg:space-x-2">
              <a href="#home" className="px-3 py-2 text-white hover:text-yellow-500 transition">Home</a>
              <a href="#why-different" className="px-3 py-2 text-white hover:text-yellow-500 transition">Why Different</a>
              <a href="#benefits" className="px-3 py-2 text-white hover:text-yellow-500 transition">Benefits</a>
              <a href="#host" className="px-3 py-2 text-white hover:text-yellow-500 transition">Your Host</a>
              <a href="#learn" className="px-3 py-2 text-white hover:text-yellow-500 transition">What You'll Learn</a>
              <a href="#investment" className="px-3 py-2 text-white hover:text-yellow-500 transition">Investment</a>
              <a href="#past-events" className="px-3 py-2 text-white hover:text-yellow-500 transition">Past Retreats</a>
              <a href="#testimonials" className="px-3 py-2 text-white hover:text-yellow-500 transition">Testimonials</a>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-800/30 animate-fadeIn">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="px-4 py-2 rounded-md hover:bg-purple-800/30 text-white hover:text-yellow-500 transition">Home</a>
                <a href="#why-different" className="px-4 py-2 rounded-md hover:bg-purple-800/30 text-white hover:text-yellow-500 transition">Why Different</a>
                <a href="#benefits" className="px-4 py-2 rounded-md hover:bg-purple-800/30 text-white hover:text-yellow-500 transition">Benefits</a>
                <a href="#host" className="px-4 py-2 rounded-md hover:bg-purple-800/30 text-white hover:text-yellow-500 transition">Your Host</a>
                <a href="#learn" className="px-4 py-2 rounded-md hover:bg-purple-800/30 text-white hover:text-yellow-500 transition">What You'll Learn</a>
                <a href="#investment" className="px-4 py-2 rounded-md hover:bg-purple-800/30 text-white hover:text-yellow-500 transition">Investment</a>
                <a href="#past-events" className="px-4 py-2 rounded-md hover:bg-purple-800/30 text-white hover:text-yellow-500 transition">Past Retreats</a>
                <a href="#testimonials" className="px-4 py-2 rounded-md hover:bg-purple-800/30 text-white hover:text-yellow-500 transition">Testimonials</a>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Content container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-2 sm:px-4 md:px-6">
          <div className="container mx-auto px-3 sm:px-6 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 inline-block mx-auto">
                <div className="w-24 h-1 bg-yellow-500 mx-auto mb-3"></div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">Doha CEO & Leadership Retreat</h1>
                <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3"></div>
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl mb-10 sm:mb-12 text-yellow-500 font-light">June 12 – 17, 2025 | 6 Days of Reconnection, Renewal & Real Strategy</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10 sm:mb-12 text-base sm:text-lg">
                <div className="flex items-center gap-3 bg-purple-900/50 px-6 py-3 rounded-full backdrop-blur-sm border border-purple-700/50 shadow-lg">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  <span>June 12th-17th</span>
                </div>
                <div className="flex items-center gap-3 bg-purple-900/50 px-6 py-3 rounded-full backdrop-blur-sm border border-purple-700/50 shadow-lg">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  <span>Doha, Qatar</span>
                </div>
              </div>
              <div className="bg-purple-900/70 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-purple-700/50">
                <p className="text-lg sm:text-xl font-semibold mb-8 sm:mb-10 text-yellow-500">Feeling Accomplished… Yet Deeply Stretched?</p>
                <div className="text-left space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                  <p className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">You've built, led, scaled.</p>
                  <div className="space-y-4 sm:space-y-6 pl-6 sm:pl-8 border-l-2 border-yellow-500">
                    <p className="text-base sm:text-lg leading-relaxed">But when was the last time you paused to breathe, reflect, and reimagine?</p>
                    <p className="text-base sm:text-lg leading-relaxed">What if you could escape the noise, recharge in luxury, and reignite your vision...</p>
                    <p className="text-base sm:text-lg leading-relaxed">Surrounded by leaders who understand your journey?</p>
                  </div>
                </div>
                <p className="text-base sm:text-lg leading-relaxed mb-2">This is not another seminar. Not another luxury vacation. And certainly not another "busy" conference. This is where powerful conversations meet priceless clarity—in one of the most inspiring cities on earth.</p>
                <a 
                  href="#investment" 
                  className="mt-8 inline-block bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Imagine This Section */}
        <section className="py-20 sm:py-24 md:py-28 bg-purple-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1630513483761-5da2784dc6a8')] bg-center bg-cover opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-900/90"></div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Imagine This…</h2>
                <p className="text-lg text-purple-200">A transformative experience waiting for you</p>
              </div>
              <div className="space-y-8 sm:space-y-10">
                <div className="bg-purple-950/60 p-8 rounded-xl border border-purple-700/50 shadow-lg backdrop-blur-sm transform transition-all hover:scale-[1.02]">
                  <p className="text-lg leading-relaxed">You wake up to the skyline of Doha. You're not rushing to meetings. Instead, you're reflecting deeply… while floating on a private boat cruise discussing wealth structuring, scaling secrets, and exiting with legacy—alongside elite founders and global thinkers.</p>
                </div>
                <div className="bg-purple-950/60 p-8 rounded-xl border border-purple-700/50 shadow-lg backdrop-blur-sm transform transition-all hover:scale-[1.02]">
                  <p className="text-lg leading-relaxed">You're building more than your business. You're building the next version of yourself.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Different Section */}
        <section id="why-different" className="py-20 sm:py-24 md:py-28 bg-purple-950 relative">
          <div className="absolute top-0 right-0 w-1/3 h-64 bg-yellow-500/10 rounded-bl-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-48 bg-purple-700/30 rounded-tr-full blur-3xl"></div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block p-2 bg-purple-900/80 rounded-lg border border-purple-700/50 mb-6">
                  <span className="text-2xl">🔥</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why You Can't Afford to Miss This</h2>
                <div className="w-16 h-1 bg-yellow-500 mx-auto mt-6"></div>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-6 bg-purple-900/80 p-8 rounded-xl border border-purple-700/50 shadow-lg">
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed">The real luxury? It's not the penthouse suite. It's clarity, connection, and a powerful mental reset with people who get it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where Growth Happens Section */}
        <section id="benefits" className="py-24 sm:py-28 md:py-32 bg-purple-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2')] bg-center bg-cover opacity-5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-block p-2 bg-purple-800/80 rounded-lg border border-purple-700/50 mb-6">
                <span className="text-2xl">📍</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Here's Where the Growth Happens</h2>
              <p className="text-lg text-purple-200">Exclusive experiences designed to transform your perspective</p>
              <div className="w-16 h-1 bg-yellow-500 mx-auto mt-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              <div className="bg-purple-950/60 p-8 rounded-xl border border-purple-700/50 shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="inline-block p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30 mb-6">
                  <span className="text-xl">🚤</span>
                </div>
                <h3 className="text-2xl font-semibold mb-6">Private Boat Cruise with Boardroom Conversations</h3>
                <p className="mb-6 text-purple-200">Enjoy the Persian Gulf breeze while diving into honest discussions on:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Scaling sustainably</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>High-ticket sales frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Investing with intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Building legacy over hustle</span>
                  </li>
                </ul>
                <p className="mt-6 text-yellow-500 font-medium">You won't find these convos on Clubhouse.</p>
              </div>
              
              <div className="bg-purple-950/60 p-8 rounded-xl border border-purple-700/50 shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="inline-block p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30 mb-6">
                  <span className="text-xl">🌆</span>
                </div>
                <h3 className="text-2xl font-semibold mb-6">Msheireb Downtown Doha</h3>
                <p className="mb-6 text-purple-200">Explore the world's first smart, sustainable downtown while uncovering:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Innovation-driven real estate insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Smart city investing strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Business trends redefining modern infrastructure</span>
                  </li>
                </ul>
                <p className="mt-6 text-yellow-500 font-medium">This isn't just a tour — it's an MBA on the move.</p>
              </div>
              
              <div className="bg-purple-950/60 p-8 rounded-xl border border-purple-700/50 shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="inline-block p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30 mb-6">
                  <span className="text-xl">🏎️</span>
                </div>
                <h3 className="text-2xl font-semibold mb-6">Lusail Circuit – Where Speed Meets Strategy</h3>
                <p className="mb-6 text-purple-200">At the home of Formula 1 Qatar, reflect on:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>The power of precision in decision-making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Moving fast without burning out</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Building systems for scalable speed</span>
                  </li>
                </ul>
                <p className="mt-6 text-yellow-500 font-medium">Because business is a race — and strategy is your fuel.</p>
              </div>
              
              <div className="bg-purple-950/60 p-8 rounded-xl border border-purple-700/50 shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="inline-block p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30 mb-6">
                  <span className="text-xl">🏛️</span>
                </div>
                <h3 className="text-2xl font-semibold mb-6">Katara Cultural Village</h3>
                <p className="mb-6 text-purple-200">Among artistry and creativity, you'll discover:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Brand storytelling like never before</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Emotional resonance as a marketing strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Building culture around your business</span>
                  </li>
                </ul>
                <p className="mt-6 text-yellow-500 font-medium">Because great businesses don't just sell — they inspire.</p>
              </div>
              
              <div className="bg-purple-950/60 p-8 rounded-xl border border-purple-700/50 shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:col-span-2">
                <div className="inline-block p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30 mb-6">
                  <span className="text-xl">🛍️</span>
                </div>
                <h3 className="text-2xl font-semibold mb-6">Doha's Luxury Shopping Districts</h3>
                <p className="mb-6 text-purple-200">Explore markets and malls as case studies in:</p>
                <ul className="space-y-4 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Luxury pricing psychology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Customer experience excellence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Creating desire around your offer</span>
                  </li>
                </ul>
                <p className="mt-6 text-yellow-500 font-medium">This is market research — the high-ticket way.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Your Host Section */}
        <section id="host" className="py-20 sm:py-24 md:py-28 bg-purple-950 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-900/30 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-yellow-500/5 rounded-tl-full blur-3xl"></div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Your Host</h2>
                <p className="text-lg text-purple-200 max-w-2xl mx-auto">The visionary behind this transformative experience</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-500 max-w-sm mx-auto md:max-w-none relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <img 
                    src="/images/CEO.png" 
                    alt="Dr. Stephen Akintayo" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-6 sm:space-y-8">
                  <h3 className="text-3xl sm:text-4xl font-bold text-yellow-500">Dr. Stephen Akintayo</h3>
                  <p className="text-xl sm:text-2xl font-light text-purple-200">Africa's Foremost Investment Coach</p>
                  <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
                    <p>Dr. Stephen Akintayo is a distinguished investment strategist, business expansion specialist, and leadership mentor who has helped countless executives scale their businesses across global markets.</p>
                    <p>With his 10-Figure Dollar Empire Strategy, he has transformed struggling businesses into thriving enterprises and guided CEOs through complex market expansions.</p>
                    <p>As the curator of the Doha Leadership Retreat, Dr. Akintayo brings together his vast experience, powerful network, and practical frameworks to create a transformative experience for visionary leaders.</p>
                  </div>
                  <div className="pt-6">
                    <button 
                      className="bg-yellow-500 hover:bg-yellow-600 text-purple-950 font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
                      onClick={toggleHostInfo}
                    >
                      <span>Learn More About Your Host</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Host Information Popup */}
        {showHostInfo && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div className="bg-purple-950 rounded-xl w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10 relative border border-yellow-500 shadow-2xl max-h-[90vh] overflow-y-auto">
              <button 
                className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white hover:text-yellow-500 transition p-2 bg-purple-900/50 rounded-full hover:bg-purple-900 group"
                onClick={toggleHostInfo}
                aria-label="Close"
              >
                <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start pt-8 md:pt-2">
                <div className="md:w-1/3 flex-shrink-0 max-w-[200px] sm:max-w-none mx-auto md:mx-0">
                  <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-500">
                    <img 
                      src="/images/CEO.png" 
                      alt="Dr. Stephen Akintayo" 
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-3 sm:mb-4">Dr. Stephen Akintayo</h3>
                  <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">Africa's Foremost Investment Coach</p>
                  
                  <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-white/80">
                    <p>Dr. Stephen Akintayo is a Nigerian serial entrepreneur, philanthropist, and media personality known as Africa's most influential investment coach. Born on 28 January 1986 in Maiduguri, Borno State, his early life was marked by financial hardship and limited resources, which instilled in him a relentless drive to overcome adversity and give back to his community.</p>
                    
                    <p>Educated at Baptist Primary School in Maiduguri and Government Secondary School in Jebba, Kwara State, he later earned a B.Sc in Microbiology from Olabisi Onabanjo University in 2010. Determined to expand his leadership and management skills, he also pursued further training at prestigious institutions like Harvard University and The Coaching Academy, UK.</p>
                    
                    <p>Dr. Akintayo's entrepreneurial journey began at a young age, launching his first ventures by selling food supplements and e-books. Today, he serves as the CEO/MD of Gtext Global—a multinational conglomerate with subsidiaries spanning real estate (Gtext Homes), digital marketing, e-commerce, and investment advisory services. His innovative approach also extends to capacity-building initiatives through Stephen Akintayo Consulting and the Stephen Akintayo Online University, launched in 2020.</p>
                    
                    <p>As an author, he has penned over 35 books covering topics from investment strategies to personal finance, with titles like <em>Survival Instincts</em>, <em>The Information Millionaire</em>, and <em>Billionaire Habits</em>. His media presence is equally influential; he hosts the popular television show "Investment Chat in a Rolls Royce with Dr Stephen Akintayo," which blends investment insights with entertainment.</p>
                    
                    <p>Beyond business, Dr. Akintayo is deeply committed to social impact. Through his Stephen Akintayo Foundation and Infinity Foundation, he has supported thousands of orphans and vulnerable children and empowered emerging entrepreneurs with substantial grants and mentorship. His contributions have earned him accolades such as the 2023 Forbes Best of Africa Leading Investment Coach Award and an honorary doctorate in strategic leadership.</p>
                    
                    <p>Married to Mrs. Bisi Akintayo, known as the "Amazon of mini importation," and a proud father of three, Dr. Stephen Akintayo's story is one of resilience, innovation, and a steadfast commitment to transforming lives.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* This Investment Will Leave You With Section */}
        <section id="learn" className="py-16 sm:py-20 md:py-24 bg-purple-950">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">This Investment Will Leave You With:</h2>
            <div className="space-y-8 sm:space-y-12 md:space-y-10 max-w-4xl mx-auto">
              <div className="bg-purple-900/50 p-6 sm:p-8 rounded-xl border border-purple-800">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <span>A deep exhale you didn't know you needed</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <span>The clarity to see your next move</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <span>A renewed hunger to build with peace, not pressure</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <span>Feeling seen, understood, and sharpened by peers who've walked your path</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg text-center">You've spent thousands attending conferences that gave you slides.<br />Now, spend a few days investing in perspective that gives you breakthroughs.</p>
              
              <div className="bg-purple-900/50 p-6 sm:p-8 rounded-xl border border-purple-800">
                <p className="text-lg mb-4">One idea, one relationship, one renewed insight from this retreat could:</p>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <span>Open doors to global expansion</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <span>Revive your stagnant offers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <span>Replace stress with strategy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Who This Is For Section */}
        <section className="py-16 sm:py-20 bg-purple-900">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">🎯 Who This Is For</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4 text-lg text-center">
                <p className="flex items-center gap-3 justify-center">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span>CEOs & Founders who are scaling past 7-figures</span>
                </p>
                <p className="flex items-center gap-3 justify-center">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span>Professionals ready to break the burnout cycle</span>
                </p>
                <p className="flex items-center gap-3 justify-center">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span>Thought leaders craving a deeper level of growth</span>
                </p>
                <p className="flex items-center gap-3 justify-center">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span>Investors, coaches, and visionaries seeking clarity, connection & strategy</span>
                </p>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Don't Just Escape. Evolve.</h3>
                <p className="text-lg mb-6">There's a version of you the world hasn't seen—<br />Calm. Confident. Crystal clear.</p>
                <p className="text-xl font-semibold text-yellow-500">Join us in Doha.<br />Let's meet that version of you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section id="investment" className="py-16 sm:py-20 md:py-24 bg-purple-950">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">Investment</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-purple-900/50 p-6 sm:p-8 rounded-xl border border-purple-800 mb-10">
                <p className="text-lg text-center mb-8">If you had the opportunity to invest in yourself, go on a vacation, take a productive break from the daily bustle, and immerse yourself in a room filled with global business leaders, while gaining access to my 10-Figure Dollar Empire Strategy, how much do you think that would be worth?</p>
                <p className="text-lg text-center mb-8">Surely, $5,000 wouldn't be too much for such a life-changing experience.</p>
                <p className="text-lg text-center mb-8">But here's the good news... you won't even pay half of that!</p>
                
                {/* Payment Options */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center p-6 bg-purple-900/50 rounded-xl border border-yellow-500">
                    <h4 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-4">Doha Sales Retreat (Option 1)</h4>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">
                      ₦4,000,000
                    </div>
                    <p className="text-sm text-white/80 mb-6">
                      Shared Room
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Hotel Accommodation (Shared room)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Food</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Conference Attendance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Tour of Doha</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Training Event</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Visa</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Training Materials</span>
                      </li>
                    </ul>
                    <a 
                      href="https://paystack.com/pay/nx-zy2mr4a" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-3 px-8 rounded-full transition-all inline-block text-center"
                    >
                      Pay ₦4M Now
                    </a>
                  </div>

                  <div className="flex flex-col items-center p-6 bg-purple-900/50 rounded-xl border border-yellow-500">
                    <h4 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-4">Doha Sales Retreat (Option 2)</h4>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">
                      ₦4,500,000
                    </div>
                    <p className="text-sm text-white/80 mb-6">
                      Shared Apartment
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Hotel Accommodation (Shared apartment)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Food</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Conference Attendance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Tour of Doha</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Training Event</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Visa</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Training Materials</span>
                      </li>
                    </ul>
                    <a 
                      href="https://paystack.com/pay/p3a619rhoh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-3 px-8 rounded-full transition-all inline-block text-center"
                    >
                      Pay ₦4.5M Now
                    </a>
                  </div>
                  
                  <div className="flex flex-col items-center p-6 bg-purple-900/50 rounded-xl border border-yellow-500">
                    <h4 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-4">Doha Sales Retreat (Option 3)</h4>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">
                      ₦5,500,000
                    </div>
                    <p className="text-sm text-white/80 mb-6">
                      Studio Apartment
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Hotel Accommodation (Studio apartment)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Food</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Conference Attendance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Tour of Doha</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Training Event</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Visa</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Training Materials</span>
                      </li>
                    </ul>
                    <a 
                      href="https://paystack.com/pay/y6zzcm-1g8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-3 px-8 rounded-full transition-all inline-block text-center"
                    >
                      Pay ₦5.5M Now
                    </a>
                  </div>
                </div>
                
                <p className="text-lg text-center mt-8 mb-8">So, I'll advise that you stop whatever you're doing and register now to guarantee your place and enjoy this exclusive offer before it disappears!</p>
                <p className="text-lg text-center mb-8">Thousands of people see this everyday and in no time, the spots will be filled up</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Your Registration Fee Covers Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-purple-950">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">What Your Registration Fee Covers</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-purple-900/50 p-6 sm:p-8 rounded-xl border border-purple-800">
                <p className="text-lg mb-8">Your registration fee gives you access to a complete, immersive experience designed to help you unwind, reignite, and scale:</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-yellow-500 mb-2">Hotel Accommodation</h3>
                      <p className="text-white/90">Comfortable and luxurious stay during the entire retreat period.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-yellow-500 mb-2">Food</h3>
                      <p className="text-white/90">All meals and refreshments throughout the retreat.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-yellow-500 mb-2">Conference Attendance</h3>
                      <p className="text-white/90">Full participation in every transformative session with our lineup of powerful speakers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-yellow-500 mb-2">Tour of Doha</h3>
                      <p className="text-white/90">Explore the beauty of Doha with guided visits to some of the city's most fascinating and inspiring spots.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-yellow-500 mb-2">Visa Assistance</h3>
                      <p className="text-white/90">Support with visa application process to ensure smooth travel arrangements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-yellow-500 mb-2">Training Materials</h3>
                      <p className="text-white/90">Get high-quality resources and materials to help you implement what you learn long after the retreat ends.</p>
                    </div>
                  </div>
                </div>
                
                {/* <div className="mt-8 p-4 bg-purple-800/50 rounded-lg border border-purple-700">
                  <p className="text-white/90 italic">Note: Flight tickets are not included in the registration fee and should be arranged independently.</p>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Too Busy Section */}
        <section className="py-24 bg-purple-950">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Too busy to take 6 days off?</h2>
              <p className="text-xl mb-8 text-center">This is exactly why you should be the first person at this retreat because you need the lessons to build a structure that operates independently of you</p>
              <p className="text-xl mb-12 text-center text-yellow-500">So now, you have nothing holding you back</p>
              
              <h3 className="text-2xl font-bold mb-8 text-center">The Choice is Simple</h3>
              <div className="space-y-8">
                <div className="bg-purple-900/50 p-8 rounded-xl border border-purple-800">
                  <p className="font-semibold mb-4 text-xl">Option A:</p>
                  <p className="text-lg">Scroll out of this page and continue working 16-hour days while rivals out-network and out-innovate you with strategies that actually work while you burn out and become inefficient</p>
                </div>
                <div className="bg-purple-900/50 p-8 rounded-xl border border-purple-800">
                  <p className="font-semibold mb-4 text-xl">Option B:</p>
                  <p className="text-lg">Decide to register later only to see that the special offer has ended and you'd have to pay $2,000 instead of the early bird rate</p>
                </div>
                <div className="bg-purple-900/50 p-8 rounded-xl border border-purple-800">
                  <p className="font-semibold mb-4 text-xl">Option C:</p>
                  <p className="text-lg mb-4">Spend June 12th-17th in Doha with Africa's most influential CEOs. Return with:</p>
                  <ul className="space-y-3 pl-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span>A failsafe plan to expand into new markets by 2025</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span>3 or more new board-level contacts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span>The clarity to lead without second-guessing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-purple-900">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12">Ready to take the much needed break in preparation for a greater and better you on the 12th-17th of June?</h2>
              <div className="bg-purple-950 p-8 rounded-xl mb-12 border border-purple-800">
                <ol className="text-left space-y-6 text-lg">
                  <li className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-yellow-500 text-purple-900 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                    <span>Click "Claim My Seat" below</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-yellow-500 text-purple-900 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                    <span>Select Your Package and follow the process</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-yellow-500 text-purple-900 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                    <span>Further details will be communicated with you</span>
                  </li>
                </ol>
              </div>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-6 px-12 rounded-full text-xl transition-all mb-12 transform hover:scale-105">
                <a 
                  href="https://paystack.com/pay/nx-zy2mr4a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  SECURE YOUR SPOT TODAY
                </a>
              </button>
              <p className="text-xl font-semibold text-yellow-500">No bullet points. No fluff. Just the unapologetic truth about what it takes to lead better in 2025.</p>
            </div>
          </div>
        </section>

        {/* Past Events Gallery */}
        <section id="past-events" className="py-16 sm:py-20 md:py-24 bg-purple-950">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">Past Retreats</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto">
              {/* Actual images */}
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group relative">
                <img src="/images/Past 1.jpg" alt="Past Retreat 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 hover:brightness-110" />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">Nigerian CEO Retreat 2024</p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group relative">
                <img src="/images/Past 2.jpg" alt="Past Retreat 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">Nigerian CEO Retreat 2024</p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group relative">
                <img src="/images/Past 3.jpg" alt="Past Retreat 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">Nigerian CEO Retreat 2024</p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group relative">
                <img src="/images/Past 4.jpg" alt="Past Retreat 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">Nigerian CEO Retreat 2024</p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group relative">
                <img src="/images/Past 5.jpg" alt="Past Retreat 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">Nigerian CEO Retreat 2024</p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group relative">
                <img src="/images/BALADNA 5.jpg" alt="Past Retreat 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">Doha Retreat 2025</p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group relative">
                <img src="/images/IMG_3215.jpg" alt="Past Retreat 7" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">Doha Retreat 2025</p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group relative">
                <img src="/images/Dr Ds.jpg" alt="Past Retreat 8" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">Doha Retreat 2025</p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group relative">
                <img src="/images/BALADNA 4.jpg" alt="Past Retreat 9" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">Doha BALADNA</p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group relative">
                <img src="/images/BALA VIP.jpg" alt="Past Retreat 10" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">DOHA BALADNA</p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group relative">
                <img src="/images/DOHA LUSAIL.jpg" alt="Past Retreat 11" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">DOHA LUSAIL</p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group relative">
                <img src="/images/DOHA GENERAL PICS.jpg" alt="Past Retreat 12" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">DOHA GENERAL PICS</p>
                </div>
              </div>
              <div className='aspect-square rounded-lg overflow-hidden shadow-lg group relative'>
                <img src="/images/IMG_0562.jpg" alt="13" className='w-full h-full object-cover hover:scale-105 transition-transform duration-300' />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">DOHA</p>
                </div>
              </div>
              <div className='aspect-square rounded-lg overflow-hidden shadow-lg group relative'>
                <img src="/images/DOHA SIT.jpg" alt="14" className='w-full h-full object-cover hover:scale-105 transition-transform duration-300' />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">DOHA</p>
                </div>
              </div>
              <div className='aspect-square rounded-lg overflow-hidden shadow-lg group relative'>
                <img src="/images/IMG_2585.jpg" alt="15" className='w-full h-full object-cover hover:scale-105 transition-transform duration-300' />
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">BALADNA</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-12 text-lg">Join the legacy of transformation at our next retreat in Doha</p>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-purple-900">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">What Past Attendees Are Saying</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="bg-purple-950 p-4 sm:p-6 md:p-8 rounded-xl border border-purple-800 relative">
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-4">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ynh32i4-FVo"
                    title="Video Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-800 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Mr Mayowa Owolabi's</p>
                    <p className="text-sm text-purple-300">Testimonial from the CEO Retreat</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-950 p-4 sm:p-6 md:p-8 rounded-xl border border-purple-800 relative">
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-4">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/8MMtm_pkKY4"
                    title="Video Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-800 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Mr Frank's</p>
                    <p className="text-sm text-purple-300">Testimonial from the CEO Retreat</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-950 p-4 sm:p-6 md:p-8 rounded-xl border border-purple-800 relative">
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-4">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/-FxOOwwzSyo"
                    title="Video Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-800 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Mr Salvation CEO of Bliss Legacy</p>
                    <p className="text-sm text-purple-300">Testimonial from the CEO Retreat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 sm:py-10 md:py-12 bg-purple-950 border-t border-purple-800">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 sm:mb-12">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-yellow-500">CEO Leadership Retreat</h3>
                <p className="text-purple-300 mb-3 sm:mb-4 text-sm sm:text-base">Where visionary leaders unite, refresh, and strategize for greater impact.</p>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/drsakintayo" className="text-purple-300 hover:text-yellow-500" target="_blank">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://x.com/drsakintayo" className="text-purple-300 hover:text-yellow-500" target='_blank'>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/stephenakintayo/" className="text-purple-300 hover:text-yellow-500" target='_blank'>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-500">Contact</h3>
                <p className="text-purple-300 mb-2">Email: products@stephenakintayo.com</p>
                <p className="text-purple-300 mb-2">Phone: (+234) 815 5555 616</p>
                <p className="text-purple-300 mb-2">Phone: (+234) 816 7901 719</p>
                {/* <p className="text-purple-300">Address: Luxury Resort, Doha, Qatar</p> */}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-500">Subscribe</h3>
                <p className="text-purple-300 mb-4">Get updates on our upcoming events</p>
                <div className="flex">
                  <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md bg-purple-800 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full" />
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-2 px-4 rounded-r-md">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-purple-800 pt-8 text-center text-purple-300">
              <p>© 2025 CEO Leadership Retreat Doha. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
