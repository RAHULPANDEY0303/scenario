import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(private http: HttpClient) { }
    // protected url = 'http://localhost:000';

    getPosts(): Observable<any> {
    return this
            .http
            .get("https://jsonplaceholder.typicode.com/posts")
            .pipe(
            map(res => res)
        );
    }
}
