import { observer } from "mobx-react";
import { BemWithSpecifiContext } from "../../../utils/bem";
import { Button } from "@humansignal/ui";
import { IconClose } from "@humansignal/icons";
import { Tag } from "../../Common/Tag/Tag";
import { FilterDropdown } from "../FilterDropdown";
import "./FilterLine.scss";
import { FilterOperation } from "./FilterOperation";
import { Icon } from "../../Common/Icon/Icon";
import { defaultT } from "../../../../../core/src/index";
import i18n from "i18next"
const t = i18n.t.bind(i18n);

const { Block, Elem } = BemWithSpecifiContext();

const Conjunction = observer(({ index, view }) => {
  return (
    <FilterDropdown
      items={[
        { value: "and", label: defaultT(
                    t,
                    "common.add",
                    "And"
                  ) },
        { value: "or", label: defaultT(
                    t,
                    "common.or",
                    "Or"
                  ) },
      ]}
      disabled={index > 1}
      value={view.conjunction}
      style={{ textAlign: "right" }}
      onChange={(value) => view.setConjunction(value)}
    />
  );
});

export const FilterLine = observer(({ filter, availableFilters, index, view, sidebar, dropdownClassName }) => {
  const childFilter = filter.child_filter;
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
      }

  if (sidebar) {
    // Sidebar layout uses grid structure like main layout
    return (
      <Block name="filterLine" mod={{ hasChild: !!childFilter }}>
        {/* Main filter row */}
        <Elem name="column" mix="conjunction">
          {index === 0 ? (
            <span style={{ fontSize: 12, paddingRight: 5 }}>{defaultT(
                    t,
                    "common.where",
                    "Where"
                  )}</span>
          ) : (
            <Conjunction index={index} view={view} />
          )}
        </Elem>

        <Elem name="column" mix="field">
          <FilterDropdown
            placeholder="Column"
            defaultValue={filter.filter.id}
            items={availableFilters}
            dropdownClassName={dropdownClassName}
            searchFilter={(option, query) => {
              const original = option?.original ?? option;
              const title = original?.field?.title ?? original?.title ?? "";
              const parentTitle = original?.field?.parent?.title ?? "";
              return `${title} ${parentTitle}`.toLowerCase().includes(query.toLowerCase());
            }}
            onChange={(value) => filter.setFilterDelayed(value)}
            optionRender={({ item: { original: filter } }) => (
              <Elem name="selector">
                {objTrans[filter.field.title] ?? filter.field.title}
                {filter.field.parent && (
                  <Tag size="small" className="filters-data-tag" color="#1d91e4" style={{ marginLeft: 7 }}>
                    {filter.field.parent.title}
                  </Tag>
                )}
              </Elem>
            )}
            disabled={filter.field.disabled}
          />
        </Elem>

        <FilterOperation
          filter={filter}
          value={filter.currentValue}
          operator={filter.operator}
          field={filter.field}
          disabled={filter.field.disabled}
        />

        {/* Column 5: Remove button - only show if no child filter, otherwise empty space */}
        {!childFilter ? (
          <Elem name="remove">
            <Button
              look="danger"
              size="smaller"
              onClick={(e) => {
                e.stopPropagation();
                filter.delete();
              }}
              icon={<Icon icon={IconClose} size={12} />}
            />
          </Elem>
        ) : (
          <Elem name="remove" />
        )}

        {/* Child filter row */}
        {childFilter && (
          <>
            {/* Column 1: Conjunction */}
            <Elem name="column" mix="conjunction">
              <span style={{ fontSize: 12, paddingRight: 5 }}>and</span>
            </Elem>

            {/* Column 2: Field */}
            <Elem name="column" mix="field child-field">
              <FilterDropdown
                placeholder={childFilter.field.title}
                value={childFilter.field.title}
                items={[{ value: childFilter.field.title, label: childFilter.field.title }]}
                disabled={true}
                onChange={() => {}} // No-op since it's disabled
                style={{ minWidth: "80px" }}
              />
            </Elem>

            {/* Column 3 & 4: Operation and Value */}
            <FilterOperation
              filter={childFilter}
              value={childFilter.currentValue}
              operator={childFilter.operator}
              field={childFilter.field}
              disabled={filter.field.disabled}
            />

            {/* Column 5: Remove */}
            <Elem name="remove">
              <Button
                look="danger"
                size="smaller"
                onClick={(e) => {
                  e.stopPropagation();
                  filter.delete(); // Remove the main filter (which includes child)
                }}
                icon={<Icon icon={IconClose} size={12} />}
              />
            </Elem>
          </>
        )}
      </Block>
    );
  }

  // Main layout uses parent grid structure - render children as direct grid items
  return (
    <Block name="filterLine" mod={{ hasChild: !!childFilter }}>
      <Elem name="column" mix="conjunction">
        {index === 0 ? (
          <span style={{ fontSize: 12, paddingRight: 5 }}>{
            defaultT(
                    t,
                    "common.where",
                    "Where"
                  )
          }</span>
        ) : (
          <Conjunction index={index} view={view} />
        )}
      </Elem>

      <Elem name="column" mix="field">
        <FilterDropdown
          placeholder="Column"
          defaultValue={filter.filter.id}
          items={availableFilters}
          width={80}
          dropdownWidth={120}
          dropdownClassName={dropdownClassName}
          searchFilter={(option, query) => {
            const original = option?.original ?? option;
            const title = original?.field?.title ?? original?.title ?? "";
            const parentTitle = original?.field?.parent?.title ?? "";
            return `${title} ${parentTitle}`.toLowerCase().includes(query.toLowerCase());
          }}
          onChange={(value) => filter.setFilterDelayed(value)}
          optionRender={({ item: { original: filter } }) => (
            <Elem name="selector">
              {objTrans[filter.field.title] ?? filter.field.title}
              {filter.field.parent && (
                <Tag size="small" className="filters-data-tag" color="#1d91e4" style={{ marginLeft: 7 }}>
                  {filter.field.parent.title}
                </Tag>
              )}
            </Elem>
          )}
          disabled={filter.field.disabled}
        />
      </Elem>

      <FilterOperation
        filter={filter}
        value={filter.currentValue}
        operator={filter.operator}
        field={filter.field}
        disabled={filter.field.disabled}
      />

      {/* Only show remove button if there's no child filter, or show it on the last column of the main filter */}
      {!childFilter && (
        <Elem name="remove">
          <Button
            look="string"
            size="small"
            style={{ border: "none" }}
            onClick={(e) => {
              e.stopPropagation();
              filter.delete();
            }}
            icon={<Icon icon={IconClose} size={12} />}
          />
        </Elem>
      )}

      {/* Render child filters as additional grid items on new row */}
      {childFilter && (
        <>
          {/* Empty column to maintain grid alignment for main filter row */}
          <Elem name="remove" />

          <Elem name="column" mix="conjunction">
            <span style={{ fontSize: 12, paddingRight: 5 }}>and</span>
          </Elem>

          <Elem name="column" mix="field child-field">
            <FilterDropdown
              placeholder={childFilter.field.title}
              value={childFilter.field.title}
              items={[{ value: childFilter.field.title, label: childFilter.field.title }]}
              disabled={true}
              onChange={() => {}} // No-op since it's disabled
            />
          </Elem>

          <FilterOperation
            filter={childFilter}
            value={childFilter.currentValue}
            operator={childFilter.operator}
            field={childFilter.field}
            disabled={filter.field.disabled}
          />

          {/* Show remove button on child filter row - removes the entire filter group */}
          <Elem name="remove">
            <Button
              look="string"
              size="small"
              style={{ border: "none" }}
              onClick={(e) => {
                e.stopPropagation();
                filter.delete(); // Remove the main filter (which includes child)
              }}
              icon={<Icon icon={IconClose} size={12} />}
            />
          </Elem>
        </>
      )}
    </Block>
  );
});
