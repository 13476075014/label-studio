import { inject, observer } from "mobx-react";
import { RadioGroup } from "../../Common/RadioGroup/RadioGroup";
import { IconGrid, IconList } from "@humansignal/icons";
import { Tooltip } from "@humansignal/ui";
import { useTranslation } from "react-i18next";
import { defaultT } from "../../../../../core/src/index";
import i18n from "i18next"
const t = i18n.t.bind(i18n);

const viewInjector = inject(({ store }) => ({
  view: store.currentView,
}));

export const ViewToggle = viewInjector(
  observer(({ view, size, ...rest }) => {
    return (
      <RadioGroup
        size={size}
        value={view.type}
        onChange={(e) => view.setType(e.target.value)}
        {...rest}
        style={{ "--button-padding": "0 var(--spacing-tighter)" }}
      >
        <Tooltip title="List view">
          <div>
            <RadioGroup.Button value="list" aria-label="Switch to list view">
              <IconList />
            </RadioGroup.Button>
          </div>
        </Tooltip>
        <Tooltip title="Grid view">
          <div>
            <RadioGroup.Button value="grid" aria-label="Switch to grid view">
              <IconGrid />
            </RadioGroup.Button>
          </div>
        </Tooltip>
      </RadioGroup>
    );
  }),
);

export const DataStoreToggle = viewInjector(({ view, size, ...rest }) => {
  // const { t } = useTranslation();
  return (
    <RadioGroup value={view.target} size={size} onChange={(e) => view.setTarget(e.target.value)} {...rest}>
      <RadioGroup.Button value="tasks">{defaultT(
                t,
                "libs.datamanager.emptyState.tasks",
                "Tasks"
              )}</RadioGroup.Button>
      <RadioGroup.Button value="annotations" disabled>
        {defaultT(
                t,
                "libs.datamanager.emptyState.annotations",
                "Annotations"
              )}
      </RadioGroup.Button>
    </RadioGroup>
  );
});
