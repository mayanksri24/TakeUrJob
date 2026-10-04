import { useState, useEffect } from "react";
import { Briefcase, Bookmark } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ProfileDropDown from "./ProfileDropDown";

const Navbar = () => {
  const [profileDropDown, setProfileDropDown] = useState(false);
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleClickOutside = () => {
      if (profileDropDown) setProfileDropDown(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [profileDropDown]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-200">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-slate-900">TakeUrJob</span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            {user && (
              <button
                onClick={() => navigate("/saved-jobs")}
                className="relative rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <Bookmark className="h-5 w-5" />
              </button>
            )}
            {isAuthenticated ? (
              <ProfileDropDown
                isOpen={profileDropDown}
                onToggle={(e) => {
                  e.stopPropagation();
                  setProfileDropDown(!profileDropDown);
                }}
                avatar={user?.avatar || ""}
                companyName={user?.name || ""}
                email={user?.email || ""}
                userRole={user?.role || ""}
                onLogout={logout}
              />
            ) : (
              <>
                <a
                  href="/login"
                  className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  Login
                </a>
                <a
                  href="/signUp"
                  className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:from-indigo-700 hover:to-violet-700"
                >
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
