/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5kUbVORPCji
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="bg-card-foreground text-card px-6 py-4">
            <h2 className="text-lg font-bold">Bus 193</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 p-6">
            <Link href="#" className="bg-muted rounded-lg p-4 text-center" prefetch={false}>
              <ClockIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm font-medium">Timetable</span>
            </Link>
            <Link href="#" className="bg-muted rounded-lg p-4 text-center" prefetch={false}>
              <ClockIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm font-medium">Next Bus</span>
            </Link>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-4 p-6">
            <Link href="#" className="bg-muted rounded-lg p-4 text-center" prefetch={false}>
              <ClockIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm font-medium">Timetable</span>
            </Link>
            <Link href="#" className="bg-muted rounded-lg p-4 text-center" prefetch={false}>
              <ClockIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm font-medium">Next Bus</span>
            </Link>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="bg-card-foreground text-card px-6 py-4">
            <h2 className="text-lg font-bold">Express Buses</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 p-6">
            <Link href="#" className="bg-muted rounded-lg p-4 text-center" prefetch={false}>
              <ClockIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm font-medium">Timetable</span>
            </Link>
            <Link href="#" className="bg-muted rounded-lg p-4 text-center" prefetch={false}>
              <ClockIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm font-medium">Next Bus</span>
            </Link>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-4 p-6">
            <Link href="#" className="bg-muted rounded-lg p-4 text-center" prefetch={false}>
              <ClockIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm font-medium">Timetable</span>
            </Link>
            <Link href="#" className="bg-muted rounded-lg p-4 text-center" prefetch={false}>
              <ClockIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm font-medium">Next Bus</span>
            </Link>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="bg-card-foreground text-card px-6 py-4">
            <h2 className="text-lg font-bold">Night Buses</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 p-6">
            <Link href="#" className="bg-muted rounded-lg p-4 text-center" prefetch={false}>
              <ClockIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm font-medium">Timetable</span>
            </Link>
            <Link href="#" className="bg-muted rounded-lg p-4 text-center" prefetch={false}>
              <ClockIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm font-medium">Next Bus</span>
            </Link>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-4 p-6">
            <Link href="#" className="bg-muted rounded-lg p-4 text-center" prefetch={false}>
              <ClockIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm font-medium">Timetable</span>
            </Link>
            <Link href="#" className="bg-muted rounded-lg p-4 text-center" prefetch={false}>
              <ClockIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm font-medium">Next Bus</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}