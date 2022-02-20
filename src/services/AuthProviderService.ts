export interface AuthProvider {
  img: string;
  name: string;
  url: string;
  id: number;
}

const AuthProviderService = {
  getAuthProviders: function (serverUrl: string): Promise<AuthProvider[]> {
    return new Promise((resolve) => {
      resolve([
        {
          id: 1,
          img: "https://github.githubassets.com/favicons/favicon-dark.svg",
          name: "GitHub",
          url: "https://github.com/login/oauth/authorize?client_id=16fd856fbe6f3d9bfcc5&scope=read:user",
        },
        {
          id: 2,
          img: "https://github.githubassets.com/favicons/favicon-dark.svg",
          name: "GitHub",
          url: "https://github.com/login/oauth/authorize?client_id=16fd856fbe6f3d9bfcc5&scope=read:user",
        },
      ]);
    });
    //TODO implement backend provider list
    return fetch(`${serverUrl}/auth/providers`).then((response) =>
      response.json()
    );
  },
};

export default AuthProviderService;
