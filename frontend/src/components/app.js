class App {
  constructor() {
    this.api = new Api();
    this.index = this.index.bind(this);
    this.addItems = this.addItems.bind(this);
    // this.handleEditClick = this.handleEditClick.bind(this);
    // this.handleAddClick = this.handleAddClick.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  attachEventListeners() {
    document.querySelector('#update').addEventListener('submit', this.handleFormSubmit);
    // document.querySelector('#items-list').addEventListener('click', this.handleEditClick);
    document.querySelector('#items-list').addEventListener('click', this.handleBtnClick);
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

  handleBtnClick(e) {
    if(e.target && e.target.dataset.type=='update'){
      const id = parseInt(e.target.dataset.id);
      const item = Item.findById(id);
      document.querySelector('#update').innerHTML = item.renderUpdateForm();
      document.getElementById('cancel').addEventListener('click', this.hideForm);
    }
    if(e.target && e.target.dataset.type=='create'){
      const id = 0
      const item = new Item({id:0,name:"",description:""});
      document.querySelector('#update').innerHTML = item.renderUpdateForm();
      document.getElementById('cancel').addEventListener('click', this.hideForm);
    }
  }

  handleEditClick(e) {
    const id = parseInt(e.target.dataset.id);
    const item = Item.findById(id);
    document.querySelector('#update').innerHTML = item.renderUpdateForm();
    document.getElementById('cancel').addEventListener('click', this.hideForm);
  }

  handleFormSubmit(e) {
    // debugger
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const item = Item.findById(id);
    const name = document.getElementById('update-name').value;
    const description = document.getElementById('update-description').value;
    const location = document.getElementById('update-location').value;

    const bodyJSON = { name, description, location };
    this.api.createItem(item.id, bodyJSON).then(updatedItem => {
    // this.api.updateItem(item.id, bodyJSON).then(updatedItem => {
// debugger
      // const item = Item.findById(updatedItem.id);
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

