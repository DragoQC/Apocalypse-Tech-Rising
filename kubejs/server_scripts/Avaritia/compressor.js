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
    id: 'ironwood_ingot_singularity',
    item: 'twilightforest:ironwood_ingot',
    cost: 100,
  },
  {
    id: 'steeleaf_ingot_singularity',
    item: 'twilightforest:steeleaf_ingot',
    cost: 100,
  },
  {
    id: 'knightmetal_ingot_singularity',
    item: 'twilightforest:knightmetal_ingot',
    cost: 100,
  },
  {
    id: 'fiery_ingot_singularity',
    item: 'twilightforest:fiery_ingot',
    cost: 100,
  },
  {
    id: 'factory_block_singularity',
    item: 'factory_blocks:factory',
    cost: 1000,
  },
  {
    id: 'eternal_stella_singularity',
    item: 'forbidden_arcanus:eternal_stella',
    cost: 5,
  },
  {
    id: 'refined_storage_singularity',
    item: 'extradisks:1048576k_item_storage_part',
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
]

ServerEvents.recipes(event => {
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
  })
})