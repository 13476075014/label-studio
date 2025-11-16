import { EnterpriseBadge, IconSpark } from "@humansignal/ui";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@humansignal/shad/components/ui/alert";
import { IconCloudProviderDatabricks } from "@humansignal/icons";
import type { ProviderConfig } from "@humansignal/app-common/blocks/StorageProviderForm/types/provider";
import { defaultT } from "../../../../utils/scripts";
import i18n from "i18next";
const t = i18n.t.bind(i18n);

const databricksProvider: ProviderConfig = {
  name: "databricks",
  title: defaultT(
    t,
    "pages.settings.storage.databricks_files",
    "Databricks Files\n(UC Volumes)"
  ),
  description: defaultT(
    t,
    "pages.settings.storage.config_databricks_files",
    "Configure your Databricks Unity Catalog Volumes connection with all required settings (proxy only)"
  ),
  icon: IconCloudProviderDatabricks,
  disabled: true,
  badge: <EnterpriseBadge />,
  fields: [
    {
      name: "enterprise_info",
      type: "message",
      content: (
        <Alert variant="gradient">
          <IconSpark />
          <AlertTitle>
            {defaultT(
              t,
              "pages.settings.storage.enterprise_feature",
              "Enterprise Feature"
            )}
          </AlertTitle>
          <AlertDescription>
            {defaultT(
              t,
              "pages.settings.storage.databricks_files_enterprise",
              " Databricks Files (UC Volumes) is available in Label Studio Enterprise."
            )}{" "}
            <a
              href="https://docs.humansignal.com/guide/storage.html#Databricks-Files-UC-Volumes"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              {defaultT(t, "common.learn_more", "Learn more")}
            </a>
          </AlertDescription>
        </Alert>
      ),
    },
  ],
  layout: [{ fields: ["enterprise_info"] }],
};

export default databricksProvider;
