document.getElementById("daftar").addEventListener("submit", function (event) {
	event.preventDefault();

	var name = document.getElementById("nama").value;
	var email = document.getElementById("email").value;
	var alamat = document.getElementById("alamat").value;

	if (name === "" || email === "" || alamat === "") {
		alert("Anda Harus Mengisi data dengan lengkap");
	} else {
		alert("Pesan telah dikirim");
	}
});
