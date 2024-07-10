import { ref, Ref } from 'vue';
import axios, { AxiosError } from 'axios';

/**
 * ユーザーがGoogle認証を使用してログイン
 */
export function useGoogleAuthLogin() {
    const authUrl = ref('');

    const googleAuthUrl = async () => {
        try {
            // 200 Google認証URLを返す
            const response = await axios.get('/api/v1/auth/google/url');
            authUrl.value = response.data.authUrl;
        } catch (error: any) {
            if (error.response?.status === 400) {
                // 400 Bad Requestの場合
                window.alert('エラーが発生しました。');
            } else if (error.response?.status === 401) {
                // 401 Unauthorizedの場合
                window.alert('認証に失敗しました。');
            } else {
                window.alert('サーバーエラーが発生しました。');
            }
        }
    };

    return { authUrl, googleAuthUrl };
}