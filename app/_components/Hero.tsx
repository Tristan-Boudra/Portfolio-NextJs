/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { Code } from "./Code";
import { NextJsIcon } from "./icons/NextJsIcon";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-center gap-4">
      <BackgroundBeams className="z-10" />
      <div className="flex max-md:flex-col items-center gap-4 z-20">
        <div className="flex-[3] w-full flex flex-col gap-2">
          <h2 className="font-caption text-5xl font-bold text-primary">
            Boudra Tristan
          </h2>
          <h3 className="text-3xl font-caption">Développeur Front-end</h3>
          <p className="text-base">
            J'aime créer des sites et applications avec{" "}
            <Code className="inline-flex items-center gap-2">
              <NextJsIcon size={16} className="inline" />
              Next.js
            </Code>
            . Je travaille actuellement sur{" "}
            <Link href="https://github.com/Tristan-Boudra/RentEase">
              <Code className="inline-flex items-center gap-2">
                <GithubIcon size={16} className="inline" />
                RentEase
              </Code>
            </Link>{" "}
            un SaaS de gestion immobilière.
          </p>
          <Button className="w-max px-4 mt-10">
            <Link href="mailto:boudratristan@gmail.com">Me contacter</Link>
          </Button>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto z-10">
          <img
            src="https://avatars.githubusercontent.com/u/91051365?v=4"
            className="w-full h-auto max-w-xs max-md:w-56 rounded-full"
            alt="Tristan's picture"
          />
        </div>
      </div>
    </Section>
  );
};
