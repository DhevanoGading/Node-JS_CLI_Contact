const yargs = require("yargs");
const { listContact, simpanContact, detailContact, deleteContact } = require("./contacts");

//Tambah Kontak
yargs
  .command({
    command: "add",
    describe: "Menambahkan kontak baru",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHP: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      simpanContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();

//List Kontak
yargs.command({
  command: "list",
  describe: "Menampilkan data kontak",
  handler() {
    listContact();
  },
});

//Detail Kontak
yargs.command({
  command: "detail",
  describe: "Menampilkan detail kontak",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});

//Hapus Kontak
yargs.command({
  command: "delete",
  describe: "Menghapus kontak",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.nama);
  },
});

yargs.parse();
