import { Injectable } from '@angular/core';
import { MediaUrl } from '../models/media-url.model';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import {UserMediaUrls} from '../models/user-media-urls.model';



@Injectable()
export class MediaHttpService {

  private storageKey = 'mediaUrls';
  private mediaUrls = new Array<UserMediaUrls>();
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
    const userName = this.getUserName();
    this.mediaUrls = JSON.parse(localStorage.getItem(this.storageKey));
    if (!this.mediaUrls) {
       this.mediaUrls = new Array<UserMediaUrls>();
    }
    let userData = this.mediaUrls.filter(i => i.userName === userName)[0];
    if (!userData) {
      userData = new UserMediaUrls();
      userData.userName = userName;
      this.mediaUrls.push(userData);
    }
    return userData.mediaUrls;


/*    this.storage.getItem(this.storageKey).subscribe((data) => {
      if (!data) {
        data = new Array<UserMediaUrls>();
      }
      this.mediaUrls = data;
      let userData = this.mediaUrls.filter(i => i.userName === userName)[0];
      if (!userData) {
        userData = new UserMediaUrls();
        userData.userName = userName;
        this.mediaUrls.push(userData);
      }
      return userData;
    }, () => {
      this.mediaUrls = new Array<UserMediaUrls>();

      const userData = new UserMediaUrls();
      userData.userName = userName;
      this.mediaUrls.push(userData);
    });*/


  }
  public getById(id: number): MediaUrl {
    const userUrls = this.get();
    const result = userUrls.filter(i => i.Id === id)[0];
    return result;
  }

  public create(mediaUrl: MediaUrl) {
    const userMediaUrls = this.get();
    if (userMediaUrls.length > 0) {
      mediaUrl.Id = userMediaUrls[userMediaUrls.length - 1].Id + 1;
    } else {
      mediaUrl.Id = 1;
    }
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
    localStorage.setItem(this.storageKey, JSON.stringify(this.mediaUrls));
  }
  private getUserName (): string {
    return JSON.parse(localStorage.getItem('currentUser')).username;
  }
}
