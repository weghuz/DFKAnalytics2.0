const heroData = `{hasValidCraftingGenes statGenes visualGenes darkSummoned darkSummonLevels nextSummonTime background summonedTime network assistingPrice saleAuction {id endedAt duration startedAt endingPrice winner {id name}} staminaFullAt stamina hp mp privateAuctionProfile { id } previousOwner { name id } pjStatus xp privateAuctionProfile {id} fishing mining gardening foraging firstName owner{name id} salePrice lastName rarity gender id shiny summons maxSummons level xp strength dexterity agility vitality endurance intelligence wisdom luck strengthGrowthP strengthGrowthS dexterityGrowthP dexterityGrowthS agilityGrowthP agilityGrowthS vitalityGrowthP vitalityGrowthS enduranceGrowthP enduranceGrowthS intelligenceGrowthP intelligenceGrowthS wisdomGrowthP wisdomGrowthS luckGrowthP luckGrowthS summons summonsRemaining maxSummons generation}`

const petData = `{id owner {id name} originRealm currentRealm previousOwner {id name} originId name season eggType rarity element bonusCount profBonus profBonusScalar craftBonus craftBonusScalar combatBonus combatBonusScalar appearance background shiny hungryAt equippableAt saleAuction {id } salePrice creator {id name} privateAuctionProfile{id}}`

const EquipmentCommon         = "salePrice id displayId originRealm currentRealm owner {id name} rarity craftedBy dye1 dye2 equippedTo { id firstName lastName} equippableAt maxDurability durability maxRepairs remainingRepairs equipRequirement restorationCount"
const StateEnchantments       = "enchantmentType1 enchantmentType2 enchantmentType3 enchantmentScalar1 enchantmentScalar2 enchantmentScalar3"
const DisplayInfoMagicAttack  = "basePotency focusRequirement mAccuracyAtRequirement mScalarStat1 mScalarStat2 mScalarStat3 mScalarValue1 mScalarValue2 mScalarValue3 mScalarMax1 mScalarMax2 mScalarMax3"
const BonusInfoPhysicalAttack = "baseDamage accuracyRequirement pAccuracyAtRequirement pScalarStat1 pScalarStat2 pScalarStat3 pScalarValue1 pScalarValue2 pScalarValue3 pScalarMax1 pScalarMax2 pScalarMax3 speedModifier"
const BonusInfoExtra4         = "bonus1 bonus2 bonus3 bonus4 bonusScalar1 bonusScalar2 bonusScalar3 bonusScalar4"

const weaponData              = "{" + EquipmentCommon + " " + StateEnchantments + " weaponType " + DisplayInfoMagicAttack + " " + BonusInfoPhysicalAttack + " " + BonusInfoExtra4 + "}"

const base =
  "https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql"
const petArtBase = `https://defi-kingdoms.b-cdn.net/art-assets/pets2/Sheets/`

module.exports = {
  heroData,
  petData,
  weaponData,
  base,
  petArtBase
}
