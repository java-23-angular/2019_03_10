const TOKEN = 'java23_token';

export class StoreProvider {

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  getToken(): string {
    return localStorage.getItem(TOKEN);
  }

  clearToken(): void {
    localStorage.removeItem(TOKEN);
  }

  isAuth(): boolean {
    return localStorage.getItem(TOKEN) != null;
  }
}
