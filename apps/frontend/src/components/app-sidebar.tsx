import * as React from "react"
import {
  BookOpen,
  GalleryVerticalEnd,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { NavIndex } from "@/components/nav-index"

import { SidebarBrand } from "@/components/sidebar-logo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Albert R",
    email: "ETR102",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Estelar Virtual",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    }
  ],
  navMain: [
    {
      title: "Flight Ops",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Flight",
          url: "#",
        },
        {
          title: "Dispatch",
          url: "#",
        },
        {
          title: "NOTAMs",
          url: "#",
        },
        {
          title: "Buy a Ticket",
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Charts",
          url: "#",
        },
        {
          title: "Liveries",
          url: "#",
        },
        {
          title: "Manuals",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
      ],
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarBrand />
      </SidebarHeader>
      <SidebarContent>
        <NavIndex />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
