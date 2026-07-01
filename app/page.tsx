export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-titan-bg text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-medium">
            T
          </div>
          <span className="text-lg font-medium tracking-wide">Titan</span>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl leading-none text-white/80">
          ☰
        </button>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-10 sm:px-8 md:grid-cols-2 md:pb-28 md:pt-20">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.38em] text-white/40">
            Premium Crypto Card Platform
          </p>

          <h1 className="max-w-2xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Private crypto spending, refined.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-titan-muted sm:text-lg">
            Titan brings virtual, physical, and NFT-powered cards into a luxury
            digital experience built for secure wallet-native payments.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="rounded-full bg-white px-7 py-3 text-center text-sm font-medium text-black">
              Sign Up
            </a>
            <a className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3 text-center text-sm font-medium text-white/80">
              Purchase Card
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute inset-0 rounded-[3rem] bg-titan-accent/20 blur-3xl" />

          <div className="relative aspect-[85.6/53.98] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#242833,#07080d_55%,#1b1e27)] p-6 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.18),transparent_30%),linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]" />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-lg font-medium tracking-wide">Titan</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-white/40">
                  Signature
                </p>
              </div>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/55">
                Virtual
              </span>
            </div>

            <div className="relative mt-9 h-9 w-12 rounded-lg border border-yellow-200/30 bg-[linear-gradient(135deg,#fff1a8,#a06f13,#f5d66b)]" />

            <p className="relative mt-8 text-lg tracking-[0.32em] text-white/75">
              •••• •••• •••• 4321
            </p>

            <div className="relative mt-6 flex items-end justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-white/35">
                  Cardholder
                </p>
                <p className="mt-1 text-sm tracking-wide">TITAN MEMBER</p>
              </div>

              <div className="text-right">
                <p className="text-[9px] uppercase tracking-[0.28em] text-white/35">
                  Visa Signature
                </p>
                <p className="mt-1 text-sm">••/••</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-4">
        <div className="overflow-hidden whitespace-nowrap text-xs uppercase tracking-[0.35em] text-white/40">
          Titan Network Online • ETH Payments • Vault Balances • Private Card
          Management • NFT Mint Access •
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 sm:px-8 md:grid-cols-3">
        {["Virtual Cards", "Physical Cards", "Free Mint"].map((title) => (
          <div
            key={title}
            className="rounded-[22px] border border-white/10 bg-white/[0.035] p-6"
          >
            <p className="text-lg font-medium">{title}</p>
            <p className="mt-4 text-sm leading-6 text-titan-muted">
              A secure Titan card experience designed for wallet-native users,
              premium access, and controlled card lifecycle management.
            </p>
          </div>
        ))}
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 px-5 py-8 text-sm text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Titan. All rights reserved.</p>
        <div className="flex gap-5">
          <span>Telegram</span>
          <span>X</span>
          <span>Farcaster</span>
        </div>
      </footer>
    </main>
  );
}
