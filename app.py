from flask import Flask, render_template, request, redirect, url_for, flash
import urllib.parse

app = Flask(__name__)
app.secret_key = 'secretkey123'  # Untuk flash message

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    nama = request.form.get('nama')
    wa = request.form.get('wa')
    alamat = request.form.get('alamat')
    layanan = request.form.get('layanan')

    # Validasi data wajib
    if not nama or not wa or not alamat or not layanan:
        flash('Mohon isi semua data dengan benar!')
        return redirect(url_for('index'))

    # Format pesan WhatsApp
    pesan = f"Pesanan Laundry:\nNama: {nama}\nWA: {wa}\nAlamat: {alamat}\nLayanan: {layanan}"
    pesan_encoded = urllib.parse.quote(pesan)
    nomor_tujuan = '6281234567890'  # Ganti nomor tujuan WhatsApp Anda

    wa_url = f"https://wa.me/{nomor_tujuan}?text={pesan_encoded}"
    return redirect(wa_url)

if __name__ == "__main__":
    app.run(debug=True)
