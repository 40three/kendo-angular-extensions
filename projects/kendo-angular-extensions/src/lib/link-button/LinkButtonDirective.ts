import { Directive, Input, OnInit, ElementRef, SimpleChanges, OnChanges } from '@angular/core';
import { ButtonLook } from '@progress/kendo-angular-buttons';

@Directive({
    selector: 'a[kendoButton]',
})
export class LinkButtonDirective implements OnInit, OnChanges {
    @Input() look: ButtonLook = 'default';
    @Input() primary = false;

    /**
     * Reference to native elements
     */
    private _el: HTMLAnchorElement;

    constructor(
        private _elementRef: ElementRef,
    ) {
        this._el = this._elementRef.nativeElement;
    }

    ngOnInit() {
        const el = this._elementRef.nativeElement as HTMLAnchorElement;
        el.classList.add('k-button');
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['look']) {
            this._applyClass('k-bare', this.look === 'bare');
            this._applyClass('k-flat', this.look === 'flat');
            this._applyClass('k-outline', this.look === 'outline');
        }
        if (changes['primary']) {
            this._applyClass('k-primary', this.primary);
        }
    }

    private _applyClass(cssClassName: string, apply: boolean) {
        if (apply) {
            this._el.classList.add(cssClassName);
        }
        if (!apply) {
            this._el.classList.remove(cssClassName);
        }
    }
}
