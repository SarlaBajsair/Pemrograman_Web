const bilangan1 = document.getElementById("bilangan1");
const bilangan2 = document.getElementById("bilangan2");

document.getElementById("btnJumlahkan").addEventListener("click", function () {
	const value1 = parseFloat(bilangan1.value);
	const value2 = parseFloat(bilangan2.value);

	if (isNaN(value1) || isNaN(value2)) {
		alert("Inputan tidak sesuai");
	} else {
		const hasil = value1 + value2;
		alert("Hasil penjumlahan = " + hasil);
	}
});

document.getElementById("btnUlangi").addEventListener("click", function () {
	bilangan1.value = "";
	bilangan2.value = "";
});
