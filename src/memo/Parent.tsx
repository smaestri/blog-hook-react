import React, { useCallback, useState } from 'react'

function Parent() {
  console.log("==Parent rendering====");
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <Child />
      count is {count}
    </>
  )
}

const Child = React.memo(() => {
  console.log("==Child rendering====");
  return (
    <div>test</div>
  );
})

export default Parent