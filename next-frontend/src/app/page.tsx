"use client"
import Container from "@/components/Container";
import MainForm from "@/components/mainForm";
import Output from "@/components/output";
import { useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(false)
  return (
    <Container>
      <div className="grid grid-cols-2 place-items-center h-screen">
        <MainForm setLoading={setLoading}/>
        <Output loading={loading}/>
      </div>
    </Container>
  );
};

export default page;
