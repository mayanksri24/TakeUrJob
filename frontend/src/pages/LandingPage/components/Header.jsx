import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Header = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-sky-500 shadow-lg shadow-indigo-200">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-slate-900">
                TakeUrJob
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => navigate("/find-jobs")}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Explore Jobs
            </button>
            <button
              onClick={() =>
                navigate(
                  isAuthenticated && user?.role === "employer"
                    ? "/employer-dashboard"
                    : "/login"
                )
              }
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              For Employers
            </button>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
              <Sparkles className="h-3.5 w-3.5" />
              Hiring made smarter
            </span>
          </nav>

          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="hidden text-sm font-medium text-slate-600 sm:inline">
                  Welcome, {user?.name}
                </span>
                <button
                  onClick={() =>
                    navigate(
                      user?.role === "employer" ? "/employer-dashboard" : "/find-jobs"
                    )
                  }
                  className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:shadow-xl"
                >
                  Dashboard
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:shadow-xl"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
