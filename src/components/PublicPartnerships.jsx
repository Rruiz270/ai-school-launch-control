import React, { useState } from 'react';
import { 
  Building2, Users, MapPin, Calendar, TrendingUp, 
  CheckCircle, Clock, AlertTriangle, School, 
  FileText, DollarSign, Target, Zap
} from 'lucide-react';
import { useProject } from '../context/ProjectContext';

const PublicPartnerships = () => {
  const { projectData } = useProject();
  const [selectedMunicipality, setSelectedMunicipality] = useState(null);

  // Mock public sector data - in real app this would come from context
  const publicPartnershipData = {
    pilotMunicipalities: [
      {
        id: 'sp-capital',
        name: 'São Paulo Capital',
        state: 'São Paulo',
        students: 200000,
        schools: 150,
        status: 'negotiation',
        timeline: 'Q4 2025 - Q2 2026',
        revenue: 60000000, // R$250/student/month * 12 months * 200k students
        progress: 35,
        keyContact: 'Secretaria Municipal de Educação',
        challenges: ['Teacher union negotiations', 'Technology infrastructure', 'Political alignment']
      },
      {
        id: 'rio-capital',
        name: 'Rio de Janeiro Capital',
        state: 'Rio de Janeiro',
        students: 150000,
        schools: 120,
        status: 'pilot',
        timeline: 'Q2 2026 - Q4 2026',
        revenue: 45000000,
        progress: 15,
        keyContact: 'SME Rio',
        challenges: ['Budget allocation', 'Infrastructure readiness']
      },
      {
        id: 'curitiba',
        name: 'Curitiba',
        state: 'Paraná',
        students: 120000,
        schools: 90,
        status: 'negotiation',
        timeline: 'Q1 2027 - Q3 2027',
        revenue: 36000000,
        progress: 25,
        keyContact: 'Secretaria Municipal de Educação de Curitiba',
        challenges: ['Smart city integration', 'Municipal budget alignment', 'Educational technology standards']
      },
      {
        id: 'florianopolis',
        name: 'Florianópolis',
        state: 'Santa Catarina',
        students: 60000,
        schools: 45,
        status: 'planning',
        timeline: 'Q2 2027 - Q4 2027',
        revenue: 18000000,
        progress: 10,
        keyContact: 'Secretaria de Educação de Florianópolis',
        challenges: ['Innovation district partnerships', 'University collaboration (UFSC)', 'Tech sector alignment']
      },
      {
        id: 'belo-horizonte',
        name: 'Belo Horizonte',
        state: 'Minas Gerais',
        students: 80000,
        schools: 80,
        status: 'planning',
        timeline: 'Q1 2027',
        revenue: 24000000,
        progress: 5,
        keyContact: 'Secretaria Municipal',
        challenges: ['Initial assessment', 'Stakeholder alignment']
      }
    ],
    
    totalTargetStudents: 2000000, // 2M by Year 10
    totalMunicipalities: 100, // 100 municipalities by Year 10
    year10Revenue: 4800000000, // R$4.8B by Year 10
    
    keyMetrics: {
      studentsPerMonth: 250, // R$250 per student per month
      performanceBonus: 0.15, // 15% performance bonus
      teacherTrainingRevenue: 25000000, // Annual teacher training revenue
      technologyLicenseRevenue: 50000000, // Annual technology licensing
    },

    workstreams: [
      {
        id: 'municipal-partnerships',
        name: 'Municipal Partnership Development',
        progress: 25,
        tasks: [
          { name: 'São Paulo partnership agreement', status: 'in-progress' },
          { name: 'Rio de Janeiro pilot design', status: 'in-progress' },
          { name: 'Legal framework development', status: 'pending' },
          { name: 'Performance metrics definition', status: 'completed' }
        ]
      },
      {
        id: 'teacher-integration',
        name: 'Teacher Integration & Training',
        progress: 15,
        tasks: [
          { name: 'AI guide training curriculum', status: 'in-progress' },
          { name: 'Existing teacher transition plan', status: 'pending' },
          { name: 'Union collaboration framework', status: 'pending' },
          { name: 'Performance evaluation system', status: 'not-started' }
        ]
      },
      {
        id: 'infrastructure',
        name: 'Public School Infrastructure',
        progress: 10,
        tasks: [
          { name: 'Technology requirements assessment', status: 'in-progress' },
          { name: 'Internet connectivity upgrade plan', status: 'pending' },
          { name: 'Device procurement strategy', status: 'pending' },
          { name: 'Security systems integration', status: 'not-started' }
        ]
      }
    ]
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'negotiation': return 'bg-blue-100 text-blue-800';
      case 'pilot': return 'bg-yellow-100 text-yellow-800';
      case 'planning': return 'bg-gray-100 text-gray-800';
      case 'active': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    if (progress >= 25) return 'bg-blue-500';
    return 'bg-gray-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Public Sector Partnerships</h2>
            <p className="mt-2 opacity-90">
              Scaling AI Education to Brazil's 46.7M Public K-12 Students
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">100</div>
            <div className="text-sm opacity-90">Target Municipalities</div>
          </div>
        </div>
      </div>

      {/* Key Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Target Students</p>
              <p className="text-2xl font-bold text-emerald-600">
                {formatNumber(publicPartnershipData.totalTargetStudents)}
              </p>
            </div>
            <Users className="w-8 h-8 text-emerald-600" />
          </div>
          <div className="mt-4 text-xs text-gray-500">
            4.3% of Brazil's 46.7M public students
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Year 10 Revenue Target</p>
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(publicPartnershipData.year10Revenue)}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
          <div className="mt-4 text-xs text-gray-500">
            R$250/student/month + performance bonuses
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Partnerships</p>
              <p className="text-2xl font-bold text-blue-600">5</p>
            </div>
            <School className="w-8 h-8 text-blue-600" />
          </div>
          <div className="mt-4 text-xs text-gray-500">
            SP, Rio, Curitiba, Florianópolis, BH
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Partnership Progress</p>
              <p className="text-2xl font-bold text-purple-600">18%</p>
            </div>
            <Target className="w-8 h-8 text-purple-600" />
          </div>
          <div className="mt-4 text-xs text-gray-500">
            Average across all partnerships
          </div>
        </div>
      </div>

      {/* Municipality Partnerships */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Partnership Pipeline */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Partnership Pipeline</h3>
          <div className="space-y-4">
            {publicPartnershipData.pilotMunicipalities.map((municipality) => (
              <div 
                key={municipality.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedMunicipality(municipality)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{municipality.name}</h4>
                    <p className="text-sm text-gray-600">{municipality.state}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(municipality.status)}`}>
                    {municipality.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                  <div>
                    <span className="font-medium">Students:</span> {formatNumber(municipality.students)}
                  </div>
                  <div>
                    <span className="font-medium">Schools:</span> {municipality.schools}
                  </div>
                  <div>
                    <span className="font-medium">Timeline:</span> {municipality.timeline}
                  </div>
                  <div>
                    <span className="font-medium">Revenue:</span> {formatCurrency(municipality.revenue)}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex-1 mr-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{municipality.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(municipality.progress)}`}
                        style={{ width: `${municipality.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Municipality Details */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {selectedMunicipality ? `${selectedMunicipality.name} Details` : 'Select Municipality'}
          </h3>
          
          {selectedMunicipality ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-sm text-gray-600">Total Students</div>
                  <div className="text-lg font-semibold text-gray-900">
                    {formatNumber(selectedMunicipality.students)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Schools</div>
                  <div className="text-lg font-semibold text-gray-900">
                    {selectedMunicipality.schools}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Annual Revenue</div>
                  <div className="text-lg font-semibold text-green-600">
                    {formatCurrency(selectedMunicipality.revenue)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Progress</div>
                  <div className="text-lg font-semibold text-blue-600">
                    {selectedMunicipality.progress}%
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Key Contact</h4>
                <p className="text-sm text-gray-600">{selectedMunicipality.keyContact}</p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Current Challenges</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {selectedMunicipality.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Timeline</h4>
                <p className="text-sm text-gray-600">{selectedMunicipality.timeline}</p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <Building2 className="w-12 h-12 mx-auto mb-2 text-gray-300" />
              <p>Click on a municipality to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* Public Sector Workstreams */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Public Sector Workstreams</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {publicPartnershipData.workstreams.map((workstream) => (
            <div key={workstream.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-medium text-gray-900">{workstream.name}</h4>
                <span className="text-sm font-semibold text-blue-600">{workstream.progress}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className={`h-2 rounded-full ${getProgressColor(workstream.progress)}`}
                  style={{ width: `${workstream.progress}%` }}
                ></div>
              </div>

              <div className="space-y-2">
                {workstream.tasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{task.name}</span>
                    <div className="flex items-center space-x-1">
                      {task.status === 'completed' && <CheckCircle className="w-4 h-4 text-green-500" />}
                      {task.status === 'in-progress' && <Clock className="w-4 h-4 text-blue-500" />}
                      {task.status === 'pending' && <div className="w-4 h-4 rounded-full bg-yellow-300"></div>}
                      {task.status === 'not-started' && <div className="w-4 h-4 rounded-full bg-gray-300"></div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Notes */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Zap className="w-6 h-6 text-emerald-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-emerald-900 mb-2">Public Partnership Strategy</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-emerald-800 mb-2">Key Advantages</h5>
                <ul className="text-sm text-emerald-700 space-y-1">
                  <li>• Use existing teachers and infrastructure</li>
                  <li>• Performance-based revenue model</li>
                  <li>• Scale to 46.7M students (vs 9M private)</li>
                  <li>• Democratic access to AI education</li>
                  <li>• Government partnership reduces regulatory risk</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-emerald-800 mb-2">Implementation Timeline</h5>
                <ul className="text-sm text-emerald-700 space-y-1">
                  <li>• 2025-2026: Pilot partnerships (5 cities including PR/SC)</li>
                  <li>• 2027-2028: Southern region expansion (25 cities)</li>
                  <li>• 2029-2030: State-level partnerships across regions</li>
                  <li>• 2031-2035: National scale (120+ municipalities)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicPartnerships;