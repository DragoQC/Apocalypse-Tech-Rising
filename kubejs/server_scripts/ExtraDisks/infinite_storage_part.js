ServerEvents.recipes(event => {
  const removedInfiniteStorageParts = [
    'extradisks:infinite_item_storage_part',
    'extradisks:infinite_fluid_storage_part',
    'refinedtypes:infinite_energy_storage_part',
    'refinedtypes:infinite_soul_storage_part'
  ]

  removedInfiniteStorageParts.forEach(item => {
    event.remove({ output: item })
  })


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
  }).id("drago:infinite_storage_part_sequenced_assembly");

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
 }).id('drago:create/infinite_storage_part')

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
    C: { item: 'extradisks:1048576b_fluid_storage_part' },
    E: { item: 'minecraft:nether_star' },
    D: {
      type: 'neoforge:components',
      items: 'avaritia:json_singularity',
      components: {'avaritia:singularity_id': 'extradisks_fluid_storage_singularity'},
      strict: true
    }
  },
  result: {
    id: 'extradisks:infinite_fluid_storage_part',
    count: 1
  }
 }).id('drago:create/infinite_fluid_storage_part')

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
    C: { item: 'refinedtypes:8388608k_energy_storage_part' },
    E: { item: 'minecraft:nether_star' },
    D: {
      type: 'neoforge:components',
      items: 'avaritia:json_singularity',
      components: {'avaritia:singularity_id': 'refinedtypes_energy_storage_singularity'},
      strict: true
    }
  },
  result: {
    id: 'refinedtypes:infinite_energy_storage_part',
    count: 1
  }
 }).id('drago:create/infinite_energy_storage_part')

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
    C: { item: 'refinedtypes:2097152k_soul_storage_part' },
    E: { item: 'minecraft:nether_star' },
    D: {
      type: 'neoforge:components',
      items: 'avaritia:json_singularity',
      components: {'avaritia:singularity_id': 'refinedtypes_soul_storage_singularity'},
      strict: true
    }
  },
  result: {
    id: 'refinedtypes:infinite_soul_storage_part',
    count: 1
  }
 }).id('drago:create/infinite_soul_storage_part')



});
