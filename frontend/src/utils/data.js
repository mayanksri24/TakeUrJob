import {
  Search,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Award,
  Briefcase,
  Building2,
  LayoutDashboard,
  Plus,
} from "lucide-react";

export const jobSeekerFeatures = [
  {
    icon: Search,
    title: "Smart job matching",
    description:
      "Get prioritized recommendations based on your skills, experience, and the roles you actually want.",
  },
  {
    icon: FileText,
    title: "Resume-ready profiles",
    description:
      "Showcase your work, experience, and strengths in a profile that hiring teams trust instantly.",
  },
  {
    icon: MessageSquare,
    title: "Direct conversations",
    description:
      "Reach out to hiring managers quickly and stay in control of every application stage.",
  },
  {
    icon: Award,
    title: "Verified skills",
    description:
      "Highlight your expertise with trusted assessments, badges, and signals employers notice.",
  },
];

export const employerFeatures = [
  {
    icon: Users,
    title: "High-intent talent",
    description:
      "Tap into a qualified pool of active candidates and discover the right fit faster.",
  },
  {
    icon: BarChart3,
    title: "Hiring analytics",
    description:
      "Track application funnels, engagement, and performance with insights built for scaling teams.",
  },
  {
    icon: Shield,
    title: "Verified candidates",
    description:
      "Reduce screening risk with trusted profiles, credentials, and better candidate signals.",
  },
  {
    icon: Clock,
    title: "Faster hiring cycles",
    description:
      "Automate first-pass coordination and shorten time-to-hire without losing quality.",
  },
];

// navigation item configuration
export const NAVIGATION_MENU = [
  { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "post-job", name: "Post Job", icon: Plus },
  { id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
  { id: "company-profile", name: "Company Profile", icon: Building2 },
];

export const CATEGORIES = [
  { value: "Engineering", label: "Engineering" },
  { value: "Design", label: "Design" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "It & Software", label: "It & Software" },
  { value: "Customer-Service", label: "Customer-Service" },
  { value: "Product", label: "Product" },
  { value: "Operations", label: "Operations" },
  { value: "Finance", label: "Finance" },
  { value: "HR", label: "HR" },
  { value: "Other", label: "Other" },
];

export const JOB_TYPES = [
  { value: "Remote", label: "Remote" },
  { value: "Full-Time", label: "Full-Time" },
  { value: "Part-Time", label: "Part-Time" },
  { value: "Contract", label: "Contract" },
  { value: "Internship", label: "Internship" },
];

export const SALARY_RANGES = [
  "Less than $1000",
  "$1000 - $15,000",
  "More than $15,000",
];
