import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { TailwindIcon } from "./icons/Tailwind";
import { OpenAIIcon } from "./icons/OpenAI";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Compétences</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        J'adore créer du contenu avec ...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <ReactIcon
            className="animate-spin"
            style={{ animationDuration: "10s" }}
            size={42}
          />
          <h3 className="font-semibold tracking-tight text-2xl">React</h3>
          <p className="text-sm text-muted-foreground">
            Mon framework principale est <Code>React</Code>. J'utilise également{" "}
            <Code>Next.js</Code> qui est un framework Front-end et Back-end.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailwindIcon size={42} />
          <h3 className="font-semibold tracking-tight text-2xl">TailwindCSS</h3>
          <p className="text-sm text-muted-foreground">
            Je peux créer de <u>magnifiques</u> appplications{" "}
            <i>en quelques secondes</i> en utilisant <Code>TailwindCSS</Code>
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <OpenAIIcon size={42} />
          <h3 className="font-semibold tracking-tight text-2xl">
            Intégration IA
          </h3>
          <p className="text-sm text-muted-foreground">
            Je suis un expert de l'intégration d'IA dans vos applications pour
            créer une parfaite <u>expérience utilisateur.</u>
          </p>
        </div>
      </div>
    </Section>
  );
};
