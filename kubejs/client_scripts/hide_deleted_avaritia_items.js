RecipeViewerEvents.removeEntries('item', event => {
  const itemsToHide = [
    'avaritia:copper_singularity',
    'avaritia:iron_singularity',
    'avaritia:gold_singularity',
    'avaritia:lapis_singularity',
    'avaritia:redstone_singularity',
    'avaritia:quartz_singularity',
    'avaritia:diamond_singularity',
    'avaritia:emerald_singularity',
    'avaritia:amethyst_singularity',
    'avaritia:netherite_singularity',
    'avaritia:record_fragment'
  ];

  itemsToHide.forEach(item => event.remove(item));
});
