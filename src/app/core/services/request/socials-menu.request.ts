import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {ISocials, SOCIALS_LIST} from "../../constants/socials-menu";

@Injectable({
  providedIn: 'root'
})
export class SocialsMenuRequest {
  public getSocials(): Observable<ISocials[]> {
    return of(SOCIALS_LIST);
  }
}
