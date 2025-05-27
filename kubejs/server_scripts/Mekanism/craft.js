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
  }).id("create:mekanism/basic_control_circuit");

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
  }).id("create:mekanism/advanced_control_circuit");

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
  }).id("create:mekanism/elite_control_circuit");

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
  }).id("create:mekanism/ultimate_control_circuit");

  event.custom({
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      { "item": "minecraft:redstone"},
      {
        "type": "fluid_stack",
        "fluid": "minecraft:water",
        "amount": 1000
      }
    ],
    "results": [
      {
        "count": 2,
        "item": {
          "id": "mekanism:enriched_redstone",
        }
      }
    ]
  }).id("create:mekanism/enriched_redstone");

   event.custom({
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      { "tag": "c:dusts/diamond"},
      {
        "type": "fluid_stack",
        "fluid": "minecraft:water",
        "amount": 1000
      }
    ],
    "results": [
      {
        "count": 4,
        "item": {
          "id": "mekanism:enriched_diamond",
        }
      }
    ]
  }).id("create:mekanism/enriched_diamond");

  event.custom({
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      { "item": "mekanism:dust_refined_obsidian"},
      {
        "type": "fluid_stack",
        "fluid": "minecraft:water",
        "amount": 1000
      }
    ],
    "results": [
      {
        "count": 2,
        "item": {
          "id": "mekanism:enriched_refined_obsidian",
        }
      }
    ]
  }).id("create:mekanism/enriched_refined_obsidian");

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "tag": "c:ingots/copper" },
      { "item": "mekanism:enriched_redstone" }
    ],
    "results": [
      {
        "count": 2,
        "item": {
          "id": "mekanism:alloy_infused"
        }
      }
    ]
  }).id("create:mekanism/alloy_infused_from_enriched_redstone");

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "tag": "c:ingots/copper" },
      { "item": "minecraft:redstone" }
    ],
    "results": [
      {
        "count": 1,
        "item": {
          "id": "mekanism:alloy_infused"
        }
      }
    ]
  }).id("create:mekanism/alloy_infused_from_redstone");

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "mekanism:alloy_infused" },
      { "item": "mekanism:enriched_diamond" }
    ],
    "results": [
      {
        "count": 2,
        "item": {
          "id": "mekanism:alloy_reinforced"
        }
      }
    ]
  }).id("create:mekanism/alloy_reinforced_from_enriched_diamond");

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "mekanism:alloy_infused" },
      { "item": "minecraft:diamond" }
    ],
    "results": [
      {
        "count": 1,
        "item": {
          "id": "mekanism:alloy_reinforced"
        }
      }
    ]
  }).id("create:mekanism/alloy_reinforced_from_diamond");

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "mekanism:alloy_reinforced" },
      { "item": "mekanism:enriched_refined_obsidian" }
    ],
    "results": [
      {
        "count": 2,
        "item": {
          "id": "mekanism:alloy_atomic"
        }
      }
    ]
  }).id("create:mekanism/alloy_atomic_from_enriched_refined_obsidian");

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "mekanism:alloy_reinforced" },
      { "item": "mekanism:dust_refined_obsidian" }
    ],
    "results": [
      {
        "count": 1,
        "item": {
          "id": "mekanism:alloy_atomic"
        }
      }
    ]
  }).id("create:mekanism/alloy_atomic_from_dust_enriched_refined_obsidian");
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "tag": "c:dusts/obsidian" },
      { "item": "mekanism:enriched_diamond"}
    ],
    "results": [
      {
        "count": 1,
        "item": {
          "id": "mekanism:dust_refined_obsidian"
        }
      }
    ]
  }).id("create:mekanism/dust_refined_obsidian_from_enriched_diamond");

  


})