class App {
  constructor() {
    this.api = new Api();
    this.addItems = this.addItems.bind(this);
    this.addLocations = this.addLocations.bind(this);
    this.indexItems = this.indexItems.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  attachEventListeners() {
    document.querySelector('#update').addEventListener('submit', this.handleFormSubmit);
    document.querySelector('#items-list').addEventListener('click', this.handleBtnClick);
    document.querySelector('#createBtn').addEventListener('click', this.handleBtnClick);
    document.querySelector('#indexBtn').addEventListener('click', this.handleBtnClick);
  }

  addItems(items) {
    items.forEach(item => {
      new Item(item);
    });
    this.indexItems();
  }

  addLocations(items) {
    items.forEach(item => {
      // new Location(item);
      locations.push(item.name)
    });
  }

  indexItems() {
    document.querySelector('#indexBtn').disabled = true
    document.querySelector('#createBtn').disabled = false
    document.querySelector('#items-list').innerHTML = '';
    Item.all.forEach(
      item => (document.querySelector('#items-list').innerHTML += item.renderListItem())
    );
  }

  handleBtnClick(e) {
    if (e.target && e.target.dataset.type=='update'){
      document.querySelector('#indexBtn').disabled = false
      document.querySelector('#createBtn').disabled = false
      const id = parseInt(e.target.dataset.id);
      const item = Item.findById(id);
      document.querySelector('#items-list').style.display="none";
      document.querySelector('#update').innerHTML = item.renderForm();
      document.getElementById('cancel').addEventListener('click', this.hideForm);
    }
    else if (e.target && e.target.id=='createBtn'){
      document.querySelector('#indexBtn').disabled = false
      document.querySelector('#createBtn').disabled = true
      let item = null
      if (!Item.findById(0)){
        item = new Item({id:0,name:"",description:"",locations:[{name:""}]});
      }
      else{
        item = Item.findById(0)
      }
      document.querySelector('#items-list').style.display="none";
      document.querySelector('#update').innerHTML = item.renderForm();
      document.getElementById('cancel').addEventListener('click', this.hideForm);
    }
    else if (e.target && e.target.id=='indexBtn'){
      this.hideForm(e)
      // this.index()
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const item = Item.findById(id);
    const name = document.getElementById('update-name').value;
    const description = document.getElementById('update-description').value;
    const location = document.getElementById('update-location').value;
    if (location == ""){
      alert("Location can't be blank")
    }
    else{
      // debugger
      if (!locations.includes(location)){
        // new Location({name: location})
        locations.push(location)
      }
      const bodyJSON = { name, description, location };
      if (id==0){
        this.api.createItem(item.id, bodyJSON).then(updatedItem => {
        item.update(updatedItem);
        this.indexItems();
        this.hideForm(e)
        })
      }
      else{
        this.api.updateItem(item.id, bodyJSON).then(updatedItem => {
        item.update(updatedItem);
        this.indexItems();
        this.hideForm(e)
        })
      }
    }
  }

  hideForm(e) {
    e.preventDefault();
    if (!!Item.findById(0)){
      Item.all.shift()
    }
    document.querySelector('#update').innerHTML = ""
    document.querySelector('#items-list').style.display="";
    document.querySelector('#indexBtn').disabled = true
    document.querySelector('#createBtn').disabled = false
  }
}

