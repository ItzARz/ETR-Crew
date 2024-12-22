import React from "react";
import { SidebarMenu, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { useTheme } from "@/components/theme-provider";

export function SidebarBrand() {
  const { state } = useSidebar();
  const { theme } = useTheme();

  const getLogoSrc = () => {
    const basePath = "./images/logo/etr";
    const variant = state === "collapsed" ? "isotipo" : "imagotipo";
    const themeSuffix = theme === "dark" ? "dark" : "light";
    return `${basePath}-${variant}-${themeSuffix}.png`;
  };

  const getLogoClass = () => (state === "collapsed" ? "w-8" : "w-[190px]");

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <a className="flex" href="/">
          <img src={getLogoSrc()} className={getLogoClass()} alt="ETR Logo" />
        </a>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
