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

 

});
