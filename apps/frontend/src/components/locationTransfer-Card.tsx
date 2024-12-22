import { Card } from "@/components/ui/card";
import { AirportTransferDialog } from "./airportTransfer-dialog";

import { MapPinHouse } from "lucide-react"

export const LocationTransfer = () => {
    return (
        <Card className="flex justify-between items-center gap-2 p-6 rounded-lg shadow-custom-box">
            <MapPinHouse className="w-16 h-16 text-green-500" />
            <div className="flex flex-col items-start align-middle mt-4">
                <p className="text-4xl font-bold mb-1">SVMI</p>
                <h3 className="text-md font-semibold mb-4">Current Location</h3>
            </div>
            <div className="ml-auto flex items-center">
                <AirportTransferDialog />
            </div>
        </Card>
    );
};
