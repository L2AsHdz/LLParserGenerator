function processFiles(files: FileList) {
    var file: File = files[0];
    var reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) =>{
        let texto = e.target.result.toString();
        document.getElementById("textoEntrada").innerHTML = texto;
    };
}