const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Ensure to create the directory if it doesn't exist
    cb(null, './public/temp');
  },
  filename: function (req, file, cb) {
    // Ensure unique filenames to prevent conflicts
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.originalname);
  }
});

const fileFilter = function (req, file, cb) {
  // Check file type using MIME types for better security
  if (file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      file.mimetype === 'application/vnd.ms-excel') {
    cb(null, true);
  } else {
    cb(new Error('Please upload Excel file'));
  }
};

exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: 15 * 1024 * 1024 // 15 MB in bytes
  },
  fileFilter: fileFilter
});

exports.verifyFile = (req, res, next) => {
  const uploadSingleImage = this.upload.single('file');

  uploadSingleImage(req, res, function (err) {
    if (err) {
      const error =
        err.message === 'File too large'
          ? `${err.message}. File must be 1MB or less.`
          : err.message;
      return res.status(400).json({
        status: false,
        message: error,
      });
    }
    return next();
  });
};
