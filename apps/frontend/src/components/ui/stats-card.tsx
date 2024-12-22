import { Card } from "@/components/ui/card";

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
                    <p className="text-sm font-semibold">{title}</p>
                    <h3 className="text-3xl font-bold mt-1">{value}</h3>
                    {description && (
                        <p className="text-sm mt-1">{description}</p>
                    )}
                </div>
                <div className="text-sidebar-primary">{icon}</div>
            </div>
        </Card>
    );
};
