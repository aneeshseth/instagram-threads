"use client"
import { useState } from "react"; 
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/components/card"
import { Label } from "@ui/components/label"

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
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [file, setFile] = useState("")
   const [date, setDate] = useState<Date>()
  const form = useForm(); 
  const onSubmit = (data) => {
    console.log(data); 
  };
  return (
    <>
      <button onClick={() => setTheme("system")}>🌙</button>
      <button onClick={() => setTheme("light")}>🔅</button>
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Signup to Yeetcode</CardTitle>
        <CardDescription>Mastering algorithms like a pro.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Username</Label>
              <Input id="name" placeholder="aneeshseth" />
            </div>
             <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input id="name" placeholder="we9hou2eukdh" type="password" />
            </div>
             <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email Address</Label>
              <Input id="name" placeholder="randomemail@gmail.com" />
            </div>
             <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Profile Picture {"(optional)"}</Label>
              <Input id="name" type="file" />
            </div>
          </div>
        </form>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Signup</Button>
      </CardFooter>
    </Card>
    
    </>
  );
}
