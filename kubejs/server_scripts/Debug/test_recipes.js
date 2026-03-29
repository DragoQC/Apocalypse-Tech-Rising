ServerEvents.recipes(event => {
  event.custom({
    type: "create:splashing",
    ingredients: [
      { item: "minecraft:cod_spawn_egg" },
    ],
    results: [
      {
        count: 1,
        id: "minecraft:zombie_spawn_egg",
      },
    ],
  }).id("drago:splash_cod_to_zombie_egg");

  event.custom({
    type: "create:pressing",
    ingredients: [
      { item: "minecraft:cod_spawn_egg" },
    ],
    results: [
      {
        count: 1,
        id: "minecraft:zombie_spawn_egg",
      },
    ],
  }).id("drago:press_cod_to_zombie_egg");

  event.custom({
    type: "create:sequenced_assembly",
    ingredient: { item: "minecraft:cod_spawn_egg" },
    transitional_item: { id: "minecraft:cod_spawn_egg" },
    loops: 1,
    results: [
      { id: "minecraft:gold_ingot", count: 1 },
    ],
    sequence: [
      {
        type: "create:pressing",
        ingredients: [{ item: "minecraft:cod_spawn_egg" }],
        results: [{ id: "minecraft:cod_spawn_egg" }],
      },
      {
        type: "create:deploying",
        ingredients: [
          { item: "minecraft:cod_spawn_egg" },
          { item: "minecraft:diamond" },
        ],
        results: [{ id: "minecraft:cod_spawn_egg" }],
      },
      {
        type: "create:deploying",
        ingredients: [
          { item: "minecraft:cod_spawn_egg" },
          { item: "minecraft:gold_ingot", return_chance: 1.0 },
        ],
        results: [{ id: "minecraft:cod_spawn_egg" }],
      },
    ],
  }).id("drago:test_assembly_with_diamond_tool_water");
});
