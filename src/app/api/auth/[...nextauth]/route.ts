//import { FB_Options } from "@/libs/firebase";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

/* const GoogleID = process.env.GOOGLE_ID 
const GoogleSecret = process.env.GOOGLE_SECRET */

const NEXTAUTH_SECRET = process.env.secret_key as string

function FindCredentialUser 

export const AuthConfig: NextAuthOptions = {
    providers: [
        Credentials({
            
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "database",
        maxAge: 60*60*3
    }
}