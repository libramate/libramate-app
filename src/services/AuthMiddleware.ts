import { useJwt } from "react-jwt";
import { ACCESS_TOKEN } from "util/constants";
import { StorageService } from "./StorageService";

class AuthProviderService {
  public async fetch<T>(
    input: RequestInfo,
    init: RequestInit = {}
  ): Promise<T> {
    const token: string = this.getAccessToken();
    const { isExpired } = useJwt(token);

    if (isExpired) {
      await this.refreshToken();
    }

    init.headers = { Authorization: `Bearer${token}` };

    return fetch(input, init).then((res: Response) => res.json()) as Promise<T>;
  }

  private async refreshToken(): Promise<void> {
    // TODO refresh token
  }

  private getAccessToken(): string {
    return StorageService.getLocalItem(ACCESS_TOKEN, "");
  }
}

export default AuthProviderService;
