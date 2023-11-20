import { useCallback, useState } from "react";
import { useDebounceEffect } from "../useDebounceEffect";
import { useSearchParams } from "react-router-dom";
import { INPUT_DELAY_TIME } from "../../constants/common";
import { URLParamValues } from "./types";
import { removeParamIfEmpty, spreadOptionalObjectKeyValue } from "./utils";

export const useSetParam = (
  paramName: URLParamValues,
  defaultValue: string
) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    () => searchParams.get(paramName) || ""
  );

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    []
  );

  const handleSearchParams = useCallback(() => {
    const preventAddingParamAgain = removeParamIfEmpty(
      searchValue,
      paramName,
      searchParams,
      setSearchParams
    );

    if (preventAddingParamAgain) return;

    setSearchParams((prev) => {
      return {
        ...spreadOptionalObjectKeyValue(prev, "username"),
        ...spreadOptionalObjectKeyValue(prev, "sortBy"),
        [paramName]: searchValue || defaultValue,
      };
    });
  }, [searchValue]);

  useDebounceEffect(handleSearchParams, [searchValue], INPUT_DELAY_TIME);

  return [searchValue, handleSearchChange] as const;
};
