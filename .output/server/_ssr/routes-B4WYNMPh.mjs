import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as MessageCircle, c as Instagram, d as Cuboid, f as CircleCheck, i as Search, l as Info, m as ChevronDown, n as Shapes, o as Menu, p as ChevronRight, r as Send, s as MapPin, t as X, u as Gem } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B4WYNMPh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			primary: "rounded-full bg-primary px-7 py-3 text-primary-foreground shadow-brand hover:bg-foreground hover:-translate-y-0.5",
			outline: "rounded-full border-2 border-border-strong bg-transparent px-7 py-3 text-foreground hover:bg-secondary",
			compact: "min-h-9 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground shadow-sm hover:bg-foreground",
			ghost: "rounded-md px-3 text-foreground hover:bg-secondary",
			icon: "size-11 rounded-full bg-surface-inverse/15 p-0 text-background hover:bg-primary"
		},
		size: {
			default: "text-base",
			large: "min-h-14 px-8 py-4 text-lg",
			icon: "size-11 p-0"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
var Button = (0, import_react.forwardRef)(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		ref,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
});
Button.displayName = "Button";
var raja_roster_hero_default = "/assets/raja-roster-hero-Bt79cIOn.jpg";
var product_roster_default = "/assets/product-roster-D1pIqL-q.jpg";
var product_pillar_default = "/assets/product-pillar-DkglNSeF.jpg";
var product_relief_default = "/assets/product-relief-78WxsBph.jpg";
var navigation = [
	["Produk", "produk"],
	["Galeri Foto", "galeri"],
	["Keunggulan", "keunggulan"],
	["Tentang Kami", "tentang"],
	["FAQ", "faq"]
];
var products = [
	{
		badge: "Paling Populer",
		name: "Roster Block",
		description: "Roster modern minimalis presisi tinggi untuk sirkulasi udara optimal dan keindahan dinding rumah Anda.",
		meta: "Ukuran 20x20cm",
		price: "Rp 18.000",
		unit: "/pcs",
		image: product_roster_default,
		alt: "Roster Block Modern Minimalis",
		caption: "Roster Block Modern Minimalis",
		selectValue: "Roster Block (20x20cm)"
	},
	{
		badge: "Ornamen Tiang",
		name: "Atasan Kepala Tiang",
		description: "Mahkota tiang berbahan halus dengan detail ukiran megah untuk menyempurnakan tampilan pilar pagar rumah.",
		meta: "Harga Terjangkau",
		price: "Rp 150.000 - 400.000",
		image: product_pillar_default,
		alt: "Atasan Kepala Tiang Pagar",
		caption: "Atasan Kepala Tiang Pagar Minimalis",
		selectValue: "Atasan Kepala Tiang Pagar"
	},
	{
		badge: "Ukiran Natural",
		name: "Batu Alam & Relief",
		description: "Material hiasan dinding dan pagar bermotif relief artistik yang kokoh, memberikan sentuhan alami nan mewah.",
		meta: "Harga Per Meter",
		price: "Rp 150.000 - 300.000",
		image: product_relief_default,
		alt: "Ukiran Batu Alam Dinding Mawar",
		caption: "Ukiran Batu Alam Dinding Motif Mawar",
		selectValue: "Batu Alam & Ukiran Relief"
	}
];
var gallery = [
	{
		title: "Stok Roster Variasi Motif",
		label: "Roster Block",
		category: "roster",
		image: raja_roster_hero_default,
		alt: "Roster Block",
		caption: "Variasi Stok Roster Block Minimalis",
		position: "object-center"
	},
	{
		title: "Display Roster 20x20cm",
		label: "Roster Block",
		category: "roster",
		image: product_roster_default,
		alt: "Roster Block Display",
		caption: "Display Roster Block 20x20cm",
		position: "object-center"
	},
	{
		title: "Mahkota Kepala Tiang",
		label: "Atasan Tiang",
		category: "tiang",
		image: product_pillar_default,
		alt: "Atasan Kepala Tiang",
		caption: "Mahkota Atasan Tiang Pagar Ukir",
		position: "object-center"
	},
	{
		title: "Relief Bunga Mawar Sepasang",
		label: "Batu Alam & Relief",
		category: "relief",
		image: product_relief_default,
		alt: "Relief Bunga Mawar",
		caption: "Ukiran Sepasang Relief Motif Bunga Mawar",
		position: "object-left"
	},
	{
		title: "Panel Relief Bunga Teratai",
		label: "Batu Alam & Relief",
		category: "relief",
		image: product_relief_default,
		alt: "Relief Teratai",
		caption: "Ukiran Dinding Motif Teratai Sejuk",
		position: "object-right"
	},
	{
		title: "Ukiran Relief Perambat",
		label: "Batu Alam & Relief",
		category: "relief",
		image: product_relief_default,
		alt: "Relief Ukir Perambat",
		caption: "Relief Ukir Perambat Dinding Pagar",
		position: "object-center"
	},
	{
		title: "Ornamen Tempel Bunga Mekar",
		label: "Ornamen Tempel",
		category: "ornamen",
		image: product_relief_default,
		alt: "Ornamen Tempel Bunga",
		caption: "Ornamen Tempel Motif Bunga Kamboja / Mekar",
		position: "object-left"
	},
	{
		title: "Ornamen Bunga Matahari",
		label: "Ornamen Tempel",
		category: "ornamen",
		image: product_relief_default,
		alt: "Ornamen Bunga Matahari",
		caption: "Ornamen Tempel Motif Bunga Matahari Minimalis",
		position: "object-right"
	}
];
var advantages = [
	{
		icon: Gem,
		title: "Kualitas Presisi & Kokoh",
		description: "Cetakan dan bahan pilihan menghasilkan roster dan ukiran yang rapi, simetris, tahan cuaca, serta tidak mudah retak."
	},
	{
		icon: Shapes,
		title: "Motif Variatif & Modern",
		description: "Memiliki banyak pilihan motif roster dan ornamen bunga artistik yang fleksibel disesuaikan dengan konsep rumah Anda."
	},
	{
		icon: MessageCircle,
		title: "Layanan Santai & Sopan",
		description: "Konsultasikan kebutuhan jumlah dan motif bangunan Anda secara ramah, responsif, dan tanpa rasa segan melalui WhatsApp."
	}
];
var faqs = [
	["Berapa ukuran standar Roster Block yang dijual?", "Roster Block unggulan kami berukuran standar 20x20 cm. Ukuran ini ideal dan sangat fleksibel dipasang pada dinding, pagar, maupun fasad rumah minimalis modern."],
	["Berapa kisaran harga produk di Raja Roster?", "Harga Roster Block mulai dari Rp 18.000/pcs, Atasan Kepala Tiang Pagar antara Rp 150.000 - Rp 400.000, serta Batu Alam ukir antara Rp 150.000 - Rp 300.000 per meter tergantung motif."],
	["Bagaimana cara memesan atau berkonsultasi?", "Anda dapat mengisi formulir pesanan di bawah ini atau langsung mengklik tombol WhatsApp untuk terhubung dengan kami. Tim kami akan membantu menghitungkan kebutuhan keping roster atau ornamen Anda."],
	["Di mana lokasi area layanan utama Raja Roster?", "Layanan utama dan lokasi tempat usaha kami berada di Curup, Bengkulu. Kami melayani pemesanan untuk wilayah Curup dan area sekitarnya."],
	["Apakah tersedia ornamen motif kustom?", "Ya, kami menyediakan beragam motif pilihan seperti Bunga Mawar, Teratai, Kamboja, hingga Matahari. Hubungi kami di WhatsApp untuk menanyakan motif terkini yang ready stock."]
];
function RajaRosterPage() {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [galleryFilter, setGalleryFilter] = (0, import_react.useState)("all");
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const [selectedProduct, setSelectedProduct] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const scrollTo = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		setMobileOpen(false);
	};
	const openInstagram = async () => {
		const message = "Halo Raja Roster, saya ingin memesan atau berkonsultasi mengenai produk Raja Roster. Mohon informasi stok, harga, dan pengiriman ke area Curup. Terima kasih!";
		try {
			await navigator.clipboard.writeText(message);
			setNotice("Pesan otomatis telah disalin. Tempelkan di DM Instagram Raja Roster.");
		} catch {
			setNotice("Silakan kirim pesan melalui DM Instagram Raja Roster.");
		}
		window.open("https://www.instagram.com/raja_roster_curup/", "_blank", "noopener,noreferrer");
		window.setTimeout(() => setNotice(""), 5e3);
	};
	const chooseProduct = (value) => {
		setSelectedProduct(value);
		scrollTo("pesan");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {
				scrolled,
				open: mobileOpen,
				onToggle: () => setMobileOpen((value) => !value),
				onNavigate: scrollTo
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
					onInstagram: openInstagram,
					onNavigate: scrollTo
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsSection, {
					onPreview: setLightbox,
					onOrder: chooseProduct
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GallerySection, {
					filter: galleryFilter,
					onFilter: setGalleryFilter,
					onPreview: setLightbox
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdvantagesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, { onPreview: setLightbox }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderSection, {
					selectedProduct,
					onProductChange: setSelectedProduct
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {
				onNavigate: scrollTo,
				onInstagram: openInstagram
			}),
			lightbox ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageLightbox, {
				image: lightbox,
				onClose: () => setLightbox(null),
				onAsk: () => {
					setLightbox(null);
					scrollTo("pesan");
				}
			}) : null,
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "status",
				className: "fixed bottom-5 left-1/2 z-[70] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-start gap-3 rounded-lg bg-surface-inverse px-4 py-3 text-sm text-background shadow-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-5 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: notice })]
			}) : null
		]
	});
}
function Navbar({ scrolled, open, onToggle, onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-secondary/90 backdrop-blur-md transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onNavigate("beranda"),
					className: "flex items-center gap-2 font-display text-2xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cuboid, { className: "size-7 text-primary" }), " Raja Roster"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					"aria-label": "Navigasi utama",
					children: navigation.map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onNavigate(id),
						className: "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
						children: label
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "hidden md:inline-flex",
					onClick: () => onNavigate("pesan"),
					children: "Pesan Sekarang"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "md:hidden",
					onClick: onToggle,
					"aria-expanded": open,
					"aria-label": "Buka menu navigasi",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border bg-secondary px-4 py-4 shadow-lg md:hidden",
			"aria-label": "Navigasi seluler",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-1",
				children: [navigation.map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onNavigate(id),
					className: "min-h-11 rounded-md px-3 text-left font-medium hover:bg-accent/30",
					children: label
				}, id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-3",
					onClick: () => onNavigate("pesan"),
					children: "Pesan Sekarang"
				})]
			})
		}) : null]
	});
}
function Hero({ onInstagram, onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "beranda",
		className: "overflow-hidden bg-background px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center md:text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex rounded-full bg-accent/35 px-4 py-2 text-xs font-bold uppercase tracking-wider",
						children: "Spesialis Roster & Ornamen Bangunan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl",
						children: "Solusi Elegan untuk Eksterior Bangunan Anda"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:mx-0",
						children: "Sempurnakan keindahan rumah dan proyek konstruksi Anda dengan koleksi Roster Block modern minimalis, Atasan Kepala Tiang, serta Ukiran Batu Alam premium dari Raja Roster Curup."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "large",
							onClick: onInstagram,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-5" }), " Pesan via Instagram"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "large",
							variant: "outline",
							onClick: () => onNavigate("produk"),
							children: "Lihat Produk"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-card bg-secondary shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: raja_roster_hero_default,
						alt: "Susunan Roster Block Minimalis Raja Roster",
						width: 1408,
						height: 1056,
						fetchPriority: "high",
						className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 rounded-xl bg-card/90 p-4 shadow-lg backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase text-muted-foreground",
							children: "Produk Unggulan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold",
							children: "Variasi Motif Roster 20x20cm"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground",
							children: "Ready Stock"
						})]
					})]
				})
			})]
		})
	});
}
function SectionHeading({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto mb-12 max-w-2xl text-center md:mb-16",
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-bold uppercase tracking-widest text-primary",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-3xl font-bold md:text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-1 w-24 rounded-full bg-primary" }),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 leading-relaxed text-muted-foreground",
				children: description
			}) : null
		]
	});
}
function ProductsSection({ onPreview, onOrder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "produk",
		className: "bg-card px-4 py-20 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					title: "Produk Unggulan Kami",
					description: "Material konstruksi pilihan untuk mempercantik dan menguatkan bangunan Anda, dari hunian pribadi hingga proyek properti komersial."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 md:grid-cols-3",
					children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onPreview({
								src: product.image,
								alt: product.alt,
								caption: product.caption
							}),
							className: "relative aspect-square overflow-hidden bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
							"aria-label": `Perbesar ${product.name}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: product.alt,
								loading: "lazy",
								width: 1024,
								height: 1024,
								className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute inset-0 flex items-center justify-center gap-2 bg-surface-inverse/40 font-medium text-background opacity-0 transition-opacity group-hover:opacity-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" }), " Perbesar"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-primary",
									children: product.badge
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-xl font-bold",
									children: product.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
									children: product.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-end justify-between gap-3 border-t border-border pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: product.meta
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-lg font-bold text-primary",
										children: [
											product.price,
											" ",
											product.unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-normal text-muted-foreground",
												children: product.unit
											}) : null
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "compact",
										onClick: () => onOrder(product.selectValue),
										children: "Pesan"
									})]
								})
							]
						})]
					}, product.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-12 flex max-w-2xl items-start gap-3 rounded-xl border border-border bg-secondary/50 p-4 text-sm font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tersedia juga varian Ornamen tempelan, Hiasan Dinding Pagar, dan Mahkota Tiang kustom." })]
				})
			]
		})
	});
}
var filters = [
	["all", "Semua Foto"],
	["roster", "Roster Block"],
	["tiang", "Kepala Tiang"],
	["relief", "Batu Alam & Relief"],
	["ornamen", "Ornamen Tempel"]
];
function GallerySection({ filter, onFilter, onPreview }) {
	const visible = filter === "all" ? gallery : gallery.filter((item) => item.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "galeri",
		className: "bg-background px-4 py-20 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Real Picture Produksi",
					title: "Galeri Produk & Hasil Ukiran",
					description: "Klik foto untuk memperbesar dan melihat secara detail kualitas pengerjaan material Raja Roster."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-10 flex flex-wrap justify-center gap-2 md:gap-3",
					role: "group",
					"aria-label": "Filter galeri",
					children: filters.map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: filter === value ? "compact" : "outline",
						className: "min-h-10 px-5 py-2 text-sm",
						onClick: () => onFilter(value),
						"aria-pressed": filter === value,
						children: label
					}, value))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4",
					children: visible.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onPreview({
							src: item.image,
							alt: item.alt,
							caption: item.caption
						}),
						className: "group overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: item.alt,
								loading: "lazy",
								width: 1024,
								height: 1024,
								className: `size-full object-cover ${item.position} transition-transform duration-500 group-hover:scale-110`
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs font-bold",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[11px] text-muted-foreground",
								children: item.label
							})]
						})]
					}, item.title))
				})
			]
		})
	});
}
function AdvantagesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "keunggulan",
		className: "bg-secondary px-4 py-20 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "Kenapa Memilih Kami?",
				description: "Komitmen kami untuk memberikan produk dan pelayanan terbaik bagi setiap hunian di Curup dan sekitarnya."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: advantages.map(({ icon: Icon, title, description }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `border-b-4 border-primary bg-card p-8 text-center shadow-sm transition hover:shadow-md ${index === 1 ? "md:-translate-y-2" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-background text-primary shadow-inner",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: description
						})
					]
				}, title))
			})]
		})
	});
}
function AboutSection({ onPreview }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tentang",
		className: "bg-card px-4 py-20 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onPreview({
					src: product_relief_default,
					alt: "Tentang Raja Roster",
					caption: "Seni Ukir Batu Alam Raja Roster"
				}),
				className: "group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-background shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product_relief_default,
					alt: "Tentang Raja Roster",
					loading: "lazy",
					width: 1024,
					height: 1024,
					className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute inset-x-3 bottom-3 flex items-center justify-between rounded-lg bg-surface-inverse/75 p-3 text-left text-xs text-background backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-accent" }), " Workshop Curup, Bengkulu"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-widest text-primary",
						children: "Penyedia Terpercaya"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-3xl font-bold md:text-4xl",
						children: "Tentang Raja Roster"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1 w-16 rounded-full bg-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 leading-relaxed text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Berlokasi di",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "Curup, Bengkulu"
								}),
								", Raja Roster merupakan penyedia spesialis Roster Block modern minimalis, Atasan Kepala Tiang Pagar, Batu Alam ukir, serta berbagai jenis Ornamen hiasan dinding pagar."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Kami memahami bahwa membangun rumah maupun proyek konstruksi membutuhkan sentuhan detail estetik yang kuat dan tahan lama. Setiap produk kami diproduksi dengan ketelitian untuk memberikan hasil akhir visual yang elegan pada pagar dan dinding bangunan Anda." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "rounded-xl border-l-4 border-primary bg-background p-4 text-sm italic text-foreground",
								children: "\"Kami siap melayani kebutuhan material konstruksi Anda dengan komunikasi yang santai, ramah, dan profesional.\""
							})
						]
					})
				]
			})]
		})
	});
}
function FaqSection() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "bg-background px-4 py-20 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Pertanyaan Umum (FAQ)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: faqs.map(([question, answer], index) => {
					const expanded = open === index;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-xl border border-border bg-card shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(expanded ? null : index),
							className: "flex min-h-14 w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold transition-colors hover:bg-secondary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
							"aria-expanded": expanded,
							"aria-controls": `faq-${index}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: question }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `size-5 shrink-0 text-primary transition-transform ${expanded ? "rotate-180" : ""}` })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							id: `faq-${index}`,
							className: `grid transition-all duration-300 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-6 pb-5 text-sm leading-relaxed text-muted-foreground",
									children: answer
								})
							})
						})]
					}, question);
				})
			})]
		})
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm font-semibold",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block",
			children: label
		}), children]
	});
}
var fieldClass = "min-h-12 w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";
function OrderSection({ selectedProduct, onProductChange }) {
	const [status, setStatus] = (0, import_react.useState)("default");
	const onSubmit = (event) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		if (!String(form.get("nama") ?? "").trim() || !String(form.get("produk") ?? "").trim() || !String(form.get("jumlah") ?? "").trim()) {
			setStatus("error");
			return;
		}
		setStatus("success");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pesan",
		className: "bg-card px-4 py-20 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl rounded-3xl bg-secondary p-6 shadow-xl md:p-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold",
					children: "Formulir Pesanan Cepat"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground md:text-base",
					children: "Silakan isi formulir ini, data akan otomatis terformat untuk dikirim langsung via WhatsApp."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-6 rounded-2xl bg-card p-6 shadow-sm md:p-8",
				onSubmit,
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nama Lengkap *",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "nama",
								className: fieldClass,
								placeholder: "Contoh: Pak Herman"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Produk yang Diminati *",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "produk",
								value: selectedProduct,
								onChange: (e) => onProductChange(e.target.value),
								className: fieldClass,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: "Pilih Jenis Produk..."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Roster Block (20x20cm)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Atasan Kepala Tiang Pagar" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Batu Alam & Ukiran Relief" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Ornamen Tempelan Dinding / Pagar" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Lainnya / Diskusi Jumlah" })
								]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Perkiraan Jumlah Kebutuhan *",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "jumlah",
							className: fieldClass,
							placeholder: "Contoh: 150 pcs roster / 5 meter batu alam"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Catatan Tambahan / Alamat Pengiriman",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "catatan",
							rows: 3,
							className: `${fieldClass} resize-none`,
							placeholder: "Tuliskan alamat di Curup atau detail motif yang Anda inginkan..."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						className: "w-full rounded-xl py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-5" }), " Kirim Pesanan via WhatsApp"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "status",
						className: `text-center text-xs ${status === "error" ? "font-bold text-destructive" : status === "success" ? "font-bold text-primary" : "text-muted-foreground"}`,
						children: status === "error" ? "⚠️ Mohon isi Nama, Produk, dan Jumlah kebutuhan Anda!" : status === "success" ? "Pesanan siap dikirim. Integrasi webhook akan ditambahkan nanti." : "*Menekan tombol di atas akan membuka aplikasi WhatsApp dengan pesan terformat."
					})
				]
			})]
		})
	});
}
function Footer({ onNavigate, onInstagram }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-surface-inverse px-4 pb-8 pt-16 text-background sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onNavigate("beranda"),
							className: "flex items-center gap-2 font-display text-2xl font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cuboid, { className: "size-7 text-accent" }), " Raja Roster"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-footer-muted",
							children: "Spesialis Roster Block modern minimalis, Atasan Kepala Tiang, Batu Alam ukir, dan Ornamen dekorasi pagar bermutu tinggi di Curup, Bengkulu."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "icon",
								size: "icon",
								onClick: onInstagram,
								"aria-label": "Instagram Raja Roster",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "icon",
								size: "icon",
								"aria-label": "WhatsApp Raja Roster",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {})
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "inline-block border-b border-background/20 pb-2 font-sans text-lg font-bold",
						children: "Menu Halaman"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3 text-sm text-footer-muted",
						children: [
							["Beranda Utama", "beranda"],
							["Produk Unggulan", "produk"],
							["Galeri Foto Produksi", "galeri"],
							["Keunggulan", "keunggulan"],
							["Pertanyaan Umun (FAQ)", "faq"]
						].map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onNavigate(id),
							className: "flex items-center gap-2 hover:text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" }), label]
						}) }, id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "inline-block border-b border-background/20 pb-2 font-sans text-lg font-bold",
						children: "Hubungi Kami"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-4 text-sm text-footer-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 shrink-0 text-accent" }), " Curup, Bengkulu, Indonesia"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5 shrink-0 text-accent" }),
									" ",
									"WhatsApp: 08xx (Nomor WA Anda)"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-5 shrink-0 text-accent" }), " Instagram: @raja_roster_curup"]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 border-t border-background/15 pt-8 text-center text-xs text-footer-muted",
				children: "© 2026 Raja Roster - Curup, Bengkulu. All rights reserved."
			})]
		})
	});
}
function ImageLightbox({ image, onClose, onAsk }) {
	const closeRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		closeRef.current?.focus();
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[60] flex items-center justify-center bg-surface-inverse/85 p-4 backdrop-blur-sm",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": image.caption,
		onMouseDown: (event) => {
			if (event.target === event.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-3xl overflow-hidden rounded-2xl bg-card shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex max-h-[75vh] items-center justify-center bg-surface-inverse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image.src,
					alt: image.alt,
					className: "max-h-[75vh] w-auto object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					ref: closeRef,
					variant: "icon",
					size: "icon",
					className: "absolute right-3 top-3 bg-surface-inverse/70",
					onClick: onClose,
					"aria-label": "Tutup pratinjau gambar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 border-t border-border bg-background p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold md:text-base",
					children: image.caption
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "compact",
					onClick: onAsk,
					children: "Tanya Produk Ini"
				})]
			})]
		})
	});
}
//#endregion
export { RajaRosterPage as component };
