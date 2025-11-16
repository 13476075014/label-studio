import { z } from "zod";
import type { ProviderConfig } from "@humansignal/app-common/blocks/StorageProviderForm/types/provider";
import { IconCloudProviderRedis } from "@humansignal/icons";
import { defaultT } from "../../../../utils/scripts";
import i18n from "i18next";
const t = i18n.t.bind(i18n);

export const redisProvider: ProviderConfig = {
  name: "redis",
  title: defaultT(
    t,
    "pages.settings.storage.redis_storage",
    "Redis Storage"
  ),
  description: defaultT(
    t,
    "pages.settings.storage.redis_description1",
    "Configure your Redis storage connection with all required Label Studio settings"
  ),
  icon: IconCloudProviderRedis,
  fields: [
    {
      name: "db",
      type: "text",
      label: defaultT(
        t,
        "pages.settings.storage.database_number",
        "Database Number (db)"
      ),
      placeholder: "1",
      schema: z.string().default("1"),
    },
    {
      name: "password",
      type: "password",
      label: defaultT(
        t,
        "pages.settings.storage.password",
        "Password"
      ),
      autoComplete: "new-password",
      placeholder: defaultT(
        t,
        "pages.settings.storage.your_redis_password",
        "Your redis password"
      ),
      schema: z.string().optional().default(""),
    },
    {
      name: "host",
      type: "text",
      label: defaultT(
        t,
        "pages.settings.storage.host",
        "Host"
      ),
      required: true,
      placeholder: "redis://example.com",
      schema: z.string().min(1, "Host is required"),
    },
    {
      name: "port",
      type: "text",
      label: defaultT(
        t,
        "pages.settings.storage.port",
        "Port"
      ),
      placeholder: "6379",
      schema: z.string().default("6379"),
    },
    {
      name: "prefix",
      type: "text",
      label: defaultT(
        t,
        "pages.settings.storage.bucket_prefix",
        "Bucket prefix"
      ),
      placeholder: "path/to/files",
      schema: z.string().optional().default(""),
      target: "export",
    },
  ],
  layout: [{ fields: ["host", "port", "db", "password"] }, { fields: ["prefix"] }],
};

export default redisProvider;
