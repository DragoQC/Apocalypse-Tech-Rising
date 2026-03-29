ServerEvents.recipes(event => {

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "c:ingots/osmium" },
    "transitional_item": { "id": "mekanism:basic_control_circuit" },
    "loops": 1,
    "results": [
      { "id": "mekanism:basic_control_circuit", "count": 1 }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "tag": "c:ingots/osmium" },
          { "item": "minecraft:redstone" }
        ],
        "results": [{ "id": "mekanism:basic_control_circuit" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "tag": "c:ingots/osmium" }
        ],
        "results": [{ "id": "mekanism:basic_control_circuit" }]
      },
    ]
  }).id("drago:mekanism/basic_control_circuit");

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "mekanism:basic_control_circuit" },
    "transitional_item": { "id": "mekanism:advanced_control_circuit" },
    "loops": 1,
    "results": [
      { "id": "mekanism:advanced_control_circuit", "count": 1 }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "mekanism:basic_control_circuit" },
          { "item": "mekanism:alloy_infused" }
        ],
        "results": [{ "id": "mekanism:advanced_control_circuit" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "mekanism:basic_control_circuit" }
        ],
        "results": [{ "id": "mekanism:advanced_control_circuit" }]
      },
    ]
  }).id("drago:mekanism/advanced_control_circuit");

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "mekanism:advanced_control_circuit" },
    "transitional_item": { "id": "mekanism:elite_control_circuit" },
    "loops": 1,
    "results": [
      { "id": "mekanism:elite_control_circuit", "count": 1 }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "mekanism:advanced_control_circuit" },
          { "item": "mekanism:alloy_reinforced" }
        ],
        "results": [{ "id": "mekanism:elite_control_circuit" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "mekanism:advanced_control_circuit" }
        ],
        "results": [{ "id": "mekanism:elite_control_circuit" }]
      },
    ]
  }).id("drago:mekanism/elite_control_circuit");

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "mekanism:elite_control_circuit" },
    "transitional_item": { "id": "mekanism:ultimate_control_circuit" },
    "loops": 1,
    "results": [
      { "id": "mekanism:ultimate_control_circuit", "count": 1 }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "mekanism:elite_control_circuit" },
          { "item": "mekanism:alloy_atomic" }
        ],
        "results": [{ "id": "mekanism:ultimate_control_circuit" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "mekanism:elite_control_circuit" }
        ],
        "results": [{ "id": "mekanism:ultimate_control_circuit" }]
      },
    ]
  }).id("drago:mekanism/ultimate_control_circuit");

  event.recipes.create
    .mixing(
      [Item.of("mekanism:enriched_redstone", 2)],
      [
        "minecraft:redstone",
        Fluid.of("minecraft:water", 1000)
      ]
    )
    .heated()
    .id("drago:mekanism/enriched_redstone");

  event.recipes.create
    .mixing(
      [Item.of("mekanism:enriched_diamond", 4)],
      [
        "#c:dusts/diamond",
        Fluid.of("minecraft:water", 1000)
      ]
    )
    .heated()
    .id("drago:mekanism/enriched_diamond");

  event.recipes.create
    .mixing(
      [Item.of("mekanism:enriched_refined_obsidian", 2)],
      [
        "mekanism:dust_refined_obsidian",
        Fluid.of("minecraft:water", 1000)
      ]
    )
    .heated()
    .id("drago:mekanism/enriched_refined_obsidian");

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "tag": "c:ingots/copper" },
      { "item": "mekanism:enriched_redstone" }
    ],
    "results": [
      {
        "count": 2,
        "id": "mekanism:alloy_infused"
      }
    ]
  }).id("drago:mekanism/alloy_infused_from_enriched_redstone");

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "tag": "c:ingots/copper" },
      { "item": "minecraft:redstone" }
    ],
    "results": [
      {
        "count": 1,
        "id": "mekanism:alloy_infused"
      }
    ]
  }).id("drago:mekanism/alloy_infused_from_redstone");

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "mekanism:alloy_infused" },
      { "item": "mekanism:enriched_diamond" }
    ],
    "results": [
      {
        "count": 2,
        "id": "mekanism:alloy_reinforced"
      }
    ]
  }).id("drago:mekanism/alloy_reinforced_from_enriched_diamond");

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "mekanism:alloy_infused" },
      { "item": "minecraft:diamond" }
    ],
    "results": [
      {
        "count": 1,
        "id": "mekanism:alloy_reinforced"
      }
    ]
  }).id("drago:mekanism/alloy_reinforced_from_diamond");

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "mekanism:alloy_reinforced" },
      { "item": "mekanism:enriched_refined_obsidian" }
    ],
    "results": [
      {
        "count": 2,
        "id": "mekanism:alloy_atomic"
      }
    ]
  }).id("drago:mekanism/alloy_atomic_from_enriched_refined_obsidian");

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "mekanism:alloy_reinforced" },
      { "item": "mekanism:dust_refined_obsidian" }
    ],
    "results": [
      {
        "count": 1,
        "id": "mekanism:alloy_atomic"
      }
    ]
  }).id("drago:mekanism/alloy_atomic_from_dust_enriched_refined_obsidian");
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "tag": "c:dusts/obsidian" },
      { "item": "mekanism:enriched_diamond"}
    ],
    "results": [
      {
        "count": 1,
        "id": "mekanism:dust_refined_obsidian"
      }
    ]
  }).id("drago:mekanism/dust_refined_obsidian_from_enriched_diamond");

  


})
