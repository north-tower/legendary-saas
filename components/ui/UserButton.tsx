"use client";

import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from "inspector";
import { Button } from "./button";
import { signIn, signOut } from "next-auth/react";

function UserButton({ session }: { session: Session | null}) {
    if (!session)
        return (
            <Button variant={"outline"} onClick={() => signIn()}>
                Sign In
            </Button>
            )   
  return (
        session && (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar name={session.user?.name} image={session.user?.image} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                
               
                <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    </div>
  ) )
}

export default UserButton