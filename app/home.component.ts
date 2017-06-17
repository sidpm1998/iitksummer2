import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    template:`
    
    <h1 align="center">Welcome {{user.name}}</h1><br>
    <img align="center" src={{user.userimage}} />
    <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
    `,
    providers:[HTTP_PROVIDERS],
    directives:[ROUTER_DIRECTIVES]
})
export class HomeComponent{
    user={
        name:"Siddhanta Mhambrey",
        rollno:"160400",
        userimage:"http://lorempixel.com/400/200/"
    }
}