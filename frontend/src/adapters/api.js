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
    return this.patch(`${this.baseUrl}/items/${id}`, body)
  }

  patch(url, body) {
    return fetch(url, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body),
    }).then(res => res.json())
  }
}