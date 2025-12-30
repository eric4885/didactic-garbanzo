'use client';

  import Link from 'next/link';
  import { useState } from 'react';

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'AI Tools', href: '/ai-tools' },
    { name: 'Models', href: '/models' },
    { name: 'Community', href: '/community' },
    { name: 'Web Nav', href: '/web-navigation' },
    { name: 'Academic', href: '/academic' },
  ];

  export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 backdrop-blur-lg border-b 
  border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-5">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
              <span className="text-2xl">🤖</span>
              <span>ToolAI.my</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/90 font-medium transition-all hover:bg-white/20 hover:text-white px-4 py-2 rounded-xl"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/20 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 absolute left-0 right-0 rounded-b-2xl">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white/90 font-medium px-4 py-2 rounded-xl hover:bg-white/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    );
  }
