import { useRef } from "react";
import { useState, useEffect } from "react";

const PageTitleUpdater = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef?.current?.focus();
  }, []);

  useEffect(() => {
    // Side effect: updating browser title
    if (name !== "") {
      console.log("Some changes...")
      document.title = name ? `Welcome, ${name}` : "React App";
    }
  }, [name]); // runs whenever name changes

  return (
    <div>
      <h2>Enter your name</h2>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
    </div>
  );
}

export default PageTitleUpdater;
