import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Pagination from "./Pagination";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/Pagination",
  component: Pagination,
  decorators: [withKnobs],
};

export interface StoryLayoutProps {
  title: string;
  children: React.ReactNode;
}
const StoryLayout = ({ title, children }: StoryLayoutProps) => {
  return (
    <>
      <h2 className="default-title capitalize">{title}</h2>
      <section className="h-fit p-4 flex gap-2 rounded border-2 border-dashed border-gray-default">
        {children}
      </section>
    </>
  );
};
const total = 30;

export const pagination = () => {
  const radius = select("radius", ["sm", "md", "lg", "full"], "md");
  const isBorder = boolean("isBorder", false);
  const size = select("size", ["sm", "md", "lg"], "md");

  return (
    <div className=" w-full shadow border p-4">
      <Pagination
        total={total}
        size={size}
        radius={radius}
        isBorder={isBorder}
      ></Pagination>
    </div>
  );
};

pagination.story = {
  name: "Default",
};
export const radius = () => {
  return (
    <div className=" w-full shadow border p-4">
      <StoryLayout title="radius_small">
        <Pagination total={total} radius="sm"></Pagination>
      </StoryLayout>
      <StoryLayout title="radius_medium">
        <Pagination total={total} radius="md"></Pagination>
      </StoryLayout>
      <StoryLayout title="radius_large">
        <Pagination total={total} radius="lg"></Pagination>
      </StoryLayout>
      <StoryLayout title="radius_full">
        <Pagination total={total}></Pagination>
      </StoryLayout>
    </div>
  );
};

export const sizes = () => {
  return (
    <div className=" w-full shadow border p-4">
      <StoryLayout title="small">
        <Pagination total={total} size="sm"></Pagination>
      </StoryLayout>
      <StoryLayout title="medium">
        <Pagination total={total} size="md"></Pagination>
      </StoryLayout>
      <StoryLayout title="large">
        <Pagination total={total} size="lg"></Pagination>
      </StoryLayout>
    </div>
  );
};
