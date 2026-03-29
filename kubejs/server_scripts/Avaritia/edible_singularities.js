const edibleSingularityIds = new Set([
  // Meat singularities
  'cooked_beef_singularity',
  'cooked_porkchop_singularity',
  'cooked_chicken_singularity',
  'cooked_mutton_singularity',
  'cooked_rabbit_singularity',
  'cooked_cod_singularity',
  'cooked_salmon_singularity',
  'cooked_bacon_singularity',
  'beef_patty_singularity',
  'smoked_ham_singularity',
  // Stew singularities
  'mushroom_stew_singularity',
  'rabbit_stew_singularity',
  'bass_stew_singularity',
  'putrid_stew_singularity',
  'strider_stew_singularity',
  'onion_singularity',
  'tomato_singularity',
  'cabbage_singularity',
  'raw_pasta_singularity'
])

function getSingularityId(itemStack) {
  const componentString = String(itemStack.componentString || '')
  let match = componentString.match(/avaritia:singularity_id\s*=\s*"([^"]+)"/)
  if (!match) {
    match = componentString.match(/"avaritia:singularity_id"\s*:\s*"([^"]+)"/)
  }
  if (!match) {
    match = componentString.match(/avaritia:singularity_id\s*=\s*([a-z0-9_./-]+)/)
  }
  return match ? match[1] : null
}

ItemEvents.rightClicked('avaritia:json_singularity', event => {
  if (String(event.hand) !== 'MAIN_HAND') return

  const singularityId = getSingularityId(event.item)
  if (!singularityId || !edibleSingularityIds.has(singularityId)) return

  const isCreative = event.player.isCreative ? event.player.isCreative() : !!event.player.creative
  if (!isCreative) {
    event.item.shrink(1)
  }

  if (event.player.potionEffects && event.player.potionEffects.add) {
    event.player.potionEffects.add('minecraft:saturation', 20, 1, false, false)
    event.player.potionEffects.add('minecraft:instant_health', 1, 0, false, false)
    return
  }

  const playerName = event.player.username
    ? String(event.player.username)
    : String(event.player.name.string)
  event.server.runCommandSilent(`execute as ${playerName} run effect give @s minecraft:saturation 1 2 true`)
  event.server.runCommandSilent(`execute as ${playerName} run effect give @s minecraft:instant_health 1 0 true`)
  event.server.runCommandSilent(`execute as ${playerName} at @s run playsound minecraft:entity.generic.eat player @s ~ ~ ~ 0.8 1.0`)
})
