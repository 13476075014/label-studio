import { observer } from "mobx-react";
import { Select } from "../Common/Form";
import { useCallback, useMemo } from "react";
import { defaultT } from "../../../../core/src/index";
import i18n from "i18next"
const t = i18n.t.bind(i18n);

export const FilterDropdown = observer(
  ({
    placeholder,
    defaultValue,
    items,
    style,
    disabled,
    onChange,
    multiple,
    value,
    optionRender,
    dropdownClassName,
    outputFormat,
    searchFilter,
  }) => {

    // lcc把列转换成翻译的文件
    const objTrans = {
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

      // 下面是条件的
      ["contains"]: defaultT(t, "pages.projects.columns.contains", "contains"),
      ["not contains"]: defaultT(t, "pages.projects.columns.not_contains", 
        "contains"),
      ["regex"]: defaultT(t, "pages.projects.columns.regex",
         "regex"),
      ["equal"]: defaultT(t, "pages.projects.columns.equal", 
        "equal"),
      ["not equal"]: defaultT(t, "pages.projects.columns.not_equal", 
        "not equal"),
      ["is empty"]: defaultT(t, "pages.projects.columns.is_empty", 
        "is empty"),

      ["is before"]: defaultT(t, "pages.projects.columns.is_before", 
        "is before"),
      ["is after"]: defaultT(t, "pages.projects.columns.is_after", 
        "is after"),
      ["is between"]: defaultT(t, "pages.projects.columns.is_between", 
        "is between"),
      ["not between"]: defaultT(t, "pages.projects.columns.not_between", 
        "not between"),
    }

    const parseItems = useCallback(
      (item) => {
        const OptionVisuals =
          optionRender ??
          (() => {
            return <>{item?.label ?? item?.title ?? item?.value ?? item}</>;
          });
        const option =
          typeof item === "string" || typeof item === "number"
            ? { label: <OptionVisuals item={item} />, value: item, original: item }
            : {
                ...item,
                label: item?.original?.field?.parent ? (
                  <OptionVisuals item={item} />
                ) : (
                  (objTrans[item?.title] ?? item?.title ?? objTrans[item?.label] ?? item?.label ?? item?.name)
                ),
                value: item?.value ?? item,
                children: item?.options?.map(parseItems),
              };
        return option;
      },
      [optionRender],
    );
    const options = useMemo(() => items.map(parseItems), [items, parseItems]);

    return (
      <Select
        multiple={multiple}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={(value) => onChange(outputFormat?.(value) ?? value)}
        disabled={disabled}
        size="small"
        options={options}
        searchable={true}
        triggerClassName="whitespace-nowrap"
        searchFilter={searchFilter}
        isVirtualList={true}
      />
    );
  },
);
