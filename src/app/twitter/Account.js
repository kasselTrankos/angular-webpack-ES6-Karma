
const initialState = {
  loading: true,
  data: {},
  error: false
};

const Account = (state=initialState)=> {

  return {
    load: ()=>{
      state.loading = true;
      state.factory.loadAllAccounts()
      .then((data)=>{
        state.data = data;
        state.loading = false;
      }).catch((e)=>{
        state.error = e;
        state.loading = false;
      });
    },
    save: (account)=>{
      state.loading = true;
      state.factory.saveNewAccount(account)
      .then((data)=>{
        state.data = data;
        state.loading = false;
      }).catch((e)=>{
        state.error = e;
        state.loading = false;
      });
    }
  }
}
//Twitter['$inject'] = ['account']
export {Account};
