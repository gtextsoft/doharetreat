import { Calendar, MapPin, Users, Brain, Rocket, Star, CheckCircle2, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHostInfo, setShowHostInfo] = useState(false);
  const [showUSD, setShowUSD] = useState(true);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleHostInfo = () => {
    setShowHostInfo(!showHostInfo);
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed text-white relative" style={{ backgroundImage: "url('https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=')" }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-800/90 to-purple-700/90"></div>
      
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-950/90 backdrop-blur-sm border-b border-purple-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <a href="#home" className="text-xl font-bold text-yellow-500">Doha Leadership Retreat</a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-white hover:text-yellow-500 transition">Home</a>
              <a href="#why-different" className="text-white hover:text-yellow-500 transition">Why Different</a>
              <a href="#benefits" className="text-white hover:text-yellow-500 transition">Benefits</a>
              <a href="#host" className="text-white hover:text-yellow-500 transition">Your Host</a>
              <a href="#learn" className="text-white hover:text-yellow-500 transition">What You'll Learn</a>
              <a href="#investment" className="text-white hover:text-yellow-500 transition">Investment</a>
              <a href="#past-events" className="text-white hover:text-yellow-500 transition">Past Retreats</a>
              <a href="#testimonials" className="text-white hover:text-yellow-500 transition">Testimonials</a>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-800">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-white hover:text-yellow-500 transition">Home</a>
                <a href="#why-different" className="text-white hover:text-yellow-500 transition">Why Different</a>
                <a href="#benefits" className="text-white hover:text-yellow-500 transition">Benefits</a>
                <a href="#host" className="text-white hover:text-yellow-500 transition">Your Host</a>
                <a href="#learn" className="text-white hover:text-yellow-500 transition">What You'll Learn</a>
                <a href="#investment" className="text-white hover:text-yellow-500 transition">Investment</a>
                <a href="#past-events" className="text-white hover:text-yellow-500 transition">Past Retreats</a>
                <a href="#testimonials" className="text-white hover:text-yellow-500 transition">Testimonials</a>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Content container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-2 sm:px-4 md:px-6">
          <div className="container mx-auto px-3 sm:px-6 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">CEOs and Professionals Leadership Retreat Doha</h1>
              <p className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-12 text-yellow-500 font-light">Where Visionary Leaders Unwind, Network, and Reignite Their Legacy</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 text-base sm:text-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  <span>April 22-28, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  <span>Doha, Qatar</span>
                </div>
              </div>
              <div className="bg-purple-900/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-purple-800">
                <p className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-yellow-500">Let's be blunt: Working so hard and burning out isn't a badge of honor neither does grinding alone in your office guarantee results</p>
                <div className="text-left space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <p className="text-xl sm:text-2xl font-light mb-2 sm:mb-4">Imagine this instead:</p>
                  <div className="space-y-3 sm:space-y-4 pl-4 sm:pl-6 border-l-2 border-yellow-500">
                    <p className="text-base sm:text-lg">7 mornings waking up in a premium Airbnb somewhere in Doha.</p>
                    <p className="text-base sm:text-lg">7 mornings and evenings sharing business and leadership stories with founders who've scaled across the globe</p>
                    <p className="text-base sm:text-lg">proven framework to bypass growth plateaus without sacrificing your health or relationships.</p>
                  </div>
                </div>
                <p className="text-base sm:text-lg leading-relaxed">This and more is what you'll get at Doha retreat 2025 curated by Dr. Stephen Akintayo, Africa's foremost investment coach – where sharpest minds escape the noise, meet up with fellow trailblazers, get practical and experiential strategies to scaling fast, business expansion and leadership while having fun and unwinding at it</p>
              </div>
            </div>
          </div>
        </header>

        {/* Why Different Section */}
        <section id="why-different" className="py-16 sm:py-20 md:py-24 bg-purple-950">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">Why This Feels Different From Any 'Leadership Event'</h2>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-6 bg-purple-900/50 p-6 rounded-xl border border-purple-800">
                  <Brain className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                  <p className="text-lg">Diagnose your blindspots with a brutally honest assessments</p>
                </div>
                <div className="flex items-start gap-6 bg-purple-900/50 p-6 rounded-xl border border-purple-800">
                  <Rocket className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                  <p className="text-lg">Get prescribed and practical solutions, not theory</p>
                </div>
                <div className="flex items-start gap-6 bg-purple-900/50 p-6 rounded-xl border border-purple-800">
                  <CheckCircle2 className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                  <p className="text-lg">Leave with clear answers and action plan</p>
                </div>
              </div>
              <p className="mt-12 text-center text-lg text-yellow-500">All of these and more while escaping from the noise and rebooting for the greater journey ahead</p>
            </div>
          </div>
        </section>

        {/* What's in it for you Section */}
        <section id="benefits" className="py-24 bg-purple-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">What is in it for you?</h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="bg-purple-950/50 p-8 rounded-xl border border-purple-800">
                <Users className="w-12 h-12 text-yellow-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-6">Networking Opportunities</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Engage with influential CEOs and business leaders.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Build strategic alliances that unlock global expansion.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Participate in high-level discussions on industry trends.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-950/50 p-8 rounded-xl border border-purple-800">
                <Brain className="w-12 h-12 text-yellow-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-6">Expert Insights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Gain proven strategies for scaling businesses fast.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Learn innovative leadership growth techniques from global experts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Receive personalized coaching from Dr. Stephen Akintayo and other top mentors.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-950/50 p-8 rounded-xl border border-purple-800">
                <Rocket className="w-12 h-12 text-yellow-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-6">Personal Growth & Innovation</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Engage in leadership development activities that enhance creativity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Participate in interactive sessions focused on strategic problem-solving.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>Enhance your ability to navigate dynamic business landscapes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Your Host Section */}
        <section id="host" className="py-16 sm:py-20 md:py-24 bg-purple-950">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">Meet Your Host</h2>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-500 max-w-sm mx-auto md:max-w-none">
                  <img 
                    src="/images/CEO.png" 
                    alt="Dr. Stephen Akintayo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-yellow-500">Dr. Stephen Akintayo</h3>
                  <p className="text-lg sm:text-xl font-light">Africa's Foremost Investment Coach</p>
                  <div className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                    <p>Dr. Stephen Akintayo is a distinguished investment strategist, business expansion specialist, and leadership mentor who has helped countless executives scale their businesses across global markets.</p>
                    <p>With his 10-Figure Dollar Empire Strategy, he has transformed struggling businesses into thriving enterprises and guided CEOs through complex market expansions.</p>
                    <p>As the curator of the Doha Leadership Retreat, Dr. Akintayo brings together his vast experience, powerful network, and practical frameworks to create a transformative experience for visionary leaders.</p>
                  </div>
                  <div className="pt-4">
                    <button 
                      className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-3 px-8 rounded-full transition-all"
                      onClick={toggleHostInfo}
                    >
                      Learn More About Your Host
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Host Information Popup */}
        {showHostInfo && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
            <div className="bg-purple-950 rounded-xl w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 relative border border-yellow-500 shadow-2xl max-h-[90vh] overflow-y-auto">
              <button 
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white hover:text-yellow-500 transition p-1"
                onClick={toggleHostInfo}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start pt-6 md:pt-0">
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
                  <h3 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-2 sm:mb-4">Dr. Stephen Akintayo</h3>
                  <p className="text-lg sm:text-xl text-white/90 mb-4 sm:mb-6">Africa's Foremost Investment Coach</p>
                  
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/80">
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

        {/* What You'll Learn Section */}
        <section id="learn" className="py-16 sm:py-20 md:py-24 bg-purple-950">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">WHAT YOU ARE GOING TO LEARN</h2>
            <div className="space-y-8 sm:space-y-12 md:space-y-16 max-w-4xl mx-auto">
              <div className="bg-purple-900/50 p-6 sm:p-8 rounded-xl border border-purple-800">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-yellow-500">Business Expansion and Diversification</h3>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg">
                  <p>Building and maintaining positive relationships with government entities is crucial for businesses looking to expand into new markets or navigate complex regulatory environments. This retreat offers practical strategies for cultivating fruitful relationships with government entities, unlocking new opportunities, and ensuring compliance with regulatory requirements</p>
                  <p>Our experts will guide you through the process of expanding into new businesses or markets globally with confidence. From identifying lucrative opportunities to executing successful expansion strategies, you'll gain the insights and strategies needed to navigate this critical phase of growth</p>
                </div>
              </div>
              <div className="bg-purple-900/50 p-6 sm:p-8 rounded-xl border border-purple-800">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-yellow-500">Investment Decision-making</h3>
                <p className="text-base sm:text-lg">Navigating investment options can be daunting. Our retreat will equip you with the tools and knowledge to make strategic investment choices that align with your company's goals and ensure optimal returns.</p>
              </div>
              <div className="bg-purple-900/50 p-6 sm:p-8 rounded-xl border border-purple-800">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-yellow-500">Customer Acquisition Cost</h3>
                <p className="text-base sm:text-lg">Rising customer acquisition costs can erode profit margins and strain resources. At the CEO Leadership Retreat, we delve into cost-effective customer acquisition strategies, leveraging data-driven insights and innovative marketing techniques to maximize ROI and drive business growth</p>
              </div>
              <div className="bg-purple-900/50 p-6 sm:p-8 rounded-xl border border-purple-800">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-yellow-500">Market Differentiation</h3>
                <p className="text-base sm:text-lg">Our expert-led sessions will provide actionable strategies to help you stand out in competitive markets. You'll learn how to carve your niche, differentiate your brand, and drive sustainable growth by leveraging your unique strengths and value propositions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section id="investment" className="py-16 sm:py-20 md:py-24 bg-purple-900">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">Investment</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-purple-950/50 p-6 sm:p-8 rounded-xl border border-purple-800">
                <div className="flex flex-col items-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-yellow-500 mb-4">Choose Your Currency</h3>
                  <div className="flex gap-4">
                    <button 
                      className={`px-6 py-2 rounded-full font-semibold transition-all ${showUSD ? 'bg-yellow-500 text-purple-900' : 'bg-purple-800 text-white'}`}
                      onClick={() => setShowUSD(true)}
                    >
                      USD
                    </button>
                    <button 
                      className={`px-6 py-2 rounded-full font-semibold transition-all ${!showUSD ? 'bg-yellow-500 text-purple-900' : 'bg-purple-800 text-white'}`}
                      onClick={() => setShowUSD(false)}
                    >
                      NGN
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center p-6 bg-purple-900/50 rounded-xl border border-yellow-500">
                    <h4 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-4">Early Bird Package</h4>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">
                      {showUSD ? '$2,000' : '₦3,000,000'}
                    </div>
                    <p className="text-sm text-white/80 mb-6">
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Access to All Sessions & Hall Activities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Tour of Doha</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Boat Cruise Experience
</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Training Materials
</span>
                      </li>
                    </ul>
                    <a 
                      href={showUSD ? "https://pay.gtextglobal.com/doha-retreat/" : "https://paystack.com/pay/nx-zy2mr4a"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-3 px-8 rounded-full transition-all inline-block text-center"
                    >
                      Reserve Your Spot
                    </a>
                  </div>

                  <div className="flex flex-col items-center p-6 bg-purple-900/50 rounded-xl border border-yellow-500">
                    <h4 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-4">Premium Package</h4>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">
                      {showUSD ? '$3,000' : '₦4,500,000'}
                    </div>
                    <p className="text-sm text-white/80 mb-6">
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Access to All Sessions & Hall Activities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Tour of Doha</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Boat Cruise Experience

</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                        <span>Training Materials
</span>
                      </li>
                    </ul>
                    <a 
                      href={showUSD ? "https://pay.gtextglobal.com/doha-retreat/" : "https://paystack.com/pay/3adggyie03"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-3 px-8 rounded-full transition-all inline-block text-center"
                    >
                      Reserve Your Spot
                    </a>
                  </div>

                  <div className="text-center text-sm text-white/80 md:col-span-2">
                    <p className="mt-2">Please note: Hotel accommodation and flight tickets are not included in the registration fee and should be arranged independently.</p>
                  </div>
                </div>
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
                      <h3 className="text-xl font-semibold text-yellow-500 mb-2">Access to All Sessions & Hall Activities</h3>
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
                      <h3 className="text-xl font-semibold text-yellow-500 mb-2">Boat Cruise Experience</h3>
                      <p className="text-white/90">Enjoy a relaxing and scenic boat cruise as you network and connect with fellow entrepreneurs and coaches.</p>
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
                
                <div className="mt-8 p-4 bg-purple-800/50 rounded-lg border border-purple-700">
                  <p className="text-white/90 italic">Please note: Hotel accommodation and flight tickets are not included in the registration fee and should be arranged independently.</p>
                </div>
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
                  <p className="text-lg">Decide to register later only to see that the special offer has ended and you'd have to pay $2000</p>
                </div>
                <div className="bg-purple-900/50 p-8 rounded-xl border border-purple-800">
                  <p className="font-semibold mb-4 text-xl">Option C:</p>
                  <p className="text-lg mb-4">Spend April 22–28 in Doha with Africa's most influential CEOs. Return with:</p>
                  <ul className="space-y-3 pl-6">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span>A failsafe plan to expand into new markets by 2025</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span>3 or more new board-level contacts</span>
                    </li>
                    <li className="flex items-center gap-3">
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
              <h2 className="text-4xl font-bold mb-12">Ready to take the much needed break in preparation for a greater and better you on the 22nd-28th of April?</h2>
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
                  href={showUSD ? "https://pay.gtextglobal.com/doha-retreat/" : "https://paystack.com/pay/nx-zy2mr4a"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  CLAIM MY SEAT BEFORE PRICES INCREASE
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
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img src="/images/Past 1.jpg" alt="Past Retreat 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img src="/images/Past 2.jpg" alt="Past Retreat 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img src="/images/Past 3.jpg" alt="Past Retreat 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img src="/images/Past 4.jpg" alt="Past Retreat 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img src="/images/Past 5.jpg" alt="Past Retreat 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img src="/images/Past 6.jpg" alt="Past Retreat 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
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
                  <a href="https://ng.linkedin.com/in/drstephenakintayo" className="text-purple-300 hover:text-yellow-500" target='_blank'>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-2.994 12.779h-3.018c-.011 0-.022.005-.022.016v-3.872l-.022-.147a.528.528 0 00-.123-.345.501.501 0 00-.351-.131h-2.958a.501.501 0 00-.351.131.528.528 0 00-.123.345l-.022.147v3.872c0 .011-.011.016-.022.016H5.994a.497.497 0 00-.497.497v2.003c0 .274.223.5.497.5h10.012a.497.497 0 00.497-.5v-2.003a.497.497 0 00-.497-.497z" clipRule="evenodd" />
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
