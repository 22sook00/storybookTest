import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Accordion from "./Accordion";
import { accordionDummy } from "./accordionDummy";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  decorators: [withKnobs],
};

export const accordion = () => {
  return (
    <main>
      <section className="default-flex flex-col items-start">
        {/*{accordionDummy.map((item, i) => {
          return (
            <div key={i}>
              <Accordion idx={i} title={item.title} content={item.content} />
            </div>
          );
        })}*/}
      </section>
    </main>
  );
};

accordion.story = {
  name: "Default",
};
