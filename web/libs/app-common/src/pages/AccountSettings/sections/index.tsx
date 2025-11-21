import { PersonalInfo } from "./PersonalInfo";
import { EmailPreferences } from "./EmailPreferences";
import {
  PersonalAccessToken,
  PersonalAccessTokenDescription,
} from "./PersonalAccessToken";
import { MembershipInfo } from "./MembershipInfo";
import { HotkeysManager } from "./Hotkeys";
import type React from "react";
import { PersonalJWTToken } from "./PersonalJWTToken";
import type { AuthTokenSettings } from "../types";
import { ff } from "@humansignal/core";
import { Badge } from "@humansignal/ui";
import { defaultT } from "../../../../../core/src/index";
import i18n from "i18next";
const t = i18n.t.bind(i18n);

export type SectionType = {
  title: string | React.ReactNode;
  id: string;
  component: React.FC;
  description?: React.FC;
};

export const accountSettingsSections = (
  settings: AuthTokenSettings
): SectionType[] => {
  return [
    {
      title: defaultT(
        t,
        "pages.account_settings.personal_info",
        "Personal Info"
      ),
      id: "personal-info",
      component: PersonalInfo,
    },
    {
      title: (
        <div className="flex items-center gap-tight">
          <span>
            {defaultT(t, "pages.account_settings.hot_keys", "Hotkeys")}
          </span>
          <Badge variant="beta">Beta</Badge>
        </div>
      ),
      id: "hotkeys",
      component: HotkeysManager,
      description: () =>
        defaultT(
          t,
          "pages.account_settings.hotkeys_description",
          "Customize your keyboard shortcuts to speed up your workflow. Click on any hotkey below to assign a new key combination that works best for you."
        ),
    },
    {
      title: defaultT(
        t,
        "pages.account_settings.email_preferences",
        "Email Preferences"
      ),
      id: "email-preferences",
      component: EmailPreferences,
    },
    {
      title: defaultT(
        t,
        "pages.account_settings.membership_info",
        "Membership Info"
      ),
      id: "membership-info",
      component: MembershipInfo,
    },
    settings.api_tokens_enabled &&
      ff.isActive(ff.FF_AUTH_TOKENS) && {
        title: defaultT(
          t,
          "pages.account_settings.personal_access_token",
          "Personal Access Token"
        ),
        id: "personal-access-token",
        component: PersonalJWTToken,
        description: PersonalAccessTokenDescription,
      },
    settings.legacy_api_tokens_enabled && {
      title: ff.isActive(ff.FF_AUTH_TOKENS)
        ? defaultT(t, "pages.account_settings.legacy_token", "Legacy Token")
        : defaultT(t, "pages.account_settings.access_token", "Access Token"),
      id: "legacy-token",
      component: PersonalAccessToken,
      description: PersonalAccessTokenDescription,
    },
  ].filter(Boolean) as SectionType[];
};
