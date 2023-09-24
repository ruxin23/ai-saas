import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function Home() {
  return (
    <div>
      <Link href="/sign-in">
        <Button>Sign In</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Sign Up</Button>
      </Link>
    </div>
  )
}