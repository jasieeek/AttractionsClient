import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Attraction} from '../model/Attraction';

@Injectable({
  providedIn: 'root'
})
export class MainSevice {
  private attractionsUrl: string;
  private citiesUrl: string;
  private transactionsUrl: string;

  constructor(private http: HttpClient) {
    this.attractionsUrl = 'http://localhost:8080/attractions';
    this.citiesUrl = 'http://localhost:8080/cities';
    this.transactionsUrl = 'http://localhost:8080/transactions';
  }

  public findAllAttractions(): Observable<Attraction[]> {
    return this.http.get<Attraction[]>(this.attractionsUrl);
  }

  public saveAttraction(attraction: Attraction) {
    return this.http.post<Attraction>(this.attractionsUrl, attraction);
  }

  public deleteAttraction(id: number) {
    return this.http.delete(this.attractionsUrl + '/del/' + id);
  }
}
