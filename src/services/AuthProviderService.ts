export interface AuthProvider {
  img: string;
  name: string;
  url: string;
  id: string;
}

class AuthProviderServiceSingleton {
  public getAuthProviders(serverUrl: string): Promise<AuthProvider[]> {
    return Promise.resolve<AuthProvider[]>([
      {
        id: "1",
        img: "https://github.githubassets.com/favicons/favicon-dark.svg",
        name: "GitHub",
        url: "https://github.com/login/oauth/authorize?client_id=16fd856fbe6f3d9bfcc5&scope=read:user",
      },
      {
        id: "2",
        img: "https://github.githubassets.com/favicons/favicon-dark.svg",
        name: "GitHub",
        url: "https://github.com/login/oauth/authorize?client_id=16fd856fbe6f3d9bfcc5&scope=read:user",
      },
    ]);
    // TODO implement backend provider list
    return fetch(`${serverUrl}/auth/providers`).then((response: Response) =>
      response.json()
    ) as Promise<AuthProvider[]>;
  }
}

export const AuthProviderService: AuthProviderServiceSingleton =
  new AuthProviderServiceSingleton();
