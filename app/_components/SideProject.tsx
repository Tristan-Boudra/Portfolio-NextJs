import { Bird, Briefcase, LucideIcon, Plug, Warehouse } from "lucide-react";
import Link from "next/link";

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    title: "RentEase",
    description: "Renting platform for renters",
    logo: Warehouse,
    url: "https://github.com/Tristan-Boudra/RentEase",
  },
  {
    title: "TousAlbatros",
    description: "Tous albatros website",
    logo: Bird,
    url: "https://github.com/Tristan-Boudra/TousAlbatros",
  },
  {
    title: "My Portfolio",
    description: "My personal website",
    logo: Briefcase,
    url: "https://github.com/Tristan-Boudra/Portfolio",
  },
  {
    title: "HRNet plugin",
    description: "HRNet plugin convert jQuery to React",
    logo: Plug,
    url: "https://github.com/Tristan-Boudra/HRNet",
  },
  {
    title: "My Portfolio",
    description: "My personal website",
    logo: Briefcase,
    url: "https://github.com/Tristan-Boudra/Portfolio",
  },
  {
    title: "HRNet plugin",
    description: "HRNet plugin convert jQuery to React",
    logo: Plug,
    url: "https://github.com/Tristan-Boudra/HRNet",
  },
];

type SideProjectProps = {
  title: string;
  description: string;
  logo: LucideIcon;
  url: string;
};

export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground rounded-sm p-3">
        <props.logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-md text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
