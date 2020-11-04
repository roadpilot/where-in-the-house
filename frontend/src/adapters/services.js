console.log("adapter loaded")
class ItemsAdapter {
    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/items.json"
    }

    getItems(){
        return fetch(this.baseUrl).then(res => res.json()) 
    }
}

adapter = new ItemsAdapter()
const items = adapter.getItems()