"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import shopFront from "@/public/images/shop-front.webp";
import {
  brandGroups,
  copy,
  products,
  MAPS_EMBED_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  type Lang,
} from "./content";

function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function NavigateIcon({ size = 20 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

function PinIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LanguageToggle({
  lang,
  onChange,
  label,
  compact = false,
}: {
  lang: Lang;
  onChange: (lang: Lang) => void;
  label: string;
  compact?: boolean;
}) {
  const options: { value: Lang; text: string }[] = [
    { value: "en", text: compact ? "EN" : "English" },
    { value: "hi", text: "हिंदी" },
  ];
  return (
    <div role="group" aria-label={label} className="flex overflow-hidden rounded-md border border-line-strong">
      {options.map((option) => {
        const active = option.value === lang;
        return (
          <button
            key={option.value}
            type="button"
            lang={option.value}
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={`cursor-pointer px-2.5 text-sm font-bold md:px-3 md:text-[15px] ${compact ? "h-11" : "h-10"} ${
              active ? "bg-ink text-white" : "bg-white text-ink hover:bg-surface"
            }`}
          >
            {option.text}
          </button>
        );
      })}
    </div>
  );
}

const btnBase = "inline-flex items-center justify-center rounded-lg font-bold no-underline transition";
const btnAccent = `${btnBase} bg-accent text-white hover:bg-accent-hover`;
const btnDark = `${btnBase} bg-ink text-white hover:bg-black`;

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];
  const other: Lang = lang === "en" ? "hi" : "en";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="flex min-w-0 flex-1 flex-col bg-white text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-2.5 md:gap-6 md:px-8 md:py-3.5">
          <a href="#top" className="flex min-w-0 items-center gap-2.5 text-ink md:gap-3">
            <span aria-hidden="true" className="flex size-[38px] flex-none items-center justify-center rounded-md bg-ink text-base font-extrabold text-white md:size-11 md:text-[19px]">
              GS
            </span>
            <span className="flex min-w-0 flex-col leading-[1.15]">
              <span className="text-[17px] font-extrabold md:text-[21px]">{t.name}</span>
              <span className="text-sm font-medium text-muted md:text-[15px]">{t.area}</span>
            </span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
            <a href="#products" className="py-2.5 text-lg font-semibold text-ink hover:text-accent-hover hover:underline">{t.nav.products}</a>
            <a href="#about" className="py-2.5 text-lg font-semibold text-ink hover:text-accent-hover hover:underline">{t.nav.about}</a>
            <a href="#contact" className="py-2.5 text-lg font-semibold text-ink hover:text-accent-hover hover:underline">{t.nav.contact}</a>
            <LanguageToggle lang={lang} onChange={setLang} label={t.language} />
            <a href={PHONE_HREF} className={`${btnAccent} h-12 gap-2.5 px-5 text-lg`}>
              <PhoneIcon />
              {t.callNow}
            </a>
          </nav>

          <a href={PHONE_HREF} className={`${btnAccent} h-11 flex-none gap-1.5 px-3.5 text-[17px] md:hidden`}>
            <PhoneIcon size={18} />
            {t.call}
          </a>
        </div>
      </header>

      <main>
        <section id="top" className="bg-white">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-4 pt-5 pb-9 md:flex-row md:flex-wrap md:items-center md:gap-12 md:px-8 md:pt-16 md:pb-[72px]">
            <div className="flex items-center justify-between gap-3 md:hidden">
              <nav aria-label="Main" className="flex gap-4">
                <a href="#products" className="py-2.5 text-base font-semibold text-ink">{t.nav.products}</a>
                <a href="#about" className="py-2.5 text-base font-semibold text-ink">{t.nav.about}</a>
                <a href="#contact" className="py-2.5 text-base font-semibold text-ink">{t.nav.contact}</a>
              </nav>
              <LanguageToggle lang={lang} onChange={setLang} label={t.language} compact />
            </div>

            <div className="flex min-w-0 flex-col gap-[18px] md:flex-[1_1_480px] md:gap-6">
              <h1 className="text-4xl leading-[1.12] font-extrabold tracking-[-0.01em] md:text-[56px] md:leading-[1.08]">{t.heroTitle}</h1>
              <p className="max-w-[560px] text-lg leading-normal text-body md:text-[21px]">{t.heroText}</p>
              <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-3.5">
                <a href={PHONE_HREF} className={`${btnAccent} h-[58px] gap-2.5 text-xl md:h-[62px] md:gap-3 md:px-[26px] md:text-[21px]`}>
                  <PhoneIcon size={22} />
                  {t.callNowNumber}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnBase} h-[58px] gap-2.5 border-2 border-ink bg-white text-[19px] text-ink hover:bg-ink hover:text-white md:h-[62px] md:px-6 md:text-xl`}
                >
                  <NavigateIcon />
                  {t.directions}
                </a>
              </div>
              <p className="flex items-start gap-2.5 text-[17px] leading-[1.45] text-body md:text-lg">
                <PinIcon className="mt-[3px] flex-none text-ink" />
                <span>{t.addressLine}</span>
              </p>
            </div>

            <figure className="relative h-[230px] min-w-0 overflow-hidden rounded-[10px] bg-placeholder sm:h-[320px] md:h-[420px] md:flex-[1_1_440px]">
              <Image
                src={shopFront}
                alt={t.heroAlt}
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1200px) 560px, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-[50%_60%]"
              />
            </figure>
          </div>
        </section>

        <section id="products" className="border-t border-[#e2e5e9] bg-surface">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-4 py-10 md:gap-9 md:px-8 md:py-[72px]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-col gap-1.5 md:gap-2">
                <h2 className="text-[30px] leading-[1.15] font-extrabold md:text-[40px]">{t.productsTitle}</h2>
                <p className="text-[17px] leading-[1.45] text-muted md:hidden">{t.productsTextMobile}</p>
                <p className="hidden text-[19px] text-muted md:block">{t.productsText}</p>
              </div>
              <a href={PHONE_HREF} className="hidden py-2.5 text-[19px] font-bold text-accent hover:text-accent-hover md:block">
                {t.callNumber}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] md:gap-6">
              {products.map((product) => {
                const name = product[lang];
                return (
                  <article key={product.en} className="flex flex-col overflow-hidden rounded-[10px] border border-line bg-white">
                    <div className="relative h-28 border-b border-line bg-placeholder md:h-[200px]">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 1200px) 384px, (min-width: 768px) 50vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-0.5 px-3 pt-3 pb-1.5 md:gap-1 md:px-[22px] md:pt-[18px] md:pb-5">
                      <h3 className="text-lg leading-[1.2] font-bold md:text-2xl">{name}</h3>
                      <p lang={other} className="text-[15px] text-muted md:text-[17px]">{product[other]}</p>
                      <a
                        href={PHONE_HREF}
                        aria-label={t.askPriceFor(name)}
                        className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-1 text-base font-bold text-accent hover:text-accent-hover md:mt-2 md:gap-2 md:text-lg"
                      >
                        <PhoneIcon size={18} />
                        {t.askPrice}
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="brands" aria-labelledby="brands-title" className="border-t border-[#e2e5e9] bg-white">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-4 py-10 md:gap-9 md:px-8 md:py-[72px]">
            <div className="flex flex-col gap-1.5 md:gap-2">
              <h2 id="brands-title" className="text-[30px] leading-[1.15] font-extrabold md:text-[40px]">{t.brandsTitle}</h2>
              <p className="text-[17px] leading-[1.45] text-muted md:text-[19px]">{t.brandsText}</p>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6">
              {brandGroups.map((group) => (
                <div key={group.en} className="flex flex-col gap-3 rounded-[10px] border border-line bg-surface p-4 md:gap-4 md:p-6">
                  <h3 className="flex items-baseline justify-between gap-3 text-[15px] font-bold tracking-[0.06em] text-muted uppercase">
                    <span>{group[lang]}</span>
                    <span lang={other} className="text-sm font-semibold tracking-normal normal-case">{group[other]}</span>
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {group.brands.map((brand) => (
                      <li
                        key={brand}
                        lang="en"
                        className="flex min-h-14 items-center rounded-lg border border-line bg-white px-4 text-xl font-extrabold md:min-h-16 md:text-2xl"
                      >
                        {brand}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="prices" className="bg-band text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-3.5 px-4 py-10 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-8 md:px-8 md:py-[72px]">
            <div className="flex min-w-0 flex-col gap-3.5 md:flex-[1_1_520px] md:gap-3">
              <h2 id="prices" className="text-[30px] leading-[1.15] font-extrabold md:text-[40px]">{t.pricesTitle}</h2>
              <p className="max-w-[640px] text-lg leading-normal text-[#d1d5db] md:text-xl">{t.pricesText}</p>
            </div>
            <a href={PHONE_HREF} className={`${btnAccent} mt-1.5 h-[62px] gap-2.5 text-[21px] font-extrabold md:mt-0 md:h-[70px] md:gap-3 md:px-8 md:text-2xl`}>
              <PhoneIcon size={24} />
              {t.callNumber}
            </a>
          </div>
        </section>

        <section id="about" className="bg-white">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-3.5 px-4 py-10 md:flex-row md:flex-wrap md:gap-x-16 md:gap-y-6 md:px-8 md:py-[72px]">
            <h2 className="text-[30px] leading-[1.15] font-extrabold md:flex-[1_1_320px] md:text-[40px]">{t.aboutTitle}</h2>
            <div className="flex min-w-0 flex-col gap-3.5 md:flex-[2_1_520px] md:gap-4">
              <p className="text-lg leading-[1.55] text-body md:text-[21px]">{t.aboutText}</p>
              <p className="flex items-center gap-2.5 text-[17px] font-bold md:text-[19px]">
                <PinIcon />
                {t.serving}
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-[#e2e5e9] bg-surface">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-4 py-10 md:gap-8 md:px-8 md:py-[72px]">
            <h2 className="text-[30px] leading-[1.15] font-extrabold md:text-[40px]">{t.contactTitle}</h2>
            <div className="flex flex-col gap-[18px] md:flex-row md:flex-wrap md:items-stretch md:gap-6">
              <div className="flex min-w-0 flex-col gap-4 rounded-[10px] border border-line bg-white p-5 md:flex-[1_1_380px] md:gap-5 md:p-8">
                <address className="flex flex-col gap-1 not-italic">
                  <span className="text-[21px] font-extrabold md:text-[26px]">{t.name}</span>
                  <span className="text-lg leading-normal text-body md:text-xl">
                    {t.addressStreet}
                    <br />
                    {t.addressCity}
                  </span>
                </address>
                <p className="text-lg text-body md:text-xl">
                  {t.phone}:{" "}
                  <a href={PHONE_HREF} className="inline-block py-2 font-bold text-accent hover:text-accent-hover">
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <div className="mt-1 flex flex-col gap-3 md:flex-row md:flex-wrap">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${btnDark} h-14 gap-2.5 text-[19px] md:h-[58px] md:flex-[1_1_180px]`}>
                    <NavigateIcon />
                    {t.directions}
                  </a>
                  <a href={PHONE_HREF} className={`${btnAccent} h-14 gap-2.5 text-[19px] md:h-[58px] md:flex-[1_1_180px]`}>
                    <PhoneIcon />
                    {t.callNow}
                  </a>
                </div>
              </div>

              <div className="relative h-[260px] min-w-0 overflow-hidden rounded-[10px] border border-line bg-[#dde1e6] md:h-auto md:min-h-[400px] md:flex-[1.4_1_480px]">
                <iframe
                  title={t.mapTitle}
                  src={MAPS_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 size-full border-0"
                />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-3 bottom-3 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 text-base font-bold text-ink shadow-md hover:bg-surface"
                >
                  <PinIcon size={18} />
                  {t.openMaps}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-[#c9ced6]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-7 px-4 pt-9 pb-6 md:gap-9 md:px-8 md:pt-14 md:pb-7">
          <div className="flex flex-col gap-7 md:flex-row md:flex-wrap md:gap-x-16 md:gap-y-8">
            <div className="flex flex-col gap-2 md:flex-[1_1_320px] md:gap-2.5">
              <span className="text-xl font-extrabold text-white md:text-[22px]">{t.name}</span>
              <span className="text-base leading-normal md:text-[17px]">
                {t.addressStreet}
                <br />
                {t.addressCity}
              </span>
              <a href={PHONE_HREF} className="self-start py-2 text-lg font-bold text-[#e5e7eb] hover:text-white hover:underline md:py-1.5 md:text-[19px]">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex flex-col gap-2.5 md:flex-[1_1_320px]">
              <span className="text-sm font-bold tracking-[0.06em] text-white uppercase md:text-[15px]">{t.footerProducts}</span>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-base md:gap-x-6 md:gap-y-1.5 md:text-[17px]">
                {products.map((product) => (
                  <li key={product.en}>
                    <a href="#products" className="inline-block py-1.5 text-[#e5e7eb] hover:text-white hover:underline md:py-0">
                      {product[lang]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="border-t border-[#3a4149] pt-4 text-sm md:pt-5 md:text-[15px]">{t.copyright}</p>
        </div>
      </footer>

      <nav
        aria-label={t.quickActions}
        className="sticky bottom-0 z-20 grid grid-cols-2 gap-2.5 border-t border-line bg-white px-3 py-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden"
      >
        <a href={PHONE_HREF} className={`${btnAccent} h-[54px] gap-2 text-[19px]`}>
          <PhoneIcon />
          {t.callNow}
        </a>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${btnDark} h-[54px] gap-2 text-[19px]`}>
          <NavigateIcon />
          {t.directionsShort}
        </a>
      </nav>
    </div>
  );
}
