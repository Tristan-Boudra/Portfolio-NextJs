import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact me </Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you.
      </h2>
      <div className="flex max-md:flex-col w-full gap-4">
        <ContactCard
          className="flex-1"
          name="Twitter"
          image="https://pbs.twimg.com/profile_images/1716536427859603456/gsFHW0BN_400x400.jpg"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/e/e6/Twitter-new-logo.jpg"
          description="@TristanBoudra"
          url="https://twitter.com/TristanBoudra"
        />
        <ContactCard
          className="flex-1"
          name="Linkedin"
          image="https://media.licdn.com/dms/image/D4D03AQGWlPON2IgcAg/profile-displayphoto-shrink_100_100/0/1711984554169?e=1718236800&v=beta&t=tAJ6OeEZ8-1ISnSvv8aSU3zWhPxADUH0GvnvmzSxMVk"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          description="Tristan Boudra"
          url="https://www.linkedin.com/in/tristan-boudra/"
        />
        <ContactCard
          className="flex-1"
          name="Mail"
          image="https://media.licdn.com/dms/image/D4D03AQGWlPON2IgcAg/profile-displayphoto-shrink_100_100/0/1711984554169?e=1718236800&v=beta&t=tAJ6OeEZ8-1ISnSvv8aSU3zWhPxADUH0GvnvmzSxMVk"
          mediumImage="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI=w240-h480-rw"
          description="boudratristan@gmail.com"
          url="mailto:boudratristan@gmail"
        />
      </div>
    </Section>
  );
};
