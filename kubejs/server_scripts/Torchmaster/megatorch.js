ServerEvents.recipes(event => {
  event.remove({ output: "torchmaster:megatorch" });

  event.custom({
    type: "create:mechanical_crafting",
    accept_mirrored: false,
    show_notification: false,
    category: "misc",
    pattern: [
      "EAE      ",
      "BDB      ",
      "CFC      ",
      "         ",
      "         ",
      "         ",
      "         ",
      "         ",
      "         ",
    ],
    key: {
      A: {
        type: "neoforge:components",
        items: "avaritia:json_singularity",
        components: { "avaritia:singularity_id": "coal_singularity" },
        strict: true,
      },
      B: { tag: "c:storage_blocks/diamond" },
      C: { tag: "c:storage_blocks/gold" },
      D: { item: "constructionstick:netherite_stick" },
      E: { item: "allthecompressed:coal_block_5x" },
      F: { tag: "c:storage_blocks/coal" },
    },
    result: {
      id: "torchmaster:megatorch",
      count: 1,
    },
  }).id("drago:create/megatorch");

  event.custom({
    type: "avaritia:extreme_shaped",
    result: {
      id: "torchmaster:megatorch",
    },
    pattern: [
      "EAE      ",
      "BDB      ",
      "CFC      ",
      "         ",
      "         ",
      "         ",
      "         ",
      "         ",
      "         ",
    ],
    key: {
      A: {
        type: "neoforge:components",
        items: "avaritia:json_singularity",
        components: { "avaritia:singularity_id": "coal_singularity" },
        strict: true,
      },
      B: { tag: "c:storage_blocks/diamond" },
      C: { tag: "c:storage_blocks/gold" },
      D: { item: "constructionstick:netherite_stick" },
      E: { item: "allthecompressed:coal_block_5x" },
      F: { tag: "c:storage_blocks/coal" },
    },
  }).id("drago:avaritia/megatorch");
});
