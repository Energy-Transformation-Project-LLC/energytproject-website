export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-22rem] h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-16rem] top-[30rem] h-[38rem] w-[38rem] rounded-full bg-violet-500/10 blur-[130px]" />
        <div className="absolute bottom-[-22rem] left-[-12rem] h-[40rem] w-[40rem] rounded-full bg-cyan-400/10 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Navigation */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-blue-500/10">
            <span className="text-sm font-bold tracking-tight">ETP</span>
          </div>

          <div className="hidden sm:block">
            <div className="text-sm font-semibold tracking-tight">
              Energy Transformation Project
            </div>
            <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/35">
              LLC
            </div>
          </div>
        </a>

        <nav className="flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.035] p-1 text-sm text-white/60 backdrop-blur-xl">
          <a
            href="#ventures"
            className="rounded-full px-4 py-2 transition hover:bg-white/[0.06] hover:text-white"
          >
            Ventures
          </a>
          <a
            href="#about"
            className="hidden rounded-full px-4 py-2 transition hover:bg-white/[0.06] hover:text-white sm:block"
          >
            About
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 font-medium text-black transition hover:bg-white/90"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[78vh] w-full max-w-7xl items-center px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="max-w-5xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/60 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
            Building what&apos;s next
          </div>

          <h1 className="max-w-5xl text-[3.4rem] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[6.6rem]">
            Ideas built to
            <span className="block bg-gradient-to-r from-white via-white to-white/35 bg-clip-text text-transparent">
              move people forward.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/48 sm:text-xl sm:leading-9">
            Energy Transformation Project is a product company building
            thoughtful software and consumer experiences around movement,
            health, performance, and everyday life.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#ventures"
              className="group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.015] hover:bg-white/90"
            >
              Explore our work
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="mailto:alex@energytproject.com"
              className="inline-flex h-13 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white/75 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              alex@energytproject.com
            </a>
          </div>
        </div>
      </section>

      {/* Statement strip */}
      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/[0.07] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
          <div className="py-8 sm:pr-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Focus
            </p>
            <p className="mt-3 text-base text-white/75">
              Useful products with real-world utility
            </p>
          </div>

          <div className="py-8 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Approach
            </p>
            <p className="mt-3 text-base text-white/75">
              Small teams, fast iteration, thoughtful execution
            </p>
          </div>

          <div className="py-8 sm:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Based in
            </p>
            <p className="mt-3 text-base text-white/75">
              Utah, United States
            </p>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section
        id="ventures"
        className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-10 lg:py-36"
      >
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300/70">
            Ventures
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Products with somewhere to go.
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/45">
            We develop products from the ground up, combining software,
            thoughtful design, and practical real-world use.
          </p>
        </div>

        {/* Runcover card */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.035]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.10] via-transparent to-violet-500/[0.06]" />

          <div className="relative grid min-h-[480px] lg:grid-cols-[1fr_0.9fr]">
            <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center rounded-full border border-blue-300/15 bg-blue-300/[0.08] px-3 py-1.5 text-xs font-medium text-blue-200">
                    In development
                  </div>

                  <span className="text-xs uppercase tracking-[0.18em] text-white/25">
                    Running · Rewards · Discovery
                  </span>
                </div>

                <h3 className="mt-8 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
                  Runcover
                </h3>

                <p className="mt-6 max-w-xl text-lg leading-8 text-white/50">
                  A location-based running platform designed to turn everyday
                  miles into discovery, competition, and real-world rewards.
                </p>
              </div>

              <div className="mt-14 flex items-center gap-3 text-sm text-white/35">
                <span className="h-px w-10 bg-white/20" />
                Energy Transformation Project venture
              </div>
            </div>

            {/* Visual */}
            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden border-t border-white/[0.07] lg:border-l lg:border-t-0">
              <div className="absolute h-[24rem] w-[24rem] rounded-full bg-blue-500/15 blur-[80px]" />

              <div className="relative h-[310px] w-[310px] sm:h-[350px] sm:w-[350px]">
                <div className="absolute inset-[12%] rounded-full border border-white/[0.07]" />
                <div className="absolute inset-[24%] rounded-full border border-white/[0.09]" />
                <div className="absolute inset-[36%] rounded-full border border-white/[0.12]" />

                <div className="absolute left-[48%] top-[8%] h-4 w-4 rounded-full border-4 border-[#08101a] bg-blue-400 shadow-[0_0_24px_rgba(96,165,250,0.9)]" />
                <div className="absolute right-[12%] top-[42%] h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_22px_rgba(167,139,250,0.8)]" />
                <div className="absolute bottom-[15%] left-[28%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,0.8)]" />

                <div className="absolute left-[16%] top-[24%] h-[1px] w-[68%] rotate-[24deg] bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
                <div className="absolute left-[21%] top-[55%] h-[1px] w-[60%] -rotate-[31deg] bg-gradient-to-r from-transparent via-violet-300/30 to-transparent" />

                <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-white/10 bg-[#0d1119]/90 shadow-2xl shadow-blue-500/20 backdrop-blur-xl">
                  <div className="relative h-11 w-11 rotate-45 rounded-xl border border-blue-300/40 bg-gradient-to-br from-blue-400/40 to-violet-400/20">
                    <div className="absolute inset-2 rounded-md border border-white/25" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 border-y border-white/[0.07] bg-white/[0.018]"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10 lg:py-36">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/30">
              About ETP
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
              Build deliberately.
              <br />
              Learn quickly.
              <br />
              Keep moving.
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-white/50">
              Energy Transformation Project LLC develops and operates
              technology-driven products across multiple categories. We focus
              on ideas that can make daily life more useful, engaging, and
              rewarding.
            </p>

            <p className="mt-6 text-lg leading-8 text-white/50">
              Our work begins with a simple question: can this product create
              meaningful value for the person using it? If the answer is yes,
              we build.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-5">
                <p className="text-2xl font-semibold tracking-tight">Software</p>
                <p className="mt-2 text-sm leading-6 text-white/35">
                  Consumer applications and digital platforms
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-5">
                <p className="text-2xl font-semibold tracking-tight">
                  Products
                </p>
                <p className="mt-2 text-sm leading-6 text-white/35">
                  Practical ideas designed for real-world use
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-10 lg:py-36"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.025] px-7 py-16 sm:px-12 lg:px-16 lg:py-20">
          <div className="absolute right-[-8rem] top-[-10rem] h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/30">
                Get in touch
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Have something worth building?
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/45">
                Business inquiries, partnerships, and general correspondence
                are welcome.
              </p>
            </div>

            <a
              href="mailto:alex@energytproject.com"
              className="group flex items-center gap-4 rounded-full border border-white/10 bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.015]"
            >
              alex@energytproject.com
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-6 px-6 py-10 text-sm text-white/30 sm:flex-row sm:items-center lg:px-10">
          <div>
            <p className="font-medium text-white/60">
              Energy Transformation Project LLC
            </p>
            <p className="mt-1">Utah, United States</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="mailto:alex@energytproject.com"
              className="transition hover:text-white"
            >
              Contact
            </a>
            <span>© {new Date().getFullYear()} Energy Transformation Project</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
