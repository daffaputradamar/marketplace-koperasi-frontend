import { Produk } from "../models/produk";

export const PRODUK_ITEMS: Produk[] = [
  {
    id: 1,
    nama: "Pensil",
    keterangan: "Ini Pensil bisa dibuat untuk menulis",
    foto: "assets/images/produk/pensil.jpg",
    harga: 10000,
    berat: 10,
    satuan: "gram",
    id_kategori: 3
  },
  {
    id: 2,
    nama: "Pensil Mekanik",
    keterangan: "Ini Pensil bisa dibuat untuk menulis",
    foto: "assets/images/produk/pensil.jpg",
    harga: 10000,
    berat: 10,
    satuan: "gram",
    id_kategori: 3
  },
  {
    id: 3,
    nama: "Baju Akatsuki",
    keterangan: "Pakai baju ini biar keliahatan edgy",
    foto: "assets/images/produk/baju.jpg",
    harga: 80000,
    berat: 20,
    satuan: "gram",
    id_kategori: 1
  }
];
