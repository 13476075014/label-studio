import React, { type FC, type ReactNode } from "react";
import {
  IconUpload,
  IconLsLabeling,
  IconCheck,
  IconSearch,
  IconInbox,
  IconCloudProviderS3,
  IconCloudProviderGCS,
  IconCloudProviderAzure,
  IconCloudProviderRedis,
} from "@humansignal/icons";
import { Button, IconExternal, Typography, Tooltip } from "@humansignal/ui";
import { getDocsUrl } from "../../../../../../editor/src/utils/docs";
import { useTranslation } from "react-i18next";
import { defaultT } from "../../../../../../core/src/index";
import i18n from "i18next";
const t = i18n.t.bind(i18n);

declare global {
  interface Window {
    APP_SETTINGS?: {
      whitelabel_is_active?: boolean;
    };
  }
}

// TypeScript interfaces for props
interface EmptyStateProps {
  canImport: boolean;
  onOpenSourceStorageModal?: () => void;
  onOpenImportModal?: () => void;
  // Role-based props (optional)
  userRole?: string;
  project?: {
    assignment_settings?: {
      label_stream_task_distribution?:
        | "auto_distribution"
        | "assigned_only"
        | string;
    };
  };
  hasData?: boolean;
  hasFilters?: boolean;
  canLabel?: boolean;
  onLabelAllTasks?: () => void;
  onClearFilters?: () => void;
}

// Internal helper interfaces and types
interface EmptyStateLayoutProps {
  icon: ReactNode;
  iconBackground?: string;
  iconColor?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  additionalContent?: ReactNode;
  footer?: ReactNode;
  testId?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  wrapperClassName?: string;
}

// Internal helper function to render common empty state structure
const renderEmptyStateLayout = ({
  icon,
  iconBackground = "bg-primary-emphasis",
  iconColor = "text-primary-icon",
  title,
  description,
  actions,
  additionalContent,
  footer,
  testId,
  ariaLabelledBy,
  ariaDescribedBy,
  wrapperClassName = "w-full h-full flex flex-col items-center justify-center text-center p-wide",
}: EmptyStateLayoutProps) => {
  // Clone the icon and ensure it has consistent 40x40 size
  const iconWithSize = React.cloneElement(icon as React.ReactElement, {
    width: 40,
    height: 40,
  });

  const content = (
    <div className={wrapperClassName}>
      <div
        className={`flex items-center justify-center ${iconBackground} ${iconColor} rounded-full p-tight mb-4`}
      >
        {iconWithSize}
      </div>

      <Typography
        variant="headline"
        size="medium"
        className="mb-tight"
        id={ariaLabelledBy}
      >
        {title}
      </Typography>

      <Typography
        size="medium"
        className={`text-neutral-content-subtler max-w-xl ${
          actions || additionalContent ? "mb-tight" : ""
        }`}
        id={ariaDescribedBy}
      >
        {description}
      </Typography>

      {additionalContent}

      {actions &&
        (() => {
          // Flatten children and filter out null/false values to count actual rendered elements
          const flattenedActions = React.Children.toArray(actions)
            .flat()
            .filter(Boolean);
          const actualActionCount = flattenedActions.length;
          const isSingleAction = actualActionCount === 1;

          return (
            <div
              className={`flex ${
                isSingleAction ? "justify-center" : ""
              } gap-base w-full max-w-md mt-base`}
            >
              {actions}
            </div>
          );
        })()}

      {footer && <div className="mt-6">{footer}</div>}
    </div>
  );

  // For import state, we need special wrapper structure
  if (testId === "empty-state-label") {
    return (
      <div
        data-testid={testId}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        className="w-full flex items-center justify-center m-0"
      >
        <div className="w-full h-full">{content}</div>
      </div>
    );
  }

  // For all other states
  return content;
};

// Storage provider icons component
const StorageProviderIcons = () => (
  <div
    className="flex items-center justify-center gap-base mb-wide"
    data-testid="dm-storage-provider-icons"
  >
    <Tooltip title="Amazon S3">
      <div
        className="flex items-center justify-center p-2"
        aria-label="Amazon S3"
      >
        <IconCloudProviderS3
          width={32}
          height={32}
          className="text-neutral-content-subtler"
        />
      </div>
    </Tooltip>
    <Tooltip title="Google Cloud Storage">
      <div
        className="flex items-center justify-center p-2"
        aria-label="Google Cloud Storage"
      >
        <IconCloudProviderGCS
          width={32}
          height={32}
          className="text-neutral-content-subtler"
        />
      </div>
    </Tooltip>
    <Tooltip title="Azure Blob Storage">
      <div
        className="flex items-center justify-center p-2"
        aria-label="Azure Blob Storage"
      >
        <IconCloudProviderAzure
          width={32}
          height={32}
          className="text-neutral-content-subtler"
        />
      </div>
    </Tooltip>
    <Tooltip title="Redis Storage">
      <div
        className="flex items-center justify-center p-2"
        aria-label="Redis Storage"
      >
        <IconCloudProviderRedis
          width={32}
          height={32}
          className="text-neutral-content-subtler"
        />
      </div>
    </Tooltip>
  </div>
);

// Documentation link component
const DocumentationLink = () => {
  // const { t } = useTranslation();
  if (window.APP_SETTINGS?.whitelabel_is_active) {
    return null;
  }

  return (
    <Typography
      variant="label"
      size="small"
      className="text-primary-link hover:underline"
    >
      <a
        href={getDocsUrl("guide/tasks")}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1"
        data-testid="dm-docs-data-import-link"
      >
        {defaultT(
          t,
          "libs.datamanager.emptyState.see_docs_on_import",
          "See docs on importing data"
        )}
        <span className="sr-only">
          {" "}
          (
          {defaultT(
            t,
            "libs.datamanager.emptyState.open_in_new_tab",
            "opens in a new tab"
          )}
          )
        </span>
        <IconExternal width={20} height={20} />
      </a>
    </Typography>
  );
};

/**
 * Unified empty state for Data Manager
 * Handles different empty states based on user role and context
 *
 * Props:
 * - canImport: boolean — whether import is enabled in interfaces
 * - onOpenSourceStorageModal: () => void — opens Connect Source Storage modal
 * - onOpenImportModal: () => void — opens Import modal
 * - userRole: string — User role (REVIEWER, ANNOTATOR, etc.) - optional
 * - project: object — Project object with assignment settings - optional
 * - hasData: boolean — Whether the project has any tasks - optional
 * - hasFilters: boolean — Whether filters are currently applied - optional
 * - canLabel: boolean — Whether the Label All Tasks button would be enabled - optional
 * - onLabelAllTasks: function — Callback for Label All Tasks action - optional
 * - onClearFilters: function — Callback to clear all applied filters - optional
 */

export const EmptyState: FC<EmptyStateProps> = ({
  canImport,
  onOpenSourceStorageModal,
  onOpenImportModal,
  // Role-based props (optional)
  userRole,
  project,
  hasData: _hasData,
  hasFilters,
  canLabel: _canLabel,
  onLabelAllTasks,
  onClearFilters,
}) => {
  // const { t } = useTranslation();
  const isImportEnabled = Boolean(canImport);

  // If filters are applied, show the filter-specific empty state (regardless of user role)
  if (hasFilters) {
    return renderEmptyStateLayout({
      icon: <IconSearch />,
      iconBackground: "bg-warning-background",
      iconColor: "text-warning-icon",
      title: defaultT(
        t,
        "libs.datamanager.emptyState.no_tasks_found",
        "No tasks found"
      ),
      description: defaultT(
        t,
        "libs.datamanager.emptyState.try_adjust_clean_filter",
        "Try adjusting or clearing the filters to see more results"
      ),
      actions: (
        <Button
          variant="primary"
          look="outlined"
          onClick={onClearFilters}
          data-testid="dm-clear-filters-button"
        >
          {defaultT(
            t,
            "libs.datamanager.emptyState.clear_filters",
            "Clear Filters"
          )}
        </Button>
      ),
    });
  }

  // Role-based empty state logic (from RoleBasedEmptyState)
  // For service roles (reviewers/annotators), show role-specific empty states when they have no visible tasks
  // This applies whether the project has tasks or not - what matters is what's visible to this user
  if (userRole === "REVIEWER" || userRole === "ANNOTATOR") {
    // Reviewer empty state
    if (userRole === "REVIEWER") {
      return renderEmptyStateLayout({
        icon: <IconCheck />,
        title: defaultT(
          t,
          "libs.datamanager.emptyState.no_tasks_ava_for_review",
          "No tasks available for review or labeling"
        ),
        description: defaultT(
          t,
          "libs.datamanager.emptyState.tasks_imported_to_this_appear_here",
          "Tasks imported to this project will appear here"
        ),
      });
    }

    // Annotator empty state
    if (userRole === "ANNOTATOR") {
      const isAutoDistribution =
        project?.assignment_settings?.label_stream_task_distribution ===
        "auto_distribution";
      const isManualDistribution =
        project?.assignment_settings?.label_stream_task_distribution ===
        "assigned_only";

      if (isAutoDistribution) {
        return renderEmptyStateLayout({
          icon: <IconLsLabeling />,
          title: defaultT(
            t,
            "libs.datamanager.emptyState.start_labeling_tasks",
            "Start labeling tasks"
          ),
          description: defaultT(
            t,
            "libs.datamanager.emptyState.tasks_youve_labeled_appear_here",
            "Tasks you've labeled will appear here"
          ),
          actions: (
            <Button
              variant="primary"
              look="filled"
              disabled={false}
              onClick={onLabelAllTasks}
              data-testid="dm-label-all-tasks-button"
            >
              {defaultT(
                t,
                "libs.datamanager.emptyState.label_all_tasks",
                "Label All Tasks"
              )}
            </Button>
          ),
        });
      }

      if (isManualDistribution) {
        return renderEmptyStateLayout({
          icon: <IconInbox />,
          title: defaultT(
            t,
            "libs.datamanager.emptyState.no_tasks_available",
            "No tasks available"
          ),
          description: defaultT(
            t,
            "libs.datamanager.emptyState.tasks_assigned_to_you_appear_here",
            "Tasks assigned to you will appear here"
          ),
        });
      }

      // Fallback for annotators with unknown distribution setting
      return renderEmptyStateLayout({
        icon: <IconInbox width={40} height={40} />,
        title: defaultT(
          t,
          "libs.datamanager.emptyState.no_tasks_available",
          "No tasks available"
        ),
        description: defaultT(
          t,
          "libs.datamanager.emptyState.tasks_will_appear_here",
          "Tasks will appear here when they become available"
        ),
      });
    }
  }

  // Default case: show import functionality (existing behavior for Owners/Admins/Managers)
  return renderEmptyStateLayout({
    icon: <IconUpload />,
    title: defaultT(
      t,
      "libs.datamanager.emptyState.import_data_to_get_started",
      "Import data to get your project started"
    ),
    description: defaultT(
      t,
      "libs.datamanager.emptyState.connect_your_cloud",
      "Connect your cloud storage or upload files from your computer"
    ),
    testId: "empty-state-label",
    ariaLabelledBy: "dm-empty-title",
    ariaDescribedBy: "dm-empty-desc",
    additionalContent: <StorageProviderIcons />,
    actions: (
      <>
        <Button
          variant="primary"
          look="filled"
          className="flex-1"
          onClick={onOpenSourceStorageModal}
          data-testid="dm-connect-source-storage-button"
        >
          {defaultT(
            t,
            "libs.datamanager.emptyState.connect_cloud_storage",
            "Connect Cloud Storage"
          )}
        </Button>

        {isImportEnabled && (
          <Button
            variant="primary"
            look="outlined"
            className="flex-1"
            onClick={onOpenImportModal}
            data-testid="dm-import-button"
          >
            {defaultT(t, "libs.datamanager.emptyState.import", "Import")}
          </Button>
        )}
      </>
    ),
    footer: <DocumentationLink />,
  });
};
