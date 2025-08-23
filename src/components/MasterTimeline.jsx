import React, { useState } from 'react';
import { 
  Calendar, Clock, CheckCircle, AlertCircle, 
  School, Building2, GitMerge, Filter, 
  Users, TrendingUp, Target 
} from 'lucide-react';
import { useProject } from '../context/ProjectContext';

const MasterTimeline = () => {
  const { projectData } = useProject();
  const [filterSector, setFilterSector] = useState('all'); // all, private, public
  const [selectedYear, setSelectedYear] = useState('2025');

  // Combined timeline data - integrating private and public sector milestones
  const masterTimelineData = {
    2025: {
      quarter: {
        Q3: [
          {
            id: 'funding-close',
            title: 'Series A Funding Secured (R$20M)',
            sector: 'private',
            status: 'pending',
            critical: true,
            description: 'Close Series A for flagship school, technology development, and public sector pilot preparation'
          },
          {
            id: 'architect-selection',
            title: 'Architect Selection Complete',
            sector: 'private',
            status: 'in-progress',
            critical: false,
            description: 'Select architecture firm for flagship school construction'
          }
        ],
        Q4: [
          {
            id: 'construction-start',
            title: 'Flagship School Construction Begins',
            sector: 'private',
            status: 'pending',
            critical: true,
            description: 'Begin renovation of government building in São Paulo/Rio'
          },
          {
            id: 'sp-partnership-negotiation',
            title: 'São Paulo Partnership Negotiations',
            sector: 'public',
            status: 'in-progress',
            critical: true,
            description: 'Formal negotiations with São Paulo municipal education department'
          },
          {
            id: 'team-scaling',
            title: 'Core Team Assembly Complete',
            sector: 'private',
            status: 'pending',
            critical: true,
            description: 'Harvard team + Head of School + core leadership'
          }
        ]
      },
      students: { private: 0, public: 0 },
      revenue: { private: 0, public: 0 }
    },

    2026: {
      quarter: {
        Q1: [
          {
            id: 'platform-mvp',
            title: 'INCEPT Platform MVP Complete',
            sector: 'private',
            status: 'pending',
            critical: true,
            description: 'Core AI tutoring system ready for testing'
          }
        ],
        Q2: [
          {
            id: 'timeback-system',
            title: 'TIMEBACK Operating System Live',
            sector: 'private',
            status: 'pending',
            critical: true,
            description: 'Parent/guide portals and monitoring system operational'
          },
          {
            id: 'rio-pilot-agreement',
            title: 'Rio de Janeiro Pilot Agreement Signed',
            sector: 'public',
            status: 'pending',
            critical: true,
            description: '150K student pilot program with SME Rio'
          }
        ],
        Q3: [
          {
            id: 'campus-tours',
            title: 'Flagship Campus Tours Begin',
            sector: 'private',
            status: 'pending',
            critical: true,
            description: 'Marketing launch for 750 student enrollment target'
          }
        ],
        Q4: [
          {
            id: 'construction-complete',
            title: 'Flagship School Construction Complete',
            sector: 'private',
            status: 'pending',
            critical: true,
            description: 'School ready for January 2027 launch'
          },
          {
            id: 'enrollment-target',
            title: '750 Students Enrolled (Year 1)',
            sector: 'private',
            status: 'pending',
            critical: true,
            description: 'Full enrollment for flagship school Year 1'
          }
        ]
      },
      students: { private: 750, public: 0 },
      revenue: { private: 18000000, public: 0 }
    },

    2027: {
      quarter: {
        Q1: [
          {
            id: 'flagship-launch',
            title: 'AI School Brazil Opens!',
            sector: 'private',
            status: 'pending',
            critical: true,
            description: 'Flagship school operational with 2x learning in 2 hours model'
          },
          {
            id: 'sp-pilot-start',
            title: 'São Paulo Public Pilot Begins',
            sector: 'public',
            status: 'pending',
            critical: true,
            description: '50K students across 40 schools pilot program'
          }
        ],
        Q2: [
          {
            id: 'first-results',
            title: 'First Learning Outcome Results',
            sector: 'private',
            status: 'pending',
            critical: false,
            description: 'Demonstrate 2x learning speed with Brazilian students'
          }
        ],
        Q3: [
          {
            id: 'franchise-program',
            title: 'Franchise Development Program Launch',
            sector: 'private',
            status: 'pending',
            critical: false,
            description: 'Begin scaling to additional cities'
          }
        ],
        Q4: [
          {
            id: 'year2-enrollment',
            title: '1,500 Students (Year 2 Target)',
            sector: 'private',
            status: 'pending',
            critical: false,
            description: 'Flagship school at full capacity'
          },
          {
            id: 'adoption-licensing',
            title: 'Technology Adoption Model Launch',
            sector: 'public',
            status: 'pending',
            critical: true,
            description: '25K students through existing private school licensing'
          }
        ]
      },
      students: { private: 33250, public: 50000 },
      revenue: { private: 178750000, public: 150000000 }
    },

    2028: {
      quarter: {
        Q1: [
          {
            id: 'rio-pilot-results',
            title: 'Rio Pilot Results & Expansion Decision',
            sector: 'public',
            status: 'pending',
            critical: true,
            description: 'Evaluate pilot success and approve full rollout'
          }
        ],
        Q2: [
          {
            id: 'regional-expansion',
            title: 'Regional Expansion (5 Cities)',
            sector: 'public',
            status: 'pending',
            critical: false,
            description: 'Expand to Curitiba (PR), Florianópolis (SC), Belo Horizonte'
          }
        ],
        Q3: [
          {
            id: 'franchise-milestone',
            title: '10 Franchise Schools Operational',
            sector: 'private',
            status: 'pending',
            critical: false,
            description: 'Franchise model validation and scaling'
          }
        ],
        Q4: [
          {
            id: 'public-100k',
            title: '100K Public Sector Students',
            sector: 'public',
            status: 'pending',
            critical: true,
            description: 'Major milestone in public sector scaling'
          }
        ]
      },
      students: { private: 66500, public: 100000 },
      revenue: { private: 327550000, public: 300000000 }
    },

    2030: {
      quarter: {
        Q4: [
          {
            id: 'public-dominance',
            title: 'Public Sector Becomes Largest Revenue Stream',
            sector: 'public',
            status: 'pending',
            critical: true,
            description: 'Public partnerships surpass private sector revenue'
          },
          {
            id: 'national-scale',
            title: 'National Scale Achievement',
            sector: 'consolidated',
            status: 'pending',
            critical: true,
            description: '1M+ total students across Brazil'
          }
        ]
      },
      students: { private: 164000, public: 1000000 },
      revenue: { private: 804722763, public: 3000000000 }
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress': return <Clock className="w-5 h-5 text-blue-500" />;
      case 'pending': return <AlertCircle className="w-5 h-5 text-gray-400" />;
      default: return <div className="w-5 h-5 rounded-full bg-gray-300"></div>;
    }
  };

  const getSectorIcon = (sector) => {
    switch (sector) {
      case 'private': return <School className="w-5 h-5 text-blue-600" />;
      case 'public': return <Building2 className="w-5 h-5 text-emerald-600" />;
      case 'consolidated': return <GitMerge className="w-5 h-5 text-purple-600" />;
      default: return <Target className="w-5 h-5 text-gray-600" />;
    }
  };

  const getSectorColor = (sector) => {
    switch (sector) {
      case 'private': return 'border-blue-200 bg-blue-50';
      case 'public': return 'border-emerald-200 bg-emerald-50';
      case 'consolidated': return 'border-purple-200 bg-purple-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat('pt-BR').format(value);
  };

  const filteredYearData = (yearData) => {
    if (filterSector === 'all') return yearData;
    
    const filtered = {};
    Object.keys(yearData.quarter).forEach(quarter => {
      filtered[quarter] = yearData.quarter[quarter].filter(milestone => 
        filterSector === 'consolidated' ? 
          milestone.sector === 'consolidated' : 
          milestone.sector === filterSector
      );
    });
    return { quarter: filtered, students: yearData.students, revenue: yearData.revenue };
  };

  const yearData = masterTimelineData[selectedYear];
  const displayData = yearData ? filteredYearData(yearData) : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Master Timeline</h2>
            <p className="mt-2 opacity-90">
              Integrated roadmap for private sector and public partnerships
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">2027</div>
            <div className="text-sm opacity-90">Launch Year</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter by Sector:</span>
            </div>
            <div className="flex space-x-2">
              {[
                { id: 'all', name: 'All Sectors', icon: GitMerge, color: 'bg-gray-100 text-gray-700' },
                { id: 'private', name: 'Private', icon: School, color: 'bg-blue-100 text-blue-700' },
                { id: 'public', name: 'Public', icon: Building2, color: 'bg-emerald-100 text-emerald-700' },
                { id: 'consolidated', name: 'Combined', icon: Target, color: 'bg-purple-100 text-purple-700' }
              ].map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setFilterSector(filter.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors ${
                      filterSector === filter.id 
                        ? filter.color 
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{filter.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-700">Year:</span>
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2030">2030</option>
            </select>
          </div>
        </div>
      </div>

      {/* Year Overview */}
      {displayData && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Students ({selectedYear})</p>
                <p className="text-2xl font-bold text-indigo-600">
                  {formatNumber(displayData.students.private + displayData.students.public)}
                </p>
              </div>
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="text-blue-600">Private: {formatNumber(displayData.students.private)}</div>
              <div className="text-emerald-600">Public: {formatNumber(displayData.students.public)}</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue ({selectedYear})</p>
                <p className="text-2xl font-bold text-green-600">
                  {formatCurrency(displayData.revenue.private + displayData.revenue.public)}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div className="mt-4 grid grid-cols-1 gap-1 text-xs">
              <div className="text-blue-600">Private: {formatCurrency(displayData.revenue.private)}</div>
              <div className="text-emerald-600">Public: {formatCurrency(displayData.revenue.public)}</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Milestones</p>
                <p className="text-2xl font-bold text-purple-600">
                  {Object.values(displayData.quarter).flat().length}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <div className="mt-4 text-xs text-gray-500">
              Milestones in {selectedYear}
            </div>
          </div>
        </div>
      )}

      {/* Quarterly Timeline */}
      {displayData && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">{selectedYear} Timeline</h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {['Q1', 'Q2', 'Q3', 'Q4'].map((quarter) => (
              <div key={quarter} className="space-y-4">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-900">{quarter} {selectedYear}</h4>
                  <div className="w-full h-1 bg-gray-200 rounded-full mt-2">
                    <div className="h-1 bg-indigo-500 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  {(displayData.quarter[quarter] || []).map((milestone) => (
                    <div 
                      key={milestone.id}
                      className={`border rounded-lg p-4 ${getSectorColor(milestone.sector)} ${
                        milestone.critical ? 'border-l-4 border-l-red-400' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(milestone.status)}
                          {getSectorIcon(milestone.sector)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-gray-900 text-sm leading-tight">
                            {milestone.title}
                            {milestone.critical && <span className="text-red-500 ml-1">*</span>}
                          </h5>
                          <p className="text-xs text-gray-600 mt-1 leading-tight">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {(!displayData.quarter[quarter] || displayData.quarter[quarter].length === 0) && (
                    <div className="text-center text-gray-400 py-4">
                      <Calendar className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">No milestones in {quarter}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Strategic Timeline Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Target className="w-6 h-6 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Strategic Timeline Overview</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="font-medium text-blue-900">Phase 1: Foundation (2025-2027)</div>
                <ul className="text-sm text-blue-800 mt-2 space-y-1">
                  <li>• Private sector validation and cash generation</li>
                  <li>• Technology platform development and launch</li>
                  <li>• First public sector pilot agreements</li>
                  <li>• Flagship school operational proof</li>
                </ul>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4">
                <div className="font-medium text-emerald-900">Phase 2: Scaling (2027-2029)</div>
                <ul className="text-sm text-emerald-800 mt-2 space-y-1">
                  <li>• Public pilot validation and expansion</li>
                  <li>• Franchise development and growth</li>
                  <li>• Regional partnerships across major cities</li>
                  <li>• Technology adoption model scaling</li>
                </ul>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="font-medium text-purple-900">Phase 3: Dominance (2029-2035)</div>
                <ul className="text-sm text-purple-800 mt-2 space-y-1">
                  <li>• Public sector becomes largest revenue stream</li>
                  <li>• National scale achievement (1M+ students)</li>
                  <li>• International expansion preparation</li>
                  <li>• Market leadership establishment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterTimeline;