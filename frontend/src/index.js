document.addEventListener('DOMContentLoaded', () => {
  const app = new App()
  app.attachEventListeners()
  app.api.fetchItems("items").then(app.index)
  app.api.fetchItems("locations").then(app.indexLocations)
});
