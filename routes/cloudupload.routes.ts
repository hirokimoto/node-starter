import * as cloudUploadController from '../controllers/cloudupload.controller';
import upload from '../middleware/upload';

export default function (app) {
  app.post(
    "/api/uploadtogc",
    upload.array("file"),
    cloudUploadController.fileUploadToGoogleBucket
  );
  app.post(
    "/api/uploadtos3",
    upload.array("file"),
    cloudUploadController.fileUploadToS3Bucket
  );
};
