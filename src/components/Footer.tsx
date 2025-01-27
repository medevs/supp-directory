import { Github, Twitter, Facebook, Instagram } from "lucide-react";
import Newsletter from "./Newsletter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#8B5CF6]">About Us</h3>
            <p className="text-sm text-gray-600">
              Helping you make informed decisions about supplements and wellness.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#8B5CF6] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#8B5CF6] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#8B5CF6] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#8B5CF6] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#8B5CF6]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#8B5CF6] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/stacks" className="text-gray-600 hover:text-[#8B5CF6] transition-colors">
                  Stacks
                </Link>
              </li>
              <li>
                <Link to="/quiz-results" className="text-gray-600 hover:text-[#8B5CF6] transition-colors">
                  Take Quiz
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#8B5CF6]">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: contact@supplements.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Supplement St, Health City, HC 12345</li>
            </ul>
          </div>

          <div>
            <Newsletter />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © 2024 Supplements Directory. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;