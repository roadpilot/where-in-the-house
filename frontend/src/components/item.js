class Item {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    Item.all.push(this);
  }

  renderListItem() {
    let disp = this.name
    if (disp==""){disp = "unknown, but..."}
    return `
    <details>
      <summary>${disp}
        <button data-id=${this.id}>edit</button>
      </summary>
      ${this.description}
    </details>`;
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
      <button id='cancel'>Cancel</button>
    </form>
  `;
  }

    update({ name, description }) {
    this.name = name;
    this.description = description;
  }


}

Item.all = [];