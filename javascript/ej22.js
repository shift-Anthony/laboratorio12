const descargarArchivo = (url, callback) => {
  alert("Descargando...");
  callback(url);
};

const notificarDescarga = (url) => alert(`Descarga completa de ${url}`);

//Ejecucion del codigo
descargarArchivo("test.pdf", notificarDescarga);
