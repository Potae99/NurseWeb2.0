const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require('fs');

const app = express();

app.use(cors());

const getFormattedDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    return `${year}_${month}_${day}_${hour}_${minute}_${second}`;
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "syllabus")
    },
    filename: (req, file, cb) => {
        const fileName = getFormattedDate() + "." + file.originalname.split('.').pop();
        cb(null, fileName);
    }
});


const upload = multer({ storage }).single("file");

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        // Delete old file
        const oldFilePath = `syllabus/${req.file.originalname}`;
        fs.unlink(oldFilePath, (err) => {
            if (err && err.code !== 'ENOENT') {
                console.error(err);
            } else {
                console.log(`Deleted old file ${oldFilePath}`);
            }
        });

        return res.status(200).send(req.file);
    });
});

app.delete('/syllabus/:filename', (req, res) => {
    const filePath = `syllabus/${req.params.filename}`;
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Failed to delete file' });
        } else {
            console.log(`Deleted file ${filePath}`);
            return res.status(200).json({ message: 'File deleted successfully' });
        }
    });
});


app.listen(8000, () => {
    console.log("App is running on port 8000")
});