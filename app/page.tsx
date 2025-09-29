'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Smartphone, Trophy, Target, Users, Star, Download, Play, CircleCheck as CheckCircle, ArrowRight, Menu, X, Footprints, Coins, Gift, TrendingUp, Shield, Zap, ChartBar as BarChart3, Heart, Award, Clock, MapPin, Calendar, Activity, Dumbbell, Timer } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToDownload = () => {
    const element = document.getElementById('bottom-download-section');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png" alt="YogicMile Logo" className="w-12 h-12 rounded-2xl shadow-lg" />
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">YogicMile</span>
                <div className="text-xs text-gray-500 -mt-1">Walk. Earn. Repeat.</div>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">How it Works</button>
              <button onClick={() => scrollToSection('rewards')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Rewards</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Reviews</button>
              <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Privacy</Link>
              <button 
                onClick={scrollToDownload}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105 font-semibold"
              >
                Download App
              </button>
            </div>

            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-100 bg-white">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">Features</button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">How it Works</button>
                <button onClick={() => scrollToSection('rewards')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">Rewards</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">Reviews</button>
                <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Privacy Policy</Link>
                <button 
                  onClick={scrollToDownload}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all font-semibold w-fit"
                >
                  Download App
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 text-sm font-medium text-blue-700">
                  <Zap className="w-4 h-4 mr-2" />
                  India's #1 Fitness Rewards App
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Transform Your
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Daily Steps
                  </span>
                  <br />
                  Into Rewards
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Track your fitness journey, achieve your goals, and earn valuable YogiCoins 
                  that you can redeem for amazing prizes and rewards.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">1M+</div>
                  <div className="text-sm text-gray-600 font-medium">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">₹50L+</div>
                  <div className="text-sm text-gray-600 font-medium">Rewards Given</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">4.9★</div>
                  <div className="text-sm text-gray-600 font-medium">App Rating</div>
                </div>
              </div>

              {/* App Store Download Buttons */}
              <div id="download-buttons" className="flex flex-col sm:flex-row gap-6 justify-start items-start">
                <a 
                  href="https://apps.apple.com/app/yogicmile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 font-semibold min-w-[200px]"
                >
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-bold -mt-1">App Store</div>
                  </div>
                </a>
                
                <a 
                  href="https://play.google.com/store/apps/details?id=com.yogicmile.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 font-semibold min-w-[220px]"
                >
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-bold -mt-1">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Hero Image - Phone Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] p-8 shadow-2xl relative z-10">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">Today's Progress</h3>
                      <div className="text-2xl">🏃‍♂️</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">8,547</div>
                        <div className="text-sm text-gray-600">Steps</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600">₹125</div>
                        <div className="text-sm text-gray-600">Earned</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-xl">
                      <div className="text-lg font-semibold">Daily Goal: 85% Complete</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-[3rem] blur-3xl opacity-30 transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 text-sm font-medium text-blue-700 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Premium Features
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Everything You Need to Stay Fit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover powerful features designed to make your fitness journey rewarding and sustainable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Activity Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced AI algorithms automatically detect and track your walking, running, and daily activities with precision.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Coins className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Earn YogiCoins</h3>
              <p className="text-gray-600 leading-relaxed">
                Every step counts! Earn valuable YogiCoins for walking, completing challenges, and achieving fitness milestones.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Rewards</h3>
              <p className="text-gray-600 leading-relaxed">
                Redeem your YogiCoins instantly for gift cards, discounts, cashback, and exclusive brand partnerships.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Goals</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered goal setting that adapts to your fitness level, lifestyle, and preferences for optimal results.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful charts and insights to track your progress, calories burned, distance covered, and health trends.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Challenges</h3>
              <p className="text-gray-600 leading-relaxed">
                Join friends, family, and community challenges to stay motivated and earn bonus rewards together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 text-sm font-medium text-blue-700 mb-6">
              <Play className="w-4 h-4 mr-2" />
              Simple Process
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">How YogicMile Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is incredibly simple. Follow these three easy steps to begin your rewarding fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform">
                  <Download className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Download & Setup</h3>
              <p className="text-gray-600 leading-relaxed">
                Download YogicMile from your app store and create your personalized account in under 60 seconds.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform">
                  <Footprints className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Walking</h3>
              <p className="text-gray-600 leading-relaxed">
                Simply carry your phone and start your daily activities. Our smart tracking automatically counts every step.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Earn & Redeem</h3>
              <p className="text-gray-600 leading-relaxed">
                Watch your YogiCoins grow with every step and redeem them instantly for exciting rewards and offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 text-sm font-medium text-blue-700 mb-6">
              <Gift className="w-4 h-4 mr-2" />
              Exciting Rewards
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Turn Steps Into Rewards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your daily steps are valuable! Convert your YogiCoins into amazing rewards from India's top brands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-3xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-yellow-200">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🎁</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gift Cards</h3>
              <p className="text-gray-600 mb-4">Amazon, Flipkart, Myntra & more</p>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">₹50 - ₹5000</div>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-200">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🍔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Food & Dining</h3>
              <p className="text-gray-600 mb-4">Zomato, Swiggy, McDonald's</p>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Up to 60% off</div>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🎬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entertainment</h3>
              <p className="text-gray-600 mb-4">Netflix, BookMyShow, Spotify</p>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">₹100 - ₹1000</div>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-200">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🏃‍♂️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fitness & Health</h3>
              <p className="text-gray-600 mb-4">Nike, Adidas, Cult.fit</p>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">₹200 - ₹2000</div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 text-lg font-semibold inline-flex items-center space-x-2"
            >
              <span>Explore All Rewards</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 text-sm font-medium text-blue-700 mb-6">
              <Heart className="w-4 h-4 mr-2" />
              User Love
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join over 1 million satisfied users who have transformed their fitness journey with YogicMile.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                "YogicMile has completely changed how I think about fitness! I've earned ₹8,000 in rewards just by walking to work every day. Amazing app!"
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">PS</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Priya Sharma</div>
                  <div className="text-gray-600">Software Engineer, Mumbai</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                "The social challenges keep me so motivated! My family and I compete daily, and we've all become much more active. Love the instant rewards!"
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">RK</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Rahul Kumar</div>
                  <div className="text-gray-600">Marketing Manager, Delhi</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                "Simple, effective, and genuinely rewarding. YogicMile has helped me maintain consistency with my fitness goals while earning real benefits."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">AS</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Anita Singh</div>
                  <div className="text-gray-600">Doctor, Bangalore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="bottom-download-section" className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Start Your
              <br />
              <span className="text-yellow-300">Rewarding Journey?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join over 1 million users who are already earning rewards for staying active. 
              Download YogicMile today and take your first step towards a healthier, more rewarding lifestyle.
            </p>
            
            <div id="bottom-download-buttons" className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a 
                href="https://apps.apple.com/us/app/yogicmile/id123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 font-semibold min-w-[200px]"
              >
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold -mt-1">App Store</div>
                </div>
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.yogicmile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 font-semibold min-w-[220px]"
              >
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-bold -mt-1">Google Play</div>
                </div>
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">100% Free to Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6" />
                <span className="font-medium">Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-6 h-6" />
                <span className="font-medium">Instant Rewards</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6" />
                <span className="font-medium">4.9★ Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png" alt="YogicMile Logo" className="w-12 h-12 rounded-2xl shadow-lg" />
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">YogicMile</span>
                  <div className="text-xs text-gray-400 -mt-1">Walk. Earn. Repeat.</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transform your daily steps into valuable rewards. Join millions of users who are already living a healthier, more rewarding lifestyle.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-sm font-bold">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-sm font-bold">i</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-sm font-bold">in</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('rewards')} className="hover:text-white transition-colors">Rewards</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 YogicMile. All rights reserved. Made with ❤️ in India.</p>
            <div className="flex items-center space-x-6 text-gray-400">
              <span className="text-sm">🇮🇳 Proudly Indian</span>
              <span className="text-sm">•</span>
              <span className="text-sm">ISO 27001 Certified</span>
              <span className="text-sm">•</span>
              <span className="text-sm">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}