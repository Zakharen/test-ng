import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'media.component.html'
})

export class MediaComponent implements OnInit {

    videos: any[] = [
        {videoURL: 'kW9cJsvcsGo'},
        {videoURL: 'kW9cJsvcsGo'}
    ];

    constructor() { }

    ngOnInit() { }
}
