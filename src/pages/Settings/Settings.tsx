import { Settings, SettingsService } from "services/SettingsService";

export default function SettingsPage(): JSX.Element {
  const settings: Settings = SettingsService.settings;
  return <>Settings</>;
}
