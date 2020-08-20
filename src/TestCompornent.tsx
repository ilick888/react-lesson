import React, { useState } from "react";

interface Props {
  text: string;
}

interface Userdata {
  id: number;
  name: string;
}

const TestCompornent: React.FC<Props> = (props) => {
  const [user, setuser] = useState<Userdata>({ id: 1, name: "aaa" });
  const [data, setdata] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setdata(e.target.value);
  };
  return (
    <div>
      <h1>{data}</h1>
      <input type="text" value={data} onChange={handleChange}></input>
    </div>
  );
};

export default TestCompornent;
