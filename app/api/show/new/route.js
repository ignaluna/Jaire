import Show from "@models/show";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const {
        userId,
        flyer,
        eventLink,
        date,
        description,
        location,
        artists,
        artistSocials,
    } = await request.json();

    try {
        await connectToDB();
        const newShow = new Show({ creator: userId, flyer, eventLink, date, description, location, artists, artistSocials
        });

        console.log("A verga" + newShow)

        await newShow.save();
        return new Response(JSON.stringify(newShow), { status: 201 })
    } catch (error) {
        console.log(error.message);
        return new Response("Failed to create a new show", { status: 500 });
    }
};
