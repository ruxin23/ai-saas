import {auth,currentUser} from "@clerk/nextjs"
import { NextResponse } from "next/server"

import db from "@/lib/prismadb"
import { stripe } from "@/lib/stripe"
import { absoluteUrl } from "@/lib/utils"

const settingsUrl = absoluteUrl("/settings")

export async function GET() {
    try {
        const {userId} = auth()
        const user = await currentUser()
        if(!user || !userId) {
            return new NextResponse("Unauthorized", {status: 401})
        }

        const userSubscription = await db.userSubscription.findUnique({
            where: {
                userId,
            },
        })
    } catch (error) {
        
    }
}