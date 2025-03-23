import axios from "axios";

const API_URL = "http://localhost:5292/api/metrics";

export const fetchMetrics = () => axios.get(API_URL);
export const addMetric = (metric) => axios.post(API_URL, metric);
