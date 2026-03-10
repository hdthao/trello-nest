import { motion } from 'motion/react';
import { LogOut, LayoutDashboard, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 px-4 py-8 flex flex-col">
        <div className="flex items-center gap-3 px-2 mb-10">
          <div className="w-10 h-10 bg-[#fff1eb] rounded-xl flex items-center justify-center">
            <div className="w-6 h-6 bg-[#f25c19] rounded-[4px] flex items-center justify-center p-1">
              <div className="flex gap-0.5 items-end h-full w-full">
                <div className="w-1/3 bg-white h-full rounded-[1px]"></div>
                <div className="w-1/3 bg-white h-2/3 rounded-[1px]"></div>
                <div className="w-1/3 bg-white h-5/6 rounded-[1px]"></div>
              </div>
            </div>
          </div>
          <h1 className="text-[22px] font-bold text-[#1a1a1a] tracking-tight">Kanflow</h1>
        </div>

        <nav className="flex-1 space-y-2">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-[#fff1eb] text-[#f25c19] rounded-xl font-semibold text-[15px]">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-[#666666] hover:bg-gray-50 rounded-xl font-medium transition-colors text-[15px]">
            <Settings className="w-5 h-5" />
            Settings
          </a>
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 text-[#666666] hover:text-[#d94e12] hover:bg-[#fff1eb] rounded-xl font-medium transition-colors mt-auto text-[15px]"
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <header className="mb-8">
            <h2 className="text-[28px] font-bold text-[#1a1a1a]">Welcome back!</h2>
            <p className="text-[#666666] mt-1 text-[15px]">Here is what's happening in your workspace today.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow">
              <h3 className="font-semibold text-gray-500 mb-3 text-[14px] uppercase tracking-wider">Total Tasks</h3>
              <p className="text-[36px] font-bold text-[#1a1a1a]">12</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow">
              <h3 className="font-semibold text-gray-500 mb-3 text-[14px] uppercase tracking-wider">In Progress</h3>
              <p className="text-[36px] font-bold text-[#f25c19]">4</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow">
              <h3 className="font-semibold text-gray-500 mb-3 text-[14px] uppercase tracking-wider">Completed</h3>
              <p className="text-[36px] font-bold text-[#10b981]">8</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-8 min-h-[400px]">
            <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-6">Recent Activity</h3>
            <div className="flex flex-col items-center justify-center h-full text-[#666666] py-20">
              <LayoutDashboard className="w-12 h-12 text-gray-200 mb-4" />
              <p>Your workflow activity will appear here.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
