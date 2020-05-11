import { Module, VuexModule } from 'vuex-module-decorators';

@Module({ name: 'globalStore', namespaced: true, stateFactory: true })
export default class GlobalStore extends VuexModule {}
