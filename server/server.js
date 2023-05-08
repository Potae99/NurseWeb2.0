const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require('fs');
const path = require('path');

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

const storageForSyllabus = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/syllabus")
    },
    filename: (req, file, cb) => {
        const fileName = getFormattedDate() + "." + file.originalname.split('.').pop();
        cb(null, fileName);
    }
});

const storageForTranscript = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/transcript")
    },
    filename: (req, file, cb) => {
        const fileName = getFormattedDate() + "." + file.originalname.split(".").pop();
        cb(null, fileName);
    }
});

const storageForProfile = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/profile")
    },
    filename: (req, file, cb) => {
        const fileName = getFormattedDate() + "." + file.originalname.split(".").pop();
        cb(null, fileName);
    }
});

const storageForIDnumber = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/IDnumber")
    },
    filename: (req, file, cb) => {
        const fileName = getFormattedDate() + "." + file.originalname.split(".").pop();
        cb(null, fileName);
    }
});

const uploadForSyllabus = multer({ storage: storageForSyllabus }).single("file");
const uploadForTranscript = multer({ storage: storageForTranscript }).single("file");
const uploadForProfile = multer({ storage: storageForProfile }).single("file");
const uploadForIDnumber = multer({ storage: storageForIDnumber }).single("file");

// app.post("/upload/syllabus", (req, res) => {
//     uploadForSyllabus(req, res, (err) => {
//         if (err) {
//             return res.status(500).json(err)
//         }

//         // Check if there are any files in the folder
//         const folderPath = "public/syllabus";
//         fs.readdir(folderPath, (error, files) => {
//             if (error) {
//                 console.error("Error reading folder:", error);
//                 return res.status(500).json(error);
//             }

//             // If there are files in the folder, delete the old file and upload new file
//             if (files.length > 0) {
//                 const existingFileName = files[0];
//                 const newFileName = req.file.filename;

//                 if (existingFileName === newFileName) {
//                     return res.status(200).send(req.file);
//                 }

//                 const filePath = folderPath + "/" + existingFileName;
//                 fs.unlink(filePath, (error) => {
//                     if (error) {
//                         console.error("Error deleting old file:", error);
//                         return res.status(500).json(error);
//                     }

//                     console.log("Old file deleted successfully");

//                     fs.rename(req.file.path, folderPath + "/" + req.file.filename, (error) => {
//                         if (error) {
//                             console.error("Error replacing old file:", error);
//                             return res.status(500).json(error);
//                         }

//                         console.log("New file uploaded successfully");
//                         return res.status(200).send(req.file);
//                     });
//                 });
//             } else {
//                 // If there are no files in the folder, upload the new file
//                 fs.rename(req.file.path, folderPath + "/" + req.file.filename, (error) => {
//                     if (error) {
//                         console.error("Error uploading new file:", error);
//                         return res.status(500).json(error);
//                     }

//                     console.log("New file uploaded successfully");
//                     return res.status(200).send(req.file);
//                 });
//             }
//         });

//     });
// });

app.post("/upload/syllabus", (req, res) => {
    uploadForSyllabus(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }
        else {
            return res.status(200).send(req.file);
        }
    })
})

app.post("/upload/transcript", (req, res) => {
    uploadForTranscript(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }
        else {
            return res.status(200).send(req.file);
        }
    })
})

app.post("/upload/IDnumber", (req, res) => {
    uploadForIDnumber(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }
        else {
            return res.status(200).send(req.file);
        }
    })
})

app.post("/upload/profile", (req, res) => {
    uploadForProfile(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }
        else {
            return res.status(200).send(req.file);
        }
    })
})

// app.post('/upload/transcript', (req, res) => {
//     uploadForTranscript(req, res, (err) => {
//         if (err) {
//             return res.status(500).json(err)
//         }

//         const folderPath = "public/transcript";
//         fs.readdir(folderPath, (error, files) => {
//             if (error) {
//                 console.log("Error reading folder:", error);
//                 return res.status(500).json(error);
//             }

//             if (files.length > 0) {
//                 const existingFileName = files[0];
//                 const newFileName = req.file.filename;

//                 if (existingFileName === newFileName) {
//                     return res.status(200).send(req.file);
//                 }

//                 const filePath = folderPath + "/" + existingFileName;
//                 fs.unlink(filePath, (error) => {
//                     if (error) {
//                         console.error("Error deleting old file:", error);
//                         return res.status(500).json(error);
//                     }

//                     console.log("Old file deleted successfully");

//                     fs.rename(req.file.path, folderPath + "/" + req.file.filename, (error) => {
//                         if (error) {
//                             console.error("Error replacing old file:", error);
//                             return res.status(500).json(error);
//                         }

//                         console.log("New file uploaded successfully");
//                         return res.status(200).send(req.file);
//                     });
//                 });
//             } else {
//                 fs.rename(req.file.path, folderPath + "/" + req.file.filename, (error) => {
//                     if (error) {
//                         console.error("Error uploading new file:", error);
//                         return res.status(500).json(error);
//                     }

//                     console.log("New file uploaded successfully");
//                     return res.status(200).send(req.file);
//                 });
//             }
//         });

//     });
// });

// app.post('/upload/profile', (req, res) => {
//     uploadForProfile(req, res, (err) => {
//         if (err) {
//             return res.status(500).json(err)
//         }

//         const folderPath = "public/profile";
//         fs.readdir(folderPath, (error, files) => {
//             if (error) {
//                 console.log("Error reading folder:", error);
//                 return res.status(500).json(error);
//             }

//             if (files.length > 0) {
//                 const existingFileName = files[0];
//                 const newFileName = req.file.filename;

//                 if (existingFileName === newFileName) {
//                     return res.status(200).send(req.file);
//                 }

//                 const filePath = folderPath + "/" + existingFileName;
//                 fs.unlink(filePath, (error) => {
//                     if (error) {
//                         console.error("Error deleting old file:", error);
//                         return res.status(500).json(error);
//                     }

//                     console.log("Old file deleted successfully");

//                     fs.rename(req.file.path, folderPath + "/" + req.file.filename, (error) => {
//                         if (error) {
//                             console.error("Error replacing old file:", error);
//                             return res.status(500).json(error);
//                         }

//                         console.log("New file uploaded successfully");
//                         return res.status(200).send(req.file);
//                     });
//                 });
//             } else {
//                 fs.rename(req.file.path, folderPath + "/" + req.file.filename, (error) => {
//                     if (error) {
//                         console.error("Error uploading new file:", error);
//                         return res.status(500).json(error);
//                     }

//                     console.log("New file uploaded successfully");
//                     return res.status(200).send(req.file);
//                 });
//             }
//         });

//     });
// });

// app.post('/upload/IDnumber', (req, res) => {
//     uploadForIDnumber(req, res, (err) => {
//         if (err) {
//             return res.status(500).json(err)
//         }

//         const folderPath = "public/IDnumber";
//         fs.readdir(folderPath, (error, files) => {
//             if (error) {
//                 console.log("Error reading folder:", error);
//                 return res.status(500).json(error);
//             }

//             if (files.length > 0) {
//                 const existingFileName = files[0];
//                 const newFileName = req.file.filename;

//                 if (existingFileName === newFileName) {
//                     return res.status(200).send(req.file);
//                 }

//                 const filePath = folderPath + "/" + existingFileName;
//                 fs.unlink(filePath, (error) => {
//                     if (error) {
//                         console.error("Error deleting old file:", error);
//                         return res.status(500).json(error);
//                     }

//                     console.log("Old file deleted successfully");

//                     fs.rename(req.file.path, folderPath + "/" + req.file.filename, (error) => {
//                         if (error) {
//                             console.error("Error replacing old file:", error);
//                             return res.status(500).json(error);
//                         }

//                         console.log("New file uploaded successfully");
//                         return res.status(200).send(req.file);
//                     });
//                 });
//             } else {
//                 fs.rename(req.file.path, folderPath + "/" + req.file.filename, (error) => {
//                     if (error) {
//                         console.error("Error uploading new file:", error);
//                         return res.status(500).json(error);
//                     }

//                     console.log("New file uploaded successfully");
//                     return res.status(200).send(req.file);
//                 });
//             }
//         });

//     });
// });

app.get('/download/syllabus/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'public/syllabus', filename);

    // console.log(filePath)

    // ตรวจสอบว่าไฟล์มีอยู่จริงหรือไม่
    if (!fs.existsSync(filePath)) {
        res.status(404).send('File not found');
        return;
    }

    // ตั้งค่า HTTP response header
    res.setHeader('Content-disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-type', 'application/pdf');

    // อ่านไฟล์จาก disk และส่งไฟล์กลับไปยัง client
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
});

app.get('/download/profile/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'public/profile', filename);

    // console.log(filePath)

    // ตรวจสอบว่าไฟล์มีอยู่จริงหรือไม่
    if (!fs.existsSync(filePath)) {
        res.status(404).send('File not found');
        return;
    }

    // ตั้งค่า HTTP response header
    res.setHeader('Content-disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-type', 'application/pdf');

    // อ่านไฟล์จาก disk และส่งไฟล์กลับไปยัง client
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
});

app.get('/download/IDnumber/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'public/IDnumber', filename);

    // console.log(filePath)

    // ตรวจสอบว่าไฟล์มีอยู่จริงหรือไม่
    if (!fs.existsSync(filePath)) {
        res.status(404).send('File not found');
        return;
    }

    // ตั้งค่า HTTP response header
    res.setHeader('Content-disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-type', 'application/pdf');

    // อ่านไฟล์จาก disk และส่งไฟล์กลับไปยัง client
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
});

app.get('/download/transcript/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'public/transcript', filename);

    // console.log(filePath)

    // ตรวจสอบว่าไฟล์มีอยู่จริงหรือไม่
    if (!fs.existsSync(filePath)) {
        res.status(404).send('File not found');
        return;
    }

    // ตั้งค่า HTTP response header
    res.setHeader('Content-disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-type', 'application/pdf');

    // อ่านไฟล์จาก disk และส่งไฟล์กลับไปยัง client
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
});

// Endpoint for editing syllabus
// app.post("/edit/syllabus/:filename", uploadForSyllabus, (req, res) => {
//     const newFileName = req.file.filename;
//     const oldFileName = req.params.filename;
//     const oldFilePath = `public/syllabus/${oldFileName}`;

//     fs.access(oldFilePath, (err) => {
//         if (!err) {
//             fs.unlink(oldFilePath, (err) => {
//                 if (err) {
//                     console.error("Error deleting file:", err);
//                 }
//             });
//         }
//     });

//     const newSyllabus_Path = `public\\syllabus\\${newFileName}`;
//     fs.rename(req.file.path, newSyllabus_Path, (err) => {
//         if (err) {
//             console.error("Error renaming file:", err);
//             return res.status(500).json({ error: "Unable to upload file" });
//         }
//         return res.status(200).json({ path: newSyllabus_Path });
//     });
// });

app.post("/edit/syllabus/:filename", uploadForSyllabus, (req, res) => {
    const newFileName = req.file.filename;
    const oldFileName = req.params.filename;
    const oldFilePath = `public/syllabus/${oldFileName}`;

    if (!oldFileName) {
        const newSyllabus_Path = `public\\syllabus\\${newFileName}`;
        fs.rename(req.file.path, newSyllabus_Path, (err) => {
            if (err) {
                console.error("Error renaming file:", err);
                return res.status(500).json({ error: "Unable to upload file" });
            }
            return res.status(200).json({ path: newSyllabus_Path });
        });
    } else {
        fs.access(oldFilePath, (err) => {
            if (!err) {
                fs.unlink(oldFilePath, (err) => {
                    if (err) {
                        console.error("Error deleting file:", err);
                    }
                });
            }
        });

        const newSyllabus_Path = `public\\syllabus\\${newFileName}`;
        fs.rename(req.file.path, newSyllabus_Path, (err) => {
            if (err) {
                console.error("Error renaming file:", err);
                return res.status(500).json({ error: "Unable to upload file" });
            }
            return res.status(200).json({ path: newSyllabus_Path });
        });
    }
});

app.post("/edit/IDnumber/:filename", uploadForIDnumber, (req, res) => {
    const newFileName = req.file.filename;
    const oldFileName = req.params.filename;
    const oldFilePath = `public/IDnumber/${oldFileName}`;

    if (!oldFileName) {
        const newIDnumber_Path = `public\\IDnumber\\${newFileName}`;
        fs.rename(req.file.path, newIDnumber_Path, (err) => {
            if (err) {
                console.error("Error renaming file:", err);
                return res.status(500).json({ error: "Unable to upload file" });
            }
            return res.status(200).json({ path: newIDnumber_Path });
        });
    } else {
        fs.access(oldFilePath, (err) => {
            if (!err) {
                fs.unlink(oldFilePath, (err) => {
                    if (err) {
                        console.error("Error deleting file:", err);
                    }
                });
            }
        });

        const newIDnumber_Path = `public\\IDnumber\\${newFileName}`;
        fs.rename(req.file.path, newIDnumber_Path, (err) => {
            if (err) {
                console.error("Error renaming file:", err);
                return res.status(500).json({ error: "Unable to upload file" });
            }
            return res.status(200).json({ path: newIDnumber_Path });
        });
    }
});

app.post("/edit/profile/:filename", uploadForProfile, (req, res) => {
    const newFileName = req.file.filename;
    const oldFileName = req.params.filename;
    const oldFilePath = `public/profile/${oldFileName}`;

    if (!oldFileName) {
        const newProfile_Path = `public\\profile\\${newFileName}`;
        fs.rename(req.file.path, newProfile_Path, (err) => {
            if (err) {
                console.error("Error renaming file:", err);
                return res.status(500).json({ error: "Unable to upload file" });
            }
            return res.status(200).json({ path: newProfile_Path });
        });
    } else {
        fs.access(oldFilePath, (err) => {
            if (!err) {
                fs.unlink(oldFilePath, (err) => {
                    if (err) {
                        console.error("Error deleting file:", err);
                    }
                });
            }
        });

        const newProfile_Path = `public\\profile\\${newFileName}`;
        fs.rename(req.file.path, newProfile_Path, (err) => {
            if (err) {
                console.error("Error renaming file:", err);
                return res.status(500).json({ error: "Unable to upload file" });
            }
            return res.status(200).json({ path: newProfile_Path });
        });
    }
});

app.post("/edit/transcript/:filename", uploadForTranscript, (req, res) => {
    const newFileName = req.file.filename;
    const oldFileName = req.params.filename;
    const oldFilePath = `public/transcript/${oldFileName}`;

    if (!oldFileName) {
        const newTranscript_Path = `public\\transcript\\${newFileName}`;
        fs.rename(req.file.path, newTranscript_Path, (err) => {
            if (err) {
                console.error("Error renaming file:", err);
                return res.status(500).json({ error: "Unable to upload file" });
            }
            return res.status(200).json({ path: newTranscript_Path });
        });
    } else {
        fs.access(oldFilePath, (err) => {
            if (!err) {
                fs.unlink(oldFilePath, (err) => {
                    if (err) {
                        console.error("Error deleting file:", err);
                    }
                });
            }
        });

        const newTranscript_Path = `public\\transcript\\${newFileName}`;
        fs.rename(req.file.path, newTranscript_Path, (err) => {
            if (err) {
                console.error("Error renaming file:", err);
                return res.status(500).json({ error: "Unable to upload file" });
            }
            return res.status(200).json({ path: newTranscript_Path });
        });
    }
});

app.delete("/delete/syllabus/:filename", (req, res) => {
    const fileName = req.params.filename;
    const filePath = `public/syllabus/${fileName}`;

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Error deleting file:", err);
            return res.status(500).json({ error: "Unable to delete file" });
        }
        return res.status(200).json({ message: "File deleted successfully" });
    });
});

app.delete("/delete/IDnumber/:filename", (req, res) => {
    const fileName = req.params.filename;
    const filePath = `public/IDnumber/${fileName}`;

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Error deleting file:", err);
            return res.status(500).json({ error: "Unable to delete file" });
        }
        return res.status(200).json({ message: "File deleted successfully" });
    });
});

app.delete("/delete/profile/:filename", (req, res) => {
    const fileName = req.params.filename;
    const filePath = `public/profile/${fileName}`;

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Error deleting file:", err);
            return res.status(500).json({ error: "Unable to delete file" });
        }
        return res.status(200).json({ message: "File deleted successfully" });
    });
});

app.delete("/delete/transcript/:filename", (req, res) => {
    const fileName = req.params.filename;
    const filePath = `public/transcript/${fileName}`;

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Error deleting file:", err);
            return res.status(500).json({ error: "Unable to delete file" });
        }
        return res.status(200).json({ message: "File deleted successfully" });
    });
});

app.use('/image', express.static(path.join(__dirname, 'public/profile')));

app.listen(3000, () => {
    console.log("App is running on port 3000")
});