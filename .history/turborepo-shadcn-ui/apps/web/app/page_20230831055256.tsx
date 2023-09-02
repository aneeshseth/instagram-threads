"use client"
import { useState } from "react"; 
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/components/form";
import * as z from "zod";



export default function Page() {
  const { setTheme } = useTheme();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [file, setFile] = useState("")
  const form = useForm(); 
  const onSubmit = (data) => {
    console.log(data); 
  };
  return (
    <>
      <button onClick={() => setTheme("system")}>🌙</button>
      <button onClick={() => setTheme("light")}>🔅</button>
      <Form {...form}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormDescription>Please enter your email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Input type="file"/>
          <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
