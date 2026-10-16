import { createFileRoute } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Cuboid,
  Gem,
  Images,
  Info,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Search,
  Send,
  Shapes,
  X,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/raja-roster-hero.jpg";
import rosterImage from "@/assets/product-roster.jpg";
import pillarImage from "@/assets/product-pillar.jpg";
import reliefImage from "@/assets/product-relief.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raja Roster | Curup, Bengkulu" },
      {
        name: "description",
        content:
          "Spesialis Roster Block modern minimalis, Atasan Kepala Tiang, Batu Alam ukir, dan Ornamen dekorasi pagar di Curup, Bengkulu.",
      },
      { property: "og:title", content: "Raja Roster | Curup, Bengkulu" },
      {
        property: "og:description",
        content:
          "Roster dan ornamen bangunan berkualitas untuk hunian dan proyek Anda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RajaRosterPage,
});

const navigation = [
  ["Produk", "produk"],
  ["Galeri Foto", "galeri"],
  ["Keunggulan", "keunggulan"],
  ["Tentang Kami", "tentang"],
  ["FAQ", "faq"],
] as const;

const products = [
  {
    badge: "Paling Populer",
    name: "Roster Block",
    description:
      "Roster modern minimalis presisi tinggi untuk sirkulasi udara optimal dan keindahan dinding rumah Anda.",
    meta: "Ukuran 20x20cm",
    price: "Rp 18.000",
    unit: "/pcs",
    image: rosterImage,
    alt: "Roster Block Modern Minimalis",
    caption: "Roster Block Modern Minimalis",
    selectValue: "Roster Block (20x20cm)",
  },
  {
    badge: "Ornamen Tiang",
    name: "Atasan Kepala Tiang",
    description:
      "Mahkota tiang berbahan halus dengan detail ukiran megah untuk menyempurnakan tampilan pilar pagar rumah.",
    meta: "Harga Terjangkau",
    price: "Rp 150.000 - 400.000",
    image: pillarImage,
    alt: "Atasan Kepala Tiang Pagar",
    caption: "Atasan Kepala Tiang Pagar Minimalis",
    selectValue: "Atasan Kepala Tiang Pagar",
  },
  {
    badge: "Ukiran Natural",
    name: "Batu Alam & Relief",
    description:
      "Material hiasan dinding dan pagar bermotif relief artistik yang kokoh, memberikan sentuhan alami nan mewah.",
    meta: "Harga Per Meter",
    price: "Rp 150.000 - 300.000",
    image: reliefImage,
    alt: "Ukiran Batu Alam Dinding Mawar",
    caption: "Ukiran Batu Alam Dinding Motif Mawar",
    selectValue: "Batu Alam & Ukiran Relief",
  },
];

const gallery = [
  {
    title: "Stok Roster Variasi Motif",
    label: "Roster Block",
    category: "roster",
    image: heroImage,
    alt: "Roster Block",
    caption: "Variasi Stok Roster Block Minimalis",
    position: "object-center",
  },
  {
    title: "Display Roster 20x20cm",
    label: "Roster Block",
    category: "roster",
    image: rosterImage,
    alt: "Roster Block Display",
    caption: "Display Roster Block 20x20cm",
    position: "object-center",
  },
  {
    title: "Mahkota Kepala Tiang",
    label: "Atasan Tiang",
    category: "tiang",
    image: pillarImage,
    alt: "Atasan Kepala Tiang",
    caption: "Mahkota Atasan Tiang Pagar Ukir",
    position: "object-center",
  },
  {
    title: "Relief Bunga Mawar Sepasang",
    label: "Batu Alam & Relief",
    category: "relief",
    image: reliefImage,
    alt: "Relief Bunga Mawar",
    caption: "Ukiran Sepasang Relief Motif Bunga Mawar",
    position: "object-left",
  },
  {
    title: "Panel Relief Bunga Teratai",
    label: "Batu Alam & Relief",
    category: "relief",
    image: reliefImage,
    alt: "Relief Teratai",
    caption: "Ukiran Dinding Motif Teratai Sejuk",
    position: "object-right",
  },
  {
    title: "Ukiran Relief Perambat",
    label: "Batu Alam & Relief",
    category: "relief",
    image: reliefImage,
    alt: "Relief Ukir Perambat",
    caption: "Relief Ukir Perambat Dinding Pagar",
    position: "object-center",
  },
  {
    title: "Ornamen Tempel Bunga Mekar",
    label: "Ornamen Tempel",
    category: "ornamen",
    image: reliefImage,
    alt: "Ornamen Tempel Bunga",
    caption: "Ornamen Tempel Motif Bunga Kamboja / Mekar",
    position: "object-left",
  },
  {
    title: "Ornamen Bunga Matahari",
    label: "Ornamen Tempel",
    category: "ornamen",
    image: reliefImage,
    alt: "Ornamen Bunga Matahari",
    caption: "Ornamen Tempel Motif Bunga Matahari Minimalis",
    position: "object-right",
  },
];

const advantages = [
  {
    icon: Gem,
    title: "Kualitas Presisi & Kokoh",
    description:
      "Cetakan dan bahan pilihan menghasilkan roster dan ukiran yang rapi, simetris, tahan cuaca, serta tidak mudah retak.",
  },
  {
    icon: Shapes,
    title: "Motif Variatif & Modern",
    description:
      "Memiliki banyak pilihan motif roster dan ornamen bunga artistik yang fleksibel disesuaikan dengan konsep rumah Anda.",
  },
  {
    icon: MessageCircle,
    title: "Layanan Santai & Sopan",
    description:
      "Konsultasikan kebutuhan jumlah dan motif bangunan Anda secara ramah, responsif, dan tanpa rasa segan melalui WhatsApp.",
  },
];

const faqs = [
  [
    "Berapa ukuran standar Roster Block yang dijual?",
    "Roster Block unggulan kami berukuran standar 20x20 cm. Ukuran ini ideal dan sangat fleksibel dipasang pada dinding, pagar, maupun fasad rumah minimalis modern.",
  ],
  [
    "Berapa kisaran harga produk di Raja Roster?",
    "Harga Roster Block mulai dari Rp 18.000/pcs, Atasan Kepala Tiang Pagar antara Rp 150.000 - Rp 400.000, serta Batu Alam ukir antara Rp 150.000 - Rp 300.000 per meter tergantung motif.",
  ],
  [
    "Bagaimana cara memesan atau berkonsultasi?",
    "Anda dapat mengisi formulir pesanan di bawah ini atau langsung mengklik tombol WhatsApp untuk terhubung dengan kami. Tim kami akan membantu menghitungkan kebutuhan keping roster atau ornamen Anda.",
  ],
  [
    "Di mana lokasi area layanan utama Raja Roster?",
    "Layanan utama dan lokasi tempat usaha kami berada di Curup, Bengkulu. Kami melayani pemesanan untuk wilayah Curup dan area sekitarnya.",
  ],
  [
    "Apakah tersedia ornamen motif kustom?",
    "Ya, kami menyediakan beragam motif pilihan seperti Bunga Mawar, Teratai, Kamboja, hingga Matahari. Hubungi kami di WhatsApp untuk menanyakan motif terkini yang ready stock.",
  ],
] as const;

type LightboxImage = { src: string; alt: string; caption: string };

const SCRIPT_URL = import.meta.env["APP_SCRIPT_URL"]
const WHATSAPP_TARGET = import.meta.env["WHATSAPP_TARGET"]

async function sendToSheetAndRedirect(
  nama: string,
  whatsapp: string,
  product: string,
  quantity: string,
  pesan: string,
) {
  const payload = { nama, whatsapp, product, quantity, pesan };

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Gagal simpan ke sheet:", error);
  } finally {
    const text = encodeURIComponent(`Halo, saya ${nama}. ${pesan}`);
    const whatsappUrl = `https://wa.me/${WHATSAPP_TARGET}?text=${text}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }
}

function RajaRosterPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const openInstagram = async () => {
    const message =
      "Halo Raja Roster, saya ingin memesan atau berkonsultasi mengenai produk Raja Roster. Mohon informasi stok, harga, dan pengiriman ke area Curup. Terima kasih!";
    try {
      await navigator.clipboard.writeText(message);
      setNotice(
        "Pesan otomatis telah disalin. Tempelkan di DM Instagram Raja Roster.",
      );
    } catch {
      setNotice("Silakan kirim pesan melalui DM Instagram Raja Roster.");
    }
    window.open(
      "https://www.instagram.com/raja_roster_curup/",
      "_blank",
      "noopener,noreferrer",
    );
    window.setTimeout(() => setNotice(""), 5000);
  };

  const chooseProduct = (value: string) => {
    setSelectedProduct(value);
    scrollTo("pesan");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        scrolled={scrolled}
        open={mobileOpen}
        onToggle={() => setMobileOpen((value) => !value)}
        onNavigate={scrollTo}
      />
      <main>
        <Hero onInstagram={openInstagram} onNavigate={scrollTo} />
        <ProductsSection onPreview={setLightbox} onOrder={chooseProduct} />
        <GallerySection
          filter={galleryFilter}
          onFilter={setGalleryFilter}
          onPreview={setLightbox}
        />
        <AdvantagesSection />
        <AboutSection onPreview={setLightbox} />
        <FaqSection />
        <OrderSection
          selectedProduct={selectedProduct}
          onProductChange={setSelectedProduct}
        />
      </main>
      <Footer onNavigate={scrollTo} onInstagram={openInstagram} />
      {lightbox ? (
        <ImageLightbox
          image={lightbox}
          onClose={() => setLightbox(null)}
          onAsk={() => {
            setLightbox(null);
            scrollTo("pesan");
          }}
        />
      ) : null}
      {notice ? (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-[70] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-start gap-3 rounded-lg bg-surface-inverse px-4 py-3 text-sm text-background shadow-xl"
        >
          <CircleCheck className="mt-0.5 size-5 shrink-0 text-accent" />
          <span>{notice}</span>
        </div>
      ) : null}
    </div>
  );
}

function Navbar({
  scrolled,
  open,
  onToggle,
  onNavigate,
}: {
  scrolled: boolean;
  open: boolean;
  onToggle: () => void;
  onNavigate: (id: string) => void;
}) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-secondary/90 backdrop-blur-md transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate("beranda")}
          className="flex items-center gap-2 font-display text-2xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Cuboid className="size-7 text-primary" /> Raja Roster
        </button>
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Navigasi utama"
        >
          {navigation.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => onNavigate(id)}
              className="text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {label}
            </button>
          ))}
        </nav>
        <Button
          className="hidden md:inline-flex"
          onClick={() => onNavigate("pesan")}
        >
          Pesan Sekarang
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onToggle}
          aria-expanded={open}
          aria-label="Buka menu navigasi"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open ? (
        <nav
          className="border-t border-border bg-secondary px-4 py-4 shadow-lg md:hidden"
          aria-label="Navigasi seluler"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navigation.map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => onNavigate(id)}
                className="min-h-11 rounded-md px-3 text-left font-medium hover:bg-accent/30"
              >
                {label}
              </button>
            ))}
            <Button className="mt-3" onClick={() => onNavigate("pesan")}>
              Pesan Sekarang
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function Hero({
  onInstagram,
  onNavigate,
}: {
  onInstagram: () => void;
  onNavigate: (id: string) => void;
}) {
  return (
    <section
      id="beranda"
      className="overflow-hidden bg-background px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <span className="inline-flex rounded-full bg-accent/35 px-4 py-2 text-xs font-bold uppercase tracking-wider">
            Spesialis Roster & Ornamen Bangunan
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Solusi Elegan untuk Eksterior Bangunan Anda
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:mx-0">
            Sempurnakan keindahan rumah dan proyek konstruksi Anda dengan
            koleksi Roster Block modern minimalis, Atasan Kepala Tiang, serta
            Ukiran Batu Alam premium dari Raja Roster Curup.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Button size="large" onClick={onInstagram}>
              <Instagram className="size-5" /> Pesan via Instagram
            </Button>
            <Button
              size="large"
              variant="outline"
              onClick={() => onNavigate("produk")}
            >
              Lihat Produk
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-card bg-secondary shadow-2xl">
            <img
              src={heroImage}
              alt="Susunan Roster Block Minimalis Raja Roster"
              width={1408}
              height={1056}
              fetchPriority="high"
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 rounded-xl bg-card/90 p-4 shadow-lg backdrop-blur-sm">
              <div>
                <p className="text-xs font-bold uppercase text-muted-foreground">
                  Produk Unggulan
                </p>
                <p className="text-sm font-bold">
                  Variasi Motif Roster 20x20cm
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                Ready Stock
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
      {description ? (
        <p className="mt-6 leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ProductsSection({
  onPreview,
  onOrder,
}: {
  onPreview: (image: LightboxImage) => void;
  onOrder: (value: string) => void;
}) {
  return (
    <section id="produk" className="bg-card px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Produk Unggulan Kami"
          description="Material konstruksi pilihan untuk mempercantik dan menguatkan bangunan Anda, dari hunian pribadi hingga proyek properti komersial."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() =>
                  onPreview({
                    src: product.image,
                    alt: product.alt,
                    caption: product.caption,
                  })
                }
                className="relative aspect-square overflow-hidden bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Perbesar ${product.name}`}
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center gap-2 bg-surface-inverse/40 font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
                  <Search className="size-5" /> Perbesar
                </span>
              </button>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {product.badge}
                </span>
                <h3 className="mt-1 text-xl font-bold">{product.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-6 flex items-end justify-between gap-3 border-t border-border pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {product.meta}
                    </p>
                    <p className="text-lg font-bold text-primary">
                      {product.price}{" "}
                      {product.unit ? (
                        <span className="text-xs font-normal text-muted-foreground">
                          {product.unit}
                        </span>
                      ) : null}
                    </p>
                  </div>
                  <Button
                    variant="compact"
                    onClick={() => onOrder(product.selectValue)}
                  >
                    Pesan
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 flex max-w-2xl items-start gap-3 rounded-xl border border-border bg-secondary/50 p-4 text-sm font-medium">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" />
          <p>
            Tersedia juga varian Ornamen tempelan, Hiasan Dinding Pagar, dan
            Mahkota Tiang kustom.
          </p>
        </div>
      </div>
    </section>
  );
}

const filters = [
  ["all", "Semua Foto"],
  ["roster", "Roster Block"],
  ["tiang", "Kepala Tiang"],
  ["relief", "Batu Alam & Relief"],
  ["ornamen", "Ornamen Tempel"],
] as const;

function GallerySection({
  filter,
  onFilter,
  onPreview,
}: {
  filter: string;
  onFilter: (value: string) => void;
  onPreview: (image: LightboxImage) => void;
}) {
  const visible =
    filter === "all"
      ? gallery
      : gallery.filter((item) => item.category === filter);
  return (
    <section id="galeri" className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Real Picture Produksi"
          title="Galeri Produk & Hasil Ukiran"
          description="Klik foto untuk memperbesar dan melihat secara detail kualitas pengerjaan material Raja Roster."
        />
        <div
          className="mb-10 flex flex-wrap justify-center gap-2 md:gap-3"
          role="group"
          aria-label="Filter galeri"
        >
          {filters.map(([value, label]) => (
            <Button
              key={value}
              variant={filter === value ? "compact" : "outline"}
              className="min-h-10 px-5 py-2 text-sm"
              onClick={() => onFilter(value)}
              aria-pressed={filter === value}
            >
              {label}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {visible.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() =>
                onPreview({
                  src: item.image,
                  alt: item.alt,
                  caption: item.caption,
                })
              }
              className="group overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className={`size-full object-cover ${item.position} transition-transform duration-500 group-hover:scale-110`}
                />
              </div>
              <div className="p-3">
                <p className="truncate text-xs font-bold">{item.title}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {item.label}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section
      id="keunggulan"
      className="bg-secondary px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Kenapa Memilih Kami?"
          description="Komitmen kami untuk memberikan produk dan pelayanan terbaik bagi setiap hunian di Curup dan sekitarnya."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {advantages.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className={`border-b-4 border-primary bg-card p-8 text-center shadow-sm transition hover:shadow-md ${index === 1 ? "md:-translate-y-2" : ""}`}
            >
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-background text-primary shadow-inner">
                <Icon className="size-7" />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection({
  onPreview,
}: {
  onPreview: (image: LightboxImage) => void;
}) {
  return (
    <section id="tentang" className="bg-card px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-12">
        <button
          type="button"
          onClick={() =>
            onPreview({
              src: reliefImage,
              alt: "Tentang Raja Roster",
              caption: "Seni Ukir Batu Alam Raja Roster",
            })
          }
          className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-background shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:col-span-5"
        >
          <img
            src={reliefImage}
            alt="Tentang Raja Roster"
            loading="lazy"
            width={1024}
            height={1024}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-lg bg-surface-inverse/75 p-3 text-left text-xs text-background backdrop-blur-sm">
            <span className="flex items-center gap-1">
              <MapPin className="size-4 text-accent" /> Workshop Curup, Bengkulu
            </span>
            <Search className="size-4" />
          </span>
        </button>
        <div className="md:col-span-7">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Penyedia Terpercaya
          </p>
          <h2 className="mt-1 text-3xl font-bold md:text-4xl">
            Tentang Raja Roster
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Berlokasi di{" "}
              <strong className="text-foreground">Curup, Bengkulu</strong>, Raja
              Roster merupakan penyedia spesialis Roster Block modern minimalis,
              Atasan Kepala Tiang Pagar, Batu Alam ukir, serta berbagai jenis
              Ornamen hiasan dinding pagar.
            </p>
            <p>
              Kami memahami bahwa membangun rumah maupun proyek konstruksi
              membutuhkan sentuhan detail estetik yang kuat dan tahan lama.
              Setiap produk kami diproduksi dengan ketelitian untuk memberikan
              hasil akhir visual yang elegan pada pagar dan dinding bangunan
              Anda.
            </p>
            <blockquote className="rounded-xl border-l-4 border-primary bg-background p-4 text-sm italic text-foreground">
              &quot;Kami siap melayani kebutuhan material konstruksi Anda dengan
              komunikasi yang santai, ramah, dan profesional.&quot;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Pertanyaan Umum (FAQ)" />
        <div className="space-y-4">
          {faqs.map(([question, answer], index) => {
            const expanded = open === index;
            return (
              <div
                key={question}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : index)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold transition-colors hover:bg-secondary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                  aria-expanded={expanded}
                  aria-controls={`faq-${index}`}
                >
                  <span>{question}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-primary transition-transform ${expanded ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id={`faq-${index}`}
                  className={`grid transition-all duration-300 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-sm font-semibold">
      <span className="mb-2 block">{label}</span>
      {children}
    </label>
  );
}

const fieldClass =
  "min-h-12 w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";

function OrderSection({
  selectedProduct,
  onProductChange,
}: {
  selectedProduct: string;
  onProductChange: (value: string) => void;
}) {
  const [status, setStatus] = useState<"default" | "error" | "success">(
    "default",
  );
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nama = String(form.get("nama") ?? "").trim();
    const product = String(form.get("produk") ?? "").trim();
    const quantity = String(form.get("jumlah") ?? "").trim();
    const whatsapp = String(form.get("whatsapp") ?? "").trim();
    const catatan = String(form.get("catatan") ?? "").trim();

    if (!nama || !product || !quantity || !whatsapp) {
      setStatus("error");
      return;
    }

    const pesan = catatan ? `Catatan: ${catatan}` : "";

    setStatus("success");
    await sendToSheetAndRedirect(nama, whatsapp, product, quantity, pesan);
  };
  return (
    <section id="pesan" className="bg-card px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl bg-secondary p-6 shadow-xl md:p-12">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Formulir Pesanan Cepat</h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Silakan isi formulir ini, data akan otomatis terformat untuk dikirim
            langsung via WhatsApp.
          </p>
        </div>
        <form
          className="space-y-6 rounded-2xl bg-card p-6 shadow-sm md:p-8"
          onSubmit={onSubmit}
          noValidate
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Nama Lengkap *">
              <input
                name="nama"
                className={fieldClass}
                placeholder="Contoh: Pak Herman"
              />
            </Field>
            <Field label="Nomor WhatsApp *">
              <input
                name="whatsapp"
                type="tel"
                className={fieldClass}
                placeholder="Contoh: 0812-3456-7890"
              />
            </Field>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Produk yang Diminati *">
              <select
                name="produk"
                value={selectedProduct}
                onChange={(e) => onProductChange(e.target.value)}
                className={fieldClass}
              >
                <option value="" disabled>
                  Pilih Jenis Produk...
                </option>
                <option>Roster Block (20x20cm)</option>
                <option>Atasan Kepala Tiang Pagar</option>
                <option>Batu Alam & Ukiran Relief</option>
                <option>Ornamen Tempelan Dinding / Pagar</option>
                <option>Lainnya / Diskusi Jumlah</option>
              </select>
            </Field>
            <Field label="Perkiraan Jumlah Kebutuhan *">
              <input
                name="jumlah"
                className={fieldClass}
                placeholder="Contoh: 150 pcs roster / 5 meter batu alam"
              />
            </Field>
          </div>
          <Field label="Catatan Tambahan / Alamat Pengiriman">
            <textarea
              name="catatan"
              rows={3}
              className={`${fieldClass} resize-none`}
              placeholder="Tuliskan alamat di Curup atau detail motif yang Anda inginkan..."
            />
          </Field>
          <Button type="submit" className="w-full rounded-xl py-4">
            <Send className="size-5" /> Kirim Pesanan via WhatsApp
          </Button>
          <p
            role="status"
            className={`text-center text-xs ${status === "error" ? "font-bold text-destructive" : status === "success" ? "font-bold text-primary" : "text-muted-foreground"}`}
          >
            {status === "error"
              ? "⚠️ Mohon isi Nama, Produk, dan Jumlah kebutuhan Anda!"
              : status === "success"
                ? "Pesan Telah Dikirim, Whatsapp Akan Terbuka Otomatis untuk mengirimkan pesan."
                : "*Menekan tombol di atas akan membuka aplikasi WhatsApp dengan pesan terformat."}
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer({
  onNavigate,
  onInstagram,
}: {
  onNavigate: (id: string) => void;
  onInstagram: () => void;
}) {
  const footerNav = [
    ["Beranda Utama", "beranda"],
    ["Produk Unggulan", "produk"],
    ["Galeri Foto Produksi", "galeri"],
    ["Keunggulan", "keunggulan"],
    ["Pertanyaan Umun (FAQ)", "faq"],
  ] as const;
  return (
    <footer className="bg-surface-inverse px-4 pb-8 pt-16 text-background sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <button
              type="button"
              onClick={() => onNavigate("beranda")}
              className="flex items-center gap-2 font-display text-2xl font-bold"
            >
              <Cuboid className="size-7 text-accent" /> Raja Roster
            </button>
            <p className="mt-6 text-sm leading-relaxed text-footer-muted">
              Spesialis Roster Block modern minimalis, Atasan Kepala Tiang, Batu
              Alam ukir, dan Ornamen dekorasi pagar bermutu tinggi di Curup,
              Bengkulu.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                variant="icon"
                size="icon"
                onClick={onInstagram}
                aria-label="Instagram Raja Roster"
              >
                <Instagram />
              </Button>
              <Button
                variant="icon"
                size="icon"
                aria-label="WhatsApp Raja Roster"
              >
                <MessageCircle />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="inline-block border-b border-background/20 pb-2 font-sans text-lg font-bold">
              Menu Halaman
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-footer-muted">
              {footerNav.map(([label, id]) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(id)}
                    className="flex items-center gap-2 hover:text-accent"
                  >
                    <ChevronRight className="size-3" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="inline-block border-b border-background/20 pb-2 font-sans text-lg font-bold">
              Hubungi Kami
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-footer-muted">
              <li className="flex gap-3">
                <MapPin className="size-5 shrink-0 text-accent" /> Curup,
                Bengkulu, Indonesia
              </li>
              <li className="flex gap-3">
                <MessageCircle className="size-5 shrink-0 text-accent" />{" "}
                WhatsApp: 08xx (Nomor WA Anda)
              </li>
              <li className="flex gap-3">
                <Instagram className="size-5 shrink-0 text-accent" /> Instagram:
                @raja_roster_curup
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-background/15 pt-8 text-center text-xs text-footer-muted">
          © 2026 Raja Roster - Curup, Bengkulu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function ImageLightbox({
  image,
  onClose,
  onAsk,
}: {
  image: LightboxImage;
  onClose: () => void;
  onAsk: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-surface-inverse/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="relative flex max-h-[75vh] items-center justify-center bg-surface-inverse">
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[75vh] w-auto object-contain"
          />
          <Button
            ref={closeRef}
            variant="icon"
            size="icon"
            className="absolute right-3 top-3 bg-surface-inverse/70"
            onClick={onClose}
            aria-label="Tutup pratinjau gambar"
          >
            <X />
          </Button>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-border bg-background p-4">
          <p className="text-sm font-bold md:text-base">{image.caption}</p>
          <Button variant="compact" onClick={onAsk}>
            Tanya Produk Ini
          </Button>
        </div>
      </div>
    </div>
  );
}
