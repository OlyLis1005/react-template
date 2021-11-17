import {NavigateOptions, useSearchParams} from "react-router-dom"
import React from "react"
// @ts-ignore
import * as JSURL from "jsurl"

export function useQueryParam<T>(
  key: string
): [T | undefined, (newQuery: T, options?: NavigateOptions) => void] {
  let [searchParams, setSearchParams] = useSearchParams()
  let paramValue = searchParams.get(key)

  let value = React.useMemo(() => JSURL.parse(paramValue), [paramValue])

  let setValue = React.useCallback(
    (newValue: T, options?: NavigateOptions) => {
      let newSearchParams = new URLSearchParams(searchParams)
      newSearchParams.set(key, JSURL.stringify(newValue))
      setSearchParams(newSearchParams, options)
    },
    [key, searchParams, setSearchParams]
  )

  return [value, setValue]
}