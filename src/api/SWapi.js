export default class SWapi {
  constructor() {
    this.baseUrl = 'https://swapi.co/api/'
    this.serverErrorMsg = 'An error occurred while contacting the SWapi'
  }

  async getFilters() {
    try {
      const res = await fetch(this.baseUrl)
      return res.json();
    } catch(err) {
      throw new Error(this.serverErrorMsg);
    }
  }

  async search(query, filter='') {
    const encode = encodeURI(`${this.baseUrl}${filter}?search=${query}`)
    const res = await fetch(encode)
    if (!res.ok) {
      throw new Error(`An error to find results for ${query} within ${filter} filters`)
    }
    return res.json();
  }
}
