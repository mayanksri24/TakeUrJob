import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Briefcase, Target } from "lucide-react";

const Analytics = () => {
  const stats = [
    { icon: Users, title: "Active talent", value: "2.4M+", growth: "+15%" },
    { icon: Briefcase, title: "Jobs live", value: "150K+", growth: "+22%" },
    { icon: Target, title: "Hires made", value: "89K+", growth: "+18%" },
    { icon: TrendingUp, title: "Match rate", value: "94%", growth: "+8%" },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
            Growth at a glance
          </p>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Data that keeps your hiring engine moving
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-700">
                  <stat.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  {stat.growth}
                </span>
              </div>
              <h3 className="mt-5 text-3xl font-black text-slate-900">{stat.value}</h3>
              <p className="mt-2 text-sm font-medium text-slate-600">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;
