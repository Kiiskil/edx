let keskairvo: Function = (a:number, b: number, c: number) => {
    let div = document.createElement('div');
    let ans:string = (a/3600*c)*13 + " " + (b*c/3600)*13;
    div.textContent = ans;
    document.body.appendChild(div);
}

keskairvo(5,10,1500);