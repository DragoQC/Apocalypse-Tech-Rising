ServerEvents.recipes(event => {
  // Your working recipes (keeping these as they are)
  event.custom({
    "type": "create:splashing",
    "ingredients": [
      { "item": "minecraft:cod_spawn_egg" }
    ],
    "results": [
      {
        "count": 1,
        "item": {
          "id": "minecraft:zombie_spawn_egg"
        }
      }
    ]
  }).id("kubejs:splash_cod_to_zombie_egg");

  event.custom({
    "type": "create:pressing",
    "ingredients": [
      { "item": "minecraft:cod_spawn_egg" }
    ],
    "results": [
      {
        "count": 1,
        "item": {
          "id": "minecraft:zombie_spawn_egg"
        }
      }
    ]
  }).id("kubejs:press_cod_to_zombie_egg");



  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:cod_spawn_egg" },
    "transitional_item": { "id": "minecraft:cod_spawn_egg" },
    "loops": 1,
    "results": [
      { "id": "minecraft:gold_ingot", "count": 1 }
    ],
    "sequence": [
      {
        "type": "create:pressing",
        "ingredients": [{ "item": "minecraft:cod_spawn_egg" }],
        "results": [{ "id": "minecraft:cod_spawn_egg" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "minecraft:cod_spawn_egg" },
          { "item": "minecraft:diamond" }
        ],
        "results": [{ "id": "minecraft:cod_spawn_egg" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "minecraft:cod_spawn_egg" },
          { "item": "minecraft:gold_ingot", "return_chance": 1.0 }
        ],
        "results": [{ "id": "minecraft:cod_spawn_egg" }]
      }
    ]
  }).id("kubejs:test_assembly_with_diamond_tool_water");

  event.remove({ output: "extradisks:infinite_item_storage_part" });


  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "type": "neoforge:components",
      "items": "avaritia:json_singularity",
      "components": { "avaritia:singularity_id": "refined_storage_singularity" },
      "strict": true
    },
    "transitional_item": { "id": "extradisks:withering_processor" },
    "loops": 1,
    "results": [
      { "id": "extradisks:infinite_item_storage_part", "count": 1 }
    ],
    "sequence": [

      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "extradisks:withering_processor" },
          { "item": "refinedstorage:processor_binding" },

        ],
        "results": [{ "id": "extradisks:withering_processor" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "extradisks:withering_processor" },
          { "item": "refinedstorage:advanced_processor" }
        ],
        "results": [{ "id": "extradisks:withering_processor" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "extradisks:withering_processor" },
          {
            "item": "extradisks:withering_processor"
          }
        ],
        "results": [{ "id": "extradisks:withering_processor" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "extradisks:withering_processor" },
          {
            "item": "minecraft:nether_star"
          }
        ],
        "results": [{ "id": "extradisks:withering_processor" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [{ "item": "extradisks:withering_processor" }],
        "results": [{ "id": "extradisks:withering_processor" }]
      }
    ]
  }).id("create:infinite_storage_part_sequenced_assembly");

 event.custom({
  type: 'create:mechanical_crafting',
  accept_mirrored: false,
  show_notification: false,
  category: 'misc',
  pattern: [
    '  A      ',
    ' CBC     ',
    'AEDEA    ',
    ' CBC     ',
    '  A      ',
    '         ',
    '         ',
    '         ',
    '         '
  ],
  key: {
    A: { item: 'refinedstorage:processor_binding' },
    B: { item: 'refinedstorage:advanced_processor' },
    C: { item: 'extradisks:withering_processor' },
    E: { item: 'minecraft:nether_star' },
    D: {
      type: 'neoforge:components',
      items: 'avaritia:json_singularity',
      components: {'avaritia:singularity_id': 'refined_storage_singularity'},
      strict: true
    }
  },
  result: {
    id: 'extradisks:infinite_item_storage_part',
    count: 1
  }
}).id('custom:create/infinite_storage_part')



});