import { Card, CardTitle, CardDescription } from "@/components/ui/card";

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    description?: string;
    classnames?: string;
}
export const StatsCard = ({ title, value, icon, description, classnames }: StatsCardProps) => {
    return (
        <Card className={classnames}>
            <div className="flex items-center justify-between">
                <div>
                    <CardDescription className="font-semibold">{title}</CardDescription>
                    <CardTitle className="text-3xl font-bold mt-1">{value}</CardTitle>
                    {description && (
                        <p className="text-sm mt-1">{description}</p>
                    )}
                </div>
                <div className="text-sidebar-primary">{icon}</div>
            </div>
        </Card>
    );
};
