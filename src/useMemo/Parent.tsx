import React, { useState, useMemo } from 'react';

function Parent() {
  console.log("==Parent rendering====");
  const [count, setCount] = useState(0);

  // Compute a value memoized with useMemo
  const computedValue = useMemo(() => {
    console.log('compute value')
    let num=0;
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  }, []);

  return (
    <>
      <h1>Hello {computedValue}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </>
  );
}


export default Parent;