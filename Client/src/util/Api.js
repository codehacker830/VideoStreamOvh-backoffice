import axios from 'axios';

console.error("______ process.env.NODE_ENV ____", process.env.NODE_ENV)
let base_url = `http://localhost:8000/api/`;

if (process.env.NODE_ENV != "development") {
    // base_url = `https://admin.videostream.ovh/api/`;
    base_url = `/api/`;
}
export default axios.create({
    baseURL: base_url,//YOUR_API_URL HERE
    headers: {
        'Content-Type': 'application/json',
    }
});
