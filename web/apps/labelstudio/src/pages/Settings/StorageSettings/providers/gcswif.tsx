import { EnterpriseBadge, IconSpark } from "@humansignal/ui";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@humansignal/shad/components/ui/alert";
import { IconCloudProviderGCS } from "@humansignal/icons";
import type { ProviderConfig } from "@humansignal/app-common/blocks/StorageProviderForm/types/provider";
import { defaultT } from "../../../../utils/scripts";
import i18n from "i18next";
const t = i18n.t.bind(i18n);

const gcsWifProvider: ProviderConfig = {
  name: "gcswif",
  title: defaultT(
    t,
    "pages.settings.storage.google_cloud_storage",
    "Google Cloud Storage\n(WIF Auth)"
  ),
  description: defaultT(
    t,
    "pages.settings.storage.configuration_description_wif",
    "Configure your Google Cloud Storage connection with Workload Identity Federation authentication (proxy only)"
  ),
  icon: IconCloudProviderGCS,
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
              "pages.settings.storage.google_cloud_storage_wif_description",
              "Google Cloud Storage with Workload Identity Federation is available in Label Studio Enterprise."
            )}{" "}
            <a
              href="https://docs.humansignal.com/guide/storage.html#Google-Cloud-Storage-with-Workload-Identity-Federation-WIF"
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

export default gcsWifProvider;
