class Item {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.locations = data.locations;
    Item.all.unshift(this);
  }

  renderListItem() {
    let disp = this.name
    if (disp==""){disp = "unknown, but..."}
    let detail_str =
      `<details>
      <summary><button data-id=${this.id} data-type='update'>📝</button> &nbsp; ${disp}</summary>`
      if (this.description !=""){
        detail_str +=         
        `It's been described as:<br>
        ${this.description}<br>`
      }
      detail_str += `Where you might find it:<br>`
      this.locations.slice().reverse().forEach(location => detail_str += ("➡" + location.name + "<br>"))
      detail_str += `</details>`;
    return detail_str
  }

  static findById(id) {
    return this.all.find(item => item.id === id);
  }

  renderForm() {
    let optionStr = ""
    locations.sort().forEach(location => {
      optionStr += `<option>${location}</option>`
    })
    return `
    <form data-id=${this.id}>
      <label>Name it!
        <input type="text" id='update-name' value="${this.name}" autocomplete="off">
      </label><br>
      <label>How would you describe it?<br>
        <textarea id='update-description'>${this.description}</textarea>
      </label><br>
      <label>Where are you putting it?<br>
        <input type="text" autocomplete=off list='locax' id='update-location' value="${this.locations[this.locations.length-1].name}">
        <datalist id='locax'>`
        + optionStr +
        `</datalist>
      </label><br>
      <button type='submit'>Save Item</button>
      <button type='button' id='cancel'>Cancel</button>
    </form>`
  }

    update({id, name, description, locations}) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.locations = locations
  }
}

Item.all = [];