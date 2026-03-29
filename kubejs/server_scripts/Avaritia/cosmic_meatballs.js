ServerEvents.recipes(event => {
  event.remove({ id: 'avaritia:cosmic_meatballs' })
  event.remove({ output: 'avaritia:cosmic_meatballs' })

  const meatSingularities = [
    'cooked_beef_singularity',
    'cooked_porkchop_singularity',
    'cooked_chicken_singularity',
    'cooked_mutton_singularity',
    'cooked_rabbit_singularity',
    'cooked_cod_singularity',
    'cooked_salmon_singularity',
    'cooked_bacon_singularity',
    'beef_patty_singularity',
    'smoked_ham_singularity'
  ]

  const shapelessIngredients = meatSingularities.map(id => ({
    type: 'neoforge:components',
    items: 'avaritia:json_singularity',
    components: {
      'avaritia:singularity_id': id
    },
    strict: true
  }))
  shapelessIngredients.push({ item: 'avaritia:neutron_pile' })

  event.custom({
    type: 'avaritia:extreme_shapeless',
    result: {
      id: 'avaritia:cosmic_meatballs',
      count: 2
    },
    ingredients: shapelessIngredients
  }).id('drago:avaritia/cosmic_meatballs')

  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    show_notification: true,
    category: 'misc',
    pattern: [
      'ABCD     ',
      'EFNG     ',
      'HIJ      ',
      '         ',
      '         ',
      '         ',
      '         ',
      '         ',
      '         '
    ],
    key: {
      A: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'cooked_beef_singularity' }, strict: true },
      B: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'cooked_porkchop_singularity' }, strict: true },
      C: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'cooked_chicken_singularity' }, strict: true },
      D: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'cooked_mutton_singularity' }, strict: true },
      E: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'cooked_rabbit_singularity' }, strict: true },
      F: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'cooked_cod_singularity' }, strict: true },
      G: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'cooked_salmon_singularity' }, strict: true },
      H: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'cooked_bacon_singularity' }, strict: true },
      I: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'beef_patty_singularity' }, strict: true },
      J: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'smoked_ham_singularity' }, strict: true },
      N: { item: 'avaritia:neutron_pile' }
    },
    result: {
      id: 'avaritia:cosmic_meatballs',
      count: 2
    }
  }).id('drago:create/cosmic_meatballs')
})
