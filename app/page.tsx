import { Watch, Shield, Award, Sparkles, Clock, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Watch className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold tracking-tight text-blue-600">NeoWatch</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#collection" className="text-sm font-medium hover:text-blue-600 transition-colors">Collection</a>
              <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</a>
              <a href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">Features</a>
              <button className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-blue-700 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-accent/20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>New Collection 2025</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
            Time Redefined,
            <br />
            <span className="text-blue-600">
              Luxury Perfected
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in">
            Discover the pinnacle of horological excellence. Each NeoWatch timepiece is meticulously crafted to embody precision, elegance, and timeless sophistication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button className="group bg-blue-600 text-white px-6 py-3 rounded text-base font-semibold hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center gap-2">
              Explore Collection
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-background border-2 border-blue-600/50 px-6 py-3 rounded text-base font-semibold hover:bg-blue-600/10 hover:border-blue-600 transition-all hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Featured Watch Display */}
          <div className="mt-24 relative">
            <div className="relative w-full max-w-2xl mx-auto aspect-square bg-blue-500/10 rounded shadow-2xl overflow-hidden flex items-center justify-center">
              <Clock className="h-64 w-64 text-blue-600/40" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium bg-background/80 backdrop-blur-sm px-6 py-3 rounded border border-border z-20">
                Premium Craftsmanship
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-32 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of luxury timepieces, each designed to make a statement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "NeoWatch Elegance", price: "$12,999", desc: "Classic sophistication", color: "#d4af37", bg: "bg-amber-500/10" },
              { name: "NeoWatch Sport", price: "$15,999", desc: "Performance meets style", color: "#0ea5e9", bg: "bg-blue-500/10" },
              { name: "NeoWatch Royal", price: "$24,999", desc: "Ultimate luxury", color: "#a855f7", bg: "bg-blue-500/10" },
            ].map((watch, index) => (
              <div
                key={index}
                className="group bg-card rounded overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`relative aspect-square ${watch.bg} flex items-center justify-center overflow-hidden`}>
                  <Clock className="h-40 w-40 text-foreground/20" />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    New
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{watch.name}</h3>
                  <p className="text-muted-foreground mb-4">{watch.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{watch.price}</span>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1 group">
                      View Details
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Crafting Excellence Since Day One
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                NeoWatch represents the fusion of traditional watchmaking artistry and cutting-edge innovation. Every timepiece tells a story of dedication, precision, and uncompromising quality.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our master craftsmen spend countless hours perfecting each detail, ensuring that every NeoWatch is not just a timekeeping device, but a work of art that will be treasured for generations.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded text-base font-semibold hover:bg-blue-700 transition-all hover:scale-105">
                Our Story
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-500/10 rounded shadow-2xl flex items-center justify-center overflow-hidden">
                <Watch className="h-64 w-64 text-foreground/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Why Choose NeoWatch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exceptional quality, timeless design, and unparalleled craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Lifetime Warranty",
                desc: "Every NeoWatch comes with a comprehensive lifetime warranty, ensuring your investment is protected.",
                color: "bg-blue-500",
              },
              {
                icon: Award,
                title: "Swiss Movement",
                desc: "Powered by precision Swiss movements, guaranteeing accuracy and reliability for years to come.",
                color: "bg-blue-500",
              },
              {
                icon: Sparkles,
                title: "Premium Materials",
                desc: "Crafted from the finest materials including sapphire crystal, titanium, and 18K gold.",
                color: "bg-amber-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded p-8 border border-border hover:shadow-xl hover:shadow-blue-500/20 transition-all hover:-translate-y-2"
              >
                <div className={`h-12 w-12 ${feature.color} rounded flex items-center justify-center mb-6`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Experience Timeless Luxury
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Visit our showroom or schedule a private consultation to discover the perfect NeoWatch for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded text-base font-semibold hover:bg-blue-700 transition-all hover:scale-105">
              Book Consultation
            </button>
            <button className="bg-background border-2 border-blue-600/50 px-6 py-3 rounded text-base font-semibold hover:bg-blue-600/10 hover:border-blue-600 transition-all hover:scale-105">
              Find a Showroom
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Watch className="h-8 w-8" />
                <span className="text-2xl font-bold">NeoWatch</span>
              </div>
              <p className="text-muted-foreground">
                Precision craftsmanship meets contemporary design.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">All Watches</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Limited Edition</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Showrooms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Care Guide</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Repairs</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 NeoWatch. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
