import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {IPartner, PARTNERS_LIST} from "../../constants/partners.list";

@Injectable({
  providedIn: 'root'
})
export class PartnersListRequest {

  public getPartnersList(): Observable<IPartner[]>{
    return of(PARTNERS_LIST)
  }
}
