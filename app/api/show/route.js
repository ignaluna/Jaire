import Show from "@models/show";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB();

        const shows = await Show.find({}).populate('creator');


        return new Response(JSON.stringify(shows), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch all shows", { status: 500 });
    }
};
