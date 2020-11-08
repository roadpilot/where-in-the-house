class Api {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1'
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }

  fetchItems(type) {
    return fetch(`${this.baseUrl}/${type}`).then(resp => resp.json())
  }

  updateItem(id, body) {
    return this.action(`${this.baseUrl}/items/${id}`, body, "PATCH")
  }

  createItem(id, body) {
    return this.action(`${this.baseUrl}/items`, body, "POST")
  }

  action(url, body, method) {
    return fetch(url, {
      method: method,
      headers: this.headers,
      body: JSON.stringify(body),
    }).then(res => res.json())
  }
}