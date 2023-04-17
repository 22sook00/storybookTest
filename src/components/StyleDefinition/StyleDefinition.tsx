import React from "react";

const StyleDefinition = () => {
  //darkmode 구현하기
  return (
    <div className="w-full shadow border p-4">
      <h2 className="default-title">Grayscale</h2>
      <section className="w-full  grid grid-cols-6 gap-3 ">
        <div className="h-10 rounded bg-gray-light" />
        <div className="h-10 rounded bg-gray-default" />
        <div className="h-10 rounded bg-gray-dark" />
        <div className="h-10 rounded bg-primary-light" />
        <div className="h-10 rounded bg-primary-default" />
        <div className="h-10 rounded bg-primary-dark" />
      </section>

      <h2 className="default-title">Point</h2>
      <section className="w-full  grid grid-cols-6 gap-3 ">
        <div className="h-10 rounded bg-point-red-light" />
        <div className="h-10 rounded bg-point-red" />
        <div className="h-10 rounded bg-point-red-dark" />

        <div className="h-10 rounded bg-point-yel-light" />
        <div className="h-10 rounded bg-point-yel" />
        <div className="h-10 rounded bg-point-yel-dark" />

        <div className="h-10 rounded bg-point-gr-light" />
        <div className="h-10 rounded bg-point-gr" />
        <div className="h-10 rounded bg-point-gr-dark" />
        <div className="h-10 rounded bg-point-blue-light" />
        <div className="h-10 rounded bg-point-blue" />
        <div className="h-10 rounded bg-point-blue-dark" />
        <div className="h-10 rounded bg-point-indigo-light" />
        <div className="h-10 rounded bg-point-indigo" />
        <div className="h-10 rounded bg-point-indigo-dark" />
      </section>
    </div>
  );
};

export default StyleDefinition;
