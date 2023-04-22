import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import SamplePage from ".";
import Button from "../../components/Common/Buttons/Button";
import Badge from "../../components/Common/Badge/Badge";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Page/Sample",
  page: SamplePage,
  decorators: [withKnobs],
};

export const sample = () => {
  return (
    <main>
      <section className="default-flex flex-col items-start">
        <h1>뱃지</h1>
        <div className="mb-4 default-flex gap-4 justify-start">
          <Badge text={"완성"} color="#47c6b9" />
          <Badge text={"완성"} size="md" color="#1683db" />
          <Badge text={"완성"} size="lg" color="#868e96" />
        </div>
      </section>
      <section className="default-flex flex-col items-start">
        <h1>버튼</h1>
        <div className="mb-4 default-flex gap-4 justify-start">
          <Button>확인</Button>
          <Button theme="secondary">취소</Button>
          <Button size="md" theme="tertiary">
            선택불가
          </Button>
        </div>
      </section>
    </main>
  );
};

sample.story = {
  name: "Sample",
};
