class App {
  constructor() {
    this.api = new Api();
    this.index = this.index.bind(this);
    this.addItems = this.addItems.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  attachEventListeners() {
    document.querySelector('#items-list').addEventListener('click', this.handleEditClick);
    document.querySelector('#update').addEventListener('submit', this.handleFormSubmit);
  }

  index(items) {
    items.forEach(item => {
      new Item(item);
    });
    // debugger
    this.addItems();
  }

  addItems() {
    document.querySelector('#items-list').innerHTML = '';
    Item.all.forEach(
      item => (document.querySelector('#items-list').innerHTML += item.renderListItem())
    );
  }

  handleEditClick(e) {
    const id = parseInt(e.target.dataset.id);
    const item = Item.findById(id);
    document.querySelector('#update').innerHTML = item.renderUpdateForm();
    document.getElementById('cancel').addEventListener('click', this.hideForm);
  }

  handleFormSubmit(e) {
    debugger
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const item = Item.findById(id);
    const name = e.target.querySelector('input').value;
    const description = e.target.querySelector('textarea').value;

    const bodyJSON = { name, description };
    this.api.updateItem(item.id, bodyJSON).then(updatedItem => {
      const item = Item.findById(updatedItem.id);
      item.update(updatedItem);
      this.addItems();
      document.querySelector('#update').innerHTML = ""
    })
  }
  hideForm(e) {
      e.preventDefault();
      document.querySelector('#update').innerHTML = ""
  }
}

