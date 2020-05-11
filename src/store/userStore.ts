import { Module, VuexModule } from 'vuex-module-decorators';

@Module({ name: 'userStore', stateFactory: true })
export default class UserStore extends VuexModule {}
