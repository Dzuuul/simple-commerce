import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-green-100 transition-colors duration-300"
        >
          Your Store Name
        </Link>
        <div className="space-x-3">
          {[
            { href: "/products", label: "Products" },
            { href: "/about", label: "About" },
            { href: "/account", label: "Account" },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
            { href: "/cart", label: "🛒 Cart" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-green-100 transition-colors duration-300 text-xs font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
