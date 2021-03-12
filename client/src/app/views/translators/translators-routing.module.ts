import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslatorsListComponent } from './translators-list/translators-list.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Translators'
        },
        children: [
            {
                path: 'list',
                component: TranslatorsListComponent,
                data: {
                    title: ''
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TranslatorsRoutingModule { }
