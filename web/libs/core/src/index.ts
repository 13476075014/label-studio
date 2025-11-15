import * as ff from "./lib/utils/feature-flags/ff";

export * from "./lib/Tour";
export * from "./lib/utils/analytics";
export * from "./lib/utils/urlJSON";
export * from "./lib/utils/helpers";
export * from "./hooks/useAbortController";
export * from "./lib/hooks/useCopyText";

export { ff };

export const defaultT = (
  t: any, // : (message: string, tParams: { [key: string]: string | number }) => string
  message: string, // : string
  tParams: { [key: string]: string | number } | string, // : { [key: string]: string | number } | string
  defaultMessage?: string // ?: string
) => {
  defaultMessage = typeof tParams === "string" ? tParams : defaultMessage;
  tParams = typeof tParams === "string" ? {} : tParams;
  const result = t(message, tParams);
  return result && result !== message ? result : defaultMessage;
};
