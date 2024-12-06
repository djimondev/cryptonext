import { BarChart3, FileText, Network } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface NavigationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

function NavigationCard({ title, description, icon, onClick }: NavigationCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 space-y-4 border border-gray-200 dark:border-gray-700 w-full max-w-sm"
    >
      <div className="p-4 bg-primary-50 dark:bg-gray-700 rounded-full">
        {icon}
      </div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
    </button>
  );
}

export function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigationOptions = [
    {
      title: t('common.dataAcquisition'),
      description: t('home.dataAcquisitionDesc'),
      icon: <Network className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      path: '/acquisition',
    },
    {
      title: t('common.visualization'),
      description: t('home.visualizationDesc'),
      icon: <BarChart3 className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      path: '/visualization',
    },
    {
      title: t('common.reporting'),
      description: t('home.reportingDesc'),
      icon: <FileText className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      path: '/reporting',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          {t('home.title')}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {navigationOptions.map((option) => (
            <NavigationCard
              key={option.title}
              title={option.title}
              description={option.description}
              icon={option.icon}
              onClick={() => navigate(option.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}