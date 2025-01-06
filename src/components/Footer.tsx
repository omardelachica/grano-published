export const Footer = () => {
  return (
    <footer className="bg-espresso text-cream py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-xl text-gold mb-4">About Grano</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream/80 hover:text-cream">Our Story</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Mission</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Team</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-playfair text-xl text-gold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream/80 hover:text-cream">Roasters</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Coffee Guide</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Brewing Tips</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Events</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-playfair text-xl text-gold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream/80 hover:text-cream">Blog</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Forum</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Newsletter</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Social Impact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-playfair text-xl text-gold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream/80 hover:text-cream">Support</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Partner With Us</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Press</a></li>
              <li><a href="#" className="text-cream/80 hover:text-cream">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-cream/10 text-center text-cream/60">
          <p>&copy; {new Date().getFullYear()} Grano. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};