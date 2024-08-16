import { Pad } from "./Pad";
import { Display } from "./Display";
import { getKeyPad } from "../services/Data";
import { useEffect, useState } from "react";
import { evaluate } from "mathjs";

export const CalculatorContainer = () => {
  const [key, setKey] = useState(null);
  const [num, setNum] = useState(0);

  const handleClick = (e) => {
    const value = e.target.value;

    if (num === 0 && value !== ".") {
      setNum("");
    }

    if (value === "AC") {
      setNum(0);
      return;
    }

    if (value === ".") {
      try {
        const result = num.split("").filter((x) => x === ".");
        result.length === 0 && setNum((prev) => prev + value);
        return;
      } catch (err) {
        console.log(err);
      }
    }

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      //TODO
    }

    if (value === "=") {
      try {
        setNum(evaluate(num));
        return;
      } catch (err) {
        console.log(err);
      }
    }

    setNum((prev) => prev + value);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getKeyPad();
      setKey(data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 justify-self-center  h-2/4 w-7/12 md:w-4/12 lg:w-3/12 ">
        <Display total={num.toString()} />
        {key &&
          key.map((keyPad) => (
            <Pad
              key={keyPad.id}
              id={keyPad.id}
              text={keyPad.key}
              style={keyPad.style}
              handleClick={handleClick}
            />
          ))}
      </div>
    </>
  );
};
