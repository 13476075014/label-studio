import { useMemo } from "react";
import { Menu } from "../Menu/Menu";
import { defaultT } from "../../../../../core/src/index";
import i18n from "i18next"
const t = i18n.t.bind(i18n);

export const TabsMenu = ({ onClick, editable = true, closable = true, clonable = true, virtual = false }) => {
  const items = useMemo(
    () => [
      {
        key: "edit",
        title: defaultT(t, "common.rename", "Rename"),
        enabled: editable && !virtual,
        action: () => onClick("edit"),
      },
      {
        key: "duplicate",
        title: defaultT(t, "common.duplicate", "Duplicate"),
        enabled: !virtual && clonable,
        action: () => onClick("duplicate"),
        willLeave: true,
      },
      {
        key: "save",
        title: defaultT(t, "common.save", "Save"),
        enabled: virtual,
        action: () => onClick("save"),
        willLeave: true,
      },
    ],
    [editable, closable, clonable, virtual],
  );

  const showDivider = useMemo(() => closable && items.some(({ enabled }) => enabled), [items]);

  return (
    <Menu size="medium" onClick={(e) => e.domEvent.stopPropagation()}>
      {items.map((item) =>
        item.enabled ? (
          <Menu.Item key={item.key} onClick={item.action} data-leave={item.willLeave}>
            {item.title}
          </Menu.Item>
        ) : null,
      )}

      {closable ? (
        <>
          {showDivider && <Menu.Divider />}
          <Menu.Item onClick={() => onClick("close")} data-leave>
            {defaultT(t, "common.close", "Close")}
          </Menu.Item>
        </>
      ) : null}
    </Menu>
  );
};
