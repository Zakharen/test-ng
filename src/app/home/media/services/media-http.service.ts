import { Injectable } from '@angular/core';
import { MediaUrl } from '../models/media-url.model';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import {UserMediaUrls} from '../models/user-media-urls.model';



@Injectable()
export class MediaHttpService {

  private storageKey = 'mediaUrls';
  private mediaUrls: Array<UserMediaUrls>;
  private currentUserName: string;

  constructor(protected storage: AsyncLocalStorage) {
    this.storage.getItem(this.storageKey).subscribe((data) => {
      if (!data) {
        data = new Array<UserMediaUrls>();
      }
      this.mediaUrls = data;
    }, () => {
      this.mediaUrls = new Array<UserMediaUrls>();
    });
  }
  public get(): Array<MediaUrl> {
    const userData = this.mediaUrls.filter(i => i.userName === this.currentUserName)[0];
    return userData.mediaUrls;
  }
  public getById(id: number): MediaUrl {
    const userUrls = this.get();
    const result = userUrls.filter(i => i.Id === id)[0];
    return result;
  }

  public create(mediaUrl: MediaUrl) {
    const userMediaUrls = this.get();
    mediaUrl.Id = userMediaUrls[userMediaUrls.length - 1].Id || 1;
    userMediaUrls.push(mediaUrl);
    this.saveStorage();
  }

  public update(id: number, data: MediaUrl): void {
    const mediaInStorage = this.getById(id);
    if ( mediaInStorage !== null) {
      mediaInStorage.ContentType = data.ContentType;
      mediaInStorage.Url = data.Url;
      this.saveStorage();
    }
  }
  public delete(id: number): void {
    const userMediaData = this.get();
    const userMediaUrl = this.getById(id);
    userMediaData.splice(userMediaData.indexOf(userMediaUrl), 1);
    this.saveStorage();
  }

  private saveStorage(): void {
    this.storage.setItem(this.storageKey, this.mediaUrls).subscribe();
  }
}
