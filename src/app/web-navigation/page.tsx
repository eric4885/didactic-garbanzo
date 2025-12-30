import ToolCard from '@/components/ToolCard';
  import { toolsData } from '@/data/toolsData';

  export default function WebNavigationPage() {
    const tools = toolsData['common-tools'] || [];

    return (
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text        
  text-transparent">
              Web Navigation & Utilities
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Essential web tools and navigation resources for everyday use
            </p>
          </div>

          {tools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <ToolCard key={index} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl mb-4 text-gray-600 dark:text-gray-400">Content Loading</h3>
              <p className="text-gray-500 dark:text-gray-500">Tools and resources are being updated. Please check back soon!</p>
            </div>
          )}
        </div>
      </div>
    );
  }
