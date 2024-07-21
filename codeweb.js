function run() {
    let htmlCode = document.getElementById("html-code").value;
    let jsCode = document.getElementById("js-code").value;
    let cssCode = document.getElementById("css-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";

    try {
        output.contentWindow.eval(jsCode);
    } catch (error) {
        console.error("Error in executing JavaScript code:", error);
    }
}

