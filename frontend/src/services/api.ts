import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const housesApi = {
  getAll: () => api.get('/houses'),
  getById: (id: number) => api.get(`/houses/${id}`),
  updatePoints: (id: number, points: number) => api.put(`/houses/${id}/points`, { points }),
  addPoints: (id: number, points: number) => api.post(`/houses/${id}/add-points`, { points }),
};

export const charactersApi = {
  getAll: () => api.get('/characters'),
  getById: (id: number) => api.get(`/characters/${id}`),
  getByHouse: (houseId: number) => api.get(`/characters/house/${houseId}`),
  create: (character: any) => api.post('/characters', character),
};

export const spellsApi = {
  getAll: () => api.get('/spells'),
  getById: (id: number) => api.get(`/spells/${id}`),
  getByType: (type: string) => api.get(`/spells/type/${type}`),
};

export const potionsApi = {
  getAll: () => api.get('/potions'),
  getById: (id: number) => api.get(`/potions/${id}`),
};

export const locationsApi = {
  getAll: () => api.get('/locations'),
  getById: (id: number) => api.get(`/locations/${id}`),
};

export default api;
