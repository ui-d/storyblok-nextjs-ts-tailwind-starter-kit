import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
<p>test</p>
  </main>
);

export default Page;
