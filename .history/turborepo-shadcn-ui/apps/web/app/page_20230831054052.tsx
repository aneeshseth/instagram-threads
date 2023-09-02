"use client"
import { Button } from "@ui/components/button";
import {Input} from "@ui/components/input"
import { useTheme } from "next-themes";
import {useForm} from 'react-hook-form'
import * as z from "zod"
const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export default function Page() {
  const {setTheme} = useTheme()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
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
