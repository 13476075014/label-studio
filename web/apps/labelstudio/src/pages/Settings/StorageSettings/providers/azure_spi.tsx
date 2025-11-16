import { EnterpriseBadge, IconSpark } from "@humansignal/ui";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@humansignal/shad/components/ui/alert";
import { IconCloudProviderAzure } from "@humansignal/icons";
import type { ProviderConfig } from "@humansignal/app-common/blocks/StorageProviderForm/types/provider";
import { useTranslation } from "react-i18next";
import { defaultT } from "../../../../utils/scripts";
import i18n from "i18next";
const t = i18n.t.bind(i18n);

const azureSpiProvider: ProviderConfig = {
  name: "azure_spi",
  title: defaultT(
    t,
    "pages.settings.storage.azure_blob_storage_with_service_principal",
    "Azure Blob Storage\nwith Service Principal"
  ),
  description: defaultT(
    t,
    "pages.settings.storage.azure_blob_storage_with_service_principal_description",
    "Configure your Azure Blob Storage connection using Service Principal authentication for enhanced security (proxy only)"
  ),
  icon: IconCloudProviderAzure,
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
              "pages.settings.storage.azure_blob_storage_with_service_principal_description_enterprise",
              "Azure Blob Storage with Service Principal is available in Label Studio Enterprise."
            )}{" "}
            <a
              href="https://docs.humansignal.com/guide/storage.html#Azure-Blob-Storage-with-Service-Principal-authentication"
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

export default azureSpiProvider;
