import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { StatsCard } from "@/components/ui/stats-card"
import { Plane, Package, Clock, Spline, Users } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <span className="font-bold">Welcome again sir,</span>
          </div>
          <div className="flex items-center gap-4 px-4">
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-5">
            <StatsCard
              title="Flights"
              value="1,284"
              icon={<Plane className="w-10 h-10 [#369FFF]" />}
              classnames="p-6"
            />
            <StatsCard
              title="Hours"
              value="1,284"
              icon={<Clock className="w-10 h-10 text-[#FFC000]" />}
              classnames="p-6"
            />
            <StatsCard
              title="Miles"
              value="1,284"
              icon={<Spline className="w-10 h-10 text-[#FF993A]" />}
              classnames="p-6"
            />
            <StatsCard
              title="Passengers"
              value="1,284"
              icon={<Users className="w-10 h-10 text-[#519F34]" />}
              classnames="p-6"
            />
            <StatsCard
              title="Cargo"
              value="1,284"
              icon={<Package className="w-10 h-10 text-[#9136FF]" />}
              classnames="p-6"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="h-36 col-span-3 relative">
              {/* Mapa o CTA para reservar */}
              <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />
            </div>
            <div className="flex justify-between items-center h-36 col-span-2 p-6 rounded-lg shadow-custom-box">
              <div className="flex flex-col">
                <p className="text-4xl font-bold mb-1">SVMI</p>
                <h3 className="text-md font-semibold mb-4">Current Location</h3>
              </div>
              <div className="flex items-center">
                <button className="px-4 py-2 bg-sidebar-primary text-white font-semibold rounded-xl hover:bg-blue-700 transition-all">
                  Buy Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
