const fs = require("fs-extra");


fs.mkdir('new_folder', err => {
  if (err) throw err; // не удалось создать папку
  console.log('folder1 is created');

  fs.writeFile("/Users/pro/lol/new_folder/filename.txt", "Текст", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("file is created");
    }
  });
  fs.mkdir('new_folder2', err => {
    if (err) throw err; // не удалось создать папку
    console.log('folder2 is created');
  });


  fs.copyFile("/Users/pro/lol/new_folder/filename.txt", "/Users/pro/lol/new_folder2/filename.txt", err => {
    if (err) return console.error(err)
    console.log('copied')
  });

  fs.remove("/Users/pro/lol/new_folder/filename.txt", err => {
    if (err) return console.error(err)
    console.log('file removed!')
  });

  fs.remove("/Users/pro/lol/new_folder2/filename.txt", err => {
    if (err) return console.error(err)
    console.log('file2 removed!')
  });

  fs.remove("/Users/pro/lol/new_folder/", err => {
    if (err) return console.error(err)
    console.log('folder1removed!')
  });

  fs.remove("/Users/pro/lol/new_folder2", err => {
    if (err) return console.error(err)
    console.log('folder2 removed!')
  });


});




