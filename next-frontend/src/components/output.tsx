import { useState } from "react";

const Output = ({ loading, output }: { loading: boolean; output: string }) => {
  return (
    <div className="border rounded-lg w-96 h-96 grid place-items-center text-4xl font-bold">
      {loading ? <LoadingIndicator /> : output}
    </div>
  );
};

const LoadingIndicator = () => <div className="animate-pulse">Thinking...</div>;

export default Output;
