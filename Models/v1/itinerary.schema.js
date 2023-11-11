const mongoose = require("mongoose");
const validator = require("validator");

const itinerarySchema = mongoose.Schema(
  {
    itineraryId: {
      type: String,
      default: () => Math.floor(Math.random() * 16777215).toString(16),
      unique: true,
    },

    user: {
      type: String,
      validate: [
        (val) => val && val.length > 0,
        "At least one activity detail is required",
      ],
    },
    itineraryImage: {
      type: String,
      validate: [validator.isURL, "Please Provide A Valid imgURL url!"],
    },
    destination: {
      type: String,
      required: [true, "Destination of the trip is Required"],
    },
    dates: {
      start: {
        type: Date,
        required: [true, "Start date of the trip is Required"],
      },
      end: {
        type: Date,
        required: [true, "End date of the trip is Required"],
      },
    },
    accommodationDetails: {
      hotelName: {
        type: String,
        required: [true, "Hotel Name is Required"],
      },
      bookingReference: {
        type: String,
        description: "Booking reference for the accommodation",
      },
      checkInOutTimes: {
        type: String,
        required: [true, "Check-in and check-out times is Required"],
      },
    },
    transportationDetails: {
      type: String,
      required: [true, "Details about transportation is Required"],
    },
    activityDetails: {
      type: [String],
      validate: [
        (val) => val && val.length > 0,
        "At least one activity detail is required",
      ],
    },

    apiVersion: {
      type: String,
      enum: ["v1"],
      default: "v1",
      immutable: true,
    },
  },

  { timestamps: true }
);

const itinerary = mongoose.model("itinerary", itinerarySchema);
module.exports = itinerary;
