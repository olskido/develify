import { Link } from 'react-router-dom'

export default function ProjectCard({
  id,
  name,
  image,
  currentMc,
  athMc,
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#141416] shadow-lg shadow-black/40">
      <div className="aspect-[16/10] overflow-hidden bg-zinc-900">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-lg font-bold tracking-wide text-white">
          {name}
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-xs text-zinc-500">Current MC</p>
            <p className="mt-0.5 font-semibold text-[#ffd700]">{currentMc}</p>
          </div>
          <div>
            <p className="text-xs text-zinc-500">ATH MC</p>
            <p className="mt-0.5 font-semibold text-[#4ade80]">{athMc}</p>
          </div>
        </div>
        <Link
          to={`/token/${id}`}
          className="mt-5 flex w-full items-center justify-center rounded-xl border border-white/15 bg-[#1a1a1d] py-2.5 text-sm font-medium text-zinc-200 transition hover:border-[#ffd700]/40 hover:bg-[#222226]"
        >
          View Details
        </Link>
      </div>
    </article>
  )
}
