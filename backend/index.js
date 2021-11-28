let addr = {};
{
  const os = require("os");
  const lookup = os.platform()=='linux'?'wlan0':"Wi-Fi";
  const wifi = os.networkInterfaces()[lookup][0];
  const { address } = wifi;
  addr = address;
}
addr = "http://" + addr + ":3000"
console.log(addr);

const qrCode = require("qrcode");
qrCode.toFile("QRcode.png",addr)

const express = require("express");
const fileUpload = require("express-fileupload");
const exec = require("child_process").exec;
exec("rm temp/*");
const random_words = [
  "Fork",
  "Freeway",
  "Fruit",
  "Fungus",
  "Game",
  "Garden",
  "Gas",
  "Gate",
  "Panther",
  "Animal",
];
const random_key = () => {
  const first = random_words[Math.ceil(Math.random() * 7)];
  const second = random_words[Math.ceil(Math.random() * 7)];
  return first + "-" + second;
};
const codeDirectory = {};
const app = express();
const port = 3000;

app.use(fileUpload());
app.use(express.static("public"));
app.post("/upload", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  const { upload } = req.files;
  const uploadPath = __dirname + "/temp/" + upload.name;
  upload.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    const key = random_key();
    codeDirectory[key] = uploadPath;
    res.send("File uploaded! Your file code is:" + key);
  });
});
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.post("/download", (req, res) => {
  const { upload } = req.body;
  if (codeDirectory[upload]) {
    res.download(codeDirectory[upload], function (error) {
      if (error) {
        console.log("Error : ", error);
      }
    });
  } else {
    return res.status(400).send("Invalid Code");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
