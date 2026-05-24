// src/services/apiService.js
// Cliente HTTP para APIs

import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'https://api.ejemplo.com'

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export async function get(endpoint) {
  try {
    const response = await apiClient.get(endpoint)
    return response.data
  } catch (error) {
    console.error(`Error GET ${endpoint}:`, error)
    throw error
  }
}

export async function post(endpoint, data) {
  try {
    const response = await apiClient.post(endpoint, data)
    return response.data
  } catch (error) {
    console.error(`Error POST ${endpoint}:`, error)
    throw error
  }
}

export async function put(endpoint, data) {
  try {
    const response = await apiClient.put(endpoint, data)
    return response.data
  } catch (error) {
    console.error(`Error PUT ${endpoint}:`, error)
    throw error
  }
}

export async function deleteRequest(endpoint) {
  try {
    const response = await apiClient.delete(endpoint)
    return response.data
  } catch (error) {
    console.error(`Error DELETE ${endpoint}:`, error)
    throw error
  }
}

export default apiClient
