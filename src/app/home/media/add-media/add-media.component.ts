import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import {MediaUrl} from '../models/media-url.model';
export interface AddMediaModel {
  mediaUrl: MediaUrl;
}

@Component({
  selector: 'add-media-dialog',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent extends DialogComponent<AddMediaModel, MediaUrl>  implements OnInit, AddMediaModel {
  mediaUrl = new MediaUrl();

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  tryParseEmbedContent($event) {
    if (this.mediaUrl.Url && this.mediaUrl.Url.startsWith('<iframe')) {
      const regex = /<iframe.*?src="(.*?)"/;
      const search = regex.exec(this.mediaUrl.Url);
      if (search) {
        const src = search[1];
        if (src) {
          this.mediaUrl.Url = src;
        }
      }
    }
  }

  confirm() {
    this.result = this.mediaUrl;
    this.close();
  }

  ngOnInit() {
  }
}
