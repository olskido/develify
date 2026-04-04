import { Navigate, useParams } from 'react-router-dom'
import TokenNav, { BackLink } from '../../components/TokenNav/TokenNav'

import TokenHero from '../../components/TokenHero/TokenHero'

import MarketChart from '../../components/MarketChart/MarketChart'

import TokenSidebar from '../../components/TokenSidebar/TokenSidebar'
import Footer from '../../components/Footer/Footer'
import { useLiveTokens } from '../../context/LiveTokensContext'

export default function TokenDetailPage() {
  const { tokenId } = useParams()
  const { tokens } = useLiveTokens()
  const project = tokens.find((p) => p.id === tokenId) || tokens.find((p) => p.pumpFunUrl?.includes(tokenId)) || tokens.find((p) => p.mintAddress === tokenId)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <TokenNav />

      <TokenHero
        ticker={project.ticker}
        currentCap={project.currentCap}
        ath={project.ath}
        imageUrl={project.heroImage ?? project.image}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="lg:grid lg:grid-cols-[1fr_min(360px,34%)] lg:gap-10">
          <div>
            <BackLink />
            <div className="mt-8 space-y-8">
              <MarketChart mintAddress={project.mintAddress} />

            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <TokenSidebar
              name={project.name}
              ticker={project.ticker}
              mintAddress={project.mintAddress}
              pumpFunUrl={project.pumpFunUrl}
              xCommunityUrl={project.xCommunityUrl}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
