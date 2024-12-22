import React from "react"

import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useTheme } from "@/components/theme-provider"

export function SidebarBrand() {
  const { state } = useSidebar()
  const { theme } = useTheme() //For theme check in the future

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <a className="flex" href="/">
          {state === "collapsed"
            ? <img
                src="./images/logo/isotipo.svg"
                className={`w-8`}
                alt="ETR Logo"
              />
            : <img
                src="./images/logo/imagotipo.svg"
                className={`w-[190px]`}
                alt="ETR Logo"
              />
          }
        </a>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
