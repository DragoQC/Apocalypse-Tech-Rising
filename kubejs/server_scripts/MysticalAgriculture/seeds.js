console.info('Heres the seeds script!')
ServerEvents.recipes(event => {
  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base"
    },
    ingredients: [
      { tag: "c:gems/entro" },
      { item: "mysticalextendedtier:lightium_essence" },
      { tag: "c:gems/entro" },
      { item: "mysticalextendedtier:lightium_essence" },
      { tag: "c:gems/entro" },
      { item: "mysticalextendedtier:lightium_essence" },
      { tag: "c:gems/entro" },
      { item: "mysticalextendedtier:lightium_essence" }
    ],
    result: {
      id: "mysticalagriculture:entro_crystal_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/entro_crystal_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base"
    },
    ingredients: [
      { item: "aquaculture:neptunium_ingot" },
      { item: "mysticalextendedtier:tornium_essence" },
      { item: "aquaculture:neptunium_ingot" },
      { item: "mysticalextendedtier:tornium_essence" },
      { item: "aquaculture:neptunium_ingot" },
      { item: "mysticalextendedtier:tornium_essence" },
      { item: "aquaculture:neptunium_ingot" },
      { item: "mysticalextendedtier:tornium_essence" }
    ],
    result: {
      id: "mysticalagriculture:neptunium_nugget_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/neptunium_nugget_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        item: "refinedstorage:quartz_enriched_copper",
      },
      {
        item: "mysticalagriculture:tertium_essence",
      },
      {
        item: "refinedstorage:quartz_enriched_copper",
      },
      {
        item: "mysticalagriculture:tertium_essence",
      },
      {
        item: "refinedstorage:quartz_enriched_copper",
      },
      {
        item: "mysticalagriculture:tertium_essence",
      },
      {
        item: "refinedstorage:quartz_enriched_copper",
      },
      {
        item: "mysticalagriculture:tertium_essence",
      },
    ],
    result: {
      id: "mysticalagriculture:quartz_enriched_copper_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/quartz_enriched_copper_seeds");

  event.remove({ output: "mysticalagriculture:fluix_seeds" });

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        item: "ae2:fluix_crystal",
      },
      { item: "mysticalextendedtier:ornium_essence" },
      {
        item: "ae2:fluix_crystal",
      },
      { item: "mysticalextendedtier:ornium_essence" },
      {
        item: "ae2:fluix_crystal",
      },
      { item: "mysticalextendedtier:ornium_essence" },
      {
        item: "ae2:fluix_crystal",
      },
      { item: "mysticalextendedtier:ornium_essence" },
    ],
    result: {
      id: "mysticalagriculture:fluix_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/fluix_crystal_seeds");

  event.remove({ output: "mysticalagriculture:netherite_seeds" });

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        item: "minecraft:netherite_ingot",
      },
      { item: "mysticalextendedtier:lightium_essence" },
      {
        item: "minecraft:netherite_block",
      },
      { item: "mysticalextendedtier:lightium_block" },
      {
        item: "minecraft:netherite_ingot",
      },
      { item: "mysticalextendedtier:lightium_essence" },
      {
        item: "minecraft:netherite_block",
      },
      { item: "mysticalextendedtier:lightium_block" },
    ],
    result: {
      id: "mysticalagriculture:netherite_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/netherite_seeds");

  event.remove({ output: "mysticalagriculture:uranium_seeds" });

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        tag: "c:ingots/uranium",
      },
      { item: "mysticalagriculture:supremium_essence" },
      {
        tag: "c:storage_blocks/uranium",
      },
      { item: "mysticalagriculture:supremium_essence" },
      {
        tag: "c:ingots/uranium",
      },
      { item: "mysticalagriculture:supremium_essence" },
      {
        tag: "c:storage_blocks/uranium",
      },
      { item: "mysticalagriculture:supremium_essence" },
    ],
    result: {
      id: "mysticalagriculture:uranium_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/uranium_seeds");

  event.remove({ output: "mysticalagriculture:uraninite_seeds" });

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        item: "powah:uraninite",
      },
      { item: "mysticalextendedtier:ornium_essence" },
      {
        item: "powah:uraninite_block",
      },
      { item: "mysticalextendedtier:ornium_essence" },
      {
        item: "powah:uraninite",
      },
      { item: "mysticalextendedtier:ornium_essence" },
      {
        item: "powah:uraninite_block",
      },
      { item: "mysticalextendedtier:ornium_essence" },
    ],
    result: {
      id: "mysticalagriculture:uraninite_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/uraninite_seeds");

  event.remove({ output: "mysticalagriculture:nether_star_seeds" });
  
  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        item: "minecraft:nether_star",
      },
      { item: "mysticalextendedtier:ouranium_essence" },
      {
        item: "minecraft:netherite_block",
      },
      { item: "mysticalextendedtier:ouranium_block" },
      {
        item: "minecraft:nether_star",
      },
      { item: "mysticalextendedtier:ouranium_essence" },
      {
        item: "minecraft:netherite_block",
      },
      { item: "mysticalextendedtier:ouranium_block" },
    ],
    result: {
      id: "mysticalagriculture:nether_star_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/nether_star_seeds");

    event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "fluxnetworks:flux_core", },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "fluxnetworks:flux_dust", },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "fluxnetworks:flux_core" },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "fluxnetworks:flux_dust", },
      { item: "mysticalextendedtier:lightium_essence" },
    ],
    result: {
      id: "mysticalagriculture:flux_dust_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/flux_dust_seeds");

  event.remove({ output: "mysticalagriculture:yellorium_seeds" });

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "justdirethings:eclipsealloy_ingot", },
      { item: "mysticalextendedtier:ouranium_essence" },
      { item: "justdirethings:eclipsealloy_block", },
      { item: "mysticalextendedtier:ouranium_essence" },
      { item: "justdirethings:eclipsealloy_ingot" },
      { item: "mysticalextendedtier:ouranium_essence" },
      { item: "justdirethings:eclipsealloy_block", },
      { item: "mysticalextendedtier:ouranium_essence" },
    ],
    result: {
      id: "mysticalagriculture:eclipse_alloy_ingot_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/eclipse_alloy_ingot_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "justdirethings:ferricore_ingot", },
      { item: "mysticalagriculture:supremium_essence" },
      { item: "justdirethings:ferricore_block", },
      { item: "mysticalagriculture:supremium_essence" },
      { item: "justdirethings:ferricore_ingot" },
      { item: "mysticalagriculture:supremium_essence" },
      { item: "justdirethings:ferricore_block", },
      { item: "mysticalagriculture:supremium_essence" },
    ],
    result: {
      id: "mysticalagriculture:ferricore_ingot_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/ferricore_ingot_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "justdirethings:blazegold_ingot", },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "justdirethings:blazegold_block", },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "justdirethings:blazegold_ingot" },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "justdirethings:blazegold_block", },
      { item: "mysticalagradditions:insanium_essence" },
    ],
    result: {
      id: "mysticalagriculture:blazegold_ingot_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/blazegold_ingot_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "justdirethings:celestigem", },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "justdirethings:celestigem_block", },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "justdirethings:celestigem" },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "justdirethings:celestigem_block", },
      { item: "mysticalextendedtier:lightium_essence" },
    ],
    result: {
      id: "mysticalagriculture:celestigem_crystal_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/celestigem_crystal_seeds");

  event.remove({ output: "mysticalagriculture:nitro_crystal_seeds" });

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "powah:crystal_nitro", },
      { item: "mysticalextendedtier:tornium_essence" },
      { item: "powah:nitro_crystal_block", },
      { item: "mysticalextendedtier:tornium_essence" },
      { item: "powah:crystal_nitro" },
      { item: "mysticalextendedtier:tornium_essence" },
      { item: "powah:nitro_crystal_block", },
      { item: "mysticalextendedtier:tornium_essence" },
    ],
    result: {
      id: "mysticalagriculture:nitro_crystal_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/nitro_crystal_seeds");

   event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "deeperdarker:heart_of_the_deep", },
      { item: "mysticalextendedtier:ouranium_essence" },
      { item: "deeperdarker:warden_carapace", },
      { item: "mysticalextendedtier:ouranium_essence" },
      { item: "deeperdarker:heart_of_the_deep" },
      { item: "mysticalextendedtier:ouranium_essence" },
      { item: "deeperdarker:warden_carapace", },
      { item: "mysticalextendedtier:ouranium_essence" },
    ],
    result: {
      id: "mysticalagriculture:deep_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/deep_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "create:andesite_alloy_block", },
      { item: "mysticalagriculture:imperium_essence" },
      { item: "create:andesite_alloy_block", },
      { item: "mysticalagriculture:imperium_essence" },
      { item: "create:andesite_alloy_block" },
      { item: "mysticalagriculture:imperium_essence" },
      { item: "create:andesite_alloy_block", },
      { item: "mysticalagriculture:imperium_essence" },
    ],
    result: {
      id: "mysticalagriculture:andesite_alloy_ingot_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/andesite_alloy_seeds");

  event.remove({ output: "mysticalagriculture:brass_seeds" });

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { tag: "c:ingots/brass", },
      { item: "mysticalextendedtier:lightium_essence" },
      { tag: "c:storage_blocks/brass", },
      { item: "mysticalextendedtier:lightium_essence" },
      { tag: "c:ingots/brass", },
      { item: "mysticalextendedtier:lightium_essence" },
      { tag: "c:storage_blocks/brass", },
      { item: "mysticalextendedtier:lightium_essence" },
    ],
    result: {
      id: "mysticalagriculture:brass_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/brass_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "create:rose_quartz", },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "create:polished_rose_quartz", },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "create:rose_quartz" },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "create:polished_rose_quartz", },
      { item: "mysticalagradditions:insanium_essence" },
    ],
    result: {
      id: "mysticalagriculture:rose_quartz_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/rose_quartz_seeds");

  event.remove({ output: "mysticalagriculture:spirited_crystal_seeds" });

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "powah:crystal_spirited", },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "powah:spirited_crystal_block", },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "powah:crystal_spirited" },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "powah:spirited_crystal_block", },
      { item: "mysticalextendedtier:lightium_essence" },
    ],
    result: {
      id: "mysticalagriculture:spirited_crystal_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/spirited_crystal_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        item: "bigreactors:insanite_ingot",
      },
      { item: "mysticalextendedtier:ouranium_essence" },
      {
        item: "bigreactors:inanite_block",
      },
      { item: "mysticalextendedtier:ouranium_essence" },
      {
        item: "bigreactors:insanite_ingot",
      },
      { item: "mysticalextendedtier:ouranium_essence" },
      {
        item: "bigreactors:inanite_block",
      },
      { item: "mysticalextendedtier:ouranium_essence" },
    ],
    result: {
      id: "mysticalagriculture:insanite_ingot_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/insanite_ingot_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        item: "bigreactors:inanite_ingot",
      },
      { item: "mysticalextendedtier:tornium_essence" },
      {
        item: "minecraft:netherite_block",
      },
      { item: "mysticalextendedtier:tornium_essence" },
      {
        item: "bigreactors:inanite_ingot",
      },
      { item: "mysticalextendedtier:tornium_essence" },
      {
        item: "minecraft:netherite_block",
      },
      { item: "mysticalextendedtier:tornium_essence" },
    ],
    result: {
      id: "mysticalagriculture:inanite_ingot_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/inanite_ingot_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        item: "bigreactors:ludicrite_ingot",
      },
      { item: "mysticalextendedtier:ornium_essence" },
      {
        item: "minecraft:end_crystal",
      },
      { item: "mysticalextendedtier:ornium_essence" },
      {
        item: "bigreactors:ludicrite_ingot",
      },
      { item: "mysticalextendedtier:ornium_essence" },
      {
        item: "minecraft:end_crystal",
      },
      { item: "mysticalextendedtier:ornium_essence" },
    ],
    result: {
      id: "mysticalagriculture:ludicrite_ingot_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/ludicrite_ingot_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        item: "bigreactors:ridiculite_ingot",
      },
      { item: "mysticalextendedtier:lightium_essence" },
      {
        item: "minecraft:nether_star",
      },
      { item: "mysticalextendedtier:lightium_essence" },
      {
        item: "bigreactors:ridiculite_ingot",
      },
      { item: "mysticalextendedtier:lightium_essence" },
      {
        item: "minecraft:nether_star",
      },
      { item: "mysticalextendedtier:lightium_essence" },
    ],
    result: {
      id: "mysticalagriculture:ridiculite_ingot_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/ridiculite_ingot_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        item: "bigreactors:magentite_ingot",
      },
      { item: "mysticalextendedtier:ornium_essence" },
      {
        item: "bigreactors:blutonium_block",
      },
      { item: "mysticalextendedtier:ornium_essence" },
      {
        item: "bigreactors:magentite_ingot",
      },
      { item: "mysticalextendedtier:ornium_essence" },
      {
        item: "bigreactors:blutonium_block",
      },
      { item: "mysticalextendedtier:ornium_essence" },
    ],
    result: {
      id: "mysticalagriculture:magentite_ingot_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/magentite_ingot_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        item: "bigreactors:blutonium_block",
      },
      { item: "mysticalagradditions:insanium_essence" },
      {
        tag: "c:ingots/uranium"
      },
      { item: "mysticalagradditions:insanium_essence" },
      {
        item: "bigreactors:blutonium_block",
      },
      { item: "mysticalagradditions:insanium_essence" },
      {
        tag: "c:ingots/uranium"
      },
      { item: "mysticalagradditions:insanium_essence" },
    ],
    result: {
      id: "mysticalagriculture:blutonium_ingot_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/blutonium_ingot_seeds");


   event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "megacells:sky_steel_block", },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "minecraft:iron_block", },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "megacells:sky_steel_block" },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "minecraft:iron_block", },
      { item: "mysticalextendedtier:lightium_essence" },
    ],
    result: {
      id: "mysticalagriculture:sky_steel_ingot_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/sky_steel_ingot_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "minecraft:cactus", },
      { item: "mysticalagriculture:supremium_essence" },
      { tag: "c:silicon", },
      { item: "mysticalagriculture:supremium_essence" },
      { item: "minecraft:glowstone" },
      { item: "mysticalagriculture:supremium_essence" },
      { tag: "c:storage_blocks/slime", },
      { item: "mysticalagriculture:supremium_essence" },
    ],
    result: {
      id: "mysticalagriculture:insulating_resin_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/insulating_resin_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "pointblank:gunmetal_ingot", },
      { item: "mysticalagriculture:tertium_essence" },
      { item: "pointblank:gunmetal_ingot", },
      { item: "mysticalagriculture:tertium_essence" },
      { item: "pointblank:gunmetal_ingot" },
      { item: "mysticalagriculture:tertium_essence" },
      { item: "pointblank:gunmetal_ingot", },
      { item: "mysticalagriculture:tertium_essence" },
    ],
    result: {
      id: "mysticalagriculture:gunmetal_ingot_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/gunmetal_ingot_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "xycraft_world:xychorium_gem_blue", },
      { item: "mysticalagriculture:imperium_essence" },
      { item: "xycraft_world:xychorium_gem_red", },
      { item: "mysticalagriculture:imperium_essence" },
      { item: "xycraft_world:xychorium_gem_green" },
      { item: "mysticalagriculture:imperium_essence" },
      { item: "xycraft_world:xychorium_gem_dark", },
      { item: "mysticalagriculture:imperium_essence" },
    ],
    result: {
      id: "mysticalagriculture:xychorium_gem_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/xychorium_gem_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "appflux:redstone_crystal", },
      { item: "mysticalextendedtier:ornium_essence" },
      { item: "ae2:fluix_crystal", },
      { item: "mysticalextendedtier:ornium_essence" },
      { item: "appflux:redstone_crystal" },
      { item: "mysticalextendedtier:ornium_essence" },
      { item: "ae2:fluix_crystal", },
      { item: "mysticalextendedtier:ornium_essence" },
    ],
    result: {
      id: "mysticalagriculture:redstone_crystal_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/redstone_crystal_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "mekanism:dust_lithium", },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "mekanism:dust_lithium", },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "mekanism:dust_lithium" },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "mekanism:dust_lithium", },
      { item: "mysticalagradditions:insanium_essence" },
    ],
    result: {
      id: "mysticalagriculture:lithium_dust_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/lithium_dust_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "megacells:sky_bronze_ingot", },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "megacells:sky_bronze_ingot", },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "megacells:sky_bronze_ingot" },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "megacells:sky_bronze_ingot", },
      { item: "mysticalagradditions:insanium_essence" },
    ],
    result: {
      id: "mysticalagriculture:sky_bronze_ingot_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/sky_bronze_ingot_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "justdirethings:time_crystal", },
      { item: "mysticalextendedtier:ouranium_block" },
      { item: "minecraft:netherite_block", },
      { item: "mysticalextendedtier:ouranium_essence" },
      { item: "justdirethings:time_crystal" },
      { item: "mysticalextendedtier:ouranium_block" },
      { item: "minecraft:netherite_block", },
      { item: "mysticalextendedtier:ouranium_essence" },
    ],
    result: {
      id: "mysticalagriculture:time_crystal_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/time_crystal_seeds");

   event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "mysticalagriculture:prosperity_block", },
      { item: "mysticalagriculture:tertium_essence" },
      { item: "mysticalagriculture:prosperity_block", },
      { item: "mysticalagriculture:tertium_essence" },
      { item: "mysticalagriculture:prosperity_block" },
      { item: "mysticalagriculture:tertium_essence" },
      { item: "mysticalagriculture:prosperity_block", },
      { item: "mysticalagriculture:tertium_essence" },
    ],
    result: {
      id: "mysticalagriculture:prosperity_shard_seeds", 
    },
  }).id("drago:mysticalagriculture/infusion/prosperity_shard_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { tag: "allthecompressed:antimatter_block_1x" },
      { item: "mysticalextendedtier:ouranium_essence" },
      { item: "mekanism:pellet_antimatter" },
      { item: "mysticalextendedtier:ouranium_essence" },
      { tag: "allthecompressed:antimatter_block_1x" },
      { item: "mysticalextendedtier:ouranium_essence" },
      { item: "mekanism:pellet_antimatter" },
      { item: "mysticalextendedtier:ouranium_essence" },
    ],
    result: {
      id: "mysticalagriculture:antimatter_pellet_seeds",
    },
  }).id("drago:mysticalagriculture/infusion/antimatter_pellet_seeds");

});
