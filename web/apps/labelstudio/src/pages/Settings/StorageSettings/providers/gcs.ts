import { z } from "zod";
import type { ProviderConfig } from "@humansignal/app-common/blocks/StorageProviderForm/types/provider";
import { IconCloudProviderGCS } from "@humansignal/icons";
import { defaultT } from "../../../../utils/scripts";
import i18n from "i18next";
const t = i18n.t.bind(i18n);

export const gcsProvider: ProviderConfig = {
  name: "gcs",
  title: defaultT(
    t,
    "pages.settings.storage.google_cloud_storage",
    "Google Cloud Storage"
  ),
  description: defaultT(
    t,
    "pages.settings.storage.configure_your_google_cloud_storage_connection",
    "Configure your Google Cloud Storage connection with all required Label Studio settings"
  ),
  icon: IconCloudProviderGCS,
  fields: [
    {
      name: "bucket",
      type: "text",
      label: defaultT(
        t,
        "pages.settings.storage.bucket_name",
        "Bucket Name"
      ),
      required: true,
      schema: z.string().min(1, "Bucket name is required"),
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
      name: "google_application_credentials",
      type: "password",
      label: defaultT(
        t,
        "pages.settings.storage.google_application_credentials",
        "Google Application Credentials"
      ),
      description: defaultT(
        t,
        "pages.settings.storage.paste_credentials_json",
        "Paste the contents of credentials.json in this field OR leave it blank to use ADC."
      ),
      autoComplete: "new-password",
      accessKey: true,
      schema: z.string().optional().default(""), // JSON validation could be added if needed
    },
    {
      name: "google_project_id",
      type: "text",
      label: defaultT(
        t,
        "pages.settings.storage.google_project_id",
        "Google Project ID"
      ),
      description: defaultT(
        t,
        "pages.settings.storage.leave_blank_to_inherit",
        "Leave blank to inherit from Google Application Credentials."
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
    { fields: ["bucket"] },
    { fields: ["prefix"] },
    { fields: ["google_application_credentials"] },
    { fields: ["google_project_id"] },
    { fields: ["presign", "presign_ttl"] },
  ],
};

export default gcsProvider;
