let imgBox = document.getElementById("imgBox");
let imgqr = document.getElementById("qrimg");
let qrtext = document.getElementById("qrtext");
let downloadBtn = document.getElementById("downloadBtn");
let shareBtn = document.getElementById("shareBtn");

function generateQR() {
    if (qrtext.value.length > 0) {
        let qrURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrtext.value);
        imgqr.src = qrURL;
        imgBox.classList.add("show-img");
        downloadBtn.style.display = "block";
        shareBtn.style.display = "block";
    } else {
        qrtext.classList.add('error');
        setTimeout(() => {
            qrtext.classList.remove('error');
        }, 1000);
    }
}

function downloadQR() {
    let link = document.createElement("a");
    link.href = imgqr.src;
    link.download = "QRCode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function shareQR() {
    if (navigator.share) {
        navigator.share({
            title: "QR Code",
            text: "Scan this QR Code!",
            url: imgqr.src
        }).catch(error => console.log('Error sharing:', error));
    } else {
        alert("Sharing not supported on this browser.");
    }
}
