import React, {
  memo,
  useState,
  // useTransition,
  useDeferredValue,
} from "react";
import namesArray from "./namesArrayy";
const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray);
  // const [pending, startTransition] = useTransition();
  const deferredShowNames = useDeferredValue(showNames);
  function inputValueChange(e) {
    // startTransition(() => {
    const keywords = e.target.value;
    const filterShowNames = namesArray.filter((item) =>
      item.includes(keywords)
    );
    setShowNames(filterShowNames);
    // });
  }
  return (
    <div>
      <input type="text" onInput={inputValueChange} />
      {/* <h2>用户名列表:{pending && <span>Loading。。。</span>}</h2> */}
      <h2>用户名列表</h2>
      <ul>
        {deferredShowNames.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default App;
