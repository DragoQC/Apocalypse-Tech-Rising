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


event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "ae2:printed_calculation_processor" },
    "transitional_item": { "id": "ae2:calculation_processor" },
    "loops": 1,
    "results": [
      { "id": "ae2:calculation_processor", "count": 1 }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "ae2:printed_calculation_processor" },          
          { "item": "minecraft:redstone" }
        ],
        "results": [{ "id": "ae2:calculation_processor" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "ae2:printed_calculation_processor" },
          { "item": "ae2:printed_silicon" }
        ],
        "results": [{ "id": "ae2:calculation_processor" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "ae2:printed_calculation_processor" }
        ],
        "results": [{ "id": "ae2:calculation_processor" }]
      },
    ]
  }).id("create:ae2/calculation_processor_from_printed_calculation_processor");


  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "ae2:quartz_block" },
      { "item": "ae2:calculation_processor_press" }
    ],
    "keep_held_item": true,
    "results": [
      {
        "count": 6,
        "item": {
          "id": "ae2:printed_calculation_processor"
        }
      }
    ]
  }).id("create:ae2/printed_calculation_processor_from_quartz_block");

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "ae2:printed_engineering_processor" },
    "transitional_item": { "id": "ae2:engineering_processor" },
    "loops": 1,
    "results": [
      { "id": "ae2:engineering_processor", "count": 1 }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "ae2:printed_engineering_processor" },          
          { "item": "minecraft:redstone" }
        ],
        "results": [{ "id": "ae2:engineering_processor" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "ae2:printed_engineering_processor" },
          { "item": "ae2:printed_silicon" }
        ],
        "results": [{ "id": "ae2:engineering_processor" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "ae2:printed_engineering_processor" }
        ],
        "results": [{ "id": "ae2:engineering_processor" }]
      },
    ]
  }).id("create:ae2/engineering_processor_from_printed_engineering_processor");


  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "minecraft:diamond_block" },
      { "item": "ae2:engineering_processor_press" }
    ],
    "keep_held_item": true,
    "results": [
      {
        "count": 12,
        "item": {
          "id": "ae2:printed_engineering_processor"
        }
      }
    ]
  }).id("create:ae2/printed_engineering_processor_from_quartz_block");

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "ae2:printed_logic_processor" },
    "transitional_item": { "id": "ae2:logic_processor" },
    "loops": 1,
    "results": [
      { "id": "ae2:logic_processor", "count": 1 }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "ae2:printed_logic_processor" },          
          { "item": "minecraft:redstone" }
        ],
        "results": [{ "id": "ae2:logic_processor" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "ae2:printed_logic_processor" },
          { "item": "ae2:printed_silicon" }
        ],
        "results": [{ "id": "ae2:logic_processor" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "ae2:printed_logic_processor" }
        ],
        "results": [{ "id": "ae2:logic_processor" }]
      },
    ]
  }).id("create:ae2/logic_processor_from_printed_logic_processor");


  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "minecraft:gold_block" },
      { "item": "ae2:logic_processor_press"}
    ],
    "keep_held_item": true,
    "results": [
      {
        "count": 12,
        "item": {
          "id": "ae2:printed_logic_processor"
        }
      }
    ]
  }).id("create:ae2/printed_logic_processor_from_quartz_block");

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "tag": "c:storage_blocks/silicon" },
      { "item": "ae2:silicon_press"}
    ],
    "keep_held_item": true,
    "results": [
      {
        "count": 12,
        "item": {
          "id": "ae2:printed_silicon"
        }
      }
    ]
  }).id("create:ae2/printed_silicon_from_silicon_block");

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "advanced_ae:printed_quantum_processor" },
    "transitional_item": { "id": "advanced_ae:quantum_processor" },
    "loops": 1,
    "results": [
      { "id": "advanced_ae:quantum_processor", "count": 1 }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "advanced_ae:printed_quantum_processor" },          
          { "item": "minecraft:redstone" }
        ],
        "results": [{ "id": "advanced_ae:quantum_processor" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "advanced_ae:printed_quantum_processor" },
          { "item": "ae2:printed_silicon" }
        ],
        "results": [{ "id": "advanced_ae:quantum_processor" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "advanced_ae:printed_quantum_processor" }
        ],
        "results": [{ "id": "advanced_ae:quantum_processor" }]
      },
    ]
  }).id("create:ae2/quantum_processor_from_printed_quantum_processor");


  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "advanced_ae:quantum_alloy_block" },
      { "item": "advanced_ae:quantum_processor_press"}
    ],
    "keep_held_item": true,
    "results": [
      {
        "count": 12,
        "item": {
          "id": "advanced_ae:printed_quantum_processor"
        }
      }
    ]
  }).id("create:ae2/printed_quantum_processor_from_quartz_block");

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "extendedae:concurrent_processor_print" },
    "transitional_item": { "id": "extendedae:concurrent_processor" },
    "loops": 1,
    "results": [
      { "id": "extendedae:concurrent_processor", "count": 1 }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "extendedae:concurrent_processor_print" },          
          { "item": "minecraft:redstone" }
        ],
        "results": [{ "id": "extendedae:concurrent_processor" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "extendedae:concurrent_processor_print" },
          { "item": "ae2:printed_silicon" }
        ],
        "results": [{ "id": "extendedae:concurrent_processor" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "extendedae:concurrent_processor_print" }
        ],
        "results": [{ "id": "extendedae:concurrent_processor" }]
      },
    ]
  }).id("create:ae2/concurrent_processor_from_concurrent_processor_print");


  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "extendedae:entro_block" },
      { "item": "extendedae:concurrent_processor_press" }
    ],
    "keep_held_item": true,
    "results": [
      {
        "count": 6,
        "item": {
          "id": "extendedae:concurrent_processor_print"
        }
      }
    ]
  }).id("create:ae2/printed_concurrent_processor_from_entro_block");

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "appflux:printed_energy_processor" },
    "transitional_item": { "id": "appflux:energy_processor" },
    "loops": 1,
    "results": [
      { "id": "appflux:energy_processor", "count": 1 }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "appflux:printed_energy_processor" },          
          { "item": "minecraft:redstone" }
        ],
        "results": [{ "id": "appflux:energy_processor" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "appflux:printed_energy_processor" },
          { "item": "ae2:printed_silicon" }
        ],
        "results": [{ "id": "appflux:energy_processor" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "appflux:printed_energy_processor" }
        ],
        "results": [{ "id": "appflux:energy_processor" }]
      },
    ]
  }).id("create:ae2/energy_processor_from_energy_processor_print");


  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "appflux:charged_redstone_block" },
      { "item": "appflux:energy_processor_press" }
    ],
    "keep_held_item": true,
    "results": [
      {
        "count": 12,
        "item": {
          "id": "appflux:printed_energy_processor"
        }
      }
    ]
  }).id("create:ae2/printed_energy_processor_from_charged_redstone_block");



  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "megacells:printed_accumulation_processor" },
    "transitional_item": { "id": "megacells:accumulation_processor" },
    "loops": 1,
    "results": [
      { "id": "megacells:accumulation_processor", "count": 1 }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "megacells:printed_accumulation_processor" },          
          { "item": "ae2:fluix_dust" }
        ],
        "results": [{ "id": "megacells:accumulation_processor" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "megacells:printed_accumulation_processor" },
          { "item": "ae2:printed_silicon" }
        ],
        "results": [{ "id": "megacells:accumulation_processor" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "megacells:printed_accumulation_processor" }
        ],
        "results": [{ "id": "megacells:accumulation_processor" }]
      },
    ]
  }).id("create:ae2/accumulation_processor_from_printed_accumulation_processor");


  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "megacells:sky_steel_block" },
      { "item": "megacells:accumulation_processor_press" }
    ],
    "keep_held_item": true,
    "results": [
      {
        "count": 12,
        "item": {
          "id": "megacells:printed_accumulation_processor"
        }
      }
    ]
  }).id("create:ae2/printed_accumulation_processor_from_quartz_block");

});