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





// {      
//        var gapi = "https://chart.googleapis.com/chart?chs=";
//        var myImg = document.getElementById("img");
//        var myText = document.getElementById("qrtext").value;
//        var mySize = document.getElementById("size").value;

//        if(myText !== "" && mySize == 100){
//            myImg.src = gapi+"100x100"+"&chl="+myText;
//        }
//        else if(myText !== "" && mySize == 150){
//            myImg.src = gapi+"150x150"+"&chl="+myText;
//        }
//        else if(myText !== "" && mySize == 200){
//            myImg.src = gapi+"200x200"+"&chl="+myText;
//        }
//        else if(myText !== "" && mySize == 250){
//            myImg.src = gapi+"250x250"+"&chl="+myText;
//        }
//        else if(myText !== "" && mySize == 300){
//            myImg.src = gapi+"300x300"+"&chl="+myText;
//        }
//        else{
//            alert("Please enter text");
//        }
// }