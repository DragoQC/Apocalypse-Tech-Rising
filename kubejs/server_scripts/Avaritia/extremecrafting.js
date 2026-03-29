ServerEvents.recipes(event => {
  const pattern = [
    '  A      ',
    ' CBC     ',
    'AEDEA    ',
    ' CBC     ',
    '  A      ',
    '         ',
    '         ',
    '         ',
    '         '
  ]

  const recipes = [
    {
      output: 'extradisks:infinite_item_storage_part',
      catalyst: 'extradisks:withering_processor',
      singularity: 'refined_storage_singularity',
      id: 'drago:avaritia/extreme/infinite_item_storage_part'
    },
    {
      output: 'extradisks:infinite_fluid_storage_part',
      catalyst: 'extradisks:1048576b_fluid_storage_part',
      singularity: 'extradisks_fluid_storage_singularity',
      id: 'drago:avaritia/extreme/infinite_fluid_storage_part'
    },
    {
      output: 'refinedtypes:infinite_energy_storage_part',
      catalyst: 'refinedtypes:8388608k_energy_storage_part',
      singularity: 'refinedtypes_energy_storage_singularity',
      id: 'drago:avaritia/extreme/infinite_energy_storage_part'
    },
    {
      output: 'refinedtypes:infinite_soul_storage_part',
      catalyst: 'refinedtypes:2097152k_soul_storage_part',
      singularity: 'refinedtypes_soul_storage_singularity',
      id: 'drago:avaritia/extreme/infinite_soul_storage_part'
    }
  ]

  recipes.forEach(recipe => {
    event.custom({
      type: 'avaritia:extreme_shaped',
      pattern: pattern,
      key: {
        A: { item: 'refinedstorage:processor_binding' },
        B: { item: 'refinedstorage:advanced_processor' },
        C: { item: recipe.catalyst },
        E: { item: 'minecraft:nether_star' },
        D: {
          type: 'neoforge:components',
          items: 'avaritia:json_singularity',
          components: { 'avaritia:singularity_id': recipe.singularity },
          strict: true
        }
      },
      result: {
        id: recipe.output,
        count: 1
      }
    }).id(recipe.id)
  })
})
