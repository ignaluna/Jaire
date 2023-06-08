import { model, models, Schema } from "mongoose";

const ShowSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  flyer: {
    type: String,
    required: [true, "Flyer is required."],
  },
  eventLink: {
    type: String,
    required: [true, "Event link is required."],
  },
  date: {
    type: String,
    required: [true, "Date is required."],
  },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
  location: {
    type: String,
    required: [true, "Location is required."],
  },
});

const Show = models.Show || model("Show", ShowSchema);

export default Show;
