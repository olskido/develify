/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from 'react';
import { projects as staticProjects } from '../data/projects';

// Dynamically compute the CA list straight from the configured project definition 
const targetCAs = staticProjects.map(p => p.mintAddress).filter(Boolean);

export const LiveTokensContext = createContext(null);

export function useLiveTokens() {
    return useContext(LiveTokensContext);
}

export function LiveTokensProvider({ children }) {
    const [tokens, setTokens] = useState(staticProjects);
    const [stats, setStats] = useState({
        launched: targetCAs.length,
        bonded: 8,
        athMc: '$403K'
    });

    useEffect(() => {
        async function fetchDexscreener() {
            try {
                const url = `https://api.dexscreener.com/latest/dex/tokens/${targetCAs.join(',')}`;
                const res = await fetch(url);
                const data = await res.json();

                if (data.pairs) {
                    const bondedPairs = data.pairs.filter(p => p.dexId !== 'pumpswap' && p.dexId !== 'pumpfun' && p.dexId !== 'pump');

                    let highestMc = 0;
                    data.pairs.forEach(p => {
                        const mc = p.marketCap || 0;
                        if (mc > highestMc) highestMc = mc;
                    });

                    const tokenMap = new Map();
                    data.pairs.forEach(p => {
                        const key = p.baseToken.address;
                        if (!tokenMap.has(key) || p.liquidity?.usd > tokenMap.get(key).liquidity?.usd) {
                            tokenMap.set(key, p);
                        }
                    });

                    const liveProjects = targetCAs.map((ca) => {
                        const pair = tokenMap.get(ca);
                        const staticProj = staticProjects.find(p => p.mintAddress === ca || p.addressShort === ca || (p.pumpFunUrl && p.pumpFunUrl.includes(ca))) || {};
                        const symbol = pair?.baseToken?.symbol || staticProj.ticker || 'TOKEN';
                        const fallbackImage = `https://placehold.co/800x800/101010/ffd700?text=${symbol}`;
                        const fallbackBanner = `https://placehold.co/1500x500/101010/ffd700?text=${symbol}+Banner`;

                        if (!pair) {
                            return {
                                ...staticProj,
                                id: staticProj.id || ca,
                                name: staticProj.name || 'Unknown',
                                ticker: symbol,
                                image: staticProj.image || fallbackImage,
                                mintAddress: ca,
                                addressShort: staticProj.addressShort || `${ca.substring(0, 4)}...${ca.substring(ca.length - 4)}`,
                            };
                        }

                        return {
                            ...staticProj,
                            id: staticProj.id || ca,
                            name: pair.baseToken.name,
                            ticker: pair.baseToken.symbol,
                            image: staticProj.image || pair.info?.imageUrl || fallbackImage,
                            heroImage: staticProj.heroImage || pair.info?.header || pair.info?.imageUrl || fallbackBanner,
                            mintAddress: ca,
                            pumpFunUrl: `https://pump.fun/${ca}`,
                            xCommunityUrl: pair.info?.socials?.find(s => s.type === 'twitter')?.url || staticProj.xCommunityUrl,
                            currentMc: staticProj.currentMc || `$${(pair.marketCap || 0).toLocaleString()}`,
                            athMc: staticProj.athMc || `$${(pair.marketCap || 0).toLocaleString()}`,
                            currentCap: staticProj.currentMc || `$${(pair.marketCap || 0).toLocaleString()}`,
                            ath: staticProj.ath || staticProj.athMc || `$${(pair.marketCap || 0).toLocaleString()}`,
                            volume24h: `$${(pair.volume?.h24 || 0).toLocaleString()}`,
                            volumeChange: `${pair.priceChange?.h24 || 0}%`,
                            liquidity: `$${(Math.round(pair.liquidity?.usd || 0)).toLocaleString()}`,
                            holders: 'Live Data',
                            addressShort: staticProj.addressShort || `${ca.substring(0, 4)}...${ca.substring(ca.length - 4)}`,
                        };
                    });

                    setTokens(liveProjects);
                }
            } catch (err) {
                console.error("Failed to fetch dexscreener data", err);
            }
        }

        fetchDexscreener();
    }, []);

    return (
        <LiveTokensContext.Provider value={{ tokens, stats }}>
            {children}
        </LiveTokensContext.Provider>
    );
}
