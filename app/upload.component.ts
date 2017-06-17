import {Component} from 'angular2/core';
@Component({
    templateUrl:'/app/upload.component.html'
})
export class UploadComponent{
        departs;
        onSubmit(form){
        console.log(form);
    }
    
}