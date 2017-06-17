import {Component} from 'angular2/core';
import {SearchComponent} from './search.component';
@Component({
    template:`
    <search></search>
    `,
    directives:[SearchComponent]

})
export class SearchPageComponent{

}