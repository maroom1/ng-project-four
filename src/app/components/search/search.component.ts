import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchStr:string;
searchRes:Artist[];

  constructor(private spotifyService:SpotifyService) {
    console.log("Searc constructer " + this.searchStr);
   }

  ngOnInit() {
  }

  searchMusic() {
    console.log("Searching music "+this.searchStr);
    //data.artistis.items will throw compilation error but output works
    this.spotifyService.getQuery(this.searchStr).subscribe(data=>
      //console.log(data['artists'].items));
      this.searchRes=data['artists'].items);
  }

}
