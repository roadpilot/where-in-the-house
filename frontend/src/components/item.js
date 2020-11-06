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
      <label>Name
        <input type="text" id='update-name' value="${this.name}">
      </label><br>
      <label>How would you describe it?<br>
        <textarea id='update-description'>${this.description}</textarea>
      </label><br>
      <label>Where are you putting it?<br>
        <input list='locax' id='update-location'>
        <datalist id='locax'>
        <option>in the garbage</option
        </datalist>
      </label><br>
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