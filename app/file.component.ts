
import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component({
    selector: 'file',
    template: `
<div class="media">
  <div class="media-left">
    <a href="{{ data.fileUrl }}">
      <img class="media-object" src="{{ data.imageUrl }}">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">
        {{ data.author }} <span class="handle">{{ data.email }}</span>
    </h4>
    {{ data.body }}
    <div>
        <like [totalLikes]="data.totalLikes" [iLike]="data.iLike"></like>
    </div>
  </div>
</div>    
    `,
    styles: [`
        .handle {
            color: #ccc;
        }
        
        .media {
            margin-bottom: 20px;
        }
        
        .media-object {
            border-radius: 10px;
        }
    `],
    directives: [LikeComponent]
})
export class FileComponent {
    constructor(){
        console.log(this.data);
    }
    @Input() data;
}