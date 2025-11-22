import { formatDistanceToNow, format, parseISO } from "date-fns";
import { useCallback, useContext } from "react";

import truncate from "truncate-middle";
import { Dropdown, Menu } from "../../../components";
import { Button } from "@humansignal/ui";
import { confirm } from "../../../components/Modal/Modal";
import { Oneof } from "../../../components/Oneof/Oneof";
import { IconEllipsis } from "@humansignal/icons";
import { Tooltip } from "@humansignal/ui";
import { ApiContext } from "../../../providers/ApiProvider";
import { Block, cn } from "../../../utils/bem";
import { useTranslation } from "react-i18next";
import { defaultT } from "../../../utils/scripts";

import "./MachineLearningList.scss";

export const MachineLearningList = ({ backends, fetchBackends, onEdit, onTestRequest, onStartTraining }) => {
  const api = useContext(ApiContext);

  const onDeleteModel = useCallback(
    async (backend) => {
      await api.callApi("deleteMLBackend", {
        params: {
          pk: backend.id,
        },
      });
      await fetchBackends();
    },
    [fetchBackends, api],
  );

  return (
    <div>
      {backends.map((backend) => (
        <BackendCard
          key={backend.id}
          backend={backend}
          onStartTrain={onStartTraining}
          onDelete={onDeleteModel}
          onEdit={onEdit}
          onTestRequest={onTestRequest}
        />
      ))}
    </div>
  );
};

const BackendCard = ({ backend, onStartTrain, onEdit, onDelete, onTestRequest }) => {
  const { t } = useTranslation();
  const confirmDelete = useCallback(
    (backend) => {
      confirm({
        title: defaultT(t, "pages.setting.menu.deleteMLBackend",
          "Delete ML Backend"),
        body: defaultT(t, "pages.setting.menu.deleteMLBackendConfirmation",
          "This action cannot be undone. Are you sure?"),
        buttonLook: "destructive",
        onOk() {
          onDelete?.(backend);
        },
      });
    },
    [backend, onDelete],
  );

  const rootClass = cn("backend-card");

  return (
    <Block name="backend-card">
      <div className={rootClass.elem("title-container")}>
        <div>
          <BackendState backend={backend} />
          <div className={rootClass.elem("title")}>{backend.title}</div>
        </div>

        <div className={rootClass.elem("menu")}>
          <Dropdown.Trigger
            align="right"
            content={
              <Menu size="medium" contextual>
                <Menu.Item onClick={() => onEdit(backend)}>{defaultT(t, "pages.setting.menu.edit",
                  "Edit")}</Menu.Item>
                <Menu.Item onClick={() => onTestRequest(backend)}>{defaultT(t, "pages.setting.menu.testRequest",
                  "Send Test Request")}</Menu.Item>
                <Menu.Item onClick={() => onStartTrain(backend)}>{defaultT(t, "pages.setting.menu.startTraining",
                  "Start Training")}</Menu.Item>
                <Menu.Divider />
                <Menu.Item onClick={() => confirmDelete(backend)} isDangerous>
                  {defaultT(t, "pages.setting.menu.delete",
                    "Delete")}
                </Menu.Item>
              </Menu>
            }
          >
            <Button look="string" size="small" className="!p-0" aria-label="Machine learning model options">
              <IconEllipsis />
            </Button>
          </Dropdown.Trigger>
        </div>
      </div>

      <div className={rootClass.elem("meta")}>
        <div className={rootClass.elem("group")}>{truncate(backend.url, 20, 10, "...")}</div>
        <div className={rootClass.elem("group")}>
          <Tooltip title={format(parseISO(backend.created_at), "yyyy-MM-dd HH:mm:ss")}>
            <span>{defaultT(t, "pages.setting.menu.created",
              "Created")}&nbsp;{formatDistanceToNow(parseISO(backend.created_at), { addSuffix: true })}</span>
          </Tooltip>
        </div>
      </div>
    </Block>
  );
};

const BackendState = ({ backend }) => {
  const { t } = useTranslation();
  const { state } = backend;

  return (
    <div className={cn("ml").elem("status")}>
      <span className={cn("ml").elem("indicator").mod({ state })} />
      <Oneof value={state} className={cn("ml").elem("status-label")}>
        <span case="DI">{defaultT(t, "pages.setting.menu.disconnected",
          "Disconnected")}</span>
        <span case="CO">{defaultT(t, "pages.setting.menu.connected",
          "Connected")}</span>
        <span case="ER">{defaultT(t, "pages.setting.menu.error",
          "Error")}</span>
        <span case="TR">{defaultT(t, "pages.setting.menu.training",
          "Training")}</span>
        <span case="PR">{defaultT(t, "pages.setting.menu.predicting",
          "Predicting")}</span>
      </Oneof>
    </div>
  );
};
