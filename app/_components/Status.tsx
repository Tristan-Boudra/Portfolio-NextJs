/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { SIDE_PROJECTS, SideProject } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { WORK, WorkProject } from "./Work";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4 h-max">
      <div className="flex-[3] w-full h-96">
        <Card className="flex-[3] w-full p-4 flex flex-col gap-4">
          <p className="text-lg text-muted-foreground">Projets personnel</p>
          <div className="flex flex-col gap-1">
            {SIDE_PROJECTS.map((project) => (
              <SideProject key={project.title} {...project} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] flex flex-col w-full h-full gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Expériences</p>
          <div className="flex flex-col gap-1">
            {WORK.map((project) => (
              <WorkProject key={project.title} {...project} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contactez moi</p>
          <ContactCard
            name="Mail"
            image="https://media.licdn.com/dms/image/D4D03AQGWlPON2IgcAg/profile-displayphoto-shrink_100_100/0/1711984554169?e=1718236800&v=beta&t=tAJ6OeEZ8-1ISnSvv8aSU3zWhPxADUH0GvnvmzSxMVk"
            mediumImage="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI=w240-h480-rw"
            description="boudratristan@gmail.com"
            url="mailto:boudratristan@gmail"
          />
          <ContactCard
            name="Linkedin"
            image="https://media.licdn.com/dms/image/D4D03AQGWlPON2IgcAg/profile-displayphoto-shrink_100_100/0/1711984554169?e=1718236800&v=beta&t=tAJ6OeEZ8-1ISnSvv8aSU3zWhPxADUH0GvnvmzSxMVk"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            description="Tristan Boudra"
            url="https://www.linkedin.com/in/tristan-boudra/"
          />
          <ContactCard
            name="Twitter"
            image="https://pbs.twimg.com/profile_images/1716536427859603456/gsFHW0BN_400x400.jpg"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/e/e6/Twitter-new-logo.jpg"
            description="@TristanBoudra"
            url="https://twitter.com/TristanBoudra"
          />
        </Card>
      </div>
    </Section>
  );
};
