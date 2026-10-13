# WEB RAJA ROSTER

Website landing page dan lead generation untuk bisnis Raja Roster, penyedia produk roster, atap kepala tiang, batu alam ukir, dan ornamen dekorasi pagar di Curup, Bengkulu.

Project ini dibuat sebagai bentuk final project dalam pelatihan BBPVP Bekasi dengan fokus pada pemanfaatan tools generative AI dalam proses desain, pengembangan, dan iterasi produk digital.

## Pengantar

Raja Roster adalah brand yang bergerak di bidang material bangunan dan dekorasi eksterior. Website ini dibuat untuk memperkenalkan produk secara profesional, menampilkan galeri visual, menjelaskan keunggulan produk, serta memudahkan calon customer untuk melakukan pemesanan melalui WhatsApp.

Tujuan utama dari website ini antara lain:

- Menampilkan produk unggulan secara lebih menarik dan terstruktur
- Meningkatkan kepercayaan pelanggan melalui galeri dan konten visual produk
- Mempermudah proses kontak dan pemesanan
- Menjadi contoh penerapan AI-assisted development dalam pembuatan website bisnis yang siap dipakai

## Deskripsi Proyek

Website ini merupakan landing page single-page yang didesain modern, bersih, dan fokus pada conversion. User dapat:

- melihat produk unggulan
- membuka galeri foto produk
- membaca keunggulan perusahaan
- mempelajari profil usaha
- membaca FAQ
- mengisi formulir pesanan cepat
- langsung diarahkan ke WhatsApp untuk melanjutkan komunikasi dan transaksi

## Tech Stack

- React 19
- TypeScript
- Vite
- TanStack Router
- TanStack Start
- Tailwind CSS
- shadcn-style UI component patterns
- Lucide React icon set
- Vitest + Testing Library
- ESLint + Prettier
- Google Apps Script (opsional untuk menyimpan data order ke Google Sheets)

## Requirement

Sebelum menjalankan project, pastikan perangkat Anda sudah memiliki:

- Node.js v18+
- npm atau package manager yang kompatibel
- Browser modern seperti Chrome, Edge, atau Firefox
- Koneksi internet untuk akses asset dan integrasi WhatsApp/Apps Script

## Struktur Project

```bash
raja-roster/
├── public/
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   └── ui/
│   ├── hooks/
│   ├── lib/
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   └── README.md
│   ├── test/
│   ├── router.tsx
│   ├── routeTree.gen.ts
│   ├── server.ts
│   ├── start.ts
│   ├── styles.css
│   └── ...
├── AGENTS.md
├── components.json
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── README.md
└── ...
```

### Penjelasan singkat struktur utama

- `src/routes/index.tsx` : halaman utama website dan seluruh komponen landing page
- `src/components/ui/` : komponen desain UI reusable
- `src/assets/` : file gambar produk dan hero section
- `src/styles.css` : styling global dan token tema visual
- `src/test/` : uji routing dasar project
- `package.json` : konfigurasi project, dependency, dan script

## Cara Instalasi

1. Clone repository

```bash
git clone <url-repository>
cd raja-roster
```

2. Install dependency

```bash
npm install
```

3. Jalankan project di mode development

```bash
npm run dev
```

4. Buka browser dan akses URL yang muncul, biasanya:

```bash
http://localhost:3000
```

## Cara Menjalankan Aplikasi

### Development

```bash
npm run dev
```

### Build production

```bash
npm run build
```

### Preview hasil build

```bash
npm run preview
```

### Test

```bash
npm test
```

### Lint

```bash
npm run lint
```

## Cara Kerja Website

Website ini berjalan dengan pola single-page application (SPA) yang dibagi menjadi beberapa section utama:

1. Hero section
   - menampilkan brand dan ajakan utama
2. Produk unggulan
   - menampilkan katalog produk seperti roster block, atasan kepala tiang, dan batu alam relief
3. Galeri foto
   - menampilkan hasil kerja dengan filter kategori
4. Keunggulan
   - menjelaskan alasan memilih Raja Roster
5. Tentang Kami
   - menjelaskan profil dan lokasi usaha
6. FAQ
   - menjawab pertanyaan umum pelanggan
7. Formulir Pesanan
   - customer mengisi data nama, WhatsApp, produk, jumlah, dan catatan
8. Integrasi WhatsApp dan Google Sheets
   - data order dikirim ke Apps Script, lalu user diarahkan ke WhatsApp untuk melanjutkan komunikasi dan transaksi

## Integrasi Form Pesanan

Formulir pemesanan pada website mengirim data ke Apps Script dan lalu membuka WhatsApp di tab baru.

Konfigurasi utama berada di file:

```ts
src / routes / index.tsx;
```

Isi yang perlu diatur:

```ts
const SCRIPT_URL = "PASTE_URL_WEB_APP_APPS_SCRIPT_DI_SINI";
const WHATSAPP_TARGET = "6281234567890";
```

Penjelasannya:

- `SCRIPT_URL` : URL endpoint Google Apps Script untuk menyimpan data order ke Google Sheets
- `WHATSAPP_TARGET` : nomor tujuan WhatsApp yang menerima pesanan pelanggan

Flow kerja order:

```text
Customer isi form -> data dikirim ke Apps Script -> page membuka WhatsApp di tab baru -> customer lanjutkan komunikasi
```

## Fitur Unggulan

- Landing page modern dan responsif
- Navigasi antar section
- Galeri produk dengan filter kategori
- Lightbox preview gambar
- Form order cepat
- Integrasi dengan WhatsApp
- Desain yang siap dipakai untuk promosi bisnis lokal

## Kegunaan Project

Project ini tidak hanya digunakan sebagai website promosi, tetapi juga sebagai bukti implementasi penggunaan AI dalam pembuatan produk digital yang relevan dan bermanfaat. Dalam konteks BBPVP Bekasi, project ini menunjukkan bagaimana AI dapat membantu:

- merancang struktur website
- menulis konten produk dan deskripsi brand
- menghasilkan layout dan komponen UI
- mempercepat prototyping
- mempermudah iterasi desain dan pengembangan

## Catatan Pengembangan

Project ini masih bisa dikembangkan lebih lanjut, seperti:

- menambahkan katalog produk yang lebih lengkap
- menambah testimoni pelanggan
- integrasi ke database real-time
- menambahkan admin panel untuk data order
- integrasi dengan WhatsApp Business API atau CRM

## Kesimpulan

WEB RAJA ROSTER adalah project landing page bisnis yang siap digunakan untuk promosi produk material bangunan dan dekorasi eksterior. Dengan fokus pada brand, visual, dan lead conversion, website ini dirancang agar mudah dipahami, cepat diakses, dan efektif dalam mendorong calon customer untuk memesan produk.

Project ini juga menjadi contoh nyata bagaimana tools generative AI dapat dipakai untuk mempercepat proses pembuatan produk digital yang profesional, rapi, dan siap digunakan dalam dunia kerja nyata.

---

© 2026 Raja Roster • Curup, Bengkulu
