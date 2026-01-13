"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  ChevronLeft 
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState(""); // Can be email or phone
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", { identifier, password });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Background Glows (Matching HomePage) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px]" />
      </div>

      {/* Top Navigation */}
      <header className="p-6">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-950 font-bold transition-transform group-hover:scale-105">
              C
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">CLENJA</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Back to Home Link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors mb-8"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none backdrop-blur-sm">
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50">Welcome back</h1>
              <p className="text-slate-600 dark:text-slate-400 font-medium mt-2">
                Enter your details to access your account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Identifier Field (Email or Phone) */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  Email or Phone Number
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    {identifier.includes('@') ? <Mail className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="name@company.com or +234..."
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Password
                  </label>
                  <Link href="#" className="text-xs font-bold text-emerald-600 hover:underline">
                    Forgot?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-slate-900 dark:bg-slate-50 px-8 py-4 text-base font-bold text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-xl shadow-slate-900/10 mt-2"
              >
                Sign in <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
              <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-emerald-600 hover:underline">
                  Create one for free
                </Link>
              </p>
            </div>
          </div>

          {/* Footer Info */}
          <p className="mt-8 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
            Secured by Clenja Cloud Protection
          </p>
        </div>
      </main>
    </div>
  );
}