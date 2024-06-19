import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fluxofficial');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
}
