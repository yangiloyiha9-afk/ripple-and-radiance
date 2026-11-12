import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type React from "react";
import {
  Home, BookOpen, FileText, ClipboardCheck, Gamepad2, Languages, Leaf, MessageSquare, Info,
  Search, Bell, ChevronDown, ArrowRight, GraduationCap, Play, Layers, BarChart3, Clock, Trophy, Dna, Menu,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import botanika from "@/assets/botanika.jpg";
import genetika from "@/assets/genetika.jpg";
import mikro from "@/assets/mikro.jpg";
import biokimyo from "@/assets/biokimyo.jpg";
import support from "@/assets/support.png";
import university from "@/assets/university.png";
import avatar from "@/assets/avatar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduUni — Universitet ta’limini oson o‘zlashtiring" },
      { name: "description", content: "Darsliklar, kurs ishi, mustaqil ish, o‘yinlar va ingliz tili — barchasi bir platformada." },
      { property: "og:title", content: "EduUni — raqamli ta’lim platformasi" },
      { property: "og:description", content: "Universitet talabalari uchun zamonaviy ta’lim platformasi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { icon: Home, label: "Bosh sahifa" }, { icon: BookOpen, label: "Darsliklar" },
  { icon: FileText, label: "Kurs ishi" }, { icon: ClipboardCheck, label: "Mustaqil ish" },
  { icon: Gamepad2, label: "O‘yinlar" }, { icon: Languages, label: "Ingliz tili" },
  { icon: Leaf, label: "Biologiya (Milliy sertifikat)" },
];
const features = [
  { icon: BookOpen, t: "Darsliklar", d: "Universitet fanlari bo‘yicha darsliklar", c: "icon-blue" },
  { icon: FileText, t: "Kurs ishi", d: "Kurs ishini yozish bo‘yicha yo‘riqnoma", c: "icon-violet" },
  { icon: ClipboardCheck, t: "Mustaqil ish", d: "Topshiriqlar va namunalar", c: "icon-orange" },
  { icon: Gamepad2, t: "O‘yinlar", d: "Interaktiv bilim o‘yinlari", c: "icon-purple" },
  { icon: Languages, t: "Ingliz tili", d: "0 dan C1 gacha bosqichma-bosqich", c: "icon-red" },
  { icon: Dna, t: "Biologiya", d: "Milliy sertifikatga tayyorgarlik", c: "icon-green" },
];
const list = [
  { t: "Botanika", n: 24, p: 72, img: botanika }, { t: "Genetika", n: 18, p: 60, img: genetika },
  { t: "Mikrobiologiya", n: 20, p: 48, img: mikro }, { t: "Biokimyo", n: 26, p: 35, img: biokimyo },
];

function useCount(to: number) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0; const s = performance.now();
    const tick = (n: number) => { const k = Math.min(1, (n - s) / 1800); setV(Math.round(to * (1 - Math.pow(1 - k, 3)))); if (k < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf);
  }, [to]);
  return v;
}

function spot(e: React.MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function Index() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const pct = useCount(68);
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col overflow-hidden bg-sidebar-grad text-navy-foreground transition-transform duration-500 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="pointer-events-none absolute -left-10 top-1/3 h-48 w-48 rounded-full bg-primary/40 blob" />
        <div className="relative px-6 pt-8 text-center">
          <GraduationCap className="mx-auto h-14 w-14 text-cyan float" />
          <h1 className="mt-1 text-3xl font-extrabold">Edu<span className="text-shine">Uni</span></h1>
          <p className="mt-1 text-xs opacity-80">Universitet talabalari uchun raqamli ta’lim platformasi</p>
        </div>
        <nav className="relative mt-8 flex-1 space-y-1 px-3">
          {nav.map((n, i) => (
            <button key={n.label} onClick={() => setActive(i)} style={{ animationDelay: `${i * 60}ms` }}
              className={`fade-up group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-[15px] font-semibold transition-all duration-300 ${active === i ? "bg-primary-grad shadow-glow" : "hover:translate-x-1 hover:bg-navy-foreground/10"}`}>
              <n.icon className="h-5 w-5 transition-transform group-hover:scale-125" />{n.label}
            </button>
          ))}
          <div className="my-4 border-t border-navy-foreground/20" />
          {[{ icon: MessageSquare, label: "Admin ga murojaat" }, { icon: Info, label: "Biz haqimizda" }].map((n) => (
            <button key={n.label} className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all hover:translate-x-1 hover:bg-navy-foreground/10">
              <n.icon className="h-5 w-5 transition-transform group-hover:rotate-12" />{n.label}
            </button>
          ))}
        </nav>
      </aside>
      {open && <div className="fixed inset-0 z-30 bg-navy/50 lg:hidden" onClick={() => setOpen(false)} />}

      <main className="lg:pl-64">
        <header className="sticky top-0 z-20 flex items-center gap-4 bg-background/80 px-4 py-4 backdrop-blur-xl md:px-8">
          <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Menyu"><Menu /></button>
          <label className="flex flex-1 max-w-xl items-center gap-3 rounded-full bg-muted px-5 py-3 transition-all focus-within:shadow-glow focus-within:ring-2 focus-within:ring-primary">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input placeholder="Fan, mavzu yoki darslikni qidiring..." className="w-full bg-transparent text-sm outline-none" />
          </label>
          <div className="ml-auto flex items-center gap-5">
            <button className="relative transition-transform hover:rotate-12" aria-label="Bildirishnomalar">
              <Bell className="h-6 w-6" /><span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-ping rounded-full bg-destructive" /><span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-destructive" />
            </button>
            <div className="flex items-center gap-3 border-l border-border pl-5">
              <img src={avatar} alt="Aslonbek" width={44} height={44} className="h-11 w-11 rounded-full object-cover ring-2 ring-primary ring-offset-2 ring-offset-background transition-transform hover:scale-110" />
              <div className="hidden sm:block"><p className="font-bold leading-tight">Aslonbek</p><p className="text-xs text-muted-foreground">Talaba</p></div>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </header>

        <div className="space-y-6 px-4 pb-10 md:px-8">
          <section className="fade-up relative overflow-hidden rounded-3xl shadow-card">
            <img src={hero} alt="Universitet talabalari" width={1600} height={640} className="h-[280px] w-full object-cover object-right transition-transform duration-[2s] hover:scale-105" />
            <div className="absolute inset-0 bg-hero-grad" />
            {Array.from({ length: 14 }).map((_, k) => <span key={k} className="sparkle" style={{ left: `${(k * 37) % 60}%`, top: `${(k * 53) % 90}%`, animationDelay: `${k * 0.35}s` }} />)}
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 text-navy-foreground">
              <h2 className="max-w-3xl text-3xl font-extrabold leading-tight md:text-[2.6rem]">Universitet ta’limini <br /><span className="text-shine">oson va samarali</span> o‘zlashtiring!</h2>
              <p className="mt-3 max-w-md text-lg font-medium opacity-95">Darsliklar, topshiriqlar, kurs ishi, o‘yinlar va til o‘rganish — barchasi bir platformada!</p>
              <button className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-card px-7 py-3 font-bold text-primary transition-all hover:shadow-glow hover:scale-105">
                Boshlash <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {features.map((f, i) => (
              <div key={f.t} onMouseMove={spot} style={{ animationDelay: `${150 + i * 80}ms` }} className="fade-up lift spot group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-card before:absolute before:inset-x-0 before:top-0 before:h-1 before:origin-left before:scale-x-0 before:bg-primary-grad before:transition-transform before:duration-500 hover:before:scale-x-100">
                <div className={`grid h-12 w-12 place-items-center rounded-xl ${f.c} text-primary-foreground transition-transform duration-500 group-hover:rotate-[360deg]`}><f.icon /></div>
                <h3 className="mt-3 font-bold">{f.t}</h3>
                <div className="flex items-end justify-between gap-2"><p className="text-xs text-muted-foreground">{f.d}</p><ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-primary" /></div>
              </div>
            ))}
          </section>

          <section className="grid gap-6 xl:grid-cols-[1fr_440px]">
            <div className="fade-up rounded-3xl bg-card p-5 shadow-card" style={{ animationDelay: "400ms" }}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-xl font-bold"><GraduationCap className="text-primary" /> Tavsiya etilgan kurslar</h3>
                <a className="group flex items-center gap-1 text-sm font-semibold text-primary">Barchasi <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {list.map((c) => (
                  <div key={c.t} className="lift group overflow-hidden rounded-2xl border border-border bg-card">
                    <div className="h-24 overflow-hidden"><img src={c.img} alt={c.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                    <div className="p-3">
                      <div className="flex items-center justify-between"><p className="font-bold">{c.t}</p><span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-125"><Play className="h-3 w-3 fill-current" /></span></div>
                      <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><Layers className="h-3 w-3" />{c.n} dars</p>
                      <div className="mt-3 flex items-center gap-2"><div className="h-2 flex-1 overflow-hidden rounded-full bg-muted"><div className="bar-anim h-full rounded-full bg-primary-grad" style={{ width: `${c.p}%` }} /></div><span className="text-xs font-bold">{c.p}%</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up relative overflow-hidden rounded-3xl bg-sidebar-grad p-6 text-navy-foreground shadow-card" style={{ animationDelay: "500ms" }}>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/40 blob" />
              <h3 className="relative flex items-center gap-2 text-lg font-bold"><BarChart3 className="text-cyan" /> O‘quv jarayoni</h3>
              <div className="relative mt-4 flex flex-col items-center gap-6 sm:flex-row">
                <div className="relative h-40 w-40 shrink-0">
                  <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
                    <circle cx="80" cy="80" r="70" fill="none" strokeWidth="14" className="stroke-navy-foreground/15" />
                    <circle cx="80" cy="80" r="70" fill="none" strokeWidth="14" strokeLinecap="round" className="ring-anim stroke-cyan" strokeDasharray="440" strokeDashoffset={440 - 440 * 0.68} />
                  </svg>
                  <div className="absolute inset-0 grid place-items-center text-center"><div><p className="text-4xl font-extrabold">{pct}%</p><p className="text-xs opacity-80">Umumiy natija</p></div></div>
                </div>
                <div className="w-full space-y-3">
                  {[{ i: BookOpen, n: 12, t: "Tugallangan darslar" }, { i: Clock, n: 4, t: "Davom etayotgan kurslar" }, { i: Trophy, n: 3, t: "Bajarilgan topshiriqlar" }].map((s) => (
                    <div key={s.t} className="flex items-center gap-3 rounded-xl bg-navy-foreground/10 px-4 py-3 transition-all hover:translate-x-1 hover:bg-navy-foreground/20">
                      <s.i className="h-5 w-5 text-cyan" /><span className="text-xl font-bold">{s.n}</span><span className="text-xs">{s.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            {[{ i: MessageSquare, t: "Admin ga murojaat", d: "Savol, taklif yoki muammo bo‘yicha admin bilan bog‘laning.", c: "bg-primary/10", ic: "icon-blue" },
              { i: Info, t: "Biz haqimizda", d: "Platforma maqsadi, imkoniyatlari va jamoa haqida batafsil ma’lumot.", c: "bg-navy-2/10", ic: "icon-purple" }].map((b, k) => (
              <div key={b.t} style={{ animationDelay: `${600 + k * 100}ms` }} onMouseMove={spot} className={`fade-up lift spot group relative flex cursor-pointer items-center gap-5 overflow-hidden rounded-3xl ${b.c} p-6 pr-40`}>
                <div className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl ${b.ic} text-primary-foreground float`}><b.i className="h-8 w-8" /></div>
                <div className="flex-1"><h3 className="text-xl font-bold">{b.t}</h3><p className="text-sm text-muted-foreground">{b.d}</p></div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-card text-primary shadow-card transition-transform group-hover:translate-x-1"><ArrowRight className="h-5 w-5" /></span>
                <img src={b.img} alt="" loading="lazy" width={816} height={816} className="pointer-events-none absolute -bottom-3 right-2 h-32 w-32 object-contain transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110" />
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
