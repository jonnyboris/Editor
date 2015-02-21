var editor = document.getElementById("editor"),
    throttled = _.throttle(save, 2000);

function save() {
    var content =  editor.innerHTML;
    console.log(content);
    localStorage.setItem("content", content);
}

editor.onkeyup = throttled;

window.onload = function() {
    var content = localStorage.getItem("content");
    if(content) {
        editor.innerHTML = content;
    } else {
        editor.innerHTML = "This is a simple text editor, it should automatically save your text. So if you close the tab it should still be here when you get back.";
    }
}