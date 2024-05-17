import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Nave} from './nave';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NaveService {

  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getBooks(): Observable<Nave[]> {
  return this.http.get<Nave[]>(this.apiUrl);
}

}
