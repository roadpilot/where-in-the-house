console.log("item loaded")
class Item {
  constructor(itemJSON) {
    this.body = itemJSON.name
    this.id = itemJSON.id
  }

  renderShow() {
    return `<h3>${this.body}</h3>`
  }

  render() {
    return `<tr><td data-itemid='${this.id}' data-props='${JSON.stringify(
      this
    )}' class='item-element'><a class="show-link" href='#'>${
      this.body
    }</a></td><td><button data-action='edit-item'>Edit</button> <i data-action='delete-item' class="em em-scream_cat"></i></td>`
  }
}