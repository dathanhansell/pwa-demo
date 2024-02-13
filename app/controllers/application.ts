import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ApplicationController extends Controller {
  @tracked pressCount = 0;
  @tracked inputContent0 = '';
  @tracked inputContent1 = '';
  @action increment() {
    this.pressCount++;
  }
  @action clear0() {
    this.inputContent0 = '';
  }
  @action clear1() {
    this.inputContent1 = '';
  }
}
