// src/hooks/useFetchUsers.ts
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { User } from '../types/interfaces';

export function useFetchUsers() {
  const users = ref<User[]>([]);

  const fetchUsers = async () => {
    const response = await axios.get('/api/users');
    users.value = response.data;
  };

  onMounted(fetchUsers);

  return { users, fetchUsers };
}