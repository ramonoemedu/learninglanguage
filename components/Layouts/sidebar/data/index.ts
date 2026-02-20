import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: Icons.HomeIcon,
        items: [],
      },
      {
        title: "Courses",
        url: "/learn",
        icon: Icons.Alphabet, // Use Alphabet for language courses
        items: [],
      },
      {
        title: "Practice Hub",
        url: "/practice",
        icon: Icons.Table, // Placeholder, Table looks like a grid
        items: [],
      },
      {
        title: "Leaderboard",
        url: "/leaderboard",
        icon: Icons.PieChart, // Placeholder
        items: [],
      },
    ],
  },
  {
    label: "ACCOUNT",
    items: [
      {
        title: "Profile",
        url: "/profile",
        icon: Icons.User,
        items: [],
      },
      {
        title: "My Progress",
        url: "/progress",
        icon: Icons.Calendar,
        items: [],
      },
      {
        title: "Admin Panel",
        url: "/admin",
        icon: Icons.Authentication,
        items: [],
      },
    ],
  },
];
