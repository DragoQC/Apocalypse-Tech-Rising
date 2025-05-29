ItemEvents.modification(event => {
  // Modify the existing item by its ID to assign a fuel burn time
  event.modify('alltheores:cinnabar', item => {
    item.burnTime = 1600;  // 1600 ticks = 80 seconds (same as coal burn time)
  });
});
