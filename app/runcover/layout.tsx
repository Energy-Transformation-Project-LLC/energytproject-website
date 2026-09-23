import Link from "next/link";

export default function RuncoverLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#07090d] px-6 py-10 text-white sm:py-16">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Runcover information" className="mb-14 flex flex-wrap gap-5 text-sm text-slate-300 [&_a]:rounded [&_a]:underline [&_a]:underline-offset-4 [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-sky-300">
          <Link href="/">Energy Transformation Project</Link>
          <Link href="/runcover/support">Support</Link>
          <Link href="/runcover/privacy">Privacy</Link>
        </nav>
        {children}
        <footer className="mt-16 border-t border-white/10 pt-8 text-sm leading-7 text-slate-400">
          <p>Energy Transformation Project LLC</p>
          <a className="text-sky-300 underline underline-offset-4" href="mailto:alex@energytproject.com">Contact Runcover support</a>
        </footer>
      </div>
    </main>
  );
}
