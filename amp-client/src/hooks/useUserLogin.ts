import { ref, Ref } from 'vue';
import axios, { AxiosError } from 'axios';

export function useUserLogin(email: Ref<string> = ref(''), error: Ref<string> = ref('')) {
    const validateEmail = (email: string): string => {
        if (!email) {
            return 'メールアドレスは必須です。';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return '有効なメールアドレス形式である必要があります。';
        }
        if (email.length > 20) {
            return 'メールアドレスは20文字以内である必要があります。';
        }
        return '';
    };

    const authenticateUser = async () => {
        const validationError = validateEmail(email.value);
        if (validationError) {
            error.value = validationError;
            return;
        }
        try {
            await axios.post('/api/v1/login', { email: email.value });
            // 成功時の処理
        } catch (err) {
            const axiosError = err as AxiosError;
            if (axiosError.response && axiosError.response.status === 401) {
                error.value = '認証に失敗しました。';
            } else {
                error.value = 'サーバーエラーが発生しました。';
            }
        }
    };

    return { email, error, authenticateUser };
}