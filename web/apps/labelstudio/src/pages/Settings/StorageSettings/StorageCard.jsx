import { useCallback, useContext, useEffect, useState } from "react";
import { Card, Dropdown, Menu } from "../../../components";
import { Button } from "@humansignal/ui";
import { ApiContext } from "../../../providers/ApiProvider";
import { StorageSummary } from "./StorageSummary";
import { IconEllipsisVertical } from "@humansignal/icons";
import { useTranslation } from "react-i18next";
import { defaultT } from "../../../utils/scripts";

export const StorageCard = ({ rootClass, target, storage, onEditStorage, onDeleteStorage, storageTypes }) => {
  const { t } = useTranslation();
  const [syncing, setSyncing] = useState(false);
  const api = useContext(ApiContext);
  const [storageData, setStorageData] = useState({ ...storage });
  const [synced, setSynced] = useState(null);

  const startSync = useCallback(async () => {
    setSyncing(true);
    setSynced(null);

    const result = await api.callApi("syncStorage", {
      params: {
        target,
        type: storageData.type,
        pk: storageData.id,
      },
    });

    if (result) {
      setStorageData(result);
      setSynced(result.last_sync_count);
    }

    setSyncing(false);
  }, [storage]);

  useEffect(() => {
    setStorageData(storage);
  }, [storage]);

  const notSyncedYet = synced !== null || ["in_progress", "queued"].includes(storageData.status);

  return (
    <Card
      header={storageData.title ?? `${defaultT(t, "pages.settings.storage.untilted",
          "Untitled")} ${storageData.type}`}
      extra={
        <Dropdown.Trigger
          align="right"
          content={
            <Menu size="compact" style={{ width: 110 }}>
              <Menu.Item onClick={() => onEditStorage(storageData)}>{defaultT(t, "common.edit",
          "Edit")}</Menu.Item>
              <Menu.Item onClick={() => onDeleteStorage(storageData)}>{defaultT(t, "common.delete",
          "Delete")}</Menu.Item>
            </Menu>
          }
        >
          <Button look="string" className="-ml-3" aria-label="Storage options">
            <IconEllipsisVertical />
          </Button>
        </Dropdown.Trigger>
      }
    >
      <StorageSummary
        target={target}
        storage={storageData}
        className={rootClass.elem("summary")}
        storageTypes={storageTypes}
      />
      <div className={rootClass.elem("sync")}>
        <div className="mt-base">
          <Button
            look="outlined"
            waiting={syncing}
            onClick={startSync}
            disabled={notSyncedYet}
            aria-label="Sync Storage"
          >
            {defaultT(t, "pages.settings.storage.sync_storage",
          "Sync Storage")}
          </Button>
          {notSyncedYet && (
            <div className={rootClass.elem("sync-count")}>
              {defaultT(t, "pages.settings.storage.syncing_message",
          "Syncing may take some time, please refresh the page to see the current status.")}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
