"use client";
import Header from "@/components/(app)/header";
import Wallet from "@/components/(app)/wallet";
import { ModeToggle } from "@/components/common/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

// const Message = () => {
//   const { data } = useQuery({
//     queryKey: ["hello"],
//     queryFn: async () => {
//       const res = await api.hello.$get();
//       return res.json();
//     },
//   });

//   return (
//     <pre className="font-mono text-sm">{JSON.stringify(data, null, 2)}</pre>
//   );
// };

const CounterButton = () => {
  const [count, setCount] = useState(0);
  return (
    <Button onClick={() => setCount((prev) => prev + 1)} variant={"secondary"}>
      Count: {count}
    </Button>
  );
};

export default () => {
  return (
    <div className='mx-auto flex h-screen max-w-lg animate-delay-200 animate-fade-up flex-col gap-y-2 p-6 px-4'>
      <Header />
      <Wallet />
    </div>
  );
};
