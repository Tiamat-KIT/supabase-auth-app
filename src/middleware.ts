import {createMiddlewareClient} from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
/* 
export async function middleware(Request: NextRequest) {
    const Response = NextResponse.next()
    const supabase = createMiddlewareClient({req: Request,res: Response})

    const {data: {user}} = await supabase.auth.getUser()
    /* if(user && Request.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL('/account',Request.url))
    } 

    if(!user && Request.nextUrl.pathname !== "/"){
        return NextResponse.redirect(new URL("/",Request.url))
    }
    return Response
}

export const middlewareConfig = {
    matcher: ["/"]/* ,'/account'] 
} */

export async function middleware(Request: NextRequest,Response: NextResponse) {
    if(Request.nextUrl.pathname === "/") {
        return NextResponse.rewrite(/* new URL('/',Request.url) */new URL("/",Request.url))
    
    }
}

export const middlewareConfig = {
    matcher: ["/"]
}