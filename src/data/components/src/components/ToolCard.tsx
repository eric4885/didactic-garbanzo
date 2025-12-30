import { Tool } from '@/types';

  interface ToolCardProps {
    tool: Tool;
  }

  export default function ToolCard({ tool }: ToolCardProps) {
    const initial = tool.name.charAt(0);

    return (
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all 
  cursor-pointer border border-gray-200 dark:border-gray-700"
        onClick={() => window.open(tool.url, '_blank')}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white    
   font-semibold text-xl">
            {initial}
          </div>
          <div className="flex-1">
            <div className="text-lg font-semibold">
              {tool.name}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {tool.category}
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {tool.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }
