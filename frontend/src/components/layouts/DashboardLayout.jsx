import { Children, useEffect, useState } from "react";
import { Briefcase, Building2, LogOut, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { NAVIGATION_MENU } from "../../utils/data";
import ProfileDropDown from "./ProfileDropDown";

const NavigationItem = ({ item, isActive, onClick, isCollapsed }) => {
  const Icon = item.icon;

  return (
    <button
      onClick={() => onClick(item.id)}
      className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
        isActive
          ? "bg-indigo-50 text-indigo-700 shadow-sm shadow-indigo-50"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      } cursor-pointer`}
    >
      <Icon
        className={`h-5 w-5 flex-shrink-0 ${
          isActive ? "text-indigo-600" : "text-slate-500"
        }`}
      />
      {!isCollapsed && <span className="ml-3 truncate">{item.name}</span>}
    </button>
  );
};

const DashboardLayout = ({ activeMenu, children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(activeMenu || "Dashboard");
  const [profileDropDownOpen, setProfileDropDownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      if (profileDropDownOpen) setProfileDropDownOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [profileDropDownOpen]);

  const handleNavigation = (itemId) => {
    setActiveNavItem(itemId);
    navigate(`/${itemId}`);
    if (isMobile) setSidebarOpen(false);
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const sidebarCollapsed = !isMobile && false;

  return (
    <div className="flex h-screen bg-slate-50">
      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ${
          isMobile ? (sidebarOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"
        } ${sidebarCollapsed ? "w-16" : "w-64"} border-r border-slate-200 bg-white`}
      >
        <div className="flex h-16 items-center border-b border-slate-200 pl-6">
          {!sidebarCollapsed ? (
            <Link className="flex items-center space-x-3" to="/">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-200">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900">TakeUrJob</span>
            </Link>
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-200">
              <Building2 className="h-5 w-5 text-white" />
            </div>
          )}
        </div>

        <nav className="space-y-2 p-4">
          {NAVIGATION_MENU.map((item) => (
            <NavigationItem
              key={item.id}
              item={item}
              isActive={activeNavItem === item.id}
              onClick={handleNavigation}
              isCollapsed={sidebarCollapsed}
            />
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button
            className="flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            onClick={logout}
          >
            <LogOut className="h-5 w-5 flex-shrink-0 text-slate-500" />
            {!sidebarCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>

      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`flex flex-1 flex-col transition-all duration-300 ${
          isMobile ? "ml-0" : sidebarCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            {isMobile && (
              <button
                onClick={toggleSidebar}
                className="rounded-xl p-2 transition hover:bg-slate-100"
              >
                {sidebarOpen ? (
                  <X className="h-5 w-5 text-slate-600" />
                ) : (
                  <Menu className="h-5 w-5 text-slate-600" />
                )}
              </button>
            )}
            <div>
              <h1 className="text-base font-semibold text-slate-900">Welcome Back!</h1>
              <p className="hidden text-sm text-slate-500 sm:block">
                Here's what happening with your jobs today
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <ProfileDropDown
              isOpen={profileDropDownOpen}
              onToggle={(e) => {
                e.stopPropagation();
                setProfileDropDownOpen(!profileDropDownOpen);
              }}
              avatar={user?.avatar || ""}
              companyName={user?.name || ""}
              email={user?.email || ""}
              userRole={user?.role || ""}
              onLogout={logout}
            />
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
