const type = document.getElementById("type");
const save = document.getElementById("save");
const open = document.getElementById("open");
const fileOpen = document.getElementById("fileOpen");
const quit = document.getElementById("quit");
const undo = document.getElementById("undo");
const paste = document.getElementById("paste");
const support = document.getElementById("support");
const feedback = document.getElementById("feedback");
const improve = document.getElementById("improve");
const about = document.getElementById("about");

save.addEventListener("click", () => {
    var info = type.value;
    var fileName = "steDocument.txt";
    var fileType = "text/plain";

    var blob = new Blob([info], { type: fileType });
    var url = URL.createObjectURL(blob);

    var link = document.createElement("a");
    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
});

open.addEventListener("click", () => {
    fileOpen.click();

    fileOpen.addEventListener("change", () => {
        var file = fileOpen.files[0];
        var reader = new FileReader();

        reader.onload = function() {
            var fileContents = reader.result;
            type.value = fileContents;
        };

        reader.readAsText(file);
        alert("File has been succesfully loaded.");
    });
});

quit.addEventListener("click", () => {
    var confirmed = window.confirm("Are you sure you want to quit?");

    if (!confirmed) {
        return;
    }
    
    window.close();
});

undo.addEventListener("click", () => {
    var currentValue = type.value;
    var lastLineBreakIndex = currentValue.lastIndexOf("\n");
    var newValue = currentValue.substring(0, lastLineBreakIndex);
    type.value = newValue;
});

paste.addEventListener("click", () => {
    navigator.clipboard.readText().then(function(clipboardText) {
        type.value += clipboardText;
    });
});

support.addEventListener("click", () => {
    window.open("https://github.com/FireStreaker2/STE/issues");
});

feedback.addEventListener("click", () => {
    window.open("https://github.com/FireStreaker2/STE/issues");
});

improve.addEventListener("click", () => {
    window.open("https://github.com/FireStreaker2/STE/pulls");
});

about.addEventListener("click", () => {
    window.open("https://github.com/FireStreaker2/STE");
});