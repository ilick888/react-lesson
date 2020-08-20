import React from "react";
import "./App.css";
import TestCompornent from "./TestCompornent";

const bool: boolean = true;
let array = [0, 0, 1, true];

interface NAME {
  first: string;
  last: string | null;
}

const name: NAME = { first: "aaa", last: null };

const func1 = (x: number, y: number): number => {
  return x + y;
};

type profile = {
  age: number;
};

type login = {
  username: string;
};

// インターセクションタイプス
// タイプを合成する
type user = profile & login;

const user1: user = {
  age: 10,
  username: "foo",
};

// ユニオンタイプス
// 複数の型をとる定義ができる
let value: boolean | number;
value = true;

// リテラルタイプス
// Enumぽい
let company: "Google" | "Facebook" | "Apple";
company = "Apple";

let num: 12 | 100 | 0;
num = 12;

// type of
// タイプ型を一致させる
let msg: string = "hello";
let msg2: typeof msg;
msg2 = "AAA";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "AAA" };

// keyof
type KEY = {
  primary: string;
  secondary: string;
};
let key1: keyof KEY;

// Enum
enum OS {
  windows,
  mac,
  linux,
}

interface pc {
  id: number;
  ostype: OS;
}

const pc1: pc = { id: 100, ostype: OS.mac };
const pc2: pc = { id: 10, ostype: OS.windows };

interface GEN<T = string> {
  item: T;
}

const gen0: GEN<string> = {
  item: "AAA",
};

const gen3: GEN = {
  item: "AAA",
};

interface GEN2<T extends number | string> {
  item: T;
}

const gen2: GEN2<number> = {
  item: 12,
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestCompornent text="hello"></TestCompornent>
        <div>{name.first}</div>
        <div>{func1(10, 20)}</div>
      </header>
    </div>
  );
};

export default App;
