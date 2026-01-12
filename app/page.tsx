import Link from "next/link";

const features = [
  {
    title: "Multi-wallets",
    desc: "Create separate wallets for projects, teams, or personal goals — all in one place.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M4 7.5A3.5 3.5 0 0 1 7.5 4h9A3.5 3.5 0 0 1 20 7.5v9A3.5 3.5 0 0 1 16.5 20h-9A3.5 3.5 0 0 1 4 16.5v-9Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 9h10M7 12h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Smart allocations",
    desc: "Split funds by amount or percentage, and set recurring allocations effortlessly.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M4 18V6m0 12h16M8 14l3-3 3 2 5-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Teams & circles",
    desc: "Assign wallets to sub-teams in an organization, or to friends/family in personal accounts.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M16 11a4 4 0 1 0-8 0m12 8a6 6 0 0 0-12 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Controls & approvals",
    desc: "Set spending limits and approval flows so every transaction stays accountable.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 3l7 4v6c0 5-3 8-7 8s-7-3-7-8V7l7-4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12.5l1.8 1.8 3.8-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const steps = [
  { n: "01", title: "Create an account", desc: "Choose Individual or Organization to match your use case." },
  { n: "02", title: "Add wallets", desc: "Create wallets for goals, teams, departments, or shared circles." },
  { n: "03", title: "Allocate funds", desc: "Move money into wallets with rules and visibility for everyone." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Background accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white">
              <span className="text-sm font-semibold">JF</span>
            </span>
            <span className="text-sm font-semibold tracking-tight sm:text-base">joint-fintech</span>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-3">
            <a
              href="#features"
              className="hidden rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 sm:inline-flex"
            >
              Features
            </a>
            <a
              href="#how"
              className="hidden rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 sm:inline-flex"
            >
              How it works
            </a>
            <Link
              href="/login"
              className="rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
            >
              Get started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs text-zinc-700 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Wallets + Allocations for Individuals & Organizations
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Manage money with{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
                  shared control
                </span>{" "}
                and clear allocation.
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                Create multiple wallets, assign them to sub-teams or loved ones, and allocate funds with
                guardrails, approvals, and visibility — all in a modern web app.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
                >
                  Create your account
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
                >
                  Explore features
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-600">
                <span className="rounded-full bg-zinc-100 px-3 py-1">Role-based access</span>
                <span className="rounded-full bg-zinc-100 px-3 py-1">Spend limits</span>
                <span className="rounded-full bg-zinc-100 px-3 py-1">Audit trail-ready</span>
              </div>
            </div>

            {/* Mock UI Card */}
            <div className="relative">
              <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm backdrop-blur sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Overview</p>
                    <p className="text-xs text-zinc-500">Today</p>
                  </div>
                  <div className="rounded-xl bg-zinc-900 px-3 py-2 text-xs font-medium text-white">
                    + Add wallet
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-zinc-200 bg-white p-4">
                    <p className="text-xs text-zinc-500">Primary Wallet</p>
                    <p className="mt-1 text-lg font-semibold">₦ 2,450,000</p>
                    <p className="mt-2 text-xs text-emerald-700">+12% this month</p>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white p-4">
                    <p className="text-xs text-zinc-500">Allocations</p>
                    <p className="mt-1 text-lg font-semibold">7 active</p>
                    <p className="mt-2 text-xs text-zinc-600">Teams • Family • Projects</p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">Wallets</p>
                    <p className="text-xs text-zinc-500">Last 7 days</p>
                  </div>

                  <div className="mt-3 space-y-3">
                    {[
                      { name: "Marketing Team", meta: "Org • Spend limit", amount: "₦ 350,000" },
                      { name: "Operations", meta: "Org • Approval required", amount: "₦ 500,000" },
                      { name: "Family Essentials", meta: "Individual • Shared", amount: "₦ 120,000" },
                    ].map((w) => (
                      <div
                        key={w.name}
                        className="flex items-center justify-between rounded-lg bg-zinc-50 px-3 py-3"
                      >
                        <div>
                          <p className="text-sm font-medium">{w.name}</p>
                          <p className="text-xs text-zinc-500">{w.meta}</p>
                        </div>
                        <p className="text-sm font-semibold">{w.amount}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <p className="text-xs text-emerald-800">Suggested</p>
                    <p className="mt-1 text-sm font-semibold">Enable approvals for Ops</p>
                    <p className="mt-1 text-xs text-emerald-900/70">
                      Reduce risk with manager approval on large spends.
                    </p>
                  </div>
                  <div className="rounded-xl bg-indigo-50 p-4">
                    <p className="text-xs text-indigo-800">Insight</p>
                    <p className="mt-1 text-sm font-semibold">Recurring allocations</p>
                    <p className="mt-1 text-xs text-indigo-900/70">
                      Automate monthly funding to teams & family wallets.
                    </p>
                  </div>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r from-emerald-200/50 to-indigo-200/50 blur-2xl"
              />
            </div>
          </div>
        </section>

        {/* Social proof strip */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-zinc-200 bg-white/70 px-4 py-6 shadow-sm backdrop-blur sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-zinc-700">
                Built for clarity: <span className="font-semibold">allocations, roles, and visibility</span> from day one.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-600">
                <span className="rounded-full bg-zinc-100 px-3 py-1">Individuals</span>
                <span className="rounded-full bg-zinc-100 px-3 py-1">Teams</span>
                <span className="rounded-full bg-zinc-100 px-3 py-1">Organizations</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Everything you need to allocate funds</h2>
            <p className="mt-3 text-zinc-600">
              Separate wallets, set rules, assign access, and keep everyone accountable — without messy spreadsheets.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-zinc-200 bg-white/70 p-5 shadow-sm backdrop-blur"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white">
                  {f.icon}
                </div>
                <p className="mt-4 text-sm font-semibold">{f.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How it works</h2>
              <p className="mt-3 text-zinc-600">
                Set up in minutes, then allocate funds with controls that scale from personal to enterprise.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="rounded-2xl border border-zinc-200 bg-white p-6">
                  <p className="text-xs font-semibold text-zinc-500">{s.n}</p>
                  <p className="mt-2 text-base font-semibold">{s.title}</p>
                  <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
              >
                Start free
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                View pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <div className="flex flex-col gap-4 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-600">© {new Date().getFullYear()} joint-fintech. All rights reserved.</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <Link className="rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100" href="/privacy">
                Privacy
              </Link>
              <Link className="rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100" href="/terms">
                Terms
              </Link>
              <Link className="rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
