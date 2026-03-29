console.info('Heres the compressor script!')

const singularities = [
  {
    id: 'heart_of_the_deep_singularity',
    item: 'deeperdarker:heart_of_the_deep',
    cost: 300,
  },
  {
    id: 'blaze_rod_singularity',
    item: 'minecraft:blaze_rod',
    cost: 600,
  },
  {
    id: 'atomic_alloy_singularity',
    item: 'mekanism:alloy_atomic',
    cost: 50,
  },
  {
    id: 'nether_star_singularity',
    item: 'minecraft:nether_star',
    cost: 150,
  },
  {
    id: 'ouranium_singularity',
    item: 'mysticalextendedtier:ouranium_essence',
    cost: 25,
  },
  {
    id: 'singularity_singularity',
    item: 'ae2:singularity',
    cost: 100,
  },
  {
    id: 'andesite_alloy_singularity',
    item: 'create:andesite_alloy',
    cost: 250,
  },
  {
    id: 'prismarine_alloy_singularity',
    item: 'create_aquatic_ambitions:prismarine_alloy',
    cost: 50,
  },
  {
    id: 'amber_remnant_singularity',
    item: 'garnished:amber_remnant',
    cost: 25,
  },
  {
    id: 'echo_ingot_singularity',
    item: 'create_deep_dark:echo_ingot',
    cost: 25,
  },
  {
    id: 'plastic_singularity',
    item: 'industrialforegoing:plastic',
    cost: 75,
  },
  {
    id: 'iron_component_singularity',
    item: 'immersiveengineering:component_iron',
    cost: 25,
  },
  {
    id: 'neptunium_ingot_singularity',
    item: 'aquaculture:neptunium_ingot',
    cost: 50,
  },
  {
    id: 'experience_nugget_singularity',
    item: 'create:experience_nugget',
    cost: 250,
  },
  {
    id: 'cardboard_singularity',
    item: 'create:cardboard',
    cost: 50,
  },
  {
    id: 'insanite_ingot_singularity',
    item: 'bigreactors:insanite_ingot',
    cost: 20,
  },
  {
    id: 'netherite_upgrade_singularity',
    item: 'functionalstorage:netherite_upgrade',
    cost: 15,
  },
  {
    id: 'menril_block_singularity',
    item: 'integrateddynamics:crystalized_menril_block',
    cost: 250,
  },
  {
    id: 'netherite_furnace_singularity',
    item: 'ironfurnaces:netherite_furnace',
    cost: 15,
  },
  {
    id: 'duratium_ingot_singularity',
    item: 'oritech:duratium_ingot',
    cost: 100,
  },
  {
    id: 'energite_ingot_singularity',
    item: 'oritech:energite_ingot',
    cost: 75,
  },
  {
    id: 'enderium_ingot_singularity',
    item: 'alltheores:enderium_ingot',
    cost: 100,
  },
  {
    id: 'nitro_crystal_singularity',
    item: 'powah:crystal_nitro',
    cost: 100,
  },
  {
    id: 'chest_omega_singularity',
    item: 'sophisticatedstorage:stack_upgrade_omega_tier',
    cost: 2,
  },
  {
    id: 'backpack_omega_singularity',
    item: 'sophisticatedbackpacks:stack_upgrade_omega_tier',
    cost: 2,
  },
  {
    id: 'factory_block_singularity',
    item: 'factory_blocks:factory',
    cost: 1000,
  },
  {
    id: 'refined_storage_singularity',
    item: 'extradisks:1048576k_item_storage_part',
    cost: 3,
  },
  {
    id: 'extradisks_fluid_storage_singularity',
    item: 'extradisks:1048576b_fluid_storage_part',
    cost: 3,
  },
  {
    id: 'refinedtypes_energy_storage_singularity',
    item: 'refinedtypes:8388608k_energy_storage_part',
    cost: 3,
  },
  {
    id: 'refinedtypes_soul_storage_singularity',
    item: 'refinedtypes:2097152k_soul_storage_part',
    cost: 3,
  },
  {
    id: 'applied_mega_storage_singularity',
    item: 'megacells:cell_component_256m',
    cost: 3,
  },
  {
    id: 'coal_singularity',
    item: 'minecraft:coal_block',
    cost: 50,
  },
  {
    id: 'cooked_beef_singularity',
    item: 'minecraft:cooked_beef',
    cost: 100,
  },
  {
    id: 'cooked_porkchop_singularity',
    item: 'minecraft:cooked_porkchop',
    cost: 100,
  },
  {
    id: 'cooked_chicken_singularity',
    item: 'minecraft:cooked_chicken',
    cost: 100,
  },
  {
    id: 'cooked_mutton_singularity',
    item: 'minecraft:cooked_mutton',
    cost: 100,
  },
  {
    id: 'cooked_rabbit_singularity',
    item: 'minecraft:cooked_rabbit',
    cost: 100,
  },
  {
    id: 'cooked_cod_singularity',
    item: 'minecraft:cooked_cod',
    cost: 100,
  },
  {
    id: 'cooked_salmon_singularity',
    item: 'minecraft:cooked_salmon',
    cost: 100,
  },
  {
    id: 'cooked_bacon_singularity',
    item: 'farmersdelight:cooked_bacon',
    cost: 100,
  },
  {
    id: 'beef_patty_singularity',
    item: 'farmersdelight:beef_patty',
    cost: 100,
  },
  {
    id: 'smoked_ham_singularity',
    item: 'farmersdelight:smoked_ham',
    cost: 100,
  },
  {
    id: 'mushroom_stew_singularity',
    item: 'minecraft:mushroom_stew',
    cost: 100,
  },
  {
    id: 'rabbit_stew_singularity',
    item: 'minecraft:rabbit_stew',
    cost: 100,
  },
  {
    id: 'bass_stew_singularity',
    item: 'aquaculturedelight:bass_stew',
    cost: 100,
  },
  {
    id: 'putrid_stew_singularity',
    item: 'garnished:putrid_stew',
    cost: 100,
  },
  {
    id: 'strider_stew_singularity',
    item: 'mynethersdelight:strider_stew',
    cost: 100,
  },
  {
    id: 'onion_singularity',
    item: 'farmersdelight:onion',
    cost: 100,
  },
  {
    id: 'tomato_singularity',
    item: 'farmersdelight:tomato',
    cost: 100,
  },
  {
    id: 'cabbage_singularity',
    item: 'farmersdelight:cabbage',
    cost: 100,
  },
  {
    id: 'raw_pasta_singularity',
    item: 'farmersdelight:raw_pasta',
    cost: 100,
  },
]

ServerEvents.recipes(event => {
  const hasPneumaticCraft = Platform.isLoaded('pneumaticcraft')
  const maxPressureChamberInput = 9 * 64

  singularities.forEach(sing => {
    event.custom({
      type: 'avaritia:compressor',
      result: {
        id: 'avaritia:json_singularity',
        components: {
          'avaritia:singularity_id': sing.id
        }
      },
      cost: sing.cost,
      ingredients: [{ item: sing.item }]
    })

    if (hasPneumaticCraft && sing.cost <= maxPressureChamberInput) {
      const chamberInputs = []
      const fullStacks = Math.floor(sing.cost / 64)
      const remainder = sing.cost % 64

      for (let i = 0; i < fullStacks; i++) {
        chamberInputs.push({
          item: sing.item,
          count: 64
        })
      }

      if (remainder > 0) {
        chamberInputs.push({
          item: sing.item,
          count: remainder
        })
      }

      event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: chamberInputs,
        pressure: 4.0,
        results: [
          {
            id: 'avaritia:json_singularity',
            count: 1,
            components: {
              'avaritia:singularity_id': sing.id
            }
          }
        ]
      }).id(`drago:pneumaticcraft/pressure_chamber/${sing.id}`)
    }
  })
})
