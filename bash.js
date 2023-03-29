const comandos = require("./commands")

process.stdout.write('prompt > ');

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on('data', function (data) {
  let arreglo = data.toString().trim().split(" "); // Remueve la nueva línea
  let cmd=arreglo[0]
  if (comandos[cmd]) comandos[cmd](arreglo.slice(1).join(" ")) ;
  else {
    process.stdout.write("This command doesn't exist: " + cmd + '\nprompt > ');
  }
});