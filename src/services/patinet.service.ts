import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASEURL;

const instance = axios.create({ baseURL });

export const patientService = () => ({
  getPatinentRecords: async () => {
    const { data } = await instance.get(`/users`);
    return data;
  },
});
