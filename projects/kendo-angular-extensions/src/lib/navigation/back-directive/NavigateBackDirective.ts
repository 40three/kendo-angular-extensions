import { Directive, ElementRef, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

/**
 * Listen for clicks and navigate back in history on click.
 */
@Directive({
    selector: '[back]'
})
export class NavigateBackDirective implements OnInit, OnDestroy {

    private _clickSubscription: Function;

    constructor(
        private _elRef: ElementRef,
        private _renderer: Renderer2,
        private _location: Location,
    ) { }

    ngOnInit() {
        if (!this._elRef) {
            throw new Error('ElementRef empty.');
        }

        this._addClickHandler();
        this._ensureHrefIsSetIfItsALink();
    }

    ngOnDestroy() {
        this._removeClickHandler();
    }

    private _ensureHrefIsSetIfItsALink() {
        const e = this._elRef.nativeElement as HTMLElement;
        if (e.tagName.toLowerCase() === 'a') {
            const a = e as HTMLLinkElement;
            if (!a.href) {
                a.href = '';
            }
        }
    }

    private _addClickHandler() {
        this._clickSubscription = this._renderer.listen(this._elRef.nativeElement, 'click', this._handleClickEvent);
    }

    private _removeClickHandler() {
        this._clickSubscription && this._clickSubscription();
    }

    private _handleClickEvent = (): boolean => {
        this._location.back();
        return false;
    }
}
