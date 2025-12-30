import Link from 'next/link';

  const footerSections = [
    {
      title: 'ToolAI.my',
      description: 'Your comprehensive directory for discovering and exploring the best AI tools, models, and applications available        
  today.',
    },
    {
      title: 'Popular Categories',
      links: [
        { name: 'AI Tools', href: '/ai-tools' },
        { name: 'Large Language Models', href: '/models' },
        { name: 'AI Image Tools', href: '#' },
        { name: 'AI Video Tools', href: '#' },
        { name: 'AI Office Tools', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Developer Community', href: '/community' },
        { name: 'Academic Resources', href: '/academic' },
        { name: 'Web Navigation', href: '/web-navigation' },
        { name: 'AI Competitions', href: '#' },
        { name: 'AI Institutions', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Submit Tool', href: '#submit' },
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
      ],
    },
  ];

  export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-5 text-white">
                  {section.title}
                </h3>
                {section.description && (
                  <p className="text-gray-400 leading-relaxed">
                    {section.description}
                  </p>
                )}
                {section.links && (
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-blue-500 transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2025 ToolAI.my. All rights reserved. | Your gateway to the AI revolution.</p>
          </div>
        </div>
      </footer>
    );
  }
