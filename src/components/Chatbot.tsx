import {
  Bot,
  Calculator,
  ChevronRight,
  ExternalLink,
  HelpCircle,
  MessageCircle,
  MessageSquare,
  Minimize2,
  Phone,
  RotateCcw,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type ChatbotProps = {
  whatsappTarget?: string | undefined;
  onNavigate?: ((id: string) => void) | undefined;
};

type MessageAction = {
  label: string;
  type: "navigate" | "whatsapp" | "calc" | "faq";
  payload?: string | undefined;
};

type ChatMessage = {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  actions?: MessageAction[] | undefined;
  isCalculator?: boolean | undefined;
};

type QuickFaq = {
  id: string;
  label: string;
  question: string;
  icon?: string | undefined;
};

const QUICK_FAQS: QuickFaq[] = [
  {
    id: "harga",
    label: "💰 Harga Produk",
    question: "Berapa harga roster, kepala tiang, dan batu alam?",
  },
  {
    id: "hitung",
    label: "📐 Hitung Kebutuhan",
    question: "Bagaimana cara menghitung kebutuhan keping roster?",
  },
  {
    id: "ongkir",
    label: "🚚 Ongkir & Area Kirim",
    question: "Apakah melayani pengiriman ke luar kota dan berapa ongkirnya?",
  },
  {
    id: "motif",
    label: "🌸 Pilihan Motif",
    question: "Apa saja pilihan motif roster dan ukiran yang tersedia?",
  },
  {
    id: "lokasi",
    label: "📍 Lokasi Usaha",
    question: "Di mana alamat dan lokasi workshop Raja Roster?",
  },
  {
    id: "pesan",
    label: "📝 Cara Memesan",
    question: "Bagaimana cara melakukan pemesanan di Raja Roster?",
  },
];

function getBotReply(
  input: string,
  whatsappTarget: string,
): {
  text: string;
  actions?: MessageAction[] | undefined;
  isCalculator?: boolean | undefined;
} {
  const q = input.toLowerCase().trim();

  // 1. Kalkulator / Hitung kebutuhan
  if (
    q.includes("hitung") ||
    q.includes("kalkulator") ||
    q.includes("kebutuhan") ||
    q.includes("berapa butuh") ||
    q.includes("luas") ||
    q.includes("m2") ||
    q.includes("persegi")
  ) {
    return {
      text: `📐 **Rumus Menghitung Kebutuhan Roster (20x20 cm):**\n\n• **1 meter persegi (m²) = butuh 25 keping roster**.\n• Rumus: **Panjang (m) × Tinggi (m) × 25**.\n\n*Contoh Kasus:*\nDinding panjang 4 meter & tinggi 2 meter = 8 m².\nKebutuhan = 8 × 25 = **200 keping roster**.\n*(Disarankan cadangan +5% untuk potongan/sudut).*`,
      actions: [
        { label: "Buka Kalkulator Cepat", type: "calc" },
        { label: "Konsultasi Hitungan di WA", type: "whatsapp" },
      ],
      isCalculator: true,
    };
  }

  // 2. Harga / Biaya / Pricelist
  if (
    q.includes("harga") ||
    q.includes("biaya") ||
    q.includes("tarif") ||
    q.includes("rp") ||
    q.includes("pricelist") ||
    q.includes("murah") ||
    q.includes("berapa")
  ) {
    return {
      text: `💰 **Daftar Harga Resmi Raja Roster:**\n\n1. **Roster Block (20x20 cm):** Mulai **Rp 18.000 / pcs** (presisi tinggi & kokoh).\n2. **Atasan Kepala Tiang Pagar:** **Rp 150.000 - Rp 400.000** (beragam motif pilar).\n3. **Batu Alam Relief & Ukir:** **Rp 150.000 - Rp 300.000 / meter** (relief mawar, teratai, dll).\n\n*Tersedia harga khusus untuk pembelian proyek dan partai besar!*`,
      actions: [
        { label: "Lihat Produk di Halaman", type: "navigate", payload: "produk" },
        { label: "Tanya Harga Partai ke WA", type: "whatsapp" },
      ],
    };
  }

  // 3. Ukuran / Dimensi
  if (
    q.includes("ukuran") ||
    q.includes("dimensi") ||
    q.includes("size") ||
    q.includes("tebal") ||
    q.includes("panjang")
  ) {
    return {
      text: `📏 **Ukuran & Spesifikasi Produk:**\n\n• **Roster Block Standar:** Ukuran **20x20 cm** dengan ketebalan standar ~8-10 cm. Sangat presisi dan mudah dipasang untuk ventilasi maupun sekat pagar.\n• **Atasan Kepala Tiang:** Disesuaikan dengan lebar tiang pagar (tiang 30cm, 40cm, hingga 50cm).\n• **Batu Alam / Relief Dinding:** Tersedia ukuran panel per meter maupun keping dekoratif.`,
      actions: [
        { label: "Hitung Kebutuhan Keping", type: "calc" },
        { label: "Tanya Spesifikasi ke WA", type: "whatsapp" },
      ],
    };
  }

  // 4. Ongkir / Pengiriman / Antar
  if (
    q.includes("ongkir") ||
    q.includes("kirim") ||
    q.includes("antar") ||
    q.includes("pengiriman") ||
    q.includes("ekspedisi")
  ) {
    return {
      text: `🚚 **Informasi Pengiriman & Area Layanan:**\n\n• Kami melayani pengiriman untuk wilayah **Curup, Rejang Lebong, Kepahiang, Kota Bengkulu, Lubuklinggau**, dan sekitarnya.\n• Pengiriman menggunakan armada khusus Raja Roster agar barang aman sampai di lokasi tanpa resiko pecah.\n• Ongkos kirim disesuaikan dengan jarak dan jumlah pesanan (tersedia promo subsidi ongkir untuk pembelian volume tertentu).`,
      actions: [
        { label: "Cek Ongkir ke Lokasi Saya via WA", type: "whatsapp" },
      ],
    };
  }

  // 5. Lokasi / Alamat / Workshop
  if (
    q.includes("lokasi") ||
    q.includes("alamat") ||
    q.includes("curup") ||
    q.includes("bengkulu") ||
    q.includes("workshop") ||
    q.includes("toko") ||
    q.includes("tempat") ||
    q.includes("dimana")
  ) {
    return {
      text: `📍 **Lokasi Tempat Usaha Raja Roster:**\n\nKami berlokasi di **Curup, Bengkulu**.\nAnda dapat berkonsultasi secara online maupun melihat langsung sampel stok motif roster dan ornamen kepala tiang di workshop kami.`,
      actions: [
        { label: "Buka Profil Usaha", type: "navigate", payload: "tentang" },
        { label: "Minta Petunjuk Arah di WA", type: "whatsapp" },
      ],
    };
  }

  // 6. Motif / Desain / Custom / Model
  if (
    q.includes("motif") ||
    q.includes("model") ||
    q.includes("desain") ||
    q.includes("custom") ||
    q.includes("katalog") ||
    q.includes("mawar") ||
    q.includes("teratai") ||
    q.includes("relief")
  ) {
    return {
      text: `🌸 **Pilihan Motif Populer di Raja Roster:**\n\n• **Roster Block:** Minimalis Silang, Balok Kotak Modern, Bunga Bintang, Geometris.\n• **Batu Alam Relief:** Ukiran Sepasang Bunga Mawar, Teratai Air Sejuk, Bunga Kamboja Mekar, Bunga Matahari, dan Relief Perambat Pagar.\n• **Custom Ornamen:** Kami juga dapat membuat motif khusus sesuai permintaan proyek Anda!`,
      actions: [
        { label: "Lihat Galeri Foto Motif", type: "navigate", payload: "galeri" },
        { label: "Minta Foto Ready Stock di WA", type: "whatsapp" },
      ],
    };
  }

  // 7. Cara Memesan / Order
  if (
    q.includes("pesan") ||
    q.includes("beli") ||
    q.includes("order") ||
    q.includes("cara") ||
    q.includes("form")
  ) {
    return {
      text: `📝 **Langkah Mudah Pemesanan di Raja Roster:**\n\n1. Pilih motif produk yang Anda inginkan di katalog/galeri website.\n2. Tentukan jumlah kebutuhan (bisa dibantu hitung oleh tim kami).\n3. Isi **Formulir Pesanan** di bawah halaman atau langsung hubungi kami via WhatsApp.\n4. Admin mengonfirmasi stok, estimasi ongkir, dan jadwal pengiriman.`,
      actions: [
        { label: "Isi Formulir Pesanan", type: "navigate", payload: "pesan" },
        { label: "Langsung Order via WhatsApp", type: "whatsapp" },
      ],
    };
  }

  // 8. Sapaan / Greeting
  if (
    q.includes("halo") ||
    q.includes("hai") ||
    q.includes("pagi") ||
    q.includes("siang") ||
    q.includes("sore") ||
    q.includes("malam") ||
    q.includes("assalamualaikum") ||
    q.includes("hi")
  ) {
    return {
      text: `Halo! Selamat datang di **Raja Roster Curup**! 👋\n\nSaya asisten virtual yang siap membantu informasi produk, estimasi harga, cara hitung kebutuhan roster, atau menghubungkan langsung ke tim kami. Apa yang ingin Anda tanyakan?`,
      actions: [
        { label: "💰 Cek Daftar Harga", type: "faq", payload: "harga" },
        { label: "📐 Hitung Kebutuhan", type: "calc" },
        { label: "💬 Chat WhatsApp Admin", type: "whatsapp" },
      ],
    };
  }

  // 9. Admin / WhatsApp
  if (
    q.includes("admin") ||
    q.includes("whatsapp") ||
    q.includes("wa") ||
    q.includes("kontak") ||
    q.includes("nomor") ||
    q.includes("telepon")
  ) {
    return {
      text: `📱 **Hubungi Admin WhatsApp Langsung:**\n\nAdmin kami siap melayani konsultasi kebutuhan ornamen dan roster bangunan Anda dengan ramah dan responsif. Silakan klik tombol di bawah untuk langsung terhubung:`,
      actions: [
        { label: "Buka Chat WhatsApp Sekarang", type: "whatsapp" },
      ],
    };
  }

  // Fallback default
  return {
    text: `Terima kasih atas pertanyaannya! Untuk kebutuhan lebih spesifik mengenai "${input}", Anda bisa memilih topik cepat di bawah atau berkonsultasi langsung dengan admin Raja Roster:`,
    actions: [
      { label: "💰 Cek Daftar Harga", type: "faq", payload: "harga" },
      { label: "📐 Hitung Kebutuhan Keping", type: "calc" },
      { label: "💬 Hubungi WhatsApp Admin", type: "whatsapp" },
    ],
  };
}

export function Chatbot({ whatsappTarget = "", onNavigate }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);

  // Mini calculator state
  const [calcLength, setCalcLength] = useState("4");
  const [calcHeight, setCalcHeight] = useState("2");
  const [showMiniCalc, setShowMiniCalc] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const targetWa = whatsappTarget || "6287776273282";

  // Init welcome message
  useEffect(() => {
    const now = new Date().toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages([
      {
        id: "welcome-1",
        sender: "bot",
        text: `Halo! Selamat datang di **Raja Roster** (Curup, Bengkulu) 🏛️✨\n\nSaya **Raja Bot**, asisten virtual Anda. Silakan pilih topik yang sering ditanyakan di bawah atau ketik pertanyaan Anda:`,
        timestamp: now,
      },
    ]);
  }, []);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen, showMiniCalc]);

  // Handle open/close
  const toggleOpen = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (next) {
      setUnreadCount(0);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  };

  const openWhatsApp = (customText?: string) => {
    const text = encodeURIComponent(
      customText ||
        "Halo Admin Raja Roster, saya ingin konsultasi pemesanan produk roster dan ornamen bangunan. Mohon info ketersediaan stok & harga. Terima kasih!",
    );
    window.open(`https://wa.me/${targetWa}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const time = new Date().toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: time,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Bot response with natural delay
    setTimeout(() => {
      const reply = getBotReply(query, targetWa);
      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: reply.text,
        timestamp: new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        actions: reply.actions,
        isCalculator: reply.isCalculator,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);

      if (reply.isCalculator) {
        setShowMiniCalc(true);
      }
    }, 550);
  };

  const handleActionClick = (action: MessageAction) => {
    if (action.type === "whatsapp") {
      openWhatsApp();
    } else if (action.type === "navigate" && action.payload) {
      onNavigate?.(action.payload);
      if (window.innerWidth < 640) {
        setIsOpen(false);
      }
    } else if (action.type === "calc") {
      setShowMiniCalc(true);
    } else if (action.type === "faq" && action.payload) {
      const item = QUICK_FAQS.find((f) => f.id === action.payload);
      if (item) {
        handleSendMessage(item.question);
      }
    }
  };

  const handleResetChat = () => {
    const now = new Date().toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "bot",
        text: `Percakapan telah diatur ulang. Ada hal lain yang bisa Raja Bot bantu? 😊`,
        timestamp: now,
      },
    ]);
    setShowMiniCalc(false);
  };

  // Calculator computations
  const p = parseFloat(calcLength.replace(",", ".")) || 0;
  const t = parseFloat(calcHeight.replace(",", ".")) || 0;
  const luas = +(p * t).toFixed(2);
  const totalRoster = Math.ceil(luas * 25);
  const cadangan = Math.ceil(totalRoster * 0.08); // 8% cadangan
  const totalRekomendasi = totalRoster + cadangan;
  const estimasiHarga = totalRoster * 18000;

  return (
    <>
      {/* Floating Action Trigger Button */}
      <div className="fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6">
        <button
          type="button"
          onClick={toggleOpen}
          aria-label={isOpen ? "Tutup Chatbot" : "Buka Chatbot Raja Roster"}
          className="group relative flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand transition-all duration-300 hover:scale-105 hover:bg-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 sm:size-16"
        >
          {/* Subtle pulsating aura ring when closed */}
          {!isOpen && (
            <span
              className="absolute -inset-1.5 animate-ping rounded-full bg-primary/30 opacity-75"
              aria-hidden="true"
            />
          )}

          {isOpen ? (
            <X className="size-6 transition-transform duration-200 group-hover:rotate-90" />
          ) : (
            <div className="relative flex items-center justify-center">
              <MessageSquare className="size-6 sm:size-7 transition-transform group-hover:scale-110" />
              <Sparkles className="absolute -right-2 -top-2 size-3 text-amber-200 animate-pulse" />
            </div>
          )}

          {/* Unread badge indicator */}
          {!isOpen && unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground shadow-sm animate-bounce">
              1
            </span>
          )}
        </button>
      </div>

      {/* Chat Window Container */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Jendela Chatbot Raja Roster"
          className="fixed bottom-22 right-3 z-50 flex h-[580px] max-h-[82vh] w-[calc(100vw-1.5rem)] max-w-[410px] flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 sm:bottom-24 sm:right-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/60 bg-gradient-to-r from-primary/95 to-amber-800/90 px-4 py-3.5 text-primary-foreground shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative flex size-10 items-center justify-center rounded-full bg-background/20 ring-2 ring-primary-foreground/30">
                <Bot className="size-5 text-primary-foreground" />
                <span
                  className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-primary bg-emerald-400"
                  title="Online"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold tracking-tight text-primary-foreground">
                    Raja Bot
                  </h3>
                  <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[10px] font-medium leading-none text-white">
                    Virtual AI
                  </span>
                </div>
                <p className="text-xs text-primary-foreground/85">
                  Asisten Resmi Raja Roster
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                title="Mulai Ulang Percakapan"
                className="rounded-full p-1.5 text-primary-foreground/80 hover:bg-white/15 hover:text-primary-foreground transition-colors"
                aria-label="Atur ulang chat"
              >
                <RotateCcw className="size-4" />
              </button>
              <button
                type="button"
                onClick={toggleOpen}
                title="Tutup Chat"
                className="rounded-full p-1.5 text-primary-foreground/80 hover:bg-white/15 hover:text-primary-foreground transition-colors"
                aria-label="Tutup jendela chat"
              >
                <Minimize2 className="size-4" />
              </button>
            </div>
          </div>

          {/* Quick FAQ Suggestion Bar */}
          <div className="border-b border-border/40 bg-secondary/40 px-3 py-2">
            <p className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
              <Sparkles className="size-3 text-primary" /> Topik Pertanyaan Populer:
            </p>
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
              {QUICK_FAQS.map((faq) => (
                <button
                  key={faq.id}
                  type="button"
                  onClick={() => handleSendMessage(faq.question)}
                  className="whitespace-nowrap rounded-full border border-border/70 bg-card px-2.5 py-1 text-[11px] font-medium text-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  {faq.label}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 space-y-3.5 overflow-y-auto p-4 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
                    <Bot className="size-4" />
                  </div>
                )}

                <div
                  className={`flex max-w-[85%] flex-col gap-1.5 ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "rounded-tr-xs bg-primary text-primary-foreground font-medium"
                        : "rounded-tl-xs border border-border/60 bg-muted/60 text-foreground"
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-[13px]">{msg.text}</div>
                  </div>

                  {/* Message Action Chips */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {msg.actions.map((act, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleActionClick(act)}
                          className="inline-flex items-center gap-1 rounded-lg border border-primary/30 bg-primary/5 px-2.5 py-1 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                        >
                          {act.type === "whatsapp" && <Phone className="size-3" />}
                          {act.type === "calc" && <Calculator className="size-3" />}
                          {act.type === "navigate" && <ChevronRight className="size-3" />}
                          {act.type === "faq" && <HelpCircle className="size-3" />}
                          <span>{act.label}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="text-[10px] text-muted-foreground/80 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {/* Interactive Mini Calculator in chat */}
            {showMiniCalc && (
              <div className="rounded-xl border border-primary/40 bg-card p-3.5 shadow-md">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                    <Calculator className="size-4 text-primary" />
                    Kalkulator Kebutuhan Roster (20x20 cm)
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowMiniCalc(false)}
                    className="text-muted-foreground hover:text-foreground text-xs p-1"
                    title="Tutup Kalkulator"
                  >
                    <X className="size-3.5" />
                  </button>
                </div>

                <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="text-[11px] font-medium text-muted-foreground">
                      Panjang Dinding (m)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={calcLength}
                      onChange={(e) => setCalcLength(e.target.value)}
                      className="mt-1 w-full rounded-md border border-input bg-background px-2.5 py-1 text-xs focus:border-primary focus:outline-none"
                      placeholder="Contoh: 4"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-muted-foreground">
                      Tinggi Dinding (m)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={calcHeight}
                      onChange={(e) => setCalcHeight(e.target.value)}
                      className="mt-1 w-full rounded-md border border-input bg-background px-2.5 py-1 text-xs focus:border-primary focus:outline-none"
                      placeholder="Contoh: 2"
                    />
                  </div>
                </div>

                <div className="mt-3 rounded-lg bg-secondary/80 p-2.5 text-xs space-y-1">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Luas Dinding:</span>
                    <strong className="text-foreground">{luas} m²</strong>
                  </div>
                  <div className="flex justify-between font-bold text-primary text-sm pt-0.5 border-t border-border/40">
                    <span>Estimasi Roster:</span>
                    <span>{totalRoster} pcs</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>Rekomendasi (+Cadangan):</span>
                    <span className="font-semibold text-foreground">
                      {totalRekomendasi} pcs
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>Est. Biaya (@Rp18rb):</span>
                    <span className="font-semibold text-foreground">
                      Rp {estimasiHarga.toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    openWhatsApp(
                      `Halo Raja Roster, saya sudah hitung kebutuhan dinding saya (${calcLength}m x ${calcHeight}m = ${luas}m²). Butuh sekitar ${totalRoster} pcs roster. Mohon informasi total harga dan ongkir ke alamat saya. Terima kasih!`,
                    )
                  }
                  className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary py-1.5 text-xs font-semibold text-primary-foreground shadow-sm hover:bg-foreground transition-colors"
                >
                  <MessageCircle className="size-3.5" />
                  Kirim Hasil Hitungan ke WhatsApp
                </button>
              </div>
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Bot className="size-4" />
                </div>
                <div className="flex items-center gap-1 rounded-2xl rounded-tl-xs border border-border/50 bg-muted/60 px-3.5 py-2">
                  <span className="size-1.5 animate-bounce rounded-full bg-primary" />
                  <span
                    className="size-1.5 animate-bounce rounded-full bg-primary"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="size-1.5 animate-bounce rounded-full bg-primary"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Direct WhatsApp Callout Banner */}
          <div className="flex items-center justify-between border-t border-border/50 bg-secondary/30 px-3 py-1.5 text-xs text-muted-foreground">
            <span className="text-[11px]">Butuh respons admin langsung?</span>
            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
            >
              <MessageCircle className="size-3.5" />
              Chat WA Admin <ExternalLink className="size-2.5" />
            </button>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2 border-t border-border bg-card p-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pertanyaan (cth: harga, ongkir, motif)..."
              className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-all hover:bg-foreground disabled:opacity-40"
              aria-label="Kirim pesan"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
