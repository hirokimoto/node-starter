import { s3Uploadv2 } from '../utils/s3Service';
import { googleCloudUpload } from '../utils/googleBucketService';

// Upload file to google cloud bucket
export const fileUploadToGoogleBucket = async (req, res, next) => {
  try {
    const result = await googleCloudUpload(req.files);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Upload file to aws s3 bucket
export const fileUploadToS3Bucket = async (req, res, next) => {
  try {
    const result = await s3Uploadv2(req.files);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
