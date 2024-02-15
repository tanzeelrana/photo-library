import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { AlbumDataModel } from '../models/album-data-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAlbumData(params: string) {
    return this.http.get(this.apiUrl + params, {}).pipe(map((res: any) => <AlbumDataModel[]>res));
  }
}
