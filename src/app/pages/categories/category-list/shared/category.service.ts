import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiPath = 'api/categories';

  constructor(private http: HttpClient) { }

 getAll(): Observable<Category[]> {
   return this.http.get(this.apiPath).pipe(
     catchError(this.handleError),
     map(this.jsonDataToCategories)
   );
 }

 getById(id: number): Observable<Category> {
   return this.http.get(`${this.apiPath}/${id}`).pipe(
    catchError(this.handleError),
    map(this.jsonDataToCategorie)
   );
 }

 create(category: Category): Observable<Category> {
   return this.http.post(this.apiPath, category).pipe(
    catchError(this.handleError),
    map(this.jsonDataToCategorie)
   );
 }

 update(category: Category): Observable<Category> {
   return this.http.put(`${this.apiPath}/${category.id}`, category).pipe(
    catchError(this.handleError),
    map(() => category)
   );
 }

 delete(id: number): Observable<Category> {
   return this.http.delete(`${this.apiPath}/${id}`).pipe(
    catchError(this.handleError),
    map(() => null)
   );
 }

 // PRIVATE METHODS

 private jsonDataToCategories(jsonData: any[]): Category[] {
   const categories: Category[] = [];
   // tslint:disable-next-line:no-shadowed-variable
   jsonData.forEach(element => categories.push(element as Category));
   return categories;
 }

 private jsonDataToCategorie(jsonData: any): Category {
   return  jsonData as Category;
 }

 private handleError(error: any): Observable<any> {
 console.log('Error: ', error);
 return throwError(error);
 }
}
