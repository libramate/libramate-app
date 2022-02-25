class StorageServiceSingleton {
  public getLocalItem(key: string, defaultValue = ""): string {
    return window.localStorage.getItem(key) || defaultValue;
  }
  public setLocalItem(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }
  public getSessionItem(key: string, defaultValue = ""): string {
    return window.sessionStorage.getItem(key) || defaultValue;
  }
  public setSessionItem(key: string, value: string): void {
    window.sessionStorage.setItem(key, value);
  }
}

export const StorageService: StorageServiceSingleton =
  new StorageServiceSingleton();
