# Link Button Directive

Kendo provides great styling for 'button' elements but you cannot apply the kendoButton directive to links and make them look like buttons.

This directive lets you create links that look like buttons.

* It simply applies the required classes. Using this directive you don't need to remember the class names and it "feels like using buttons".
* Use links if your buttons navigate to another url (routerLink for internal and href for external). This way users can right click > open in new tab / copy link.


## Installation

In your app / feature module:

    import { LinkButtonModule } from '@40three/kendo-angular-extensioins';

    @NgModule({
      imports: [
        LinkButtonModule,
      ],
      ...
    })

## Usage

    <a routerLink="/example" kendoButton>Go</a>

