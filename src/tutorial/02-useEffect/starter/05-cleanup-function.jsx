import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    // console.log("hmm, this is interesting");
    // const intId = setInterval(() => {
    //   console.log("hello from interval");
    // }, 1000);
    // return () => {
    //   clearInterval(intId);
    // };

    const someFunc = () => {
      // add some logic
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return <h1>If your dream donot scare you , they are too small</h1>;
};
export default CleanupFunction;
