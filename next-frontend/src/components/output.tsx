import { useState } from "react";

const Output = ({loading}:{loading: boolean}) => {
  const [output, setOutput] = useState("");
  return (
    <div className="border rounded-lg w-96 h-96 grid place-items-center">
      {loading ? <LoadingIndicator /> : output}
    </div>
  );
};

const LoadingIndicator = () => <div className="animate-pulse">Loading...</div>;

export default Output;
