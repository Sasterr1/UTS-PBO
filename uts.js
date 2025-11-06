class Employee {
    constructor(name) {
        this.name = name;
    }

    applyLeave(jeniscuti, jumlahhari) {
        if (!this.leaveQuota.hasOwnProperty(jeniscuti)) {
            console.log(`Jenis cuti "${jeniscuti}" tidak dikenal.`);
            return;
        }

        if (this.leaveQuota[jeniscuti] < jumlahhari) {
            console.log(`Kuota anda tidak cukup untuk mengajukan cuti ini (${jeniscuti}).`);
        } else {
            this.leaveQuota[jeniscuti] -= jumlahhari;
            console.log(`Pengajuan cuti ${jeniscuti} selama ${jumlahhari} hari oleh ${this.name} disetujui.`);
            console.log(`Sisa kuota cuti ${jeniscuti}: ${this.leaveQuota[jeniscuti]} hari.`);
        }
        console.log("---------------------------------");
    }
}

class CutiTahunan extends Employee {
    constructor(name) {
        super(name);
         this.leaveQuota = {tahunan: 12};
        console.log(`CutiTahunan: ${name}`);
    }
}

class CutiSakit extends Employee {
    constructor(name) {
        super(name);
        this.leaveQuota = {sakit: 2};
        console.log(`CutiSakit: ${name}`);
    }
}

class CutiMelahirkan extends Employee {
    constructor(name) {
        super(name);
        this.leaveQuota = {melahirkan: 90};
        console.log(`CutiMelahirkan: ${name}`);
    }
}

const cutitahunan = new CutiTahunan("ahmad");
const cutisakit = new CutiSakit("Hukman");
const cutimelahirkan = new CutiMelahirkan("aulia");

console.log("---------------------------------");

cutitahunan.applyLeave("tahunan", 5);
cutisakit.applyLeave("sakit", 3);
