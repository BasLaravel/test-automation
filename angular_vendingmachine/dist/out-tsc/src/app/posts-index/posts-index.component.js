var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var PostsIndexComponent = /** @class */ (function () {
    function PostsIndexComponent() {
    }
    // constructor(public apiService: ApiService, public route: ActivatedRoute) {
    //   apiService.routeGetPost('getdrinks').subscribe((res) => {
    //     this.allPosts = res;
    //   });
    //  }
    PostsIndexComponent.prototype.ngOnInit = function () {
    };
    PostsIndexComponent = __decorate([
        Component({
            selector: 'app-posts-index',
            templateUrl: './posts-index.component.html',
            styleUrls: ['./posts-index.component.css']
        })
    ], PostsIndexComponent);
    return PostsIndexComponent;
}());
export { PostsIndexComponent };
//# sourceMappingURL=posts-index.component.js.map