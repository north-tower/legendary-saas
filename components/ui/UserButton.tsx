"use client";

import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from "inspector";
import { Button } from "./button";
import { signIn } from "next-auth/react";

function UserButton({ session }: { session: Session | null}) {
    if (!session)
        return (
            <Button variant={"outline"} onClick={() => signIn()}>
                Sign In
            </Button>
            )
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar name="Lil Pep" image="https://github.com/shadcn.png" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Accont</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    </div>
  )
}

export default UserButton