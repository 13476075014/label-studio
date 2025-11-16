import { z } from "zod";
import type { ProviderConfig } from "@humansignal/app-common/blocks/StorageProviderForm/types/provider";
import { IconDocument } from "@humansignal/icons";
import { defaultT } from "../../../../utils/scripts";
import i18n from "i18next";
const t = i18n.t.bind(i18n);

export const localFilesProvider: ProviderConfig = {
  name: "localfiles",
  title: defaultT(
    t,
    "pages.settings.storage.local_files",
    "Local Files"
  ),
  description: defaultT(
    t,
    "pages.settings.storage.local_files_description2",
    "Configure your local file storage connection with all required Label Studio settings"
  ),
  icon: IconDocument,
  fields: [
    {
      name: "path",
      type: "text",
      label: defaultT(
        t,
        "pages.settings.storage.absolute_local_path",
        "Absolute local path"
      ),
      required: true,
      placeholder: "/data/my-folder/",
      schema: z.string().min(1, "Path is required"),
    },
    {
      name: "prefix",
      type: "text",
      label: defaultT(
        t,
        "pages.settings.storage.path",
        "Path"
      ),
      placeholder: "path/to/files",
      schema: z.string().optional().default(""),
      target: "export",
    },
  ],
  layout: [{ fields: ["path"] }, { fields: ["prefix"] }],
};

export default localFilesProvider;
