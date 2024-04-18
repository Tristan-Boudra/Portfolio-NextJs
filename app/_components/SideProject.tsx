import { Bird, Briefcase, LucideIcon, Plug, Warehouse } from "lucide-react";
import Link from "next/link";

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    title: "RentEase",
    description: "SaaS de gestion immobilière",
    logo: Warehouse,
    url: "https://github.com/Tristan-Boudra/RentEase",
  },
  {
    title: "TousAlbatros",
    description: "Création d'un site vitrine pour une association",
    logo: Bird,
    url: "https://tousalbatros.fr/",
  },
  {
    title: "HRNet Plugin",
    description: "Plugin HRNet convertie de jQuery vers react",
    logo: Briefcase,
    url: "https://github.com/Tristan-Boudra/OC-project14-plugin",
  },
  {
    title: "HRNet website",
    description: "Site web pour manager des employées",
    logo: Plug,
    url: "https://github.com/Tristan-Boudra/OC-project14",
  },
  {
    title: "Argent Bank",
    description: "Application de gestion de compte bancaire",
    logo: Briefcase,
    url: "https://github.com/Tristan-Boudra/OC-project13",
  },
  {
    title: "SportSee",
    description: "Site web pour une application de planning d'entrainement",
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
