"use client";

import Header from "@/components/(app)/header";
import Services from "@/components/(app)/services";
import Wallet from "@/components/(app)/wallet";
import { ModeToggle } from "@/components/common/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";


import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/common/dock-menu';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/home',
  },
  {
    title: 'Products',
    icon: (
      <Package className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Components',
    icon: (
      <Component className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Activity',
    icon: (
      <Activity className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Change Log',
    icon: (
      <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Email',
    icon: (
      <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Theme',
    icon: (
      <SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
];


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

function clickf() {
  toast("Hello");
}

const CounterButton = () => {
  const [count, setCount] = useState(0);
  return (
    <Button onClick={clickf} variant={"secondary"}>
      Count: {count}
    </Button>
  );
};

export default () => {
  return (
    <div className="mx-auto flex h-screen max-w-lg animate-delay-200 animate-fade-up flex-col gap-y-2 p-6 px-4">
      <Header />
      <Wallet />
      <Services />
      <div className='-translate-x-1/2 absolute bottom-2 left-1/2 max-w-full'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
    </div>
  );
};
