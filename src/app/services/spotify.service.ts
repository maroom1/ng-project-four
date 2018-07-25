import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album } from '../models/album';


@Injectable({
  providedIn: 'root'
})



export class SpotifyService {
    getArtist(id: string) {
  //getArtist() {
  // this.artistUrl='https://api.spotify.com/v1/artists/13ubrt8QOOCPljQ2FL1Kca';//+id;
  this.artistUrl='https://api.spotify.com/v1/artists/'+id;
  const headers = new HttpHeaders({ Authorization:
    'Bearer '+this.token });

  return this.http.get(this.artistUrl,{headers});//.subscribe(data=>console.log(data));
  }
  getAlbums(id: string) {
 // getAlbums() {
   // this.albumUrl='https://api.spotify.com/v1/artists/13ubrt8QOOCPljQ2FL1Kca/albums';//+id;
    this.albumsUrl='https://api.spotify.com/v1/artists/'+id+'/albums';
    const headers = new HttpHeaders({ Authorization:
      'Bearer '+this.token });
 
    return this.http.get(this.albumsUrl,{headers});
    }

    getAlbum(id: string) {
      // getAlbums() {
        // this.albumUrl='https://api.spotify.com/v1/artists/13ubrt8QOOCPljQ2FL1Kca/albums';//+id;
         this.albumUrl='https://api.spotify.com/v1/albums/'+id;
         const headers = new HttpHeaders({ Authorization:
           'Bearer '+this.token });
      
         return this.http.get(this.albumUrl,{headers});
         }
 
  
  private searchUrl:string;
  private artistUrl:string;
  private albumsUrl:string;
  private albumUrl:string;

  private token='BQB4d47uwfajnoSrYbMWZBHRnzUi-Qcw-9pRnEpmuMYVnjyptAEn-LIsLzg0rSPSiSIud4w3hRTSW6AZ1IVCJbtmEslquik3SnTjQpDV6LD4k4YWexcK6hkar49NaKTZ9UYld0Cxp0madKT4YDpoqw6InMuPiuEKocfm6_YgA3aQgvHp9I8tc9_17325DgneTQ1wiJ9b1SKNr9B9MywATC-ccdY9wcoHsBBvU_ewM2wDvrNdB9zUsg2PB9MS7VtZGSmkgdyJxQkeFmN_WQRNVU4Nbl_XQUAAuks8';

  constructor(private http:HttpClient) { 
    console.log("reached the spotify service");
   // this.getArtist();
   //this.getAlbums('13ubrt8QOOCPljQ2FL1Kca');
  }

  getQuery(str:string,type='artist') {
  //   const url = `https://api.spotify.com/v1/${query}`;
  this.searchUrl='https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=40&type='+type+'&market=us';
   const headers = new HttpHeaders({ Authorization:
    'Bearer '+this.token });
    return this.http.get(this.searchUrl, { headers });
   }
//   getQuery(str:string,type='artist') {  
//     let params = new URLSearchParams();
//    params.set('Authorization','Bearer BQBz6z3ydYnNlYygnW74xh6D1B-Rq-G9aQBOB_R4iqR8ArlK96Nkp9Kt9UfJz4EK1DrdZtJ98i1JywsmtoY06JFr-bYyXyUzqZahMWq_wHhb3atQM-r4b2tRXezcBa9iAWHl1vEpb7dstbQnlVR-kMZpA_-UjhMeXOX1YYG_E90kxVbTG7SvFSAxsp2IvgLQO76nRotwkW5OIvFwapAoccpU4vt-RPSrr7v8DlVW1BjpWMIzRGbzjQA8Q0cCvjb3NrwaLNXRgcJLelWqUzZ6S7e1C-6nhxAvO6vL');
   
// let httpOptions=new RequestOptions({params});
  
// this.searchUrl='https://api.spotify.com/v1/search?query='+str+'offset=0&limit=20&type='+type+'&market=us';
// return this.http.get(this.searchUrl,httpOptions)
//   }


}


