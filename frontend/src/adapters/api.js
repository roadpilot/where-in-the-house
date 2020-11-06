class Api {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1'
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }

  fetchItems() {
    return fetch(`${this.baseUrl}/items`).then(resp => resp.json())
  }

  updateItem(id, body) {
    return this.action(`${this.baseUrl}/items/${id}`, body, "PATCH")
  }

  createItem(id, body) {
    let a = this.action(`${this.baseUrl}/items`, body, "POST")
    console.log(a)
    // debugger
    return a
  }

  action(url, body, method) {
    return fetch(url, {
      method: method,
      headers: this.headers,
      body: JSON.stringify(body),
    }).then(res => res.json())
  }

}