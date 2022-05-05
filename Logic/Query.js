const heroData = `saleAuction {id endedAt duration startedAt endingPrice winner {id name}} staminaFullAt stamina hp mp privateAuctionProfile { id } previousOwner { name id } pjStatus xp statGenes privateAuctionProfile {id} active1 active2 passive1 passive2 profession fishing mining gardening foraging firstName owner{name id} salePrice lastName rarity gender id shiny mainClass subClass summons maxSummons level xp strength dexterity agility vitality endurance intelligence wisdom statBoost1 statBoost2 luck strengthGrowthP strengthGrowthS dexterityGrowthP dexterityGrowthS agilityGrowthP agilityGrowthS vitalityGrowthP vitalityGrowthS enduranceGrowthP enduranceGrowthS intelligenceGrowthP intelligenceGrowthS wisdomGrowthP wisdomGrowthS luckGrowthP luckGrowthS summons summonsRemaining maxSummons generation element statsUnknown1 statsUnknown2`;
const base =
  "https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql";

module.exports = {
    heroData,
    base
}