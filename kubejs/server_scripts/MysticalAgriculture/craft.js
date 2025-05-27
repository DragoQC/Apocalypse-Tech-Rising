ServerEvents.recipes(event => {
  event.remove({ output: "mysticalagradditions:nether_star_crux" });

  event.shaped(Item.of("mysticalagradditions:nether_star_crux", 1),
    [
      "OBT",
      "NDN",
      "ISL"
    ],
    {
      S: "minecraft:wither_skeleton_skull",
      N: "minecraft:nether_star",
      B: "minecraft:beacon",
      O: "mysticalextendedtier:ouranium_block",
      T: "mysticalextendedtier:tornium_block",
      L: "mysticalextendedtier:lightium_block",
      I: "mysticalextendedtier:ornium_block",
      D: "minecraft:diamond_block",
    }).id("custom:mysticalagriculture/crux/nether_star_crux");

    event.remove({ output: "mysticalagradditions:neutronium_crux" });

    event.shaped(Item.of("mysticalagradditions:neutronium_crux", 1),
    [
      "XNX",
      "NDN",
      "XNX"
    ],
    {
      X: "mysticalextendedtier:lightium_essence",
      D: "mysticalextendedtier:ouranium_block",
      N: "avaritia:neutronium_ingot",
    }).id("custom:mysticalagriculture/crux/neutronium_crux");

    event.remove({ output: "mysticalagradditions:nitro_crystal_crux" });

    event.shaped(Item.of("mysticalagradditions:nitro_crystal_crux", 1),
    [
      "XNX",
      "NDN",
      "XNX"
    ],
    {
      X: "mysticalextendedtier:lightium_essence",
      D: "powah:nitro_crystal_block",
      N: "minecraft:nether_star",
    }).id("custom:mysticalagriculture/crux/nitro_crystal_crux");

  event.shaped(Item.of("fluxnetworks:flux_dust", 2), [
    "E E",
    "   ",
    "E E"
  ], {
    E: "mysticalagriculture:flux_dust_essence"
  }).id("custom:mysticalagriculture/flux_dust_essence_to_dust");

  event.shaped(Item.of("create:rose_quartz", 2), [
    "EEE",
    " E ",
    "EEE"
  ], {
    E: "mysticalagriculture:rose_quartz_essence"
  }).id("custom:mysticalagriculture/rose_quartz_essence_to_crystal");

  event.shaped(Item.of("create:andesite_alloy", 6), [
    "EEE",
    "EAE",
    "EEE"
  ], {
    E: "mysticalagriculture:andesite_alloy_ingot_essence",
    A: "minecraft:andesite"
  }).id("custom:mysticalagriculture/andesite_alloy_ingot_essence_to_ingot");

  event.shaped(Item.of("deeperdarker:heart_of_the_deep", 1), [
    "EEE",
    "ESE",
    "EEE"
  ], {
    E: "mysticalagriculture:deep_essence",
    S: "minecraft:nether_star"
  }).id("custom:mysticalagriculture/deep_essence_to_heart");

  event.shaped(Item.of("minecraft:echo_shard", 1), [
    "EEE",
    "ESE",
    "EEE"
  ], {
    E: "mysticalagriculture:deep_essence",
    S: "minecraft:amethyst_shard"
  }).id("custom:mysticalagriculture/deep_essence_to_echo");

  event.shaped(Item.of("deeperdarker:sculk_bone", 1), [
    "EEE",
    "ESE",
    "EEE"
  ], {
    E: "mysticalagriculture:deep_essence",
    S: "minecraft:bone"
  }).id("custom:mysticalagriculture/deep_essence_to_bone");

  event.shaped(Item.of("deeperdarker:soul_crystal", 1), [
    "EEE",
    "ESE",
    "EEE"
  ], {
    E: "mysticalagriculture:deep_essence",
    S: "minecraft:diamond"
  }).id("custom:mysticalagriculture/deep_essence_to_crystal");

  event.shaped(Item.of("deeperdarker:warden_carapace", 1), [
    "EEE",
    "ESE",
    "EEE"
  ], {
    E: "mysticalagriculture:deep_essence",
    S: "minecraft:netherite_ingot"
  }).id("custom:mysticalagriculture/deep_essence_to_carapace");

  event.shaped(Item.of("justdirethings:celestigem", 1), [
    "EEE",
    "EEE",
    "EEE"
  ], {
    E: "mysticalagriculture:celestigem_crystal_essence"
  }).id("custom:mysticalagriculture/celestigem_crystal_essence_to_gem");


  event.shaped(Item.of("justdirethings:blazegold_ingot", 2), [
    "EEE",
    "E E",
    "EEE"
  ], {
    E: "mysticalagriculture:blazegold_ingot_essence"
  }).id("custom:mysticalagriculture/blazegold_ingot_essence_to_ingot");

  event.shaped(Item.of("justdirethings:ferricore_ingot", 2), [
    "E E",
    " E ",
    "E E"
  ], {
    E: "mysticalagriculture:ferricore_ingot_essence"
  }).id("custom:mysticalagriculture/ferricore_ingot_essence_to_ingot");

  event.shaped(Item.of("avaritia:neutron_pile", 1), [
    "EEE",
    "EEE",
    "EEE"
  ], {
    E: "mysticalagriculture:neutronium_essence"
  }).id("custom:mysticalagriculture/neutronium_essence_to_pile");

  event.shaped(Item.of("justdirethings:eclipsealloy_ingot", 1), [
    "EEE",
    "EEE",
    "EEE"
  ], {
    E: "mysticalagriculture:eclipse_alloy_ingot_essence"
  }).id("custom:mysticalagriculture/eclipsealloy_ingot_essence_to_ingot");

  event.shaped(Item.of("integrateddynamics:crystalized_menril_chunk", 2), [
    "E E",
    " E ",
    "E E"
  ], {
    E: "mysticalagriculture:menril_essence"
  }).id("custom:mysticalagriculture/crystalized_menril_chunk");

  event.shaped(Item.of("extendedae:entro_crystal", 4), [
    "EEE",
    "EEE",
    "EEE"
  ], {
    E: "mysticalagriculture:entro_crystal_essence"
  }).id("custom:mysticalagriculture/entro_crystal_essence_to_crystal");

  event.shaped(Item.of("extendedae:entro_dust", 2), [
    "E E",
    " E ",
    "E E"
  ], {
    E: "mysticalagriculture:entro_crystal_essence"
  }).id("custom:mysticalagriculture/entro_crystal_essence_to_dust");

  event.shaped(Item.of("refinedstorage:quartz_enriched_copper", 8),
    [
      "EEE",
      "E E",
      "EEE"
    ],
    {
      E: "mysticalagriculture:quartz_enriched_copper_essence"
    }).id("custom:mysticalagriculture/quartz_enriched_copper_essence_to_crystal");

    event.shaped(Item.of("aquaculture:neptunium_nugget", 3),
    [
      "EEE",
      "E E",
      "EEE"
    ],
    {
      E: "mysticalagriculture:neptunium_nugget_essence"
    }).id("custom:mysticalagriculture/neptunium_nugget_essence_to_ingot");

    event.shaped(Item.of("bigreactors:insanite_ingot", 1),
    [
      "EEE",
      "EEE",
      "EEE"
    ],
    {
      E: "mysticalagriculture:insanite_ingot_essence"
    }).id("custom:mysticalagriculture/insanite_ingot_essence_to_ingot");

    event.shaped(Item.of("bigreactors:inanite_ingot", 1),
    [
      "EEE",
      "EEE",
      "EEE"
    ],
    {
      E: "mysticalagriculture:inanite_ingot_essence"
    }).id("custom:mysticalagriculture/inanite_ingot_essence_to_ingot");

    event.shaped(Item.of("bigreactors:ridiculite_ingot", 1),
    [
      "EEE",
      "EEE",
      "EEE"
    ],
    {
      E: "mysticalagriculture:ridiculite_ingot_essence"
    }).id("custom:mysticalagriculture/ridiculite_ingot_essence_to_ingot");

    event.shaped(Item.of("bigreactors:magentite_ingot", 1),
    [
      "EEE",
      "EEE",
      "EEE"
    ],
    {
      E: "mysticalagriculture:magentite_ingot_essence"
    }).id("custom:mysticalagriculture/magentite_ingot_essence_to_ingot");

    event.shaped(Item.of("bigreactors:ludicrite_ingot", 1),
    [
      "EEE",
      "EEE",
      "EEE"
    ],
    {
      E: "mysticalagriculture:ludicrite_ingot_essence"
    }).id("custom:mysticalagriculture/ludicrite_ingot_essence_to_ingot");

    event.shaped(Item.of("bigreactors:blutonium_ingot", 1),
    [
      "EEE",
      "EEE",
      "EEE"
    ],
    {
      E: "mysticalagriculture:blutonium_ingot_essence"
    }).id("custom:mysticalagriculture/blutonium_ingot_essence_to_ingot");

    event.shaped(Item.of("megacells:sky_steel_ingot", 2),
    [
      "EEE",
      "EEE",
      "EEE"
    ],
    {
      E: "mysticalagriculture:sky_steel_ingot_essence"
    }).id("custom:mysticalagriculture/sky_steel_ingot_essence_to_ingot");

    event.shaped(Item.of("forbidden_arcanus:deorum_nugget", 3),
    [
      "EEE",
      "E E",
      "EEE"
    ],
    {
      E: "mysticalagriculture:deorum_ingot_essence"
    }).id("custom:mysticalagriculture/deorum_ingot_essence_to_ingot");

    event.shaped(Item.of("forbidden_arcanus:arcane_crystal", 2),
    [
      "EEE",
      "E E",
      "EEE"
    ],
    {
      E: "mysticalagriculture:arcane_crystal_essence"
    }).id("custom:mysticalagriculture/arcane_crystal_essence_to_crystal");

    event.shaped(Item.of("minecraft:blue_ice", 2),
    [
      "EEE",
      " E ",
      "EEE"
    ],
    {
      E: "mysticalagriculture:ice_essence"
    }).id("custom:mysticalagriculture/ice_essence_to_blue_ice");

    event.shaped(Item.of("powah:dry_ice", 2),
    [
      "EEE",
      "AEA",
      "EEE"
    ],
    {
      E: "mysticalagriculture:ice_essence",
      A: "minecraft:blue_ice"
    }).id("custom:mysticalagriculture/ice_essence_to_dry_ice");

    event.shaped(Item.of("ars_nouveau:experience_gem", 1),
    [
      "EEE",
      "EGE",
      "EEE"
    ],
    {
      E: "mysticalagriculture:experience_essence",
      G: "ars_nouveau:source_gem",
    }).id("custom:mysticalagriculture/experience_essence_to_experience_gem");

    event.shaped(Item.of("create:experience_nugget", 2),
    [
      "EEE",
      "E E",
      "EEE"
    ],
    {
      E: "mysticalagriculture:experience_essence",
    }).id("custom:mysticalagriculture/experience_essence_to_experience_gem");

    event.shaped(Item.of("actuallyadditions:solidified_experience", 2),
    [
      "E E",
      " E ",
      "E E"
    ],
    {
      E: "mysticalagriculture:experience_essence",
    }).id("custom:mysticalagriculture/experience_essence_solid");

    event.shaped(Item.of("forbidden_arcanus:xpetrified_orb", 2),
    [
      "E E",
      " A ",
      "E E"
    ],
    {
      E: "mysticalagriculture:experience_essence",
      A: "forbidden_arcanus:stellarite_piece",
    }).id("custom:mysticalagriculture/experience_essence_to_solidified_experience");

    event.shaped('forbidden_arcanus:tentacle', [
    ' A ',
    'A A',
    '  A'
  ], {
    A: 'mysticalagriculture:squid_essence',
  }).id("custom:mysticalagriculture/forbidden_arcanus_tentacle");

  event.shaped('crabbersdelight:raw_squid_tentacles', [
    ' A ',
    'AAA',
    'A A'
  ], {
    A: 'mysticalagriculture:squid_essence',
  }).id("custom:mysticalagriculture/raw_squid_tentacles");

  event.shaped('oceansdelight:tentacles', [
    ' A ',
    'A A',
    'A A'
  ], {
    A: 'mysticalagriculture:squid_essence',
  }).id("custom:mysticalagriculture/tentacles");

  event.shaped(Item.of("minecraft:glow_ink_sac", 2), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'mysticalagriculture:squid_essence',
    B: 'mysticalagriculture:glowstone_essence',
  }).id("custom:mysticalagriculture/glow_ink_sac");

  event.shaped(Item.of("appflux:insulating_resin", 2), [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'mysticalagriculture:insulating_resin_essence',
  }).id("custom:mysticalagriculture/insulating_resin_essence");

  event.shaped(Item.of("xycraft_world:xychorium_gem_light", 1), [
    ' A ',
    ' A ',
    ' A '
  ], {
    A: 'mysticalagriculture:xychorium_gem_essence',
  }).id("custom:mysticalagriculture/xychorium_gem_essence_light");

  event.shaped(Item.of("xycraft_world:xychorium_gem_blue", 1), [
    '  A',
    ' A ',
    'A  '
  ], {
    A: 'mysticalagriculture:xychorium_gem_essence',
  }).id("custom:mysticalagriculture/xychorium_gem_essence_blue");

  event.shaped(Item.of("xycraft_world:xychorium_gem_green", 1), [
    'A  ',
    ' A ',
    '  A'
  ], {
    A: 'mysticalagriculture:xychorium_gem_essence',
  }).id("custom:mysticalagriculture/xychorium_gem_essence_green");

  event.shaped(Item.of("xycraft_world:xychorium_gem_dark", 1), [
    '   ',
    'AAA',
    '   '
  ], {
    A: 'mysticalagriculture:xychorium_gem_essence',
  }).id("custom:mysticalagriculture/xychorium_gem_essence_dark");

  event.shaped(Item.of("xycraft_world:xychorium_gem_red", 1), [
    ' A ',
    'A A',
    '   '
  ], {
    A: 'mysticalagriculture:xychorium_gem_essence',
  }).id("custom:mysticalagriculture/xychorium_gem_essence_red");

  event.shaped(Item.of("pointblank:gunmetal_ingot", 2), [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'mysticalagriculture:gunmetal_ingot_essence',
  }).id("custom:mysticalagriculture/gunmetal_ingot_essence");

  event.shaped(Item.of("appflux:redstone_crystal", 2), [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'mysticalagriculture:redstone_crystal_essence',
  }).id("custom:mysticalagriculture/redstone_crystal_essence");

  event.shaped(Item.of("appflux:charged_redstone", 8), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'mysticalagriculture:redstone_crystal_essence',
    B: 'powah:charged_snowball',
  }).id("custom:mysticalagriculture/redstone_crystal_snow_essence");


event.shaped(Item.of("mekanism:dust_lithium", 5), [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'mysticalagriculture:lithium_dust_essence',
  }).id("custom:mysticalagriculture/lithium_dust_essence");

  event.shaped(Item.of("megacells:sky_bronze_ingot", 2), [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'mysticalagriculture:sky_bronze_ingot_essence',
  }).id("custom:mysticalagriculture/sky_bronze_ingot_essence");

  event.shaped(Item.of("irons_spellbooks:arcane_essence", 4), [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'mysticalagriculture:arcane_essence_essence',
  }).id("custom:mysticalagriculture/arcane_essence_essence");

  event.shaped(Item.of("irons_spellbooks:arcane_essence", 8), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'mysticalagriculture:arcane_essence_essence',
    B: 'minecraft:iron_ingot',
  }).id("custom:mysticalagriculture/arcane_essence_iron_essence");

  event.shaped(Item.of("irons_spellbooks:cinder_essence", 4), [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'mysticalagriculture:cinder_essence_essence',
  }).id("custom:mysticalagriculture/cinder_essence_essence");

  event.shaped(Item.of("justdirethings:time_crystal", 1), [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'mysticalagriculture:time_crystal_essence',
  }).id("custom:mysticalagriculture/time_crystal_essence");

  event.shaped(Item.of("irons_spellbooks:mithril_scrap", 1), [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'mysticalagriculture:mithril_scrap_essence',
  }).id("custom:mysticalagriculture/mithril_scrap_essence");


  event.shaped(Item.of("forbidden_arcanus:stellarite_piece", 1), [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'mysticalagriculture:stellarite_essence',
  }).id("custom:mysticalagriculture/stellarite_essence");

  event.shaped(Item.of("mysticalagriculture:prosperity_shard", 1), [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'mysticalagriculture:prosperity_shard_essence',
    B: 'mysticalagriculture:inferium_essence',
  }).id("custom:mysticalagriculture/prosperity_shard");

  const oreRecipes = [
    {
      output: "minecraft:raw_iron",
      amount: 12,
      essence: "mysticalagriculture:iron_essence"
    },
    {
      output: "minecraft:raw_copper",
      amount: 12,
      essence: "mysticalagriculture:copper_essence"
    },
    {
      output: "minecraft:raw_gold",
      amount: 8,
      essence: "mysticalagriculture:gold_essence"
    },
    {
      output: "alltheores:raw_uranium",
      amount: 8,
      essence: "mysticalagriculture:uranium_essence"
    },
    {
      output: "alltheores:raw_lead",
      amount: 8,
      essence: "mysticalagriculture:lead_essence"
    },
    {
      output: "alltheores:raw_nickel",
      amount: 8,
      essence: "mysticalagriculture:nickel_essence"
    },
    {
      output: "alltheores:raw_aluminum",
      amount: 16,
      essence: "mysticalagriculture:aluminum_essence"
    },
    {
      output: "alltheores:raw_osmium",
      amount: 8,
      essence: "mysticalagriculture:osmium_essence"
    },
    {
      output: "alltheores:raw_platinum",
      amount: 4,
      essence: "mysticalagriculture:platinum_essence"
    },
    {
      output: "alltheores:raw_silver",
      amount: 8,
      essence: "mysticalagriculture:silver_essence"
    },
    {
      output: "alltheores:raw_tin",
      amount: 8,
      essence: "mysticalagriculture:tin_essence"
    },
    {
      output: "alltheores:raw_zinc",
      amount: 8,
      essence: "mysticalagriculture:zinc_essence"
    },
    {
      output: "alltheores:raw_iridium",
      amount: 4,
      essence: "mysticalagriculture:iridium_essence"
    },
    {
      output: "minecraft:lapis_ore",
      amount: 8,
      essence: "mysticalagriculture:lapis_lazuli_essence"
    },
    {
      output: "minecraft:redstone_ore",
      amount: 10,
      essence: "mysticalagriculture:redstone_essence"
    },
    {
      output: "minecraft:emerald_ore",
      amount: 2,
      essence: "mysticalagriculture:emerald_essence"
    },
    {
      output: "minecraft:diamond_ore",
      amount: 2,
      essence: "mysticalagriculture:diamond_essence"
    },
  ];

  oreRecipes.forEach(recipe => {
    event.shaped(
      Item.of(recipe.output, recipe.amount),
      [
        'AAA',
        'ABA',
        'AAA'
      ],
      {
        A: recipe.essence,
        B: 'mysticalagriculture:stone_essence'
      }
    ).id(`custom:mysticalagriculture/${recipe.output.replace(/:/g, "_")}_ore`);
  });


});