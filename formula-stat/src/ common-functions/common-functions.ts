export function isNullOrUndefined(value: any): boolean {
    if (value == null || value == undefined) {
        return true;
    }
    return false;
}

export function isNullOrEmptyArray(arr: Array<any>): boolean {
    if (arr == undefined || arr.length < 1) {
        return true;
    }
    return false;
}