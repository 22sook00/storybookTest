import React, { Fragment, useState } from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Accordion from "./Accordion";
import { accordionDummy } from "./accordionDummy";
import { action } from "@storybook/addon-actions";

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
  const title = text("title", "회원가입");
  const content = text("content", "가입을 통해 더 다양한 서비스를 만나보세요!");
  const desc = text("desc", "헤더 설명을 넣어보세요!");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selected, setSelected] = useState<string | undefined>();

  return (
    <main>
      <section className="default-flex flex-col items-start">
        {accordionDummy.map((item, i) => {
          return (
            <Fragment key={i}>
              <Accordion
                value={selected}
                onChange={setSelected}
                title={item.title}
                content={item.content}
                desc={desc}
              />
            </Fragment>
          );
        })}
      </section>
    </main>
  );
};

accordion.story = {
  name: "Default",
};
