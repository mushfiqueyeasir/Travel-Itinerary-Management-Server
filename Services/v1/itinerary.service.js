const userSchema = require("../../Models/v1/user.schema");
const itinerarySchema = require("../../Models/v1/itinerary.schema");

exports.createData = async (itineraryInfo) => {
  const result = await itinerarySchema.create(itineraryInfo);
  return result;
};

exports.getAllData = async () => {
  const result = await itinerarySchema.find();

  if (result.length > 0) {
    for (let i = 0; i < result.length; i++) {
      const userInfo = await userSchema
        .findOne({ userId: result[i].user })
        .select("name email -_id");
      if (userInfo) {
        result[i]._doc.userInfo = userInfo;
      }
    }
  }

  return result;
};

exports.getData = async (itineraryId) => {
  const query = { itineraryId: itineraryId };
  const result = await itinerarySchema.find(query);
  if (result.length > 0) {
    for (let i = 0; i < result.length; i++) {
      const userInfo = await userSchema
        .findOne({ userId: result[i].user })
        .select("name email userImage -_id");
      if (userInfo) {
        result[i]._doc.userInfo = userInfo;
      }
    }
  }
  return result[0];
};

exports.getDataOfUser = async (userId) => {
  const query = { user: userId };
  const result = await itinerarySchema.find(query);
  if (result.length > 0) {
    for (let i = 0; i < result.length; i++) {
      const userInfo = await userSchema
        .findOne({ userId: result[i].user })
        .select("name email userImage -_id");
      if (userInfo) {
        result[i]._doc.userInfo = userInfo;
      }
    }
  }
  return result;
};

exports.updateData = async (itineraryId, data) => {
  const query = { itineraryId: itineraryId };
  const result = await itinerarySchema.updateMany(query, data);
  return result;
};

exports.deleteData = async (itineraryId) => {
  const query = { itineraryId: itineraryId };
  const result = await itinerarySchema.deleteOne(query);
  return result;
};
