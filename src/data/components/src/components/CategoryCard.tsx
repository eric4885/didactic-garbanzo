import Link from 'next/link';
  import { Category } from '@/types';

  interface CategoryCardProps {
    category: Category;
  }

  const gradients: Record<string, string> = {
    'ai-tools': 'linear-gradient(135deg, #007AFF, #5AC8FA)',
    'common-tools': 'linear-gradient(135deg, #34C759, #FFCC00)',
    'models': 'linear-gradient(135deg, #AF52DE, #FF2D92)',
    'agents': 'linear-gradient(135deg, #FF9500, #FF3B30)',
    'toolsets': 'linear-gradient(135deg, #5856D6, #007AFF)',
    'community': 'linear-gradient(135deg, #5AC8FA, #34C759)',
    'image-tools': 'linear-gradient(135deg, #FF2D92, #FF3B30)',
    'video-tools': 'linear-gradient(135deg, #FFCC00, #FF9500)',
    'office-tools': 'linear-gradient(135deg, #007AFF, #AF52DE)',
    'business': 'linear-gradient(135deg, #34C759, #5AC8FA)',
    'institutions': 'linear-gradient(135deg, #AF52DE, #5856D6)',
    'competitions': 'linear-gradient(135deg, #FF9500, #FFCC00)',
  };

  export default function CategoryCard({ category }: CategoryCardProps) {
    const gradient = gradients[category.id] || 'linear-gradient(135deg, #007AFF, #AF52DE)';

    return (
      <Link href={`/${category.id === 'ai-tools' || category.id === 'models' || category.id === 'community' ? category.id : 
  'ai-tools'}`}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all 
  cursor-pointer border-2 border-transparent relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: gradient }} />

          <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-5" style={{ background: gradient }}>
            {category.icon}
          </div>

          <h3 className="text-2xl font-semibold mb-3">
            {category.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
            {category.description}
          </p>

          <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-full text-sm        
  font-medium">
            {category.count} tools
          </span>
        </div>
      </Link>
    );
  }
