import { Typography } from "@humansignal/ui";
import { useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { cn } from "../../../utils/bem";
import { isInLicense, LF_CLOUD_STORAGE_FOR_MANAGERS } from "../../../utils/license-flags";
import { StorageSet } from "./StorageSet";
import { useTranslation } from "react-i18next";
import { defaultT } from "../../../utils/scripts";
import i18n from "i18next"
const t = i18n.t.bind(i18n)

const isAllowCloudStorage = !isInLicense(LF_CLOUD_STORAGE_FOR_MANAGERS);

export const StorageSettings = () => {
  const { t } = useTranslation();
  const rootClass = cn("storage-settings"); // TODO: Remove in the next BEM cleanup
  const history = useHistory();
  const location = useLocation();
  const sourceStorageRef = useRef();

  // Handle auto-open query parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get("open") === "source") {
      // Auto-trigger "Add Source Storage" modal
      setTimeout(() => {
        sourceStorageRef.current?.openAddModal();
      }, 100); // Small delay to ensure component is mounted

      // Clean URL by removing the query parameter
      history.replace(location.pathname);
    }
  }, [location, history]);

  return isAllowCloudStorage ? (
    <section className="max-w-[680px]">
      <Typography variant="headline" size="medium" className="mb-base">
        {defaultT(t, "pages.settings.storage.cloudStorage",
          "Cloud Storage")}
      </Typography>
      <Typography size="small" className="text-neutral-content-subtler mb-wider">
        {defaultT(t, "pages.settings.storage.cloudStorageDescription",
          "Use cloud or database storage as the source for your labeling tasks or the target of your completed annotations.")}
      </Typography>

      <div className="grid grid-cols-2 gap-8">
        <StorageSet
          ref={sourceStorageRef}
          title={defaultT(t, "pages.settings.storage.sourceCloudStorage",
          "Source Cloud Storage")}
          buttonLabel={defaultT(t, "pages.settings.storage.addSourceCloudStorage",
          "Add Source Storage")}
          rootClass={rootClass}
        />

        <StorageSet
          title={defaultT(t, "pages.settings.storage.targetCloudStorage",
          "Target Cloud Storage")}
          target="export"
          buttonLabel={defaultT(t, "pages.settings.storage.addTargetStorage",
          "Add Target Storage")}
          rootClass={rootClass}
        />
      </div>
    </section>
  ) : null;
};

StorageSettings.title = defaultT(t, "pages.settings.storage.cloudStorage",
          "Cloud Storage");
StorageSettings.path = "/storage";
