import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {ABOUT_US_LIST, IAboutUs} from "../../constants/about-us";

@Injectable({
  providedIn: 'root'
})
export class AboutUsRequest {

  public getAboutUsInfo(): Observable<IAboutUs[]>{
    return of(ABOUT_US_LIST)
  }
}
