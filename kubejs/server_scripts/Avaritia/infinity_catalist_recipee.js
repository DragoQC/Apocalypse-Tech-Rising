ServerEvents.recipes(event => {
  event.remove({ output: 'avaritia:infinity_catalyst' })

  event.custom({
    type: 'avaritia:extreme_shapeless',
    result: {
      id: 'avaritia:infinity_catalyst'
    },
    ingredients: [
      { item: 'avaritia:crystal_matrix_block' },
      { item: 'avaritia:neutronium_block' },
      { item: 'avaritia:ultimate_stew' },
      { item: 'avaritia:cosmic_meatballs' },
      { item: 'avaritia:endest_pearl' },
      { item: 'avaritia:infinity_singularity' },
      { item: 'mysticalextendedtier:ouranium_block' }
    ]
  })

  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    show_notification: true,
    category: 'misc',
    pattern: [
      'ABCDEFG  ',
      '         ',
      '         ',
      '         ',
      '         ',
      '         ',
      '         ',
      '         ',
      '         '
    ],
    key: {
      A: { item: 'avaritia:crystal_matrix_block' },
      B: { item: 'avaritia:neutronium_block' },
      C: { item: 'avaritia:ultimate_stew' },
      D: { item: 'avaritia:cosmic_meatballs' },
      E: { item: 'avaritia:endest_pearl' },
      F: { item: 'mysticalextendedtier:ouranium_block' },
      G: { item: 'avaritia:infinity_singularity' }
    },
    result: {
      id: 'avaritia:infinity_catalyst',
      count: 1
    }
  })
})
