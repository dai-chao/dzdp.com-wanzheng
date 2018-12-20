window.onload = function () {
    var Osearch = document.getElementById("Osearch");
    console.log(Osearch);
    var ul;
    Osearch.addEventListener("input", inputHandler);
    var Oscript;
    var str;
    var btn = document.getElementById("btn");

    function inputHandler() {
        if (Oscript) {
            Oscript.remove();
            Oscript = null;
        }
        Oscript = document.createElement("script");
        console.log(Oscript);
        Oscript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + this.value + "&json=1&p=3&sid=22084_1436_13548_21120_22036_22073&req=2&csor=0&cb=callback";
        document.body.appendChild(Oscript);
    }
    function callback(data) {
        if (ul) {
            ul.remove();
            ul = null;
        }
        ul = document.createElement("ul");
        for (var i = 0; i < data.s.length; i++) {
            var li = document.createElement("li");
            li.textContent = data.s[i];
            ul.appendChild(li);
            li.onmousemove = function () {
                this.style.background = "red";
            };
            li.onmouseout = function () {
                this.style.background = "";
            };
            li.onclick = function () {

                search.value = this.innerHTML;
                ul.style.display = "none";
            }

        }
        document.body.appendChild(ul);
    }
}