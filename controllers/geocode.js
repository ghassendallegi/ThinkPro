import axios from 'axios';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
export async function geocode(req, res) {
  const address = req.query.address;
  if (!address) {
    return res.status(400).json({ error: 'Address is required' });
  }
  
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching geocode data:', error);
    res.status(500).json({ error: 'Error fetching geocode data' });
  }
}


