const connectButton = document.getElementById('connectButton');
const buttonText = document.getElementById('buttonText');
const statusDiv = document.getElementById('status');
const networkInfo = document.getElementById('networkInfo');
const walletDetails = document.getElementById('walletDetails');

let isConnected = false;

function generateRandomAddress() {
    const chars = '0123456789abcdef';
    let address = '0x';
    for (let i = 0; i < 40; i++) {
        address += chars[Math.floor(Math.random() * chars.length)];
    }
    return address;
}

function generateRandomBalance() {
    return (Math.random() * 10).toFixed(4);
}

function simulateConnection() {
    if (isConnected) return;

    connectButton.disabled = true;
    buttonText.textContent = 'Conectando...';
    buttonText.classList.add('loading');
    statusDiv.className = 'status-info';
    statusDiv.innerHTML = 'Simulando conexión con blockchain...';

    setTimeout(() => {
        const address = generateRandomAddress();
        const balance = generateRandomBalance();
        const networks = ['Ethereum Mainnet', 'Sepolia Testnet', 'Polygon Mumbai'];
        const network = networks[Math.floor(Math.random() * networks.length)];

        isConnected = true;
        statusDiv.className = 'status-success';
        statusDiv.innerHTML = `
            <strong>Wallet Conectada Exitosamente</strong><br>
            <small style="font-family: monospace;">${address}</small>
        `;

        networkInfo.innerHTML = `
            <strong>Red:</strong> ${network}<br>
            <strong>Chain ID:</strong> ${network.includes('Mainnet') ? '0x1' : '0xaa36a7'}
        `;
        networkInfo.classList.add('show');

        walletDetails.innerHTML = `
            <div class="detail-row">
                <span><strong>Balance:</strong></span>
                <span>${balance} ETH</span>
            </div>
            <div class="detail-row">
                <span><strong>Transacciones:</strong></span>
                <span>${Math.floor(Math.random() * 500)}</span>
            </div>
            <div class="detail-row">
                <span><strong>Primera actividad:</strong></span>
                <span>${new Date(Date.now() - Math.random() * 31536000000).toLocaleDateString()}</span>
            </div>
            <div class="detail-row">
                <span><strong>Tipo:</strong></span>
                <span>Wallet Simulada</span>
            </div>
        `;
        walletDetails.classList.add('show');

        buttonText.textContent = 'Conectado';
        buttonText.classList.remove('loading');
    }, 1500);
}

connectButton.addEventListener('click', simulateConnection);
