import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { StatsCard } from "@/components/ui/stats-card"
import { Plane, Package, FileClock, Spline, UsersRound } from "lucide-react"
//import { Skeleton } from "@/components/ui/skeleton"
import { MonthlyFlights } from "@/components/ui/charts/montlyFlights-chart"
import { MonthlyBudget } from "@/components/ui/charts/monthlyBudget-chart"
import { LeaderboardCard } from "@/components/leaderboardCard"
import { LocationTransfer } from "@/components/locationTransfer-Card"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <span className="font-bold">Welcome again sir, 👋</span>
          </div>
          <div className="flex items-center gap-4 px-4">
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid gap-4 md:grid-cols-5">
            <StatsCard
              title="Flights"
              value="199"
              icon={<Plane className="w-10 h-10 [#369FFF]" />}
              classnames="p-6"
            />
            <StatsCard
              title="Hours"
              value="381"
              icon={<FileClock className="w-10 h-10 text-[#FFC000]" />}
              classnames="p-6"
            />
            <StatsCard
              title="Miles"
              value="121815"
              icon={<Spline className="w-10 h-10 text-[#FF993A]" />}
              classnames="p-6"
            />
            <StatsCard
              title="Passengers"
              value="19721"
              icon={<UsersRound className="w-10 h-10 text-[#519F34]" />}
              classnames="p-6"
            />
            <StatsCard
              title="Cargo"
              value="75354"
              icon={<Package className="w-10 h-10 text-[#9136FF]" />}
              classnames="p-6"
            />
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-5">
            <div className="col-span-2">
              <MonthlyFlights />
            </div>
            <div className="col-span-2">
              <MonthlyBudget />
            </div>
            <div className="col-span-1">
              <LeaderboardCard />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="col-span-2">
              <LocationTransfer />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
