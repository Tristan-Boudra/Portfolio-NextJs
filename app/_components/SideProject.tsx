import {
  Bird,
  Briefcase,
  LucideIcon,
  Sparkles,
  BotMessageSquare,
  Warehouse,
  Plug,
} from "lucide-react";
import Link from "next/link";

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    title: "Effet de parallax",
    description:
      "Composant à intégrer dans des projets permettant de faire un effet de parallax",
    logo: Sparkles,
    url: "https://github.com/Tristan-Boudra/Parallax-effect",
  },
  {
    title: "Password Generator AI",
    description:
      "Application permettant de générer des mots de passe grâce à une IA",
    logo: BotMessageSquare,
    url: "https://password-generator-ai.vercel.app",
  },
  {
    title: "TousAlbatros",
    description:
      "Création site vitrine pour une association permettant aux jeunes de développer leur autodétermination et leur épanuissement",
    logo: Bird,
    url: "https://tous-albatros-next-js.vercel.app/",
  },
  {
    title: "RentEase",
    description: "SaaS de gestion immobilière",
    logo: Warehouse,
    url: "https://github.com/Tristan-Boudra/RentEase",
  },
  {
    title: "HRNet Plugin",
    description: "Plugin HRNet convertie de jQuery vers react",
    logo: Plug,
    url: "https://github.com/Tristan-Boudra/OC-project14-plugin",
  },
  {
    title: "HRNet website",
    description: "Site web pour manager des employées",
    logo: Briefcase,
    url: "https://github.com/Tristan-Boudra/OC-project14",
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
