"use client"
import { Button } from "@ui/components/button";
import {Input} from "@ui/components/input"
import { useTheme } from "next-themes";

export default function Page() {
  const {setTheme} = useTheme()
  return (
    <>
      <h1>Web</h1>
      <div className="grid w-full max-w-sm items-center gap-1.10">
      <Input type="password" id="password" placeholder="Password" />
    </div>
      <Button className="grid w-full max-w-sm items-center gap-1.5">Click me</Button>
      <button onClick={() => {
        setTheme("dark")
      }}>dj</button>
      <button onClick={() => {
        setTheme("light")
      }}>dsj</button>
    </>
  );
}
