console.log("items loaded")
class Items{
    constructor(){
        this.items = []
        this.initBindingsAndEventListeners()
        this.adapter = new ItemsAdapter()
        this.fetchAndLoadItems()
    }


    initBindingsAndEventListeners() {
    this.itemsForm = document.getElementById('new-item-form')
    this.itemInput = document.getElementById('new-item-body')
    this.itemsNode = document.getElementById('items-container')
    this.itemShowNode = document.getElementById('item-show')
    this.body = document.querySelector('body')
    this.itemsForm.addEventListener('submit', this.handleAddItem.bind(this))
    this.itemsNode.addEventListener('click', this.handleItemClick.bind(this))
    this.body.addEventListener('blur', this.updateItem.bind(this), true)
  }
  
    fetchAndLoadItems() {
    this.adapter
      .getItems()
      .then(itemsJSON =>
        // console.log(itemsJSON)
        itemsJSON.forEach(item => this.items.push(new Item(item)))
      )
      .then(this.render.bind(this))
      .catch(error => console.log(error))
  }

  handleItemClick() {
    if (
      event.target.dataset.action === 'delete-item' &&
      event.target.parentElement.classList.contains('item-element')
    ) {
      const itemId = event.target.parentElement.dataset.itemid
      this.adapter.deleteItem(itemId).then(resp => this.removeDeletedItem(resp))
    } else if (event.target.dataset.action === 'edit-item') {
      this.toggleEditItem()
    } else if (event.target.className === 'show-link') {
      const itemId = event.target.parentElement.dataset.itemid
      const item = this.items.find(item => item.id === +itemId)
      this.itemShowNode.innerHTML = item.renderShow()
    }
  }

  handleAddItem() {
    event.preventDefault()
    const body = this.itemInput.value
    this.adapter
      .createItem(body)
      .then(itemJSON => this.items.push(new Item(itemJSON)))
      .then(this.render.bind(this))
      .then(() => (this.itemInput.value = ''))
  }

  toggleEditItem() {
    const { parentElement: target } = event.target
    if (target.className == 'item-element') {
      target.classList.add('editable')
      const itemId = target.dataset.itemid
      const item = this.items.find(n => n.id == itemId)
      target.contentEditable = true
      target.innerHTML = item.body
      target.focus()
    }
  }
  updateItem() {
    if (event.target.className.includes('item-element')) {
      const { target } = event
      target.contentEditable = false
      target.classList.remove('editable')
      const body = event.target.innerHTML
      const itemId = target.dataset.itemid
      this.adapter.updateItem(body, itemId).then(updatedItem => {
        this.items = this.items.map(
          n => (n.id === updatedItem.id ? new Item(updatedItem) : n)
        )
        this.render()
      })
    }
  }

  itemsHTML() {
    return this.items.map(item => item.render()).join('')
  }
      render() {
    this.itemsNode.innerHTML = `<table>${this.itemsHTML()}</table>`
  }
}