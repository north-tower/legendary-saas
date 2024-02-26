'use client'

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


function page() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">

         <div className="grid w-full gap-2 mt-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
    </div>
  )
}

export default page