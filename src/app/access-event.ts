import {Successor} from "./successor";
/**
 * Created by anuradha on 11/17/17.
 */

export class AccessEvent{

  current_file: string;
  event_type: string;
  successor_list: string;

  constructor(current_file: string,
  event_type: string,
  successor_list: string){

    this.current_file = current_file;
    this.event_type = event_type;
    this.successor_list = successor_list;
  }

}
