import type { ProviderConfig } from "@humansignal/app-common/blocks/StorageProviderForm/types/provider";
import { IconCloudProviderAzure } from "@humansignal/icons";
import { z } from "zod";
import { defaultT } from "../../../../utils/scripts";
import i18n from "i18next";
const t = i18n.t.bind(i18n);

export const azureProvider: ProviderConfig = {
  name: "azure",
  title: defaultT(
    t,
    "pages.settings.storage.azure_blob_storage",
    "Azure Blob Storage"
  ),
  description: defaultT(
    t,
    "pages.settings.storage.configuration_required",
    "Configure your Azure Blob Storage connection with all required Label Studio settings"
  ),
  icon: IconCloudProviderAzure,
  fields: [
    {
      name: "container",
      type: "text",
      label: defaultT(
        t,
        "pages.settings.storage.container_name",
        "Container Name"
      ),
      required: true,
      placeholder: defaultT(
        t,
        "pages.settings.storage.my_azure_container",
        "my-azure-container"
      ),
      schema: z.string().min(1, "Container name is required"),
    },
    {
      name: "prefix",
      type: "text",
      label: defaultT(
        t,
        "pages.settings.storage.bucket_prefix",
        "Bucket prefix"
      ),
      placeholder: defaultT(
        t,
        "pages.settings.storage.path_to_files",
        "path/to/files"
      ),
      schema: z.string().optional().default(""),
      target: "export",
    },
    {
      name: "account_name",
      type: "password",
      label: defaultT(
        t,
        "pages.settings.storage.account_name",
        "Account Name"
      ),
      autoComplete: "off",
      accessKey: true,
      placeholder: defaultT(
        t,
        "pages.settings.storage.mystorage_account",
        "mystorageaccount"
      ),
      schema: z.string().optional().default(""),
    },
    {
      name: "account_key",
      type: "password",
      label: defaultT(
        t,
        "pages.settings.storage.account_key",
        "Account Key"
      ),
      autoComplete: "new-password",
      accessKey: true,
      placeholder: defaultT(
        t,
        "pages.settings.storage.your_storage_account_key",
        "Your storage account key"
      ),
      schema: z.string().optional().default(""),
    },
    {
      name: "presign",
      type: "toggle",
      label: defaultT(
        t,
        "pages.settings.storage.use_pre_signed_urls",
        "Use pre-signed URLs (On) / Proxy through the platform (Off)"
      ),
      description:
        defaultT(
          t,
          "pages.settings.storage.when_pre_signed_urls_are_enabled",
          "When pre-signed URLs are enabled, all data bypasses the platform and user browsers directly read data from storage"
        ),
      schema: z.boolean().default(true),
      target: "import",
      resetConnection: false,
    },
    {
      name: "presign_ttl",
      type: "counter",
      label: defaultT(
        t,
        "pages.settings.storage.expire_pre_signed_urls",
        "Expire pre-signed URLs (minutes)"
      ),
      min: 1,
      max: 10080,
      step: 1,
      schema: z.number().min(1).max(10080).default(15),
      target: "import",
      resetConnection: false,
      dependsOn: {
        field: "presign",
        value: true,
      },
    },
  ],
  layout: [
    { fields: ["container"] },
    { fields: ["prefix"] },
    { fields: ["account_name"] },
    { fields: ["account_key"] },
    { fields: ["presign", "presign_ttl"] },
  ],
};

export default azureProvider;
