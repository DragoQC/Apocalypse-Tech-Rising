ServerEvents.recipes(event => {
  event.remove({ id: 'avaritia:ultimate_stew' })
  event.remove({ output: 'avaritia:ultimate_stew' })

  const stewSingularities = [
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

  const shapelessIngredients = stewSingularities.map(id => ({
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
      id: 'avaritia:ultimate_stew',
      count: 1
    },
    ingredients: shapelessIngredients
  }).id('drago:avaritia/ultimate_stew')

  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    show_notification: true,
    category: 'misc',
    pattern: [
      'ABC      ',
      'DNE      ',
      'FGH      ',
      'I        ',
      '         ',
      '         ',
      '         ',
      '         ',
      '         '
    ],
    key: {
      A: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'mushroom_stew_singularity' }, strict: true },
      B: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'rabbit_stew_singularity' }, strict: true },
      C: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'bass_stew_singularity' }, strict: true },
      D: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'putrid_stew_singularity' }, strict: true },
      E: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'strider_stew_singularity' }, strict: true },
      F: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'onion_singularity' }, strict: true },
      G: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'tomato_singularity' }, strict: true },
      H: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'cabbage_singularity' }, strict: true },
      I: { type: 'neoforge:components', items: 'avaritia:json_singularity', components: { 'avaritia:singularity_id': 'raw_pasta_singularity' }, strict: true },
      N: { item: 'avaritia:neutron_pile' }
    },
    result: {
      id: 'avaritia:ultimate_stew',
      count: 1
    }
  }).id('drago:create/ultimate_stew')
})
