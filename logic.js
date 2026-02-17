const qrInput = document.getElementById('qr-input');
const generateBtn = document.getElementById('generate-btn');
const downloadBtn = document.getElementById('download-btn');
const qrContainer = document.getElementById('qrcode-container');

// Initialize the QRCode object
const qrcode = new QRCode(qrContainer, {
    width: 256,
    height: 256,
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
    
    // Show the download button after a tiny delay to ensure the QR is rendered
    setTimeout(() => {
        downloadBtn.style.display = "block";
    }, 100);
}

// Download Logic
downloadBtn.addEventListener('click', () => {
    // Find the canvas element created by QRCode.js
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