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
  }).id("custom:mysticalagriculture/infusion/entro_crystal_seeds");

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
  }).id("custom:mysticalagriculture/infusion/neptunium_nugget_seeds");

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
  }).id("custom:mysticalagriculture/infusion/quartz_enriched_copper_seeds");

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
  }).id("custom:mysticalagriculture/infusion/fluix_crystal_seeds");

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
  }).id("custom:mysticalagriculture/infusion/netherite_seeds");

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
  }).id("custom:mysticalagriculture/infusion/uranium_seeds");

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
  }).id("custom:mysticalagriculture/infusion/uraninite_seeds");

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
  }).id("custom:mysticalagriculture/infusion/nether_star_seeds");

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
  }).id("custom:mysticalagriculture/infusion/flux_dust_seeds");

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
  }).id("custom:mysticalagriculture/infusion/eclipse_alloy_ingot_seeds");

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
  }).id("custom:mysticalagriculture/infusion/ferricore_ingot_seeds");

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
  }).id("custom:mysticalagriculture/infusion/blazegold_ingot_seeds");

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
  }).id("custom:mysticalagriculture/infusion/celestigem_crystal_seeds");

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
  }).id("custom:mysticalagriculture/infusion/nitro_crystal_seeds");

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
  }).id("custom:mysticalagriculture/infusion/deep_seeds");

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
  }).id("custom:mysticalagriculture/infusion/andesite_alloy_seeds");

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
  }).id("custom:mysticalagriculture/infusion/brass_seeds");

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
  }).id("custom:mysticalagriculture/infusion/rose_quartz_seeds");

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
  }).id("custom:mysticalagriculture/infusion/spirited_crystal_seeds");

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
  }).id("custom:mysticalagriculture/infusion/insanite_ingot_seeds");

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
  }).id("custom:mysticalagriculture/infusion/inanite_ingot_seeds");

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
  }).id("custom:mysticalagriculture/infusion/ludicrite_ingot_seeds");

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
  }).id("custom:mysticalagriculture/infusion/ridiculite_ingot_seeds");

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
  }).id("custom:mysticalagriculture/infusion/magentite_ingot_seeds");

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
  }).id("custom:mysticalagriculture/infusion/blutonium_ingot_seeds");


  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        item: "forbidden_arcanus:arcane_crystal_dust",
      },
      { item: "mysticalextendedtier:lightium_essence" },
      {
        item: "forbidden_arcanus:mundabitur_dust"
      },
      { item: "mysticalextendedtier:lightium_essence" },
      {
        item: "forbidden_arcanus:arcane_crystal_dust",
      },
      { item: "mysticalextendedtier:lightium_essence" },
      {
        item: "forbidden_arcanus:mundabitur_dust"
      },
      { item: "mysticalextendedtier:lightium_essence" },
    ],
    result: {
      id: "mysticalagriculture:deorum_ingot_seeds",
    },
  }).id("custom:mysticalagriculture/infusion/deorum_ingot_seeds");

   event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        item: "forbidden_arcanus:arcane_crystal_block",
      },
      { item: "mysticalagriculture:imperium_essence" },
      {
        item: "forbidden_arcanus:arcane_crystal_block"
      },
      { item: "mysticalagriculture:imperium_essence" },
      {
        item: "forbidden_arcanus:arcane_crystal_block",
      },
      { item: "mysticalagriculture:imperium_essence" },
      {
        item: "forbidden_arcanus:arcane_crystal_block"
      },
      { item: "mysticalagriculture:imperium_essence" },
    ],
    result: {
      id: "mysticalagriculture:arcane_crystal_seeds",
    },
  }).id("custom:mysticalagriculture/infusion/arcane_crystal_seeds");

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
  }).id("custom:mysticalagriculture/infusion/sky_steel_ingot_seeds");

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
  }).id("custom:mysticalagriculture/infusion/insulating_resin_seeds");

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
  }).id("custom:mysticalagriculture/infusion/gunmetal_ingot_seeds");

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
  }).id("custom:mysticalagriculture/infusion/xychorium_gem_seeds");

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
  }).id("custom:mysticalagriculture/infusion/redstone_crystal_seeds");

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
  }).id("custom:mysticalagriculture/infusion/lithium_dust_seeds");

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
  }).id("custom:mysticalagriculture/infusion/sky_bronze_ingot_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "irons_spellbooks:arcane_ingot", },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "irons_spellbooks:arcane_essence", },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "irons_spellbooks:arcane_ingot" },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "irons_spellbooks:arcane_essence", },
      { item: "mysticalagradditions:insanium_essence" },
    ],
    result: {
      id: "mysticalagriculture:arcane_essence_seeds",
    },
  }).id("custom:mysticalagriculture/infusion/arcane_essence_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "irons_spellbooks:cinder_essence", },
      { item: "mysticalextendedtier:tornium_essence" },
      { item: "irons_spellbooks:cinder_essence", },
      { item: "mysticalextendedtier:tornium_essence" },
      { item: "irons_spellbooks:cinder_essence" },
      { item: "mysticalextendedtier:tornium_essence" },
      { item: "irons_spellbooks:cinder_essence", },
      { item: "mysticalextendedtier:tornium_essence" },
    ],
    result: {
      id: "mysticalagriculture:cinder_essence_seeds",
    },
  }).id("custom:mysticalagriculture/infusion/cinder_essence_seeds");

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
      id: "mysticalagriculture:time_crystal_seeds ",
    },
  }).id("custom:mysticalagriculture/infusion/time_crystal_seeds");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "irons_spellbooks:mithril_ingot", },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "irons_spellbooks:mithril_ingot", },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "irons_spellbooks:mithril_ingot" },
      { item: "mysticalextendedtier:lightium_essence" },
      { item: "irons_spellbooks:mithril_ingot", },
      { item: "mysticalextendedtier:lightium_essence" },
    ],
    result: {
      id: "mysticalagriculture:mithril_scrap_seeds", 
    },
  }).id("custom:mysticalagriculture/infusion/mithril_scrap_seeds");

   event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      { item: "forbidden_arcanus:stellarite_piece", },
      { item: "mysticalextendedtier:tornium_essence" },
      { item: "forbidden_arcanus:stellarite_piece", },
      { item: "mysticalextendedtier:tornium_essence" },
      { item: "forbidden_arcanus:stellarite_piece" },
      { item: "mysticalextendedtier:tornium_essence" },
      { item: "forbidden_arcanus:stellarite_piece", },
      { item: "mysticalextendedtier:tornium_essence" },
    ],
    result: {
      id: "mysticalagriculture:stellarite_seeds", 
    },
  }).id("custom:mysticalagriculture/infusion/stellarite_seeds");

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
  }).id("custom:mysticalagriculture/infusion/prosperity_shard_seeds");

});
