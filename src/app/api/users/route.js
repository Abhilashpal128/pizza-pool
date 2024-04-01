import { User } from "@/app/modals/User";
import mongoose from "mongoose";
import { isAdmin } from "../auth/[...nextauth]/route";

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  if (await isAdmin()) {
    const data = await User.find();
    return Response.json(data);
  }
  return Response.json([]);
}
