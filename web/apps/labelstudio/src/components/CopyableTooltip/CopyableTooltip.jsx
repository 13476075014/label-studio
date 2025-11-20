import { Children, cloneElement, forwardRef, useCallback } from "react";
import { useCopyText } from "../../hooks/useCopyText";
import { Tooltip } from "@humansignal/ui";
import { useTranslation } from "react-i18next";
import { defaultT } from "../../utils/scripts";
import i18n from "i18next"
const t = i18n.t.bind(i18n);

export const CopyableTooltip = forwardRef(({ children, title, textForCopy, ...restProps }, ref) => {
  // const { t } = useTranslation();
  const [copied, copyText] = useCopyText({ defaultText: textForCopy });

  const clickHandler = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    copyText();
  }, []);

  const child = Children.only(children);
  const clone = cloneElement(child, {
    ...child.props,
    ref,
    onClick: clickHandler,
  });

  return <Tooltip title={copied ? defaultT(t, "common.copied",
    "Copied!") : title} onClick={clickHandler} {...restProps} children={clone} />;
});
