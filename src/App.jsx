import React, { useState } from 'react';
import { 
  LayoutDashboard, Calendar, Users, AlertCircle, 
  Target, CheckCircle2, Clock, TrendingUp,
  Building2, DollarSign, Laptop, GraduationCap,
  Megaphone, Shield, Settings
} from 'lucide-react';
import { ProjectProvider, useProject } from './context/ProjectContext';
// Import components individually to catch any import errors
import Dashboard from './components/Dashboard';

function AppContent() {
  const [activeView, setActiveView] = useState('dashboard');
  
  // Add error handling for context
  let calculateOverallProgress;
  try {
    const projectContext = useProject();
    calculateOverallProgress = projectContext.calculateOverallProgress;
  } catch (error) {
    console.error('Error accessing project context:', error);
    calculateOverallProgress = () => 0;
  }
  
  const navigationItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'timeline', name: 'Timeline', icon: Calendar },
    { id: 'workstreams', name: 'Workstreams', icon: Target },
    { id: 'team', name: 'Team & Tasks', icon: Users },
    { id: 'kpis', name: 'KPIs', icon: TrendingUp },
    { id: 'risks', name: 'Risk Matrix', icon: AlertCircle }
  ];

  const renderView = () => {
    // For now, only render Dashboard to isolate issues
    try {
      return <Dashboard />;
    } catch (error) {
      console.error('Error rendering view:', error);
      return (
        <div className="p-8 text-center">
          <h2 className="text-xl font-bold text-red-600 mb-4">Error Loading Dashboard</h2>
          <p className="text-gray-600">Error: {error.message}</p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AI School Brazil</h1>
              <p className="text-sm text-gray-600">Launch Control</p>
            </div>
          </div>
        </div>
        
        <nav className="px-4 pb-6">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeView === item.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>
        
        {/* Quick Stats */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Days Until Launch</div>
          <div className="text-3xl font-bold text-blue-600">
            {Math.ceil((new Date('2027-01-15') - new Date()) / (1000 * 60 * 60 * 24))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-8 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {navigationItems.find(item => item.id === activeView)?.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Last updated: {new Date().toLocaleString('pt-BR')}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  <span className="text-gray-600">Overall Progress:</span>
                  <span className="ml-2 font-bold text-blue-600">{calculateOverallProgress()}%</span>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Export Report
                </button>
              </div>
            </div>
          </div>
        </header>
        
        <main className="p-8">
          {renderView()}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ProjectProvider>
      <AppContent />
    </ProjectProvider>
  );
}

export default App;