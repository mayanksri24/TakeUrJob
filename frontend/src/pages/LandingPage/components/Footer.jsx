import { Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-900/30">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-black tracking-tight text-white">TakeUrJob</h3>
          </div>

          <p className="mx-auto max-w-xl text-sm leading-7 text-slate-300">
            Connecting ambitious professionals with the teams, opportunities, and momentum they need to grow.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-400">
            <span>Privacy Policy</span>
            <span className="h-1 w-1 rounded-full bg-slate-500" />
            <span>Terms of Service</span>
            <span className="h-1 w-1 rounded-full bg-slate-500" />
            <span>Contact</span>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            © {new Date().getFullYear()} TakeUrJob, India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
