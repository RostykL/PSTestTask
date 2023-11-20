import { URLParamValues } from "./types";
import { SetURLSearchParams } from "react-router-dom";

export const spreadOptionalObjectKeyValue = (
  obj: URLSearchParams,
  type: URLParamValues
) => {
  return obj.get(type) && { [type]: obj.get(type) };
};

export const removeParamIfEmpty = (
  searchValue: string,
  paramName: URLParamValues,
  searchParams: URLSearchParams,
  setSearchParams: SetURLSearchParams
) => {
  if (searchValue.length !== 0) return false;

  if (searchParams.has(paramName)) {
    searchParams.delete(paramName);
    setSearchParams(searchParams);
    return true;
  }
};
