LootJS.modifiers(event => {
  // Keep generic unification behavior for raw material drops.
  event.addBlockLootModifier('#forge:ores').modifyLoot('#forge:raw_materials', item => {
    const replacement = AlmostUnified.getReplacementForItem(item);
    if (replacement.isEmpty()) {
      return item;
    }
    replacement.setCount(item.getCount());
    return replacement;
  });

  // Force third-party ore drops to AllTheOres equivalents.
  const rawDropReplacements = {
    'create:raw_zinc': 'alltheores:raw_zinc',
    'immersiveengineering:raw_aluminum': 'alltheores:raw_aluminum',
    'immersiveengineering:raw_lead': 'alltheores:raw_lead',
    'immersiveengineering:raw_silver': 'alltheores:raw_silver',
    'immersiveengineering:raw_nickel': 'alltheores:raw_nickel',
    'immersiveengineering:raw_uranium': 'alltheores:raw_uranium',
    'mekanism:raw_osmium': 'alltheores:raw_osmium',
    'mekanism:raw_tin': 'alltheores:raw_tin',
    'mekanism:raw_lead': 'alltheores:raw_lead',
    'mekanism:raw_uranium': 'alltheores:raw_uranium'
  };

  Object.entries(rawDropReplacements).forEach(([from, to]) => {
    event.addBlockLootModifier('#forge:ores').replaceLoot(from, to, true);
  });

  // If silk touch drops the ore block itself, convert to AllTheOres ore block.
  // Unsupported ores (example: Powah uraninite) are intentionally excluded.
  const silkOreBlockReplacements = {
    'create:zinc_ore': 'alltheores:zinc_ore',
    'create:deepslate_zinc_ore': 'alltheores:deepslate_zinc_ore',
    'immersiveengineering:ore_aluminum': 'alltheores:aluminum_ore',
    'immersiveengineering:deepslate_ore_aluminum': 'alltheores:deepslate_aluminum_ore',
    'immersiveengineering:ore_lead': 'alltheores:lead_ore',
    'immersiveengineering:deepslate_ore_lead': 'alltheores:deepslate_lead_ore',
    'immersiveengineering:ore_silver': 'alltheores:silver_ore',
    'immersiveengineering:deepslate_ore_silver': 'alltheores:deepslate_silver_ore',
    'immersiveengineering:ore_nickel': 'alltheores:nickel_ore',
    'immersiveengineering:deepslate_ore_nickel': 'alltheores:deepslate_nickel_ore',
    'immersiveengineering:ore_uranium': 'alltheores:uranium_ore',
    'immersiveengineering:deepslate_ore_uranium': 'alltheores:deepslate_uranium_ore',
    'mekanism:osmium_ore': 'alltheores:osmium_ore',
    'mekanism:deepslate_osmium_ore': 'alltheores:deepslate_osmium_ore',
    'mekanism:tin_ore': 'alltheores:tin_ore',
    'mekanism:deepslate_tin_ore': 'alltheores:deepslate_tin_ore',
    'mekanism:lead_ore': 'alltheores:lead_ore',
    'mekanism:deepslate_lead_ore': 'alltheores:deepslate_lead_ore',
    'mekanism:uranium_ore': 'alltheores:uranium_ore',
    'mekanism:deepslate_uranium_ore': 'alltheores:deepslate_uranium_ore'
  };

  Object.entries(silkOreBlockReplacements).forEach(([fromBlock, toBlock]) => {
    event.addBlockLootModifier(fromBlock).replaceLoot(fromBlock, toBlock, true);
  });
});
