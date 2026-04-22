import type { LucideIcon } from "lucide-react";

interface ISubContent {
  icon: LucideIcon | null;
  description: string;
}
const SubContent = ({ icon, description }: ISubContent) => {
  const Icon = icon;
  return (
    <div className="flex items-center gap-2">
      {Icon && (
        <span>
          <Icon className="size-4" />
        </span>
      )}
      <p>{description}</p>
    </div>
  );
};
export { SubContent };
