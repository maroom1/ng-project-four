import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute}from '@angular/router';
import {Album}  from '../../models/album';
import {Artist}  from '../../models/artist';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id:string;
  artist:any; // since they spotify change the object format we are using any
  albums:any;

  constructor(private _spotifyService:SpotifyService,
  private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .subscribe(params=>{
        this._spotifyService.getArtist(params['id'])
        .subscribe(artist => {
          console.log(artist);
          this.artist=artist;}
        )
      })

  this._route.params.subscribe(params=>
  {
    this._spotifyService.getAlbums(params['id'])
      .subscribe(album=>{
        console.log(album);
        this.albums=album['items'];})
  })
  }

}
