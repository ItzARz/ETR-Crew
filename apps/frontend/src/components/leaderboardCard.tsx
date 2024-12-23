import { Card, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Pilot {
  rank: number;
  name: string;
  hours: number;
  callsign: string;
  avatar?: string;
}

const pilots: Pilot[] = [
  {
    rank: 1,
    name: "Carlos R",
    callsign: "ETR102",
    hours: 156,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    rank: 2,
    name: "Ana M",
    callsign: "ETR109",
    hours: 142,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    rank: 3,
    name: "Juan P",
    callsign: "ETR105",
    hours: 128,
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop"
  },
  {
    rank: 4,
    name: "María G",
    callsign: "ETR101",
    hours: 115,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    rank: 5,
    name: "Pedro S",
    callsign: "ETR104",
    hours: 98,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  },
  {
    rank: 6,
    name: "Laura T",
    callsign: "ETR115",
    hours: 92,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
  },
  {
    rank: 7,
    name: "Miguel A",
    callsign: "ETR111",
    hours: 87,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  },
  {
    rank: 8,
    name: "Isabel R",
    callsign: "ETR110",
    hours: 82,
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop"
  },
  {
    rank: 9,
    name: "Roberto F",
    callsign: "ETR108",
    hours: 76,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
  },
  {
    rank: 10,
    name: "Carmen L",
    callsign: "ETR106",
    hours: 71,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
  }
];

export const LeaderboardCard = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <CardTitle>Top Pilots</CardTitle>
        <Trophy className="w-5 h-5 text-blue-600" />
      </div>
      <ScrollArea className="h-[350px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pilot</TableHead>
              <TableHead className="text-right">Hours</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pilots.map((pilot) => (
              <TableRow key={pilot.rank}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={pilot.avatar} alt={pilot.name} />
                      <AvatarFallback>{pilot.callsign.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium">{pilot.name}</span>
                      <span className="text-sm text-muted-foreground">{pilot.callsign}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">{pilot.hours}h</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </Card>
  );
};
