import React from "react";
import { motion } from "framer-motion";
import { employerFeatures, jobSeekerFeatures } from "../../../utils/data";

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
            Why teams choose TakeUrJob
          </p>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Built for the way hiring works today
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            From discovering your next role to building a standout hiring funnel, every workflow is designed to move faster.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.06)] md:p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <span className="text-lg font-black">J</span>
              </div>
              <div>
                <p className="text-sm font-medium text-indigo-600">For job seekers</p>
                <h3 className="text-2xl font-bold text-slate-900">Career momentum</h3>
              </div>
            </div>

            <div className="space-y-6">
              {jobSeekerFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="group flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-200 hover:bg-indigo-50/60"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{feature.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.06)] md:p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                <span className="text-lg font-black">H</span>
              </div>
              <div>
                <p className="text-sm font-medium text-violet-600">For employers</p>
                <h3 className="text-2xl font-bold text-slate-900">Hiring clarity</h3>
              </div>
            </div>

            <div className="space-y-6">
              {employerFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="group flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-violet-200 hover:bg-violet-50/60"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{feature.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
