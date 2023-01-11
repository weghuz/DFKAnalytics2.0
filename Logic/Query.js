const heroData = `{visualUnknown1StrDeprecated visualUnknown1 visualUnknown2StrDeprecated visualUnknown2 darkSummoned darkSummonLevels nextSummonTime headAppendageStrDeprecated headAppendage appendageColorStrDeprecated appendageColor eyeColorStrDeprecated eyeColor skinColorStrDeprecated skinColor backAppendageColorStrDeprecated backAppendageColor backAppendageStrDeprecated backAppendage hairColorStrDeprecated hairColor hairStyleStrDeprecated hairStyle background summonedTime network assistingPrice saleAuction {id endedAt duration startedAt endingPrice winner {id name}} staminaFullAt stamina hp mp privateAuctionProfile { id } previousOwner { name id } pjStatus xp statGenes privateAuctionProfile {id} active1StrDeprecated active1 active2StrDeprecated active2 passive1StrDeprecated passive1 passive2StrDeprecated passive2 professionStr profession fishing mining gardening foraging firstName owner{name id} salePrice lastName rarity genderStrDeprecated gender id shiny mainClassStr mainClass subClassStr subClass summons maxSummons level xp strength dexterity agility vitality endurance intelligence wisdom statBoost1StrDeprecated statBoost1 statBoost2StrDeprecated statBoost2 luck strengthGrowthP strengthGrowthS dexterityGrowthP dexterityGrowthS agilityGrowthP agilityGrowthS vitalityGrowthP vitalityGrowthS enduranceGrowthP enduranceGrowthS intelligenceGrowthP intelligenceGrowthS wisdomGrowthP wisdomGrowthS luckGrowthP luckGrowthS summons summonsRemaining maxSummons generation elementStrDeprecated element statsUnknown1StrDeprecated statsUnknown1 statsUnknown2StrDeprecated statsUnknown2}`

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
