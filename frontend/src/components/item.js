class Item {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.locations = data.locations;
    // debugger
    Item.all.push(this);
  }

  renderListItem() {
    let disp = this.name
    if (disp==""){disp = "unknown, but..."}
    let detail_str =
      `<details>
      <summary>${disp}<button data-id=${this.id}>edit</button></summary>`
      if (this.description !=""){
        detail_str +=         
        `It's been described as:<br>
        ${this.description}<br>`
      }
      detail_str += `Where it's been seen:<br>`
      this.locations.forEach(location => detail_str += (location.name + "<br>"))
      detail_str += `</details>`;
    return detail_str
  }

  static findById(id) {
    return this.all.find(note => note.id === id);
  }

  renderUpdateForm() {
    return `
    <form data-id=${this.id}>
      <label>Title</label>
      <p>
        <input type="text" value="${this.name}" />
      </p>
      <label>Content</label>
      <p>
        <textarea>${this.description}</textarea>
      </p>
      <button type='submit'>Save Item</button>
      <button type='button' id='cancel'>Cancel</button>
    </form>
  `;
  }

    update({ name, description }) {
    this.name = name;
    this.description = description;
  }


}

Item.all = [];