import { z } from "zod";
import type { ProviderConfig } from "@humansignal/app-common/blocks/StorageProviderForm/types/provider";
import { IconCloudProviderS3 } from "@humansignal/icons";
import { defaultT } from "../../../../utils/scripts";
import i18n from "i18next";
const t = i18n.t.bind(i18n);

export const s3Provider: ProviderConfig = {
  name: "s3",
  title: defaultT(
    t,
    "pages.settings.storage.amazon_s3",
    "Amazon S3"
  ),
  description: defaultT(
    t,
    "pages.settings.storage.configuration_required",
    "Configure your AWS S3 connection with all required Label Studio settings"
  ),
  icon: IconCloudProviderS3,
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
      placeholder: defaultT(
        t,
        "pages.settings.storage.my_storage_bucket",
        "my-storage-bucket"
      ),
      schema: z.string().min(1, "Bucket name is required"),
    },
    {
      name: "region_name",
      type: "text",
      label: defaultT(
        t,
        "pages.settings.storage.region_name",
        "Region Name"
      ),
      placeholder: defaultT(
        t,
        "pages.settings.storage.us_east_1",
        "us-east-1 (default)"
      ),
      schema: z.string().optional().default(""),
    },
    {
      name: "s3_endpoint",
      type: "text",
      label: defaultT(
        t,
        "pages.settings.storage.s3_endpoint",
        "S3 Endpoint"
      ),
      placeholder: "https://s3.amazonaws.com (default)",
      schema: z.string().optional().default(""),
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
      name: "aws_access_key_id",
      type: "password",
      label: defaultT(
        t,
        "pages.settings.storage.access_key_id",
        "Access Key ID"
      ),
      required: true,
      placeholder: "AKIAIOSFODNN7EXAMPLE",
      autoComplete: "off",
      accessKey: true,
      schema: z.string().min(1, "Access Key ID is required"),
    },
    {
      name: "aws_secret_access_key",
      type: "password",
      label: defaultT(
        t,
        "pages.settings.storage.secret_access_key",
        "Secret Access Key"
      ),
      required: true,
      placeholder: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
      autoComplete: "new-password",
      accessKey: true,
      schema: z.string().min(1, "Secret Access Key is required"),
    },
    {
      name: "aws_session_token",
      type: "password",
      label: defaultT(
        t,
        "pages.settings.storage.session_token",
        "Session Token"
      ),
      placeholder: defaultT(
        t,
        "pages.settings.storage.session_token_optional",
        "Session token (optional)"
      ),
      autoComplete: "new-password",
      schema: z.string().optional().default(""),
    },
    {
      name: "presign",
      type: "toggle",
      label: defaultT(
        t,
        "pages.settings.storage.use_presigned_urls",
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
    { fields: ["region_name"] },
    { fields: ["s3_endpoint"] },
    { fields: ["prefix"] },
    { fields: ["aws_access_key_id"] },
    { fields: ["aws_secret_access_key"] },
    { fields: ["aws_session_token"] },
    { fields: ["presign", "presign_ttl"] },
  ],
};
