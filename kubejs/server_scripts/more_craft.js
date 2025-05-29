// Visit the wiki for more info - https://kubejs.com/
console.info('Heres the more_craft example script!')
ServerEvents.recipes(event => {
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    show_notification: true,
    category: 'misc',
    pattern: [
      'AAAAAAAAA',
      'AFBFFFBFA',
      'AFFFCFFFA',
      'AFBFEFBFA',
      'AFFEDEFFA',
      'AFBFEFBFA',
      'AFFFCFFFA',
      'AFBFFFBFA',
      'AAAAAAAAA'
    ],
    key: {
      A: { item: 'create:experience_nugget' },
      B: { item: 'forbidden_arcanus:xpetrified_orb' },
      C: { item: 'forbidden_arcanus:stellarite_piece' },
      D: { item: 'minecraft:nether_star' },
      E: { item: 'forbidden_arcanus:soul' },
      F: { item: 'forbidden_arcanus:arcane_crystal' },
    },
    result: {
      id: 'forbidden_arcanus:eternal_stella',
      count: 1
    }
  })

  event.custom({
    type: 'avaritia:extreme_shaped',
    result: {
      id: 'forbidden_arcanus:eternal_stella'
    },
    pattern: [
      'AAAAAAAAA',
      'AFBFFFBFA',
      'AFFFCFFFA',
      'AFBFEFBFA',
      'AFFEDEFFA',
      'AFBFEFBFA',
      'AFFFCFFFA',
      'AFBFFFBFA',
      'AAAAAAAAA'
    ],
    key: {
      A: { item: 'create:experience_nugget' },
      B: { item: 'forbidden_arcanus:xpetrified_orb' },
      C: { item: 'forbidden_arcanus:stellarite_piece' },
      D: { item: 'minecraft:nether_star' },
      E: { item: 'forbidden_arcanus:soul' },
      F: { item: 'forbidden_arcanus:arcane_crystal' },
    }
  })

  event.remove({ output: "torchmaster:megatorch" });


  event.shaped(Item.of("refinedstorage:raw_advanced_processor", 1), [
    'AB',
    'CD',
  ], {
    A: { "item": 'refinedstorage:processor_binding' },
    B: { "tag": 'c:gems/sapphire' },
    D: { "item": 'minecraft:redstone' },
    C: { "tag": 'c:silicon' }
  }).id("dragoqc:refinedstorage/saphire_processor");


  event.custom({
  type: 'create:mechanical_crafting',
  accept_mirrored: false,
  show_notification: false,
  category: 'misc',
  pattern: [
    'EAE      ',
    'BDB      ',
    'CFC      ',
    '         ',
    '         ',
    '         ',
    '         ',
    '         ',
    '         '
  ],
  key: {
    A: { 
      type: 'neoforge:components',
      items: 'avaritia:json_singularity',
      components: {'avaritia:singularity_id': 'coal_singularity'},
      strict: true 
    },
    B: { tag: 'c:storage_blocks/diamond' },
    C: { tag: 'c:storage_blocks/gold' },
    E: { item: 'compressedblocks:crated_torch' },
    D: { item: 'compressedblocks:crated_stick' },
    F: { tag: 'c:storage_blocks/coal' },
  },
  result: {
    id: 'torchmaster:megatorch',
    count: 1
  }
}).id('drago:create/megatorch')

event.custom({
    type: 'avaritia:extreme_shaped',
    result: {
      id: 'torchmaster:megatorch'
    },
    pattern: [
    'EAE      ',
    'BDB      ',
    'CFC      ',
    '         ',
    '         ',
    '         ',
    '         ',
    '         ',
    '         '
    ],
    key: {
      A: { 
      type: 'neoforge:components',
      items: 'avaritia:json_singularity',
      components: {'avaritia:singularity_id': 'coal_singularity'},
      strict: true 
    },
    B: { tag: 'c:storage_blocks/diamond' },
    C: { tag: 'c:storage_blocks/gold' },
    E: { item: 'compressedblocks:crated_torch' },
    D: { item: 'compressedblocks:crated_stick' },
    F: { tag: 'c:storage_blocks/coal' },
    }
  })






});