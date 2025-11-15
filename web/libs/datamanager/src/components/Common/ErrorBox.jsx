import { inject } from "mobx-react";
import { Button } from "@humansignal/ui";
import { Dropdown } from "./Dropdown/Dropdown";
import { Menu } from "./Menu/Menu";
import { IconInfo } from "@humansignal/icons";
import { useTranslation } from "react-i18next";
import { defaultT } from "../../../../core/src/index";

const ErrorRenderer = (error, i) => {
  return (
    <Menu.Item key={i} disabled={true}>
      {error.response?.detail}
    </Menu.Item>
  );
};

const injector = inject(({ store }) => {
  return {
    errors: store.serverErrors,
  };
});

export const ErrorBox = injector(({ errors }) => {
  const { t } = useTranslation();
  return errors?.size > 0 ? (
    <Dropdown.Trigger content={<Menu>{Array.from(errors.values()).map(ErrorRenderer)}</Menu>}>
      <Button type="text" leading={<IconInfo />}>
        {defaultT(
                    t,
                    "libs.datamanager.emptyState.errors_occurred",
                    "Errors occurred"
                  )}
      </Button>
    </Dropdown.Trigger>
  ) : null;
});
