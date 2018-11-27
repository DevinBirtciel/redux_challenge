

export const UPDATE_SCAN_LIST = 'UPDATE_SCAN_LIST';
export const UPDATE_SINGLE_SCAN = 'UPDATE_SINGLE_SCAN';

export function updateScanList(listOfScans, key){
    return {
        type: UPDATE_SCAN_LIST,
        key: key,
        payload: listOfScans
    }
}

export function updateSingleScan(singleScan, key){
    return {
        type: UPDATE_SINGLE_SCAN,
        key: key,
        payload: singleScan
    }
}