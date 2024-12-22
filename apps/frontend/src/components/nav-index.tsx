"use client"

import { HomeIcon } from "lucide-react"
import { useLocation } from "react-router-dom";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavIndex() {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton className={location.pathname === "/" ? "bg-sidebar-primary text-sidebar-primary-foreground" : ""}>
            <HomeIcon />
            <span>Dashboard</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
