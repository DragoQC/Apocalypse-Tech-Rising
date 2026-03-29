ServerEvents.recipes(event => {
  event.shaped(Item.of("refinedstorage:raw_advanced_processor", 1), [
    "AB",
    "CD",
  ], {
    A: { item: "refinedstorage:processor_binding" },
    B: { tag: "c:gems/sapphire" },
    C: { tag: "c:silicon" },
    D: { item: "minecraft:redstone" },
  }).id("drago:refinedstorage/saphire_processor");
	event.shaped(Item.of("refinedstorage:raw_advanced_processor", 1), [
    "AB",
    "CD",
  ], {
    A: { item: "refinedstorage:processor_binding" },
    B: { tag: "c:gems/ruby" },
    C: { tag: "c:silicon" },
    D: { item: "minecraft:redstone" },
  }).id("drago:refinedstorage/ruby_processor");
});
