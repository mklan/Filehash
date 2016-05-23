//MIT licence 2015-2016 - Matthias Klan - matthias.klan@gmail.com

export default class Filehash{

  static compare(file, hash, algorithm){
    return new Promise(function (resolve, reject) {
      Filehash.hash(file, algorithm).then(function(genHash){
        if(genHash === hash){
          resolve(true);
        }else{
          resolve(false);
        }
      });
    });
  }

  static hash(file, algorithm) {
    algorithm = algorithm || 'SHA-256';
    return new Promise(function (resolve, reject) {
      if (!window.crypto) reject(Error('your Browser does not support client-side cryptography'));
      if (file instanceof ArrayBuffer) {
        resolve(crypt(file, algorithm));
      }
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function (e) {
        resolve(crypt(e.target.result, algorithm));
      };
      reader.onerror = function (e) {
        reject(Error(e));
      };
    });

    //http://qnimate.com/hashing-using-web-cryptography-api/
    function convertArrayBufferToHexaDecimal(buffer) {
      var data_view = new DataView(buffer);
      var iii, len, hex = '', c;

      for (iii = 0, len = data_view.byteLength; iii < len; iii += 1) {
        c = data_view.getUint8(iii).toString(16);
        if (c.length < 2) {
          c = '0' + c;
        }

        hex += c;
      }

      return hex;
    }

    function crypt(file, algorithm) {
      return new Promise(function (resolve, reject) {
        window.crypto.subtle.digest({ name: algorithm }, file).then(function (hash) {
          resolve(convertArrayBufferToHexaDecimal(hash));
        }, function (e) {
          reject(Error(e));
        });
      });
    }
  }

};
