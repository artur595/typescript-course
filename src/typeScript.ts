const buttonElem: any = document.querySelector('.clickMe') as HTMLButtonElement;

const bodyElem: HTMLElement = document.body;

let isWhite: boolean = false;

buttonElem.addEventListener("click", (): void => {
    if (isWhite) {
        bodyElem.style.backgroundColor = "";
    } else {
        bodyElem.style.backgroundColor = "rgba(0,58,255,0.18)";
    }

    isWhite = !isWhite;
})
