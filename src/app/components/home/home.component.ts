import { Component, OnInit } from '@angular/core';
import { AlbumDataModel } from 'src/app/models/album-data-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  albumId: string = "";
  albumData: AlbumDataModel[] = [];
  loading: boolean = false;
  selectedAlbumId: number | undefined;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
  }

  getAlbumDataById() {
    this.loading = true;
    this.dataService.getAlbumData(this.albumId).subscribe((res) => {
      console.log('res: ', res);
      this.albumData = res;
      this.selectedAlbumId = res[0].albumId;
      this.loading = false
    })
  }


}
