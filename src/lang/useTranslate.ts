import en from "./en.json";
import { useIntl } from "react-intl";
import { INestedMessages } from "./flattenMessages";

type KeyPaths<T extends INestedMessages> = {
  [K in keyof T]: T[K] extends INestedMessages
    ? `${K & string}.${KeyPaths<T[K]> & string}`
    : K;
}[keyof T];

export type TranslationKey = KeyPaths<typeof en>;

export const useTranslate = () => {
  const { formatMessage } = useIntl();
  const t = (
    key: TranslationKey & string,
    values?: Record<string, string | number>,
    defaultMessage?: string
  ) => {
    return formatMessage({ id: key, defaultMessage: defaultMessage }, values);
  };
  return { t };
};
