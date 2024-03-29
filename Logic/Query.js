const heroData = `{hasValidCraftingGenes statGenes visualGenes darkSummoned darkSummonLevels nextSummonTime background summonedTime network assistingPrice saleAuction {id endedAt duration startedAt endingPrice winner {id name}} staminaFullAt stamina hp mp privateAuctionProfile { id } previousOwner { name id } pjStatus xp privateAuctionProfile {id} fishing mining gardening foraging firstName owner{name id} salePrice lastName rarity gender id shiny summons maxSummons level xp strength dexterity agility vitality endurance intelligence wisdom luck strengthGrowthP strengthGrowthS dexterityGrowthP dexterityGrowthS agilityGrowthP agilityGrowthS vitalityGrowthP vitalityGrowthS enduranceGrowthP enduranceGrowthS intelligenceGrowthP intelligenceGrowthS wisdomGrowthP wisdomGrowthS luckGrowthP luckGrowthS summons summonsRemaining maxSummons generation}`

const petData = `{id owner {id name} originRealm currentRealm previousOwner {id name} originId name season eggType rarity element bonusCount profBonus profBonusScalar craftBonus craftBonusScalar combatBonus combatBonusScalar appearance background shiny hungryAt equippableAt saleAuction {id } salePrice creator {id name} privateAuctionProfile{id}}`
const base =
  "https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql"
const petArtBase = `https://defi-kingdoms.b-cdn.net/art-assets/pets2/Sheets/`

module.exports = {
  heroData,
  petData,
  base,
  petArtBase
}
