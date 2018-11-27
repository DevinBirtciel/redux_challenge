
import {UPDATE_SCAN_LIST} from '../actions/Actions';
import {UPDATE_SINGLE_SCAN} from '../actions/Actions';

const initialState = {
    scanSets:[
        {
            key: 1,
            scan: '',
            scanList: []
        },
        {
            key: 2,
            scan: '',
            scanList: []
        },
        {
            key: 3,
            scan: '',
            scanList: []
        },
        {
            key: 4,
            scan: '',
            scanList: []
        }]
};

export default function updateScanTables(state = initialState, action) {
    switch(action.type){
        case UPDATE_SINGLE_SCAN:
            return Object.assign({}, {
                    scanSets: state.scanSets.map((scanSet) => {
                                if(scanSet.key === action.key){
                                    return Object.assign({},scanSet, {
                                        scan: action.payload
                                    })
                                }
                                return scanSet
                            }
                        )}
                )
        case UPDATE_SCAN_LIST:
            return Object.assign({}, {
                scanSets: state.scanSets.map((scanSet) => {
                        if(scanSet.key === action.key){
                            return Object.assign({},scanSet, {
                                scanList: scanSet.scanList.concat(action.payload)
                            })
                        }
                        return scanSet
                    }
                )}
            )
        default: return state;
    }
}
