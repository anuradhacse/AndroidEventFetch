/**
 * Created by anuradha on 11/18/17.
 */
export class User {

  nickname: string;
  id: string;
  name: string;
  nachname: string;
  pictURL: string;
  city: string;


  constructor(
    nickname: string,
    id: string,
    name: string,
    nachname: string,
    pictURL: string,
    city: string
  ){
    this.nickname = nickname;
    this.id = id;
    this.name = name;
    this.nachname = nachname;
    this.pictURL = pictURL;
    this.city = city;
  }
}
