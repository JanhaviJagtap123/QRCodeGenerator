function genQR(){
    const gapi = "https://chart.googleapis.com/chart";
    const myText = document.getElementById("qrtext").value;
    const mySize = document.getElementById("size").value;
    const qrCodeUrl = `${gapi}?chs=${mySize}&cht=qr&chl=${myText}`;
    const qrCodeImg = document.createElement("img");
    qrCodeImg.src = qrCodeUrl;
    const container = document.getElementById("qrCodeContainer");
    container.appendChild(qrCodeImg);
}
