import cuid from "cuid";

export const rand = (max: number, min = 0) => min + Math.random() * (max - min);
export const randInt = (max: number, min = 0) => Math.floor(rand(max, min));
export const randChoise = <T>(arr: T[]): T => arr[randInt(arr.length)];
export const range = (n: number, m = 0) =>
  Array(n)
    .fill(m)
    .map((i, j) => i + j);

export const palette = ["#FFEE7E", "#8BE4E4", "#BE96D1"];

export const randomConfig = () => {
  const x = rand(1100, 100);
  const y = rand(500, 100);
  const scale = rand(14);
  return {
    transform: `translate(${x} ${y}) scale(${scale} ${scale})`,
    color: randChoise(palette),
    id: randInt(7),
    key: cuid(),
  };
};
