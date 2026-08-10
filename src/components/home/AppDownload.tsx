import { Smartphone, QrCode } from "lucide-react";

export default function AppDownload() {
  return (
    <section className="bg-brand-900 text-white">
      <div className="container-page py-12 sm:py-16 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-8">
        <div className="flex justify-center md:justify-start">
          <div className="relative w-40 h-64 sm:w-48 sm:h-72 rounded-[2rem] bg-gradient-to-b from-brand-700 to-brand-800 shadow-2xl border-4 border-black/40 flex flex-col p-4">
            <div className="h-2 w-16 bg-black/60 rounded-full mx-auto" />
            <div className="mt-4 rounded-lg bg-white/10 p-3">
              <div className="text-[10px] uppercase text-white/60">Owner</div>
              <div className="text-base font-bold">Balance</div>
              <div className="text-2xl font-bold text-accent-400 mt-1">
                125,000
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-2 rounded bg-white/15" />
              <div className="h-2 w-3/4 rounded bg-white/15" />
              <div className="h-2 w-1/2 rounded bg-white/15" />
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Owner rewards, anywhere
          </h3>
          <p className="mt-3 text-white/70 max-w-md mx-auto md:mx-0">
            Track your points, redeem on the go, and manage your account from
            our mobile app. Available on iOS and Android.
          </p>
          <button
            type="button"
            className="mt-5 inline-flex h-11 items-center rounded-md bg-accent-500 px-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-accent-600"
          >
            Download
          </button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="grid h-24 w-24 place-items-center rounded-md bg-white text-brand-900">
            <QrCode className="h-16 w-16" strokeWidth={1.2} />
          </div>
          <div className="text-xs text-white/70 flex items-center gap-1">
            <Smartphone className="h-3 w-3" /> Scan to download
          </div>
        </div>
      </div>
    </section>
  );
}
