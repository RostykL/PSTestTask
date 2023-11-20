import { URLParamValues } from "../hooks/useSetParam/types";

export const appendSearchToURL = (
  searchParams: URLSearchParams,
  type: URLParamValues
) => {
  return searchParams.get(type)?.length > 0
    ? `?${type}=${searchParams.get(type)}`
    : "";
};
