import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className={"h-screen w-screen overflow-hidden flex flex-col gap-3 justify-center items-center"}>
      <h1 className={"text-4xl font-semibold"}>Finance Tracking App</h1>
      <Button asChild>
        <Link href={"/login"}>
          <ArrowRight /> Login
        </Link>
      </Button>
    </div>
  )
}
