import { dummydata } from './dummydata';

export   function randomThumb() {
  const rand = Math.floor(Math.random() * 7);
  return dummydata[rand].thumbnail;
}