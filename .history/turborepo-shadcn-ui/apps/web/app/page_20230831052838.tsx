import { Button } from "@ui/components/button";
import {Input} from "@ui/components/input"

export default function Page() {
  return (
    <>
      <h1>Web</h1>
      <div className="grid w-full max-w-sm items-center gap-1.10">
      <Input type="password" id="password" placeholder="Password" />
    </div>
      <Button className="grid w-full max-w-sm items-center gap-1.5">Click me</Button>
    </>
  );
}
