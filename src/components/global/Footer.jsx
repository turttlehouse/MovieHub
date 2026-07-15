const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MovieTrade</h3>
            <p>
              Your premier destination for buying, selling, and trading movies
              with collectors worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Browse Movies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Sell/Trade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Blu-rays
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  4K UHD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  DVDs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Limited Editions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-yellow-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-yellow-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-yellow-400">
                <i className="fab fa-reddit-alien"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2023 MovieTrade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
