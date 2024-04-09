/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { TwitterIcon } from "./icons/TwitterIcon";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { Code } from "./Code";
import { NextJsIcon } from "./icons/NextJsIcon";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-center gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl font-bold text-primary">
          Boudra Tristan
        </h2>
        <h3 className="text-3xl font-caption">Frontend Developer</h3>
        <p className="text-base">
          I love creating on{" "}
          <Link href="https://twitter.com/TristanBoudra">
            <Code className="inline-flex items-center gap-2">
              <NextJsIcon size={16} className="inline" />
              Next.js
            </Code>
          </Link>
          . Currently work on{" "}
          <Link href="https://github.com/Tristan-Boudra/RentEase">
            <Code className="inline-flex items-center gap-2">
              <GithubIcon size={16} className="inline" />
              RentEase
            </Code>
          </Link>{" "}
          a property management SaaS.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/91051365?v=4"
          className="w-full h-auto max-w-xs max-md:w-56 rounded-full"
          alt="Tristan's picture"
        />
      </div>
    </Section>
  );
};
