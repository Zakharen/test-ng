import { Component, OnInit } from '@angular/core';
import { AlertService } from './../../shared/_services/index';
import { AddMediaComponent } from './add-media/add-media.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { MediaUrl } from './models/media-url.model';
import { MediaHttpService } from './services/media-http.service';

@Component({
  moduleId: module.id,
  styleUrls: ['./media.component.css'],
  templateUrl: 'media.component.html'
})

export class MediaComponent implements OnInit {

  public mediaData: Array<MediaUrl> = new Array<MediaUrl>();
  public activeSlideIndex: number = 0;

    constructor(
      private alertService: AlertService,
      private dialogService: DialogService,
      private mediaService: MediaHttpService) { }

    public showAddMediaModal() {
      const disposable = this.dialogService.addDialog(AddMediaComponent, {
        mediaUrl: new MediaUrl()})
        .subscribe((mediaUrl) => {
          if (mediaUrl) {
            this.mediaService.create(mediaUrl);
            this.mediaData.push(mediaUrl);
          }
        });
    }

    public removeCurrentMedia() {
      const activeMedia = this.mediaData[this.activeSlideIndex];
      if (activeMedia) {
        this.mediaService.delete(activeMedia.Id);
        this.mediaData.splice(this.activeSlideIndex, 1);
      }
    }

    ngOnInit() {
      this.mediaData = this.mediaService.get();
    }
}
