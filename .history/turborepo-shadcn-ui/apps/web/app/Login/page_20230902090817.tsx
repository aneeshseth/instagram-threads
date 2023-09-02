"use client"
import { useState } from "react"; 
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
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

function page() {
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
        <button onClick={() => setTheme("dark")}>🌙</button>
        <button onClick={() => setTheme("light")}>🔅</button>
        <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login into Threads</CardTitle>
          <CardDescription>Creating relationships for life.</CardDescription>
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
            </div>
          </form>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Login</Button>
        </CardFooter>
      </Card>
      <Link href="/">Don't Have an account? Signup Instead.</Link>
      <img src="https://image.lexica.art/full_jpg/50c16465-9200-4bba-9089-d65c32b3981f"></img>
      </>
    );
}

export default page

