import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AirportTransferDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-4 py-2 bg-sidebar-primary text-white font-semibold rounded-xl hover:bg-sidebar-foreground transition-all">Transfer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Pilot Transfer</DialogTitle>
          <DialogDescription>
            Change your location to another airport.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="origin-icao" className="text-left">
              FROM
            </Label>
            <Input
              id="origin-icao"
              defaultValue="SVMI"
              className="col-span-3"
              disabled
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="origin-icao" className="text-left">
              TO
            </Label>
            <Input
              id="destination-icao"
              defaultValue="SVMG"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="submit">Transfer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
