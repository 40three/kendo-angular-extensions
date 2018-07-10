# Navigate Back Directive

Just a small directive that

* adds click event listener
* calls location.back() on click

## Installation

In your app or feature module:

    import { NavigationModule } from '@40three/kendo-angular-extensioins';

    @NgModule({
      imports: [
        NavigationModule,
      ],
      ...
    })

## Example

    <a back>Navigate back</a>
    <button back>Cancel</button>
