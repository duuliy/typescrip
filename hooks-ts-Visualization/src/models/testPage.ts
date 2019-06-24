import { object } from 'prop-types';


interface Person {
    payload: any;
}

type action = { payload: any }


export default {
  namespace: 'testPage',
  state: {
    admittanceBody: 666
  },
  effects: {
    // * getAdmittanceList ({ payload }, { call, put }) {
    //   const data = yield call(asset.getAdmittanceList, payload)
    //   yield put({ type: 'save', payload: { admittanceBody: data.body } })
    // }
  },
  reducers: {
    save (state:{}, action:Person) {
      return { ...state, ...action.payload }
    },
    importAssetLoading (state:{}, { payload }:action) {
      return { ...state,
        admittanceBody: payload
      }
    }
  }
}
