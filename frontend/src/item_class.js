console.log("item class loaded")

class Item {

    constructor(obj) {
        this.id = obj.id
        this.description = obj.description
        this.current_location = obj.current_location
        this.proper_location = obj.proper_location
        items.push(this)
        // console.log(this);
    }

    show() {
        // return `
        // <tr><td data-itemid='${this.id}' data-props='${JSON.stringify(this)}' class='item-element'>
        // <a class="show-link" href='#'>${this.body}</a></td>
        // <td><button data-action='edit-item'>Edit</button>
        // <i data-action='delete-item' class="em em-scream_cat"></i></td>
        // `
        console.log(this)
    }


}
