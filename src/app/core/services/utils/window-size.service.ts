import {DOCUMENT} from "@angular/common";
import {inject, Injectable} from "@angular/core";

import {BehaviorSubject, distinctUntilChanged, map, Observable, Subject} from "rxjs";
import {MediaBreakpoints} from "../../constants/media-breakpoints";


@Injectable({
  providedIn: 'root'
})
export class WindowSizeService {
  public resizeEvent$ = new Subject<Event>();
  public resizeWidth$!: Observable<number>;
  public resizeHeight$!: Observable<number>;

  public isLessMobileX$!: Observable<boolean>;
  public isOverMobileX$!: Observable<boolean>;
  public isLessMediumX$!: Observable<boolean>;
  public isOverMediumX$!: Observable<boolean>;
  public isLessDesktop$!: Observable<boolean>;
  public isOverDesktop$!: Observable<boolean>;

  private _currentSize!: number;
  private readonly document = inject(DOCUMENT);

  public constructor() {
    this._currentSize = this.document.defaultView?.innerWidth ?? 0;

    const resizeWidth = new BehaviorSubject<number>(this.document.defaultView?.innerWidth ?? 0);
    const resizeHeight = new BehaviorSubject<number>(this.document.defaultView?.innerHeight ?? 0);

    this.resizeWidth$ = resizeWidth.pipe(distinctUntilChanged());
    this.resizeHeight$ = resizeHeight.pipe(distinctUntilChanged());

    this.isLessMobileX$ = this.resizeWidth$.pipe(map(width => width <= MediaBreakpoints.MOBILE_X));
    this.isOverMobileX$ = this.resizeWidth$.pipe(map(width => width > MediaBreakpoints.MOBILE_X));
  }
}
