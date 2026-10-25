import type { StaticImageData } from "next/image";

// Product photos are from Unsplash (free under the Unsplash License):
// steel-iron: XRuBqN8o7Pg, ms-pipes: LT-oz1yj0_0 (Mohammad Hossein Farahzadi),
// roofing: yp_dr5GbPLY (Anh Nguyen), cement: 0p70_HczZek,
// welding: dni5FT1QXvk (Ahmet Yüksek), construction-materials: HtLkTOr_DQc.
import steelIron from "@/public/images/steel-iron.jpg";
import msPipes from "@/public/images/ms-pipes.jpg";
import roofing from "@/public/images/roofing.jpg";
import cement from "@/public/images/cement.jpg";
import welding from "@/public/images/welding.jpg";
import constructionMaterials from "@/public/images/construction-materials.jpg";

export type Lang = "en" | "hi";

export const PHONE_DISPLAY = "070675 09216";
export const PHONE_HREF = "tel:+917067509216";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Gurunanak%20Steel%20Center%2C%20Lakkad%20Ganj%2C%20Itarsi";
export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Gurunanak%20Steel%20Center%2C%20Lakkad%20Ganj%2C%20Itarsi&output=embed";
export const INSTAGRAM_HANDLE = "gurunank_steel_itarsi";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
export const INSTAGRAM_EMBED_URL = `${INSTAGRAM_URL}embed`;

export type Product = {
  en: string;
  hi: string;
  image: StaticImageData;
  alt: string;
};

export const products: Product[] = [
  { en: "Steel & Iron Products", hi: "स्टील और लोहा", image: steelIron, alt: "Bundles of steel reinforcement bars" },
  { en: "MS Pipes", hi: "एमएस पाइप", image: msPipes, alt: "Stacked square MS pipes" },
  { en: "Roofing Solutions", hi: "रूफिंग शीट", image: roofing, alt: "Coloured corrugated roofing sheets on rooftops" },
  { en: "Cement", hi: "सीमेंट", image: cement, alt: "Stacked cement bags" },
  { en: "Welding Materials", hi: "वेल्डिंग सामग्री", image: welding, alt: "Welder joining a steel frame" },
  {
    en: "Construction Materials",
    hi: "निर्माण सामग्री",
    image: constructionMaterials,
    alt: "Shelves stocked with building materials",
  },
];

export type BrandGroup = {
  en: string;
  hi: string;
  brands: string[];
};

export const brandGroups: BrandGroup[] = [
  { en: "TMT Bars", hi: "टीएमटी सरिया", brands: ["Goel TMT", "Kamdhenu"] },
  { en: "Steel Pipes", hi: "स्टील पाइप", brands: ["Tata Pipes", "Prakash Surya"] },
  { en: "Cement", hi: "सीमेंट", brands: ["ACC", "UltraTech", "Wonder Cement"] },
];

export const copy = {
  en: {
    name: "Gurunanak Steel Center",
    area: "Lakkad Ganj, Itarsi",
    nav: { products: "Products", about: "About", contact: "Contact" },
    call: "Call",
    callNow: "Call Now",
    callNumber: `Call ${PHONE_DISPLAY}`,
    callNowNumber: `Call Now — ${PHONE_DISPLAY}`,
    directions: "Get Directions",
    directionsShort: "Directions",
    heroTitle: "Steel, Iron & Construction Materials in Itarsi",
    heroText:
      "MS pipes, roofing solutions, cement, welding materials, and more. Contact us for current prices and product availability.",
    heroAlt: "Gurunanak Steel Center shop front in Itarsi, stocked with MS pipes and steel sections",
    addressLine: "No. 1, Lakkad Ganj, near Janta Talkies, Itarsi, Madhya Pradesh 461111",
    addressStreet: "No. 1, Lakkad Ganj, near Janta Talkies",
    addressCity: "Itarsi, Madhya Pradesh 461111, India",
    productsTitle: "Products We Offer",
    productsText: "Call to ask about current prices and availability for any product.",
    productsTextMobile: "Tap “Ask price” to call about current prices and availability.",
    askPrice: "Ask price",
    askPriceFor: (name: string) => `Ask price for ${name}`,
    brandsTitle: "Brands We Deal In",
    brandsText: "We stock trusted brands of TMT bars, steel pipes, and cement.",
    pricesTitle: "Looking for Product Prices?",
    pricesText:
      "Call us to enquire about current prices and availability for steel, MS pipes, roofing solutions, cement, and other construction materials.",
    aboutTitle: "About the Business",
    aboutText:
      "Gurunanak Steel Center provides steel, iron, and construction material solutions in Itarsi. Contact us to enquire about product prices and availability.",
    serving: "Serving Itarsi and nearby areas",
    instagramTitle: "Follow Us on Instagram",
    instagramText: "See our latest stock, brand offers, and updates from the shop.",
    instagramFollow: "Follow on Instagram",
    instagramFrameTitle: "Gurunanak Steel Center on Instagram",
    contactTitle: "Visit Our Shop",
    phone: "Phone",
    mapTitle: "Map showing Gurunanak Steel Center in Itarsi",
    openMaps: "Open in Google Maps",
    footerProducts: "Products",
    copyright: "© 2026 Gurunanak Steel Center, Itarsi.",
    language: "Language",
    quickActions: "Quick actions",
  },
  hi: {
    name: "गुरुनानक स्टील सेंटर",
    area: "लकड़ गंज, इटारसी",
    nav: { products: "उत्पाद", about: "हमारे बारे में", contact: "संपर्क" },
    call: "कॉल",
    callNow: "अभी कॉल करें",
    callNumber: `कॉल करें ${PHONE_DISPLAY}`,
    callNowNumber: `अभी कॉल करें — ${PHONE_DISPLAY}`,
    directions: "रास्ता देखें",
    directionsShort: "रास्ता",
    heroTitle: "इटारसी में स्टील, लोहा और निर्माण सामग्री",
    heroText:
      "एमएस पाइप, रूफिंग शीट, सीमेंट, वेल्डिंग सामग्री और बहुत कुछ। मौजूदा भाव और उपलब्धता के लिए हमसे संपर्क करें।",
    heroAlt: "इटारसी में गुरुनानक स्टील सेंटर की दुकान, एमएस पाइप और स्टील सेक्शन के साथ",
    addressLine: "नं. 1, लकड़ गंज, जनता टॉकीज़ के पास, इटारसी, मध्य प्रदेश 461111",
    addressStreet: "नं. 1, लकड़ गंज, जनता टॉकीज़ के पास",
    addressCity: "इटारसी, मध्य प्रदेश 461111, भारत",
    productsTitle: "हमारे उत्पाद",
    productsText: "किसी भी उत्पाद के मौजूदा भाव और उपलब्धता जानने के लिए कॉल करें।",
    productsTextMobile: "मौजूदा भाव और उपलब्धता जानने के लिए “भाव पूछें” दबाएँ।",
    askPrice: "भाव पूछें",
    askPriceFor: (name: string) => `${name} का भाव पूछें`,
    brandsTitle: "हमारे ब्रांड",
    brandsText: "हम टीएमटी सरिया, स्टील पाइप और सीमेंट के भरोसेमंद ब्रांड रखते हैं।",
    pricesTitle: "उत्पादों के भाव जानने हैं?",
    pricesText:
      "स्टील, एमएस पाइप, रूफिंग शीट, सीमेंट और अन्य निर्माण सामग्री के मौजूदा भाव और उपलब्धता के लिए हमें कॉल करें।",
    aboutTitle: "हमारे बारे में",
    aboutText:
      "गुरुनानक स्टील सेंटर इटारसी में स्टील, लोहा और निर्माण सामग्री उपलब्ध कराता है। उत्पादों के भाव और उपलब्धता के लिए हमसे संपर्क करें।",
    serving: "इटारसी और आसपास के क्षेत्रों में सेवा",
    instagramTitle: "Instagram पर हमें फ़ॉलो करें",
    instagramText: "हमारा नया स्टॉक, ब्रांड ऑफ़र और दुकान की ताज़ा जानकारी देखें।",
    instagramFollow: "Instagram पर फ़ॉलो करें",
    instagramFrameTitle: "Instagram पर गुरुनानक स्टील सेंटर",
    contactTitle: "हमारी दुकान पर आएँ",
    phone: "फ़ोन",
    mapTitle: "इटारसी में गुरुनानक स्टील सेंटर का नक्शा",
    openMaps: "Google Maps में खोलें",
    footerProducts: "उत्पाद",
    copyright: "© 2026 गुरुनानक स्टील सेंटर, इटारसी।",
    language: "भाषा",
    quickActions: "त्वरित विकल्प",
  },
};
