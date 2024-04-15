import mongoose from "mongoose";
import { RESOURCE } from "../../../constants/index.js";

const schema = mongoose.Schema(
  {
    uid: {
      type: String,
      default: "",
    },
    isrc: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    srp: {
      type: Number,
      default: 0,
    },
    margin: {
      type: Number,
      default: 0,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model(RESOURCE.SAMPLE, schema);
