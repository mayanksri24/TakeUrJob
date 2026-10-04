import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  Users,
  Building2,
  TrendingUp,
  Play,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Hero = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const stats = [
    { icon: Users, label: "Active talent", value: "2.4M+" },
    { icon: Building2, label: "Hiring teams", value: "50K+" },
    { icon: TrendingUp, label: "Successful matches", value: "150K+" },
  ];

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.16),_transparent_38%),linear-gradient(180deg,#f7f9ff_0%,#ffffff_40%,#eef4ff_100%)] pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Trusted by 50k+ hiring teams
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl text-4xl font-black tracking-tight text-slate-900 md:text-6xl"
            >
              Build your next
              <span className="mt-3 block bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                career momentum
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
            >
              Discover high-growth roles, connect with top teams, and streamline hiring with a recruitment platform built for speed, trust, and results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={() => navigate("/find-jobs")}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-200 transition hover:shadow-2xl"
              >
                <Search className="h-5 w-5" />
                Find jobs
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button
                onClick={() =>
                  navigate(
                    isAuthenticated && user?.role === "employer"
                      ? "/employer-dashboard"
                      : "/login"
                  )
                }
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                <Play className="h-4 w-4" />
                Post a job
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-10 grid max-w-lg grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/60 bg-white/75 p-4 shadow-sm backdrop-blur-sm"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-700">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_30px_80px_rgba(79,70,229,0.12)] backdrop-blur-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-indigo-600 via-violet-600 to-sky-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-indigo-100">Hiring dashboard</p>
                    <h3 className="mt-2 text-3xl font-black">84%</h3>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-sm text-indigo-50">
                      <span>Qualified applicants</span>
                      <span className="font-semibold">1,284</span>
                    </div>
                    <div className="mt-3 h-2.5 rounded-full bg-white/15">
                      <div className="h-2.5 w-[76%] rounded-full bg-white" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.2em] text-indigo-100">Open roles</p>
                      <p className="mt-3 text-2xl font-black">146</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.2em] text-indigo-100">Avg. time</p>
                      <p className="mt-3 text-2xl font-black">9d</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Featured role</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">Senior Product Designer</p>
                  </div>
                  <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Remote
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                  <span>₹22L - ₹32L</span>
                  <span>4 days ago</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
