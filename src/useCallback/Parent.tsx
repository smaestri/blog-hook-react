import React, { useCallback, useState } from 'react'

function Parent() {
  console.log("==Parent rendering====");
  const [count, setCount] = useState(0)
  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [])
  return (
    <>
      <h1>Hello</h1>
      <Child handleClick={handleClick} />
      count is {count}
    </>
  )
}
const Child = React.memo(({ handleClick }: { handleClick: any }) => {
  console.log("==Child rendering====");
  return (
    <button onClick={handleClick}>update from child</button>
  );
})

export default Parent