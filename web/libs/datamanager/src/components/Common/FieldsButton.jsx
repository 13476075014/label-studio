import { Button, Checkbox } from "@humansignal/ui";
import { inject, observer } from "mobx-react";
import React from "react";
import { Elem } from "../../utils/bem";
import { Dropdown } from "./Dropdown/Dropdown";
import { Menu } from "./Menu/Menu";
import { defaultT } from "../../../../core/src/index";
import i18n from "i18next"
const t = i18n.t.bind(i18n);

const injector = inject(({ store }) => {
  return {
    columns: Array.from(store.currentView?.targetColumns ?? []),
  };
});

const FieldsMenu = observer(({ columns, WrapperComponent, onClick, onReset, selected, resetTitle }) => {
  // lcc把列转换成翻译的文件
  const obj = {
    image: defaultT(t, "pages.projects.columns.image", "image"),
    ["Inner ID"]: defaultT(t, "pages.projects.columns.inner_id", "Inner ID"),
    ["Completed"]: defaultT(t, "pages.projects.columns.completed", "Completed"),
    ["Annotations"]: defaultT(t, "pages.projects.columns.annotations", "Annotations"),
    ["Cancelled"]: defaultT(t, "pages.projects.columns.cancelled", "Cancelled"),
    ["Predictions"]: defaultT(t, "pages.projects.columns.predictions", "Predictions"),
    ["Annotated by"]: defaultT(t, "pages.projects.columns.annotated_by", "Annotated by"),
    ["Annotation results"]: defaultT(t, "pages.projects.columns.annotation_results", "Annotation results"),
    ["Annotation IDs"]: defaultT(t, "pages.projects.columns.Annotation_IDs", "Annotation IDs"),
    ["Prediction score"]: defaultT(t, "pages.projects.columns.Prediction_score", "Prediction score"),
    ["Prediction model versions"]: defaultT(t, "pages.projects.columns.Prediction_model_versions", "Prediction model versions"),
    ["Prediction results"]: defaultT(t, "pages.projects.columns.Prediction_results", "Prediction results"),
    ["Upload filename"]: defaultT(t, "pages.projects.columns.Upload_filename", "Upload filename"),
    ["Storage filename"]: defaultT(t, "pages.projects.columns.Storage_filename", "Storage filename"),
    ["Created at"]: defaultT(t, "pages.projects.columns.Created_at", "Created at"),
    ["Updated at"]: defaultT(t, "pages.projects.columns.Updated_at", "Updated at"),
    ["Updated by"]: defaultT(t, "pages.projects.columns.Updated_by", "Updated by"),
    ["Lead Time"]: defaultT(t, "pages.projects.columns.Lead_Time", "Lead Time"),
    ["Drafts"]: defaultT(t, "pages.projects.columns.Drafts", "Drafts"),
    ["data"]: defaultT(t, "pages.projects.columns.data", "data"),
  }
  const MenuItem = (col, onClick) => {

    return (
      <Menu.Item key={col.key} name={col.key} onClick={onClick} disabled={col.disabled}>
        {WrapperComponent && col.wra !== false ? (
          <WrapperComponent column={col} disabled={col.disabled}>
            {obj[col.title] ?? col.title}
          </WrapperComponent>
        ) : (
          obj[col.title] ?? col.title
        )}
      </Menu.Item>
    );
  };

  return (
    <Menu size="small" selectedKeys={selected ? [selected] : ["none"]} closeDropdownOnItemClick={false}>
      {onReset &&
        MenuItem(
          {
            key: "none",
            title: resetTitle ?? "Default",
            wrap: false,
          },
          onReset,
        )}

      {columns.map((col) => {
        if (col.children) {
          return (
            <Menu.Group key={col.key} title={obj[col.title] ?? col.title}>
              {col.children.map((col) => MenuItem(col, () => onClick?.(col)))}
            </Menu.Group>
          );
        }
        if (!col.parent) {
          return MenuItem(col, () => onClick?.(col));
        }

        return null;
      })}
    </Menu>
  );
});

export const FieldsButton = injector(
  ({
    columns,
    size,
    style,
    wrapper,
    title,
    icon,
    className,
    trailingIcon,
    onClick,
    onReset,
    resetTitle,
    filter,
    selected,
    tooltip,
    tooltipTheme = "dark",
    openUpwardForShortViewport = true,
  }) => {
    const content = [];

    if (title) content.push(<React.Fragment key="f-button-title">{title}</React.Fragment>);

    const renderButton = () => {
      return (
        <Button variant="neutral" size="small" look="outlined" leading={icon} trailing={trailingIcon}>
          {content.length ? content : null}
        </Button>
      );
    };
    return (
      <Dropdown.Trigger
        content={
          <FieldsMenu
            columns={filter ? columns.filter(filter) : columns}
            WrapperComponent={wrapper}
            onClick={onClick}
            size={size}
            onReset={onReset}
            selected={selected}
            resetTitle={resetTitle}
          />
        }
        style={{ maxHeight: 280, overflow: "auto" }}
        openUpwardForShortViewport={openUpwardForShortViewport}
      >
        {tooltip ? (
          <Elem name={"field-button"} style={{ zIndex: 1000 }} rawClassName="h-[40px] flex items-center">
            <Button
              tooltip={tooltip}
              variant="neutral"
              size={size}
              look="outlined"
              leading={icon}
              trailing={trailingIcon}
            >
              {content.length ? content : null}
            </Button>
          </Elem>
        ) : (
          renderButton()
        )}
      </Dropdown.Trigger>
    );
  },
);

FieldsButton.Checkbox = observer(({ column, children, disabled }) => {
  return (
    <Checkbox
      size="small"
      checked={!column.hidden}
      onChange={column.toggleVisibility}
      style={{ width: "100%", height: "100%" }}
      disabled={disabled}
    >
      {children}
    </Checkbox>
  );
});
