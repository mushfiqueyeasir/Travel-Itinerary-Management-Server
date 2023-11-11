const {
  createData,
  getAllData,
  getData,
  getDataOfUser,
  updateData,
  deleteData,
} = require("../../Services/v1/itinerary.service");

exports.create = async (req, res) => {
  try {
    let data = req.body;
    console.log();
    const result = await createData(data);
    res.status(200).json({
      status: "success",
      message: "New Itinerary Created Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Itinerary Couldn't Be Created!",
      error: error.message,
    });
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const result = await getAllData(req.query);
    res.status(200).json({
      status: "success",
      message: "All Itinerary Data Acquired Successfully!",
      data: result,
      length: result.length,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "All Itinerary Data Couldn't Acquired Unsuccessful!",
      error: error.message,
    });
  }
};

exports.getAllUserData = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const result = await getDataOfUser(userId);
    res.status(200).json({
      status: "success",
      message: "All Itinerary Data Acquired Successfully!",
      data: result,
      length: result.length,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "All Itinerary Data Couldn't Acquired Unsuccessful!",
      error: error.message,
    });
  }
};

exports.get = async (req, res, next) => {
  const itineraryId = req.params.itineraryId;
  try {
    const result = await getData(itineraryId);
    result
      ? res.status(200).json({
          status: "success",
          message: "Itinerary Data get Successfully",
          data: result,
        })
      : res.status(404).json({
          status: "not-found",
          message: "No Itinerary Data Found",
        });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Can't get Itinerary Data an error occurred",
      error: error.message,
    });
  }
};

exports.update = async (req, res, next) => {
  const itineraryId = req.params.itineraryId;
  try {
    let data = req.body;
    const result = await updateData(itineraryId, data);

    if (result.modifiedCount > 0) {
      res.status(200).json({
        status: "success",
        message: "Itinerary Data Updated Successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        status: "not-Found",
        message: "No Itinerary Found To Update!",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Itinerary couldn't update an error occurred",
      error: error.message,
    });
  }
};

exports.delete = async (req, res, next) => {
  const itineraryId = req.params.itineraryId;
  console.log(itineraryId);

  try {
    const result = await deleteData(itineraryId);

    if (result.deletedCount > 0) {
      res.status(200).json({
        status: "success",
        message: "Itinerary Data is deleted",
        data: result,
      });
    } else {
      res.status(404).json({
        status: "not-found",
        message: "No Itinerary Found To Delete!",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Error on Deleting Itinerary!",
      error: error.message,
    });
  }
};
