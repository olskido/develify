/**
 * Full-width banner using the same artwork as the portfolio card (`image`).
 * Renders below the nav on token detail so the coin identity matches the grid.
 */
export default function CoinBanner({ name, imageUrl }) {
  return (
    <section className="border-b border-white/10 bg-[#0d0e12]">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-lg shadow-black/40">
          <div className="relative aspect-[16/6] min-h-[120px] sm:aspect-[16/5] sm:min-h-[140px] md:aspect-[21/6]">
            <img
              src={imageUrl}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0e12]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8 sm:px-5 sm:pb-4">
              <p className="font-display text-lg font-bold tracking-wide text-white drop-shadow-md sm:text-xl">
                {name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
