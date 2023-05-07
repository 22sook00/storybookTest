import React from "react";

const definitionArr = {
  primary: [
    {
      id: 1,
      title: "primary-light",
      hex: "#e3fafc",
      rgb: "rgb(227 ,250, 252)",
    },
    {
      id: 2,
      title: "primary-default",
      hex: "#15aabf",
      rgb: "rgb(21, 170, 191)",
    },
    { id: 3, title: "primary-dark", hex: "#1098ad", rgb: "rgb(16, 152, 173)" },
  ],
  grayscale: [
    { id: 4, title: "gray-light", hex: "#f9f9fb", rgb: "rgb(227, 250, 252)" },
    { id: 5, title: "gray-default", hex: "#edf0f3", rgb: "rgb(237, 240, 243)" },
    { id: 6, title: "gray-dark", hex: "#91a1b4", rgb: "rgb(145 161 180)" },

    { id: 7, title: "black-light", hex: "#475569", rgb: "rgb(71, 85, 105)" },
    { id: 8, title: "black-default", hex: "#334155", rgb: "rgb(51 ,65 ,85)" },
    { id: 9, title: "black-dark", hex: "#1e293b", rgb: "rgb(30, 41, 59)" },
  ],
  point: [
    {
      id: 10,
      title: "point-red-light",
      hex: "#fda4af",
      rgb: "rgb(253, 164, 175)",
    },
    { id: 11, title: "point-red", hex: "#f43f53", rgb: "rgb(244, 63, 94)" },
    {
      id: 12,
      title: "point-red-dark",
      hex: "#e11d48",
      rgb: "rgb(225, 29, 72)",
    },

    {
      id: 13,
      title: "point-yel-light",
      hex: "#fde68a",
      rgb: "rgb(253, 230, 138)",
    },
    { id: 14, title: "point-yel", hex: "#fcd34d", rgb: "rgb(252, 211, 77)" },
    {
      id: 15,
      title: "point-yel-dark",
      hex: "#fbbf24",
      rgb: "rgb(251 ,191 ,36)",
    },

    {
      id: 16,
      title: "point-gr-light",
      hex: "#6ed8cd",
      rgb: "rgb(110 ,216, 205)",
    },
    { id: 17, title: "point-gr", hex: "#47c6b9", rgb: "rgb(71, 198, 185)" },
    {
      id: 18,
      title: "point-gr-dark",
      hex: "#1eb7a7",
      rgb: "rgb(30, 183, 167)",
    },

    {
      id: 19,
      title: "point-blue-light",
      hex: "#7abef5",
      rgb: "rgb(122 ,190 ,245)",
    },
    { id: 20, title: "point-blue", hex: "#2b96ed", rgb: "rgb(43, 150, 237)" },
    {
      id: 21,
      title: "point-blue-dark",
      hex: "#1683db",
      rgb: "rgb(22, 131, 219)",
    },

    {
      id: 22,
      title: "point-indigo-light",
      hex: "#c7d2fe",
      rgb: "rgb(199 210 254)",
    },
    { id: 23, title: "point-indigo", hex: "#a5b4fc", rgb: "rgb(165 180 252)" },
    {
      id: 24,
      title: "point-indigo-dark",
      hex: "#6366f1",
      rgb: "rgb(99 102 241)",
    },
  ],
};

const ColorDefinition = () => {
  //darkmode 구현하기
  return (
    <div className="w-full shadow border p-4">
      <h2 className="default-title capitalize">primary</h2>
      <section className="p-4 flex gap-2 rounded border-2 border-dashed border-gray-default">
        {definitionArr.primary.map((list) => {
          return (
            <div key={`primary-${list.id}`} className=" text-xs leading-6">
              <p className="rounded text-xs h-fit font-semibold w-32 px-2 py-1 mb-1 bg-gray-default text-black-default text-center">
                {list.title}
              </p>
              <div
                className={`w-32 h-6 rounded`}
                style={{ background: list.hex }}
              />
              <span className="capitalize">hex</span> :
              <span className="uppercase"> {list.hex}</span>
              {/*<p>rgb : {list.rgb}</p>*/}
            </div>
          );
        })}
      </section>

      <h2 className="default-title capitalize">grayscale</h2>
      <section className="p-4 flex gap-2 rounded border-2 border-dashed border-gray-default">
        {definitionArr.grayscale.map((list) => {
          return (
            <div key={`grayscale-${list.id}`} className=" text-xs leading-6">
              <p className="rounded text-xs h-fit font-semibold w-32 px-2 py-1 mb-1 bg-gray-default text-black-default text-center">
                {list.title}
              </p>
              <div
                className={`w-32 h-6 rounded`}
                style={{ background: list.hex }}
              />
              <span className="capitalize">hex</span> :
              <span className="uppercase"> {list.hex}</span>
              {/*<p>rgb : {list.rgb}</p>*/}
            </div>
          );
        })}
      </section>

      <h2 className="default-title capitalize">point</h2>
      <section className="p-4 w-full rounded border-2 border-dashed border-gray-default">
        <div className="w-fit grid grid-cols-6  gap-2">
          {definitionArr.point.map((list) => {
            return (
              <div key={`point-${list.id}`} className=" text-xs leading-6">
                <p className="rounded text-xs h-fit font-semibold w-32 px-2 py-1 mb-1 bg-gray-default text-black-default text-center">
                  {list.title}
                </p>
                <div
                  className={`w-32 h-6 rounded `}
                  style={{ background: list.hex }}
                />
                <span className="capitalize">hex</span> :
                <span className="uppercase"> {list.hex}</span>
                {/*<p>rgb : {list.rgb}</p>*/}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ColorDefinition;
