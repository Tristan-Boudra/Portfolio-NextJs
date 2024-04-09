import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { TailwindIcon } from "./icons/Tailwind";
import { OpenAIIcon } from "./icons/OpenAI";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skill</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on ...
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
            My main framework is <Code>React</Code>. I also use{" "}
            <Code>Next.js</Code> as a backend and frontend framework.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailwindIcon size={42} />
          <h3 className="font-semibold tracking-tight text-2xl">TailwindCSS</h3>
          <p className="text-sm text-muted-foreground">
            I can create <u>beautiful</u> appplication <i>in seconds</i> usings{" "}
            <Code>TailwindCSS</Code>
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <OpenAIIcon size={42} />
          <h3 className="font-semibold tracking-tight text-2xl">
            AI Integration
          </h3>
          <p className="text-sm text-muted-foreground">
            I am an expert of integrating AI in your applications to create a
            perfect <u>user experience.</u>
          </p>
        </div>
      </div>
    </Section>
  );
};
