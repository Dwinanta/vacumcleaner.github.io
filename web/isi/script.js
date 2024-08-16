document.getElementById('paymentMethod').addEventListener('change', function() {
    const paymentMethod = this.value;
    const paymentDetailsDiv = document.getElementById('paymentDetails');

    if (paymentMethod === 'ovo') {
        paymentDetailsDiv.innerHTML = `
            <label for="ovoNumber">Nomor OVO/Dana:</label>
            <input type="text" id="accountHolder" name="accountHolder" value="ovo:085645230774,dana:085732259281" readonly>
            <p>Silakan transfer ke nomor di atas, lalu kirim bukti transfer ke WhatsApp.</p>
        `;
    } else if (paymentMethod === 'crypto') {
        paymentDetailsDiv.innerHTML = `
            <label for="cryptoWallet">Alamat Wallet Crypto:</label>
            <input type="text" id="accountHolder" name="accountHolder" value="0x9A12750eA006D52c71c3Ea0Fa63Dc782b7CB151D" readonly>
            <p>Silakan transfer BTC,ETH,USDT ke alamat wallet di atas, lalu kirim bukti transfer ke WhatsApp.</p>
        `;
    } else if (paymentMethod === 'bank_transfer') {
        paymentDetailsDiv.innerHTML = `
            <label for="bankName">Nama Bank:</label>
            <input type="text" id="bankName" name="bankName" value="SEA BANK" readonly>
            <label for="accountNumber">Nomor Rekening:</label>
            <input type="text" id="accountNumber" name="accountNumber" value="9015 4856 7148" readonly>
            <label for="accountHolder">Nama Pemilik Rekening:</label>
            <input type="text" id="accountHolder" name="accountHolder" value="MUHAMMAD ABDULLOH DWI NANTA PUTRA" readonly>
            <p>Silakan transfer ke rekening di atas, lalu kirim bukti transfer ke WhatsApp.</p>
        `;
    } else {
        paymentDetailsDiv.innerHTML = '';
    }
});

document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const deadline = document.getElementById('deadline').value;
    const price = document.getElementById('price').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    let paymentDetails = '';

    if (paymentMethod === 'ovo') {
        paymentDetails = document.getElementById('ovoNumber').value;
    } else if (paymentMethod === 'crypto') {
        paymentDetails = document.getElementById('cryptoWallet').value;
    } else if (paymentMethod === 'bank_transfer') {
        paymentDetails = `Bank: ${document.getElementById('bankName').value}, Rekening: ${document.getElementById('accountNumber').value}, Pemilik: ${document.getElementById('accountHolder').value}`;
    }

    const message = `Nama: ${name}\nDeskripsi Proyek: ${description}\nTenggang Waktu: ${deadline}\nHarga: Rp ${price}\nMetode Pembayaran: ${paymentMethod}\nDetail Pembayaran: ${paymentDetails}`;
    const whatsappLink = `https://wa.me/6285732259281?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
});
