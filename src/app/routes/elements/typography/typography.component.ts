import { Component } from '@angular/core';
import { ColorsService } from './../../../shared/services/colors.service';

@Component({
    selector: 'app-typography',
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss']
})
export class TypographyComponent {

    colors: string[] = [];

    constructor(srv: ColorsService) {
        this.colors = srv.brands;
    }
}
