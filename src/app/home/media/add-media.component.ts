import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import {MediaUrl} from './models/media-url.model';
export interface AddMediaModel {
  mediaUrl: MediaUrl;
}

@Component({
  selector: 'add-media-dialog',
  template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <h4 class="modal-title">Add new media</h4>
                     <button type="button" class="close" (click)="close()" >&times;</button>
                   </div>
                   <div class="modal-body">
                     <form>
                       <div class="form-group">
                         <label>Url</label>
                         <input type="text" name="Url" class="form-control" placeholder="Url" [(ngModel)]="mediaUrl.Url"/>
                       </div>
                       <div class="form-group">
                         <label>Type</label>
                         <select class="form-control" name="type" [(ngModel)]="mediaUrl.ContentType" >
                           <option value="Image" selected="selected">Image</option>
                           <option value="Video">Video</option>
                         </select>
                       </div>
                     </form>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
                     <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
                   </div>
                 </div>
              </div>`
})
export class AddMediaComponent extends DialogComponent<AddMediaModel, MediaUrl>  implements OnInit, AddMediaModel {
  mediaUrl = new MediaUrl();

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  confirm() {
    this.result = this.mediaUrl;
    this.close();
  }

  ngOnInit() {
  }
}
