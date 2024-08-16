const Pad = [
  {
    id: "clear",
    key: "AC",
    style: "col-span-2 bg-red-950",
  },
  {
    id: "divide",
    key: "/",
    style: "bg-gray-900",
  },
  {
    id: "multiply",
    key: "*",
    style: "bg-gray-900",
  },
  {
    id: "one",
    key: "1",
    style: "bg-gray-800",
  },
  {
    id: "two",
    key: "2",
    style: "bg-gray-800",
  },
  {
    id: "three",
    key: "3",
    style: "bg-gray-800",
  },
  {
    id: "subtract",
    key: "-",
    style: "bg-gray-900",
  },
  {
    id: "four",
    key: "4",
    style: "bg-gray-800",
  },
  {
    id: "five",
    key: "5",
    style: "bg-gray-800",
  },
  {
    id: "six",
    key: "6",
    style: "bg-gray-800",
  },
  {
    id: "add",
    key: "+",
    style: "bg-gray-900",
  },
  {
    id: "seven",
    key: "7",
    style: "bg-gray-800",
  },
  {
    id: "eight",
    key: "8",
    style: "bg-gray-800",
  },
  {
    id: "nine",
    key: "9",
    style: "bg-gray-800",
  },
  {
    id: "equals",
    key: "=",
    style: "row-span-2 bg-cyan-950",
  },
  {
    id: "zero",
    key: "0",
    style: "col-span-2 bg-gray-800",
  },
  {
    id: "decimal",
    key: ".",
    style: "bg-gray-900",
  },
];

export const getKeyPad = () => {
  return new Promise((resolve, reject) => {
    try {
      const data = Pad;
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};
