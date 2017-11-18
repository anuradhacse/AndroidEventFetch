/**
 * Created by anuradha on 11/17/17.
 */

  export interface AccessEvent{

  current_file: string;
  event_type: string;
  successor_list: Successor[];

}

export interface Successor{
  name: string;
  availability: boolean;
  prefetched: boolean;
}
