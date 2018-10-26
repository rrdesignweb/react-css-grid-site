import axios from 'axios';

export default function getItems() {
  axios.get('../data/data_arr.js')
    .then(response => this.setState({ items: response.data}));
}
