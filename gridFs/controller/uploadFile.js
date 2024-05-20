const mongoose = require("mongoose");
const File = require("../model/uploadFileModel");
const config = require("../utils/config");

exports.uploadFile = async (req, res) => {
  try {
    // const connect = mongoose.createConnection(config.MONGODB_URL);

    // let gfs;
    // connect.once("open", () => {
    //   gfs = new mongoose.mongo.GridFSBucket(connect.db, {
    //     bucketName: "uploadFile",
    //   });
    // });

    /*
        POST: Upload a single image/file to Image collection
    */
    const file = req.files.fileForUpload;
    console.log();

    return res.status(200).json({ sMessage: "File Upload Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
