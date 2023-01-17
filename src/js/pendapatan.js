const bulanIni = document.getElementById("bulan-ini");
const mingguIni = document.getElementById("minggu-ini");
const total = document.getElementById("total");

const pendapatan = {
    bulanIni: "2",
    mingguIni: "1",
    total: "21",
}

bulanIni.innerHTML = pendapatan.bulanIni
mingguIni.innerHTML = pendapatan.mingguIni
total.innerHTML = pendapatan.total