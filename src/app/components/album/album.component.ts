import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  private album:any;
  constructor(
    private _spotifyService:SpotifyService,
  private _route:ActivatedRoute ) { }

  ngOnInit() {
    this._route.params.subscribe(params=>
      {
        this._spotifyService.getAlbum(params['id'])
        .subscribe(data=>{
          console.log(data);
          this.album=data;})
      }
    )
  }

}
