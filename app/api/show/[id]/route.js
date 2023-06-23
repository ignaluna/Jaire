import Show from "@models/show";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const show = await Show.findById(params.id).populate("creator");
    if (!show) return new Response("Show not found", { status: 404 });

    return new Response(JSON.stringify(show), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const {
    flyer,
    eventLink,
    date,
    location,
  } = await request.json();

  try {
    await connectToDB();

    // Find the existing show by ID
    const existingShow = await Show.findById(params.id);

    if (!existingShow) {
      return new Response("Show not found", { status: 404 });
    }

    // Update the show with new data
    existingShow.flyer = flyer;
    existingShow.eventLink = eventLink;
    existingShow.date = date;
    existingShow.location = location;

    await existingShow.save();

    return new Response("Successfully updated the show", { status: 200 });
  } catch (error) {
    return new Response("Error updating show", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the show by ID and remove it
    await Show.findByIdAndRemove(params.id);

    return new Response("Show deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting show", { status: 500 });
  }
};
