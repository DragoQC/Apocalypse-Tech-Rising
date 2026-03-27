// Worldgen normalization toggle script.
// We intentionally DO NOT remove ore generation anymore.
// Ore normalization is now handled in loot conversion (see server_scripts/LootJS/ores.js).

const DUPLICATE_ORE_BLOCKS_TO_REMOVE = [
  // Create
  'create:zinc_ore',
  'create:deepslate_zinc_ore',

  // Mekanism (shared ores only)
  'mekanism:osmium_ore',
  'mekanism:deepslate_osmium_ore',
  'mekanism:tin_ore',
  'mekanism:deepslate_tin_ore',
  'mekanism:lead_ore',
  'mekanism:deepslate_lead_ore',
  'mekanism:uranium_ore',
  'mekanism:deepslate_uranium_ore',

  // Immersive Engineering
  'immersiveengineering:ore_aluminum',
  'immersiveengineering:deepslate_ore_aluminum',
  'immersiveengineering:ore_lead',
  'immersiveengineering:deepslate_ore_lead',
  'immersiveengineering:ore_silver',
  'immersiveengineering:deepslate_ore_silver',
  'immersiveengineering:ore_nickel',
  'immersiveengineering:deepslate_ore_nickel',
  'immersiveengineering:ore_uranium',
  'immersiveengineering:deepslate_ore_uranium',
]

console.info(
  `[KubeJS] Ore worldgen removal is disabled. Keeping all ore generation. (${DUPLICATE_ORE_BLOCKS_TO_REMOVE.length} potential duplicate ore blocks tracked)`
)
