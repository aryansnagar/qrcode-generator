const qrInput = document.getElementById('qr-input');
const generateBtn = document.getElementById('generate-btn');
const downloadBtn = document.getElementById('download-btn');
const qrContainer = document.getElementById('qrcode-container');

const qrcode = new QRCode(qrContainer, {
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

function generateQR() {
    const data = qrInput.value.trim();
    if (data === "") {
        alert("Please enter some text or a URL!");
        return;
    }
  qrcode.makeCode(data);
  downloadBtn.style.visibility = "visible";
}

downloadBtn.addEventListener('click', () => {
    const canvas = qrContainer.querySelector('canvas');
    if (canvas) {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.href = image;
        link.download = 'static-qr-code.png';
        link.click();
    }
});

generateBtn.addEventListener('click', generateQR);
qrInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') generateQR();

});


//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
