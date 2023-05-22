import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import { connectToDB } from "@utils/database";
import User from "@models/user";



const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ Profile }) {
        try {
            await connectToDB();
            // User already exists?
const userExist = await User.findOne({})
            //Create user

            return true;
        } catch (error) {
            console.log(error)
        }

    },
})

export { handler as GET, handler as POST };