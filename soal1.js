const job = [
    "Front End Developer",
    "Back End Developer",
    "DevOps",
    "UI/UX Designer",
    "IT Support",
];

console.log(job.length);

document.getElementById(
    "jml"
).innerHTML = `Jumlah pegawai yang bekerja di bagian IT ada ${job.length} diantaranya sebagai berikut :</br>`;

let jobList = job.map((data) => `<li>${data}</li>`);
document.getElementById("list1").innerHTML = jobList;
