import { ChartLine } from "lucide-react"

import Link from "next/link";
import {RegisterForm} from "@/components/forms/register-form";

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <ChartLine className="size-4" />
          </div>
          Finance Tracker App
        </Link>
        <RegisterForm />
      </div>
    </div>
  )
}
