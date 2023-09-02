"use client"
import { Button } from "@ui/components/button";
import {Input} from "@ui/components/input"
import { useTheme } from "next-themes";
import {useForm} from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/components/form"

import * as z from "zod"
const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export default function Page() {
  const {setTheme} = useTheme()
  const form = useForm()
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
      <Form {...form}>
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </>
  );
}
