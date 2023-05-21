import NextAuth from "next-auth/next";
import GoogleProvider from "next/auth/providers/google"

const handler = NextAuth({
    poviders: [
        GoogleProvider({
            clientId: "",
            clientSecret: "",
        })
    ],
    async session({session}){

    },
    async signIn({Profile}){

    },
})

export {handler as GET, handler as POST};