import { useRef } from "react";

function SubmitButton() {
  const isSubmitting = useRef(false);

  const handleSubmit = () => {
    if (isSubmitting.current) return;

    isSubmitting.current = true;
    console.log("Submitting...");

    setTimeout(() => {
      isSubmitting.current = false;
      console.log("Done");
    }, 2000);
  };

  return <button onClick={handleSubmit}>Submit</button>;
}

export default SubmitButton;
