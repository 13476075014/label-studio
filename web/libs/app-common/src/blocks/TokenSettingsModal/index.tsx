import {
  settingsAtom,
  TOKEN_SETTINGS_KEY,
} from "@humansignal/app-common/pages/AccountSettings/atoms";
import type { AuthTokenSettings } from "@humansignal/app-common/pages/AccountSettings/types";
import { Button } from "@humansignal/ui";
import { Form, Input, Toggle } from "apps/labelstudio/src/components/Form";
import { useAtomValue } from "jotai";
import { queryClientAtom } from "jotai-tanstack-query";
import { type ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { defaultT } from "../../../../core/src/index";
import i18n from "i18next";
const t = i18n.t.bind(i18n);

export const TokenSettingsModal = ({
  showTTL,
  onSaved,
}: {
  showTTL?: boolean;
  onSaved?: () => void;
}) => {
  // const { t } = useTranslation();
  const settings = useAtomValue(settingsAtom);
  if (!settings.isSuccess || settings.isError || "error" in settings.data) {
    return (
      <div>
        {defaultT(
          t,
          "pages.organization.error_loading_settings",
          "Error loading settings."
        )}
      </div>
    );
  }
  return (
    <TokenSettingsModalView
      key={settings.data?.api_tokens_enabled}
      settings={settings.data}
      showTTL={showTTL}
      onSaved={onSaved}
    />
  );
};

function TokenSettingsModalView({
  settings,
  showTTL,
  onSaved,
}: {
  settings: AuthTokenSettings;
  showTTL?: boolean;
  onSaved?: () => void;
}) {
  // const { t } = useTranslation();
  const [enableTTL, setEnableTTL] = useState(settings.api_tokens_enabled);
  const queryClient = useAtomValue(queryClientAtom);
  const reloadSettings = () => {
    queryClient.invalidateQueries({ queryKey: [TOKEN_SETTINGS_KEY] });
    onSaved?.();
  };
  return (
    <Form action="accessTokenUpdateSettings" onSubmit={reloadSettings}>
      <Form.Row columnCount={1}>
        <Toggle
          label={defaultT(
            t,
            "pages.organization.personal_access_tokens",
            "Personal Access Tokens"
          )}
          name="api_tokens_enabled"
          description={defaultT(
            t,
            "pages.organization.enable_increased_token_authentication_security",
            "Enable increased token authentication security"
          )}
          checked={settings.api_tokens_enabled ?? false}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEnableTTL(e.target.checked)
          }
        />
      </Form.Row>
      <Form.Row columnCount={1}>
        <Toggle
          label={defaultT(
            t,
            "pages.organization.legacy_tokens",
            "Legacy Tokens"
          )}
          name="legacy_api_tokens_enabled"
          description={defaultT(
            t,
            "pages.organization.legacy_tokens_description",
            "Enable legacy access tokens, these do not expire"
          )}
          checked={settings.legacy_api_tokens_enabled ?? true}
        />
      </Form.Row>
      {showTTL === true && (
        <Form.Row columnCount={1}>
          <Input
            name="api_token_ttl_days"
            label={defaultT(
              t,
              "pages.organization.time_to_live",
              "Time-to-Live (optional, Personal Access Token only)"
            )}
            description={defaultT(
              t,
              "pages.organization.time_to_live_description",
              "The number of days, after creation, that the token will be valid for. After this time period a user will need to create a new access token"
            )}
            labelProps={{
              description: defaultT(
                t,
                "pages.organization.time_to_live_description2",
                "The number of days, after creation, that the token will be valid for. After this time period a user will need to create a new access token"
              ),
            }}
            disabled={!enableTTL}
            type="number"
            min={10}
            max={365}
            value={settings.api_token_ttl_days ?? 30}
          />
        </Form.Row>
      )}
      <Form.Actions>
        <Button variant="primary" look="filled" type="submit">
          {defaultT(t, "pages.organization.save_changes", "Save Changes")}
        </Button>
      </Form.Actions>
    </Form>
  );
}
