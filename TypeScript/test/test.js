var keskairvo = function (a, b, c) {
    var div = document.createElement('div');
    var ans = (a / 3600 * c) * 13 + " " + (b * c / 3600) * 13;
    div.textContent = ans;
    document.body.appendChild(div);
};
keskairvo(5, 10, 1500);
