document.addEventListener('DOMContentLoaded', () => {
  const app = new App()
  app.attachEventListeners()
  app.api.fetchItems().then(app.index)
});
