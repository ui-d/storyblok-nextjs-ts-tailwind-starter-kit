import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { GridStoryblok } from "../component-types-sb";

const Grid = ({ blok }: GridStoryblok) => {
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
