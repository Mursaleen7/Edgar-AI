import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  LogOut,
  DollarSign,
  TrendingUp,
  Building2,
  FileSpreadsheet,
  Map,
} from 'lucide-react';

const mockData = [
  { month: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
  { month: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
  { month: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
  { month: 'Apr', revenue: 2780, expenses: 3908, profit: -1128 },
  { month: 'May', revenue: 1890, expenses: 4800, profit: -2910 },
  { month: 'Jun', revenue: 2390, expenses: 3800, profit: -1410 },
];

export default function Dashboard() {
  const { signOut } = useAuth();
  const [expenses, setExpenses] = useState({
    rent: '',
    utilities: '',
    supplies: '',
    marketing: '',
  });

  const handleExpenseChange = (field: string, value: string) => {
    setExpenses((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">Business Analytics</span>
            </div>
            <button
              onClick={signOut}
              className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Revenue Projection Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              Revenue Projection
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4F46E5"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="expenses" stroke="#EF4444" />
                  <Line type="monotone" dataKey="profit" stroke="#10B981" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Expense Input Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Building2 className="h-5 w-5 mr-2 text-blue-600" />
              Manual Expense Entry
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Rent
                </label>
                <input
                  type="number"
                  value={expenses.rent}
                  onChange={(e) => handleExpenseChange('rent', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Utilities
                </label>
                <input
                  type="number"
                  value={expenses.utilities}
                  onChange={(e) =>
                    handleExpenseChange('utilities', e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Supplies
                </label>
                <input
                  type="number"
                  value={expenses.supplies}
                  onChange={(e) =>
                    handleExpenseChange('supplies', e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Marketing
                </label>
                <input
                  type="number"
                  value={expenses.marketing}
                  onChange={(e) =>
                    handleExpenseChange('marketing', e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                Save Expenses
              </button>
            </div>
          </div>

          {/* Invoice Analysis */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FileSpreadsheet className="h-5 w-5 mr-2 text-blue-600" />
              Invoice Analysis
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Outstanding Invoices</h3>
                <p className="text-2xl font-bold text-blue-600">$12,450</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Average Payment Time</h3>
                <p className="text-2xl font-bold text-blue-600">15 days</p>
              </div>
            </div>
          </div>

          {/* Local Resources */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Map className="h-5 w-5 mr-2 text-blue-600" />
              Local Resources
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold">Nearby Suppliers</h3>
                <ul className="mt-2 space-y-2">
                  <li>Office Supply Co. (0.5 miles)</li>
                  <li>Tech Solutions Inc. (1.2 miles)</li>
                  <li>Business Services Ltd. (2.0 miles)</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold">Business Services</h3>
                <ul className="mt-2 space-y-2">
                  <li>Local Chamber of Commerce</li>
                  <li>Small Business Development Center</li>
                  <li>Networking Events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}