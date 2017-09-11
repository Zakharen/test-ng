import {MediaUrl} from './media-url.model';

export class UserMediaUrls {
  constructor() {
    this.mediaUrls = new Array<MediaUrl>();
  }

  public userName: string;
  public mediaUrls: Array<MediaUrl>;
}
