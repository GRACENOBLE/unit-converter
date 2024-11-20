"use client";
import Container from "@/components/Container";
import MainForm from "@/components/mainForm";
import Output from "@/components/output";
import { useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(false);
   const [output, setOutput] = useState("");
  return (
    <Container>
      <h1 className="font-bold  text-center text-6xl my-10">UNIT CONVERTER</h1>
      <div className="grid grid-cols-2 place-items-center">
        <MainForm setLoading={setLoading} setOutput={setOutput}/>
        <div>
          <p className="font-semibold text-sm">Output</p>
          <Output loading={loading} output={output} />
        </div>
      </div>
    </Container>
  );
};

export default page;
