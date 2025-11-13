import { useMemo, useState } from "react";
import { useHistory } from "react-router";
import { Button } from "@humansignal/ui";
import { Label } from "../../components/Form";
import { confirm } from "../../components/Modal/Modal";
import { Spinner } from "../../components/Spinner/Spinner";
import { useAPI } from "../../providers/ApiProvider";
import { useProject } from "../../providers/ProjectProvider";
import { cn } from "../../utils/bem";
import { useTranslation } from "react-i18next";
import { defaultT } from "../../utils/scripts";
import i18n from "i18next";

export const DangerZone = () => {
  const { t } = useTranslation();
  const { project } = useProject();
  const api = useAPI();
  const history = useHistory();
  const [processing, setProcessing] = useState(null);

  const handleOnClick = (type) => () => {
    confirm({
      title: defaultT(t, "pages.settings.danger.confirm_title", "Action confirmation"),
      body: defaultT(t, "pages.settings.danger.confirm_body", "You're about to delete all things. This action cannot be undone."),
      okText: defaultT(t, "pages.settings.danger.confirm_ok", "Proceed"),
      buttonLook: "negative",
      onOk: async () => {
        setProcessing(type);
        if (type === "annotations") {
          // console.log('delete annotations');
        } else if (type === "tasks") {
          // console.log('delete tasks');
        } else if (type === "predictions") {
          // console.log('delete predictions');
        } else if (type === "reset_cache") {
          await api.callApi("projectResetCache", {
            params: {
              pk: project.id,
            },
          });
        } else if (type === "tabs") {
          await api.callApi("deleteTabs", {
            body: {
              project: project.id,
            },
          });
        } else if (type === "project") {
          await api.callApi("deleteProject", {
            params: {
              pk: project.id,
            },
          });
          history.replace("/projects");
        }
        setProcessing(null);
      },
    });
  };

  const buttons = useMemo(
    () => [
      // todo-lcc 这里要运行起来验证下，是否传参可以被翻译
      {
        type: "annotations",
        disabled: true,
        label: defaultT(t, "pages.settings.danger.delete_annotations", { count: project.total_annotations_number }, `Delete ${project.total_annotations_number} Annotations`),
      },
      {
        type: "tasks",
        disabled: true,
        label: defaultT(t, "pages.settings.danger.delete_tasks", { count: project.task_number }, `Delete ${project.task_number} Tasks`),
      },
      {
        type: "predictions",
        disabled: true,
        label: defaultT(t, "pages.settings.danger.delete_predictions", { count: project.total_predictions_number }, `Delete ${project.total_predictions_number} Predictions`),
      },
      {
        type: "reset_cache",
        help: defaultT(
          t,
          "pages.settings.danger.reset_cache_help",
          "Reset Cache may help in cases like if you are unable to modify the labeling configuration due to validation errors concerning existing labels, but you are confident that the labels don't exist. You can use this action to reset the cache and try again."
        ),
        label: defaultT(t, "pages.settings.danger.reset_cache", "Reset Cache"),
      },
      {
        type: "tabs",
        help: defaultT(
          t,
          "pages.settings.danger.drop_tabs_help",
          "If the Data Manager is not loading, dropping all Data Manager tabs can help."
        ),
        label: defaultT(t, "pages.settings.danger.drop_tabs", "Drop All Tabs"),
      },
      {
        type: "project",
        help: defaultT(
          t,
          "pages.settings.danger.delete_project_help",
          "Deleting a project removes all tasks, annotations, and project data from the database."
        ),
        label: defaultT(t, "pages.settings.danger.delete_project", "Delete Project"),
      },
    ],
    [project],
  );

  return (
    <div className={cn("simple-settings")}>
      <h1>{defaultT(t, "pages.settings.danger.title", "Danger Zone")}</h1>
      <Label description={defaultT(t, "pages.settings.danger.desc", "Perform these actions at your own risk. Actions you take on this page can't be reverted. Make sure your data is backed up.")} />

      {project.id ? (
        <div style={{ marginTop: 16 }}>
          {buttons.map((btn) => {
            const waiting = processing === btn.type;
            const disabled = btn.disabled || (processing && !waiting);

            return (
              btn.disabled !== true && (
                <div className={cn("settings-wrapper")} key={btn.type}>
                  <h3>{btn.label}</h3>
                  {btn.help && <Label description={btn.help} style={{ width: 600, display: "block" }} />}
                  <Button
                    key={btn.type}
                    variant="negative"
                    look="outlined"
                    disabled={disabled}
                    waiting={waiting}
                    onClick={handleOnClick(btn.type)}
                    style={{ marginTop: 16 }}
                  >
                    {btn.label}
                  </Button>
                </div>
              )
            );
          })}
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <Spinner size={32} />
        </div>
      )}
    </div>
  );
};

DangerZone.title = defaultT(i18n.t.bind(i18n), "pages.settings.danger.title", "Danger Zone");
DangerZone.path = "/danger-zone";
