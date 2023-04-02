const axios = require('axios')
const { DUMMY_API_URL } = require('../constants/constants')

const list = async (filterQuery) => {
  let BASE_URL = DUMMY_API_URL;

  if (filterQuery && filterQuery.query) {
    BASE_URL += `/search?q=${filterQuery.query}`
  }

  const { data } = await axios.get(BASE_URL);
  return data;
}

const create = async (newProduct) => {
  const { data } = await axios.post(`${DUMMY_API_URL}/add`, newProduct);
  return data;
}

const update = async (id, updates) => {
  try {
    const { data } = await axios.put(`${DUMMY_API_URL}/${id}`, updates);
    return data;
  } catch (e) {
    // If product doesn't exist on DUMMY_API
    return { id, ...updates };
  }
}

module.exports = {
  list,
  create,
  update
};
