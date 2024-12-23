import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { AirportTransferDialog } from "./airportTransfer-dialog";
import { MapPinHouse } from "lucide-react";

export const LocationTransfer = () => {
  return (
    <Card className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-lg shadow-custom-box">
      <div className="flex-shrink-0">
        <MapPinHouse className="text-green-500 w-12 h-12 sm:w-16 sm:h-16 md:hidden lg:block" />
      </div>
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <CardTitle>SVMI</CardTitle>
        <CardDescription className="font-semibold">Current Location</CardDescription>
      </div>
      <div className="sm:mt-0 sm:ml-auto">
        <AirportTransferDialog />
      </div>
    </Card>
  );
};
