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
    destination: {
      type: String,
      required: [true, "Destination of the trip is Required"],
    },
    startDate: {
      type: Date,
      required: [true, "Start date of the trip is Required"],
    },
    endDate: {
      type: Date,
      required: [true, "End date of the trip is Required"],
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
      checkInTime: {
        type: Date,
        required: [true, "Check-In Time is Required"],
      },
      checkOutTime: {
        type: Date,
        required: [true, "Check-out Time is Required"],
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
