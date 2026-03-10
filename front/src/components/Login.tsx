import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For now simply redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-[#f8f9fa]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[440px] bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden"
      >
        <div className="p-8 sm:p-10">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 bg-[#fff1eb] rounded-xl flex items-center justify-center mb-4">
              <div className="w-7 h-7 bg-[#f25c19] rounded-[4px] flex items-center justify-center p-1.5">
                <div className="flex gap-0.5 items-end h-full w-full">
                  <div className="w-1/3 bg-white h-full rounded-[1px]"></div>
                  <div className="w-1/3 bg-white h-2/3 rounded-[1px]"></div>
                  <div className="w-1/3 bg-white h-5/6 rounded-[1px]"></div>
                </div>
              </div>
            </div>
            <h1 className="text-[28px] font-bold text-[#1a1a1a] tracking-tight">Kanflow</h1>
            <p className="text-[#666666] mt-1 text-[15px]">Welcome back to your workspace</p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-[14px] font-semibold text-[#1a1a1a] mb-2 text-left">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#f25c19] transition-colors" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f25c19]/10 focus:border-[#f25c19] transition-all"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[14px] font-semibold text-[#1a1a1a]">
                  Password
                </label>
                <a href="#" className="text-[13px] font-semibold text-[#f25c19] hover:text-[#d94e12] transition-colors">
                  Forgot Password?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#f25c19] transition-colors" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-11 py-3 bg-white border border-gray-200 rounded-xl text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f25c19]/10 focus:border-[#f25c19] transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-[#f25c19] focus:ring-[#f25c19] border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="remember" className="ml-2 block text-[14px] text-[#666666] cursor-pointer">
                Remember me for 30 days
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#f25c19] text-white py-3.5 px-4 rounded-xl font-bold text-[16px] hover:bg-[#d94e12] active:scale-[0.98] transition-all shadow-lg shadow-orange-500/20"
            >
              Log In <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          {/* Separator */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-[12px] uppercase tracking-wider font-bold text-gray-400">
              <span className="bg-white px-4">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2.5 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 active:scale-[0.98] transition-all font-semibold text-[14px] text-[#1a1a1a]">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
              Google
            </button>
            <button className="flex items-center justify-center gap-2.5 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 active:scale-[0.98] transition-all font-semibold text-[14px] text-[#1a1a1a]">
              <Github className="h-5 w-5" />
              GitHub
            </button>
          </div>
        </div>

        {/* Footer inside card */}
        <div className="bg-[#f9fafb] py-6 px-8 text-center border-t border-gray-100">
          <p className="text-[14px] text-[#666666]">
            Don't have an account?{' '}
            <a href="#" className="font-bold text-[#f25c19] hover:text-[#d94e12] transition-colors">
              Sign up for free
            </a>
          </p>
        </div>
      </motion.div>

      {/* Footer outside card */}
      <div className="mt-8 flex gap-6 text-[13px] font-medium text-gray-400">
        <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Help Center</a>
      </div>
    </div>
  );
}
