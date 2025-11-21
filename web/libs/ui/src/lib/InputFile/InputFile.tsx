import { IconUpload } from "../../assets/icons";
import { defaultT } from "../../../../core/src/index";
import i18n from "i18next";
const t = i18n.t.bind(i18n);
import clsx from "clsx";
type InputFileProps = HTMLAttributes<HTMLInputElement> & {
  name?: string;
  className?: string;
  text?: React.ReactNode | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  props?: Record<string, any>;
};

import styles from "./InputFile.module.scss";
import type React from "react";
import { forwardRef, type HTMLAttributes, useCallback, useRef } from "react";
export const InputFile = forwardRef(
  ({ name, className, text, onChange, ...props }: InputFileProps, ref: any) => {
    if (!ref) {
      ref = useRef();
    }
    const interactiveKeys = ["Space", " "];
    const wrapperKeyDownHandler = useCallback(
      (e: any) => {
        if (interactiveKeys.includes(e.key)) {
          e.preventDefault();
          ref.current.click();
        }
      },
      [ref]
    );
    return (
      <label
        className={clsx(styles.inputWrapper, className)}
        onKeyDown={wrapperKeyDownHandler}
      >
        <span className={styles.labelContent}>
          <IconUpload className={styles.icon} />{" "}
          {text ?? (
            <>
              {defaultT(
                t,
                "pages.account_settings.upload_image",
                "Upload Image"
              )}
            </>
          )}
        </span>
        <input
          ref={ref}
          type="file"
          className={clsx("file-input", styles.input)}
          name={name}
          {...props}
          onChange={onChange}
        />
      </label>
    );
  }
);
