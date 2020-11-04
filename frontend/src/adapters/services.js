console.log("adapter loaded")
class ItemsAdapter {
    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/items.json"
    }

    getItems(){
        return fetch(this.baseUrl).then(res => res.json()) 
    }

    createItem(name) {
    const itemCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    }
    return fetch(this.baseUrl, itemCreateParams).then(res => res.json())
  }
}

adapter = new ItemsAdapter()
const items = adapter.getItems()