import React from "react";
import Layout from "../components/Layout/Laytout";
import PostList from "../components/PostList/PostList";

const Main = () => {
  return (
    <>
      <Layout>
        <PostList />
      </Layout>
    </>
  );
};

export default Main;
