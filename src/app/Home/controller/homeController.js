import {Twitter} from 'twitter';
import {connect} from 'utils/Decorators';
import AccountFactory from 'twitter/factories/AccountFactory';

@connect((accounts)=>({
  loading: false,
  error: false,
  data:{}
}), Twitter)
export default class HomeCtrl {
  /**
  * Constructor class AppCtrl
  *
  * @param {object} TwitterRest
  */
  constructor(account) {
    'ngInject';

    console.log(' analizalo bien HOME IS')
    let vm = this;

    vm.accounts.factory = account;
    vm.accounts.load(account);

  }
  addAccount(e, _that){

    console.log('works fine, but es is like not for angular 1.x',_that.vm.account, _that.account);
    _that.vm.accounts.save(_that.vm.account);
    e.preventDefault();
    return false;
  }
}
