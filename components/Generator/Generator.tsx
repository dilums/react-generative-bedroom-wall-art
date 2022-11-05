import Flower from "components/Flower";
import SVGWrapper from "components/SVGWrapper";
import { useState } from "react";
import { randomConfig, range } from "utils";

export default function Generator() {
  const [items, setItems] = useState(range(40).map(() => randomConfig()));
  const generateNew = () => {
    setItems(range(40).map(() => randomConfig()));
  };
  return (
    <>
      <button className="btn-refresh" onClick={generateNew}>
        Generate New
      </button>
      <SVGWrapper>
        <g clipPath="url(#clip)">
          {items.map(({ transform, color, id, key }) => (
            <g transform={transform} fill={color} key={key}>
              <Flower id={id} />
            </g>
          ))}
        </g>
      </SVGWrapper>
    </>
  );
}
