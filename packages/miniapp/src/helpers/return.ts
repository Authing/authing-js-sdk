import { ErrorData, SDKResponseSuccess, SDKResponseError } from '../types'

export function returnSuccess<T> (data: T): SDKResponseSuccess<T> {
	return [null, data]
}

export function returnError (errorData: ErrorData): SDKResponseError {
	return [errorData, undefined]
}
