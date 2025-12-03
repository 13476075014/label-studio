import { useCopyText } from "@humansignal/core";
import { IconEllipsis, IconLink } from "@humansignal/icons";
import { Button, ToastType, useToast } from "@humansignal/ui";
import { observer } from "mobx-react";
import { type FC, useCallback, useMemo, useState } from "react";
import { cn } from "../../../utils/bem";
import { ContextMenu, type ContextMenuAction, ContextMenuTrigger, type MenuActionOnClick } from "../../ContextMenu";
import { defaultT } from "../../../../../core/src/index";
import i18n from "i18next";
const t = i18n.t.bind(i18n);

export const RegionContextMenu: FC<{ item: any }> = observer(({ item }: { item: any }) => {
  const [open, setOpen] = useState(false);
  const regionLink = useMemo(() => {
    const url = new URL(window.location.href);
    if (item.annotation.pk) {
      url.searchParams.set("annotation", item.annotation.pk);
    }
    if (item.id) {
      url.searchParams.set("region", item.id.split("#")[0]);
    }
    return url.toString();
  }, [item]);
  const [copyLink] = useCopyText({ defaultText: regionLink });
  const toast = useToast();

  const onCopyLink = useCallback<MenuActionOnClick>(
    (_, ctx) => {
      copyLink();
      ctx.dropdown?.close();
      toast.show({
        message: defaultT(t, "pages.labeling.regions_link_copied_to_clipboard",
                        "Region link copied to clipboard"),
        type: ToastType.info,
      });
    },
    [copyLink],
  );

  const actions = useMemo<ContextMenuAction[]>(
    () => [
      {
        label: defaultT(t, "pages.labeling.copy_region_link",
                        "Copy Region Link"),
        onClick: onCopyLink,
        icon: <IconLink />,
      },
    ],
    [onCopyLink],
  );

  return (
    <ContextMenuTrigger
      className={cn("region-context-menu").toClassName()}
      content={<ContextMenu actions={actions} />}
      onToggle={(isOpen) => setOpen(isOpen)}
    >
      <Button
        variant="neutral"
        look="string"
        size="smaller"
        style={{ ...(open ? { display: "flex !important" } : null) }}
        aria-label="Region options"
      >
        <IconEllipsis />
      </Button>
    </ContextMenuTrigger>
  );
});
