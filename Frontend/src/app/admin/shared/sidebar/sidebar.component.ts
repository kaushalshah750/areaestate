import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: false
})
export class SidebarComponent {
    isCollapsed: boolean = false;

    constructor(public commonService:CommonService){

    }

    collapse(){
        this.isCollapsed = !this.isCollapsed;
    }
}
