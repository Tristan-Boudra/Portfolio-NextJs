/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const WORK: WorkProps[] = [
  {
    title: "TousAlbatros",
    role: "Développeur Front-end",
    image:
      "https://media.licdn.com/dms/image/C560BAQGQ5YkpwsXy-A/company-logo_200_200/0/1630582707771?e=1720656000&v=beta&t=LIkLl9Vqu3YvXY1pKfhuIW3VSb-dNWEldCgGNWTUfX0",
    date: "2023 - 2024",
    url: "https://tousalbatros.fr/",
    freelance: true,
  },
  {
    title: "Codiceo",
    role: "Développeur web",
    image:
      "https://media.licdn.com/dms/image/C560BAQGUUkEK6WOi2Q/company-logo_200_200/0/1632813132303?e=1720656000&v=beta&t=hpT82jlBpM78fCzaGNi6Agyb8iB7WecwceP_U4mIypg",
    date: "2022 - 2023",
    url: "https://codiceo.fr/",
  },
  {
    title: "Web at Heart",
    role: "Développeur Front-end",
    image:
      "https://media.licdn.com/dms/image/C4E0BAQG4Cxx9rMY9mg/company-logo_200_200/0/1675070652441/web_at_heart_logo?e=1720656000&v=beta&t=kvFK5MHhxQJwy0E4DkpsrsTZeKBoknfg3Jd0W4qfiPw",
    date: "Janvier 2022",
    url: "https://www.webatheart.com/",
  },
];

type WorkProps = {
  title: string;
  role: string;
  image: string;
  date: string;
  url: string;
  freelance?: boolean;
};

export const WorkProject = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && (
            <Badge
              variant="outline"
              className="bg-green-900/100 text-green-400"
            >
              Bénévolat
            </Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <div>
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};
