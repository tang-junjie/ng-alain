import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularWebStorageModule } from 'angular-web-storage';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgZorroAntdModule } from "ng-zorro-antd";
import { TranslateModule } from "@ngx-translate/core";
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ScrollService } from "./services/scroll.service";
import { ColorsService } from "./services/colors.service";
import { SparklineDirective } from './directives/sparkline/sparkline.directive';
import { MomentDatePipe } from "./pipes/moment-date.pipe";
import { CNCurrencyPipe } from "./pipes/cn-currency.pipe";

const DIRECTIVES = [SparklineDirective];
const PIPES = [MomentDatePipe, CNCurrencyPipe];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularWebStorageModule,
        NgZorroAntdModule.forRoot(),
        PerfectScrollbarModule,
        ChartsModule
    ],
    providers: [ScrollService, ColorsService],
    declarations: [...DIRECTIVES, ...PIPES],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        RouterModule,
        AngularWebStorageModule,
        PerfectScrollbarModule,
        TranslateModule,
        ChartsModule,

        ...DIRECTIVES,
        ...PIPES
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
