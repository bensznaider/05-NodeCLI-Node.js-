const fs = require('fs');
const request = require('request');

const comandos = {
  pwd: () => {
    process.stdout.write(process.argv[0] + '\nprompt > ');
  },
  date: () => {
      var date = new Date(); 
      process.stdout.write(`${date}` + '\nprompt > ');
  },
  ls: () => {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write('prompt > ');
    })
  },
  echo: (strings) => {
    process.stdout.write(strings+'\nprompt > ');
  },
  cat: (archivos) => {
    arrArchs = archivos.split(" ");
    for (let i = 0; i < arrArchs.length; i++) {
      fs.readFile(arrArchs[i], (err, data) => {
        if (!data) process.stdout.write(err + "\nprompt > ");
        else process.stdout.write(data.toString()+"\n");
        if (i == arrArchs.length - 1) process.stdout.write("prompt > ");
      })
    }
  },
  curl: (url) => {
    request(url, function (error, response, body) {
    if (error) process.stdout.write('Hubo un error:', error);
    else process.stdout.write('body:'+body+ "\nprompt > ");
    });
  },
};

module.exports = comandos;