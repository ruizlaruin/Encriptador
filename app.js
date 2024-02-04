function copyToClipboard (){
    let textToCopy = document.getElementById("output");
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textToCopy.value);

}

function encrypting() {
    document.getElementById("output").style.backgroundImage = "none";
    let copy = document.getElementById("copy-btn").hidden = false;

    let text = document.getElementById("entrada").value;
    let translate = text.replace(/e/g, "enter");
    translate = translate.replace(/i/g, "imes");
    translate = translate.replace(/a/g, "ai");
    translate = translate.replace(/o/g, "ober");
    translate = translate.replace(/u/g, "ufat");
 
    document.getElementById("output").value = translate;
}

function decrypting() {
    document.getElementById("output").style.backgroundImage = "none";
    let text = document.getElementById("entrada").value;
    let translate = text.replace(/enter/g, "e");
    translate = translate.replace(/imes/g, "i");
    translate = translate.replace(/ai/g, "a");
    translate = translate.replace(/ober/g, "o");
    translate = translate.replace(/ufat/g, "u");
 
    document.getElementById("output").value = translate;
}

