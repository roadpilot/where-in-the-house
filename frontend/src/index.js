document.addEventListener('DOMContentLoaded', () => {
  const app = new App()
  app.attachEventListeners()
  app.api.fetchItems("items").then(app.addItems)
  app.api.fetchItems("locations").then(app.addLocations)
});
