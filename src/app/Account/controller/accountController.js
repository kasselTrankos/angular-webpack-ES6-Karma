import {connect} from 'utils/Decorators';
import {Tweet} from 'twitter';
import TweetFactory from 'twitter/factories/TweetFactory';

@connect((tweets)=>({
  loading: false,
  error: false,
  data:{}
}), Tweet)
export default class AccountCtrl {

  constructor($stateParams, tweet) {
    'ngInject';
    let vm  = this;
    vm.tweets.addFactory(tweet, $stateParams.account)//.factory = tweet;
    vm.tweets.data = {};///reset
    vm.tweets.load($stateParams.account);
    vm.nameAccount = $stateParams.account;
  }

}
