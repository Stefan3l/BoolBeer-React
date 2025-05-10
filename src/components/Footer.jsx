export default function Footer() {
  return (
    <footer className="bg-[url('../images/31.png')] bg-cover bg-center text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">123 Beer Street</p>
            <p className="mb-2">Milan, Italy</p>
            <p className="mb-2">Phone: +39 123 456 789</p>
            <p>Email: info@boolbeer.com</p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <p className="mb-2">Monday - Friday: 10:00 - 22:00</p>
            <p className="mb-2">Saturday: 11:00 - 23:00</p>
            <p>Sunday: 12:00 - 21:00</p>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-[#CBB27C]">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-[#CBB27C]">
                  Our Beers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-[#CBB27C]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CBB27C]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-sm mb-4">
            &copy; {new Date().getFullYear()} BoolBeer. All rights reserved.
          </p>
          <p className="text-sm">
            Follow us on{" "}
            <a
              href="https://www.instagram.com"
              className="text-[#CBB27C] hover:text-[#CBB27C]"
            >
              Instagram
            </a>{" "}
            and{" "}
            <a
              href="https://www.facebook.com"
              className="text-[#CBB27C] hover:text-[#CBB27C]"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
