import { Bird, Briefcase, LucideIcon, Plug, Warehouse } from "lucide-react";
import Link from "next/link";

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    title: "RentEase",
    description: "SaaS application for managing real estate",
    logo: Warehouse,
    url: "https://github.com/Tristan-Boudra/RentEase",
  },
  {
    title: "TousAlbatros",
    description: "Redesign of a showcase site for an association",
    logo: Bird,
    url: "https://tousalbatros.fr/",
  },
  {
    title: "HRNet Plugin",
    description: "HRNet plugin convert jQuery to React",
    logo: Briefcase,
    url: "https://github.com/Tristan-Boudra/OC-project14-plugin",
  },
  {
    title: "HRNet website",
    description: "Website to manages and create employee",
    logo: Plug,
    url: "https://github.com/Tristan-Boudra/OC-project14",
  },
  {
    title: "Argent Bank",
    description: "Banking management application",
    logo: Briefcase,
    url: "https://github.com/Tristan-Boudra/OC-project13",
  },
  {
    title: "SportSee",
    description: "Website to visualize these activities with graphs",
    logo: Plug,
    url: "https://github.com/Tristan-Boudra/OC-project12",
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
