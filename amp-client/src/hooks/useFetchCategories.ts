import { ref } from 'vue';
import axios, { AxiosError } from 'axios';
import { Category } from '../types/interfaces';

export function useFetchCategories() {
    const categories = ref<Category[]>([]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('/api/v1/categories');
            categories.value = response.data;
        } catch (error) {
            const err = error as AxiosError;
            if (err.response) {
                if (err.response.status === 401) {
                    window.alert('認証に失敗しました。');
                } 
                if (err.response.status === 500) {
                    window.alert('サーバーエラーが発生しました。');
                }
            } else {
                window.alert('ネットワークエラーが発生しました。');
            }
        }
    };

    return { categories, fetchCategories };
}

