export interface Settings {
  name: string;
}

class SettingsServiceSingleton {
  private _settings!: Settings;

  public get settings(): Settings {
    return this._settings;
  }
}

export const SettingsService: SettingsServiceSingleton =
  new SettingsServiceSingleton();
