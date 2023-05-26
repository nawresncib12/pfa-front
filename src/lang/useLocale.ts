import { useState, useMemo } from "react";
import en from "./en.json";

import { INestedMessages, flattenMessages } from "./flattenMessages";

export type Locale = "en";

const messages: Record<Locale, INestedMessages> = {
  en,
};

export const useLocale = () => {
  const [locale, setLocale] = useState<Locale>("en");

  const flattenedMessages = useMemo(
    () => flattenMessages(messages[locale]),
    [locale]
  );

  // const switchLocale = useCallback(
  //   (newLocale: Locale) => {
  //     if (newLocale === locale) {
  //       return;
  //     }
  //     setLocale(newLocale);
  //   },
  //   [locale]
  // );

  return { locale, messages: flattenedMessages };
};
