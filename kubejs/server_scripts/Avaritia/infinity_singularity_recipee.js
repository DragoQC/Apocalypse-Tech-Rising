ServerEvents.recipes(event => {
  event.remove({ id: 'avaritia:infinity_singularity' })
  event.remove({ output: 'avaritia:infinity_singularity' })

  const ids = [
    'heart_of_the_deep_singularity',
    'blaze_rod_singularity',
    'atomic_alloy_singularity',
    'nether_star_singularity',
    'ouranium_singularity',
    'singularity_singularity',
    'andesite_alloy_singularity',
    'prismarine_alloy_singularity',
    'amber_remnant_singularity',
    'echo_ingot_singularity',
    'plastic_singularity',
    'iron_component_singularity',
    'neptunium_ingot_singularity',
    'experience_nugget_singularity',
    'cardboard_singularity',
    'insanite_ingot_singularity',
    'netherite_upgrade_singularity',
    'menril_block_singularity',
    'netherite_furnace_singularity',
    'duratium_ingot_singularity',
    'energite_ingot_singularity',
    'enderium_ingot_singularity',
    'nitro_crystal_singularity',
    'chest_omega_singularity',
    'backpack_omega_singularity',
    'factory_block_singularity',
    'extradisks_fluid_storage_singularity',
    'refinedtypes_energy_storage_singularity',
    'refinedtypes_soul_storage_singularity',
    'mushroom_stew_singularity',
    'rabbit_stew_singularity',
    'bass_stew_singularity',
    'putrid_stew_singularity',
    'strider_stew_singularity',
    'onion_singularity',
    'tomato_singularity',
    'cabbage_singularity',
    'raw_pasta_singularity'
  ]

  event.custom({
    type: 'avaritia:extreme_shapeless',
    result: {
      id: 'avaritia:infinity_singularity'
    },
    ingredients: ids.map(id => ({
      type: 'neoforge:components',
      items: 'avaritia:json_singularity',
      components: {
        'avaritia:singularity_id': id
      },
      strict: true
    }))
  })

  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    show_notification: true,
    category: 'misc',
    pattern: [
      'ABCDEFGHI',
      'JKLMNOPQR',
      'STUVWXYZ ',
      'abcdefghi',
      'jkl      ',
      '         ',
      '         ',
      '         ',
      '         '
    ],
    key: {
      A: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'heart_of_the_deep_singularity' }, strict: true },
      B: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'blaze_rod_singularity' }, strict: true },
      C: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'atomic_alloy_singularity' }, strict: true },
      D: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'nether_star_singularity' }, strict: true },
      E: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'ouranium_singularity' }, strict: true },
      F: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'singularity_singularity' }, strict: true },
      G: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'andesite_alloy_singularity' }, strict: true },
      H: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'prismarine_alloy_singularity' }, strict: true },
      I: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'amber_remnant_singularity' }, strict: true },
      J: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'echo_ingot_singularity' }, strict: true },
      K: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'plastic_singularity' }, strict: true },
      L: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'iron_component_singularity' }, strict: true },
      M: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'neptunium_ingot_singularity' }, strict: true },
      N: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'experience_nugget_singularity' }, strict: true },
      O: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'cardboard_singularity' }, strict: true },
      P: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'insanite_ingot_singularity' }, strict: true },
      Q: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'netherite_upgrade_singularity' }, strict: true },
      R: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'menril_block_singularity' }, strict: true },
      S: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'netherite_furnace_singularity' }, strict: true },
      T: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'duratium_ingot_singularity' }, strict: true },
      U: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'energite_ingot_singularity' }, strict: true },
      V: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'enderium_ingot_singularity' }, strict: true },
      W: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'nitro_crystal_singularity' }, strict: true },
      X: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'chest_omega_singularity' }, strict: true },
      Y: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'backpack_omega_singularity' }, strict: true },
      Z: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'factory_block_singularity' }, strict: true },
      a: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'extradisks_fluid_storage_singularity' }, strict: true },
      b: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'refinedtypes_energy_storage_singularity' }, strict: true },
      c: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'refinedtypes_soul_storage_singularity' }, strict: true },
      d: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'mushroom_stew_singularity' }, strict: true },
      e: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'rabbit_stew_singularity' }, strict: true },
      f: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'bass_stew_singularity' }, strict: true },
      g: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'putrid_stew_singularity' }, strict: true },
      h: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'strider_stew_singularity' }, strict: true },
      i: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'onion_singularity' }, strict: true },
      j: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'tomato_singularity' }, strict: true },
      k: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'cabbage_singularity' }, strict: true },
      l: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'raw_pasta_singularity' }, strict: true }
    },
    result: {
      id: 'avaritia:infinity_singularity',
      count: 1
    }
  })
})
