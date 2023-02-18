import React, { useState, useTransition } from "react";
import { Input, Spin } from "antd";

const ComplexComponent = React.memo(({ value }: any) => {
  return (
    <div>
      {[...new Array(2000)].map((_, index) => {
        return (
          <Input
            style={{ position: "absolute", width: "100%", top: 500 }}
            value={value}
            key={index}
          />
        );
      })}
    </div>
  );
});

const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("0");
  const [myComponentValue, setMyComponentValue] = useState("");

  function handleClick1() {
    setCount((c) => c + 1);
    startTransition(() => {
      setMyComponentValue((c) => `${c}+1`);
    });
  }
  function handleClick2() {
    setCount((c) => c + 1);
    setMyComponentValue((c) => `${c}+1`);
  }

  return (
    <div>
      <ComplexComponent value={myComponentValue} />
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          startTransition(() => {
            setMyComponentValue(e.target.value);
          });
        }}
      />
      <button onClick={handleClick1}>{count}</button>
      <button onClick={handleClick2}>{count}</button>
      {isPending && <Spin />}
    </div>
  );
};

export default UseTransition;
