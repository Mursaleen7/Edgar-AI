import { useState } from 'react';
import { LogIn } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your authentication logic here
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Column */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-lg space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <LogIn className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">Edgar AI</span>
          </div>
          
          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Welcome Back!</h1>
              <p className="text-gray-500">Please enter login details below</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter the email"
                  className="w-full rounded-full border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter the Password"
                  className="w-full rounded-full border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="text-right">
                <a href="/forgot-password" className="text-sm text-gray-600 hover:text-gray-900">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-blue-600 px-4 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign in
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 text-gray-500">Or continue</span>
                </div>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-300 px-4 py-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <img
                  src="/google-icon.png"
                  alt="Google"
                  className="h-5 w-5"
                />
                Log in with Google
              </button>
            </form>

            <p className="text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <a href="/signup" className="font-medium text-blue-600 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Column with Financial AI Theme */}
      <div className="hidden lg:block">
        <div className="relative flex h-full items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 overflow-hidden">
          {/* Background Patterns */}
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              </pattern>
              <radialGradient id="sphereGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4CAF50" stopOpacity="0" />
              </radialGradient>
            </defs>
            
            {/* Grid Background */}
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Floating Spheres */}
            {[...Array(5)].map((_, i) => (
              <circle
                key={i}
                cx={80 + i * 60}
                cy={100 + i * 40}
                r="20"
                fill="url(#sphereGradient)"
              >
                <animate
                  attributeName="cy"
                  values={`${100 + i * 40};${80 + i * 40};${100 + i * 40}`}
                  dur={`${3 + i}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
            
            {/* Digital Circuit Lines */}
            {[...Array(3)].map((_, i) => (
              <path
                key={i}
                d={`M${50 + i * 150},0 L${50 + i * 150},400 M0,${50 + i * 150} L400,${50 + i * 150}`}
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1"
                strokeDasharray="5,5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;10"
                  dur={`${5 + i}s`}
                  repeatCount="indefinite"
                />
              </path>
            ))}
          </svg>

          {/* Robot SVG */}
          <svg
            viewBox="0 0 400 400"
            className="w-full max-w-2xl relative z-10"
          >
            {/* Background Circle */}
            <circle cx="200" cy="200" r="150" fill="rgba(255, 255, 255, 0.1)" />
            
            {/* Robot Body */}
            <g>
              {/* Body */}
              <rect x="150" y="180" width="100" height="120" rx="20" fill="#ffffff">
                <animate
                  attributeName="y"
                  values="180;183;180"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </rect>
              
              {/* Screen/Display */}
              <rect x="165" y="200" width="70" height="40" rx="5" fill="#E8F4FF">
                <animate
                  attributeName="opacity"
                  values="0.8;1;0.8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </rect>
              
              {/* Chart Line on Screen */}
              <path
                d="M175,220 L185,215 L195,225 L205,210 L215,220 L225,215"
                stroke="#4CAF50"
                strokeWidth="2"
                fill="none"
              >
                <animate
                  attributeName="d"
                  values="M175,220 L185,215 L195,225 L205,210 L215,220 L225,215;
                         M175,215 L185,225 L195,210 L205,220 L215,215 L225,220;
                         M175,220 L185,215 L195,225 L205,210 L215,220 L225,215"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            {/* Head */}
            <g>
              <rect x="160" y="120" width="80" height="60" rx="15" fill="#ffffff">
                <animate
                  attributeName="y"
                  values="120;123;120"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </rect>
              
              {/* Eyes */}
              <circle cx="185" cy="145" r="10" fill="#333">
                <animate
                  attributeName="r"
                  values="10;8;10"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="215" cy="145" r="10" fill="#333">
                <animate
                  attributeName="r"
                  values="10;8;10"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              
              {/* Antenna */}
              <line x1="200" y1="120" x2="200" y2="100" stroke="#ffffff" strokeWidth="4">
                <animate
                  attributeName="y2"
                  values="100;95;100"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </line>
              <circle cx="200" cy="95" r="5" fill="#4CAF50">
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Arms */}
            <g>
              {/* Left Arm */}
              <path
                d="M150,200 C130,200 120,190 110,185"
                stroke="#ffffff"
                strokeWidth="15"
                strokeLinecap="round"
                fill="none"
              >
                <animate
                  attributeName="d"
                  values="M150,200 C130,200 120,190 110,185;
                         M150,200 C130,195 120,185 110,180;
                         M150,200 C130,200 120,190 110,185"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
              
              {/* Right Arm */}
              <path
                d="M250,200 C270,200 280,190 290,185"
                stroke="#ffffff"
                strokeWidth="15"
                strokeLinecap="round"
                fill="none"
              >
                <animate
                  attributeName="d"
                  values="M250,200 C270,200 280,190 290,185;
                         M250,200 C270,195 280,185 290,180;
                         M250,200 C270,200 280,190 290,185"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            {/* Financial Icons */}
            <g>
              <circle cx="100" cy="100" r="20" fill="#4CAF50" opacity="0.8" />
              <text x="100" y="105" textAnchor="middle" fill="#ffffff" fontSize="20">$</text>
              
              <circle cx="300" cy="100" r="20" fill="#2196F3" opacity="0.8" />
              <text x="300" y="105" textAnchor="middle" fill="#ffffff" fontSize="20">₿</text>
              
              <circle cx="100" cy="300" r="20" fill="#FFC107" opacity="0.8" />
              <text x="100" y="305" textAnchor="middle" fill="#ffffff" fontSize="20">€</text>
              
              <circle cx="300" cy="300" r="20" fill="#9C27B0" opacity="0.8" />
              <text x="300" y="305" textAnchor="middle" fill="#ffffff" fontSize="20">¥</text>
            </g>
          </svg>
          
          <div className="absolute bottom-12 left-0 right-0 text-center">
            <p className="text-xl font-medium text-white">
              Your AI-powered financial assistant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

