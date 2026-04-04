import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'

import StatsRow from '../../components/StatsRow/StatsRow'
import LaunchedProjects from '../../components/LaunchedProjects/LaunchedProjects'
import SummaryStats from '../../components/SummaryStats/SummaryStats'
import Footer from '../../components/Footer/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />

      <StatsRow />
      <LaunchedProjects />
      <SummaryStats />
      <Footer />
    </div>
  )
}
