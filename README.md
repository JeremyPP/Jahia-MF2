# Jahia-MF2 (W.I.P.)
Source code for the front-end of Jahia Marketing Factory 2.0 (MF2) and custom css to use with Angular Material.

**Disclaimer**: This project is in active development and it is still a work in progress. You may encounter bugs and limited features. Updates will be pushed regularly.

## HTML

**---**

#### HTML Documentation

##### Custom fonts and Icon fonts

You need to import on the page header the two following fonts:

```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

**---**

## CSS
Custom css for MF2 and all other products that are based on the Google Material guidelines.

The following documentation is only valid for some custom elements, custom colors, and elements sizing.
Since it is still a work in progress there might be bugs and some options might not have been implemented yet. Let me know if something you need is missing.

You can check the **Angular Material documentation** [here](https://material.angularjs.org/latest/demo).

The complete official **Material Design guidelines** can be found [here](https://material.google.com/).

(For any design or interface related issue, if I'm not available, the Material guidelines page should have everything you need. **Use it!**).

#### CSS Documentation

##### Generic styles

All global and generic styles are defined at the beginning of the css file in the **Generic styles** section. This section includes:
- Cards type (shadow, background,...)
- Angular tooltip
- ...

More to come...

###### Cards

If not using the `md-card` angular directive, for whatever reason, you can use the `.card-1` class to get the shadow and background of a material card.

More shadow deeps will be added in the future.

##### Page loader

Every page has a loader so all the resources have time to load and display properly.

To use the loader, just add the following code just after `<body>`:
```
<div id="pageloader">
    <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="circle" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
</div>
```
The css for the loader is already set in the **Generic styles** section.

Lastly, make sure the following javascript is in your main js file:
```
$(window).load(function() {
	setTimeout(function(){
		$("#pageloader").fadeOut('fast');
	}, 500);
});
```

##### Element sizing

You can use the `.dxWidth` class to set the size of any element on your page.
You can set the size in pixels (px) or percent (%).

The available sizes in percent are:
- `.dxWidth-100`, sets a width of 100%.
- `.dxWidth-90`, sets a width of 90%.
- `.dxWidth-80`, sets a width of 80%.
- `.dxWidth-50`, sets a width of 50%.
- `.dxWidth-Onethird`, sets a width of 100% / 3.
- `.dxWidth-25`, sets a width of 25%.

In pixels, the available size are:
- `dxWidth-1600px`,
- `dxWidth-1440px`,
- `dxWidth-1280px`,
- `dxWidth-1080px`,
- `dxWidth-960px`,
- `dxWidth-840px`,
- `dxWidth-720px`,
- `dxWidth-600px`,
- `dxWidth-480px`,
- `dxWidth-320px`.

More sizing options will be available on future updates.

##### Header

The header already uses the Angular material styles.
On this section there are only a few override css and the styles for the header search bar.

###### Search bar

The header search bar is a custom element.

Just include the following html code in your page just after the `</h2>` on the header:
```
<div class="searchFieldWrapper">
    <div class="searchicon">
        <md-icon> search </md-icon>
    </div>
    <input type="text" class="searchFieldInput dxWidth-100" name="header-search" value="" placeholder="Filter by keywords">
</div>
```

An example of a header with search bar would look like this:
```
<!-- Header toolbar -->
<div ng-controller="ToolbarCtrl" class="mainToolbarContainer" md-whiteframe="1">
    <md-toolbar class="mainToolbarTop">
        <div class="md-toolbar-tools">
            <h2>
                <span>Page title</span>
            </h2>
            
            <!-- Search (Full text filter) -->
            <div class="searchFieldWrapper">
                <div class="searchicon">
                    <md-icon> search </md-icon>
                </div>
                <input type="text" class="searchFieldInput dxWidth-100" name="header-search" value="" placeholder="Filter by keywords">
            </div>
            
        </div>
    </md-toolbar>
</div>
```

All the css for the search bar is already on the **Header styles** -> **Header search bar** section.

##### Custom Elements and Specific Styles

Goes on this section all custom css and specific styles.

All the styles for an element are separated by a comment section with the name of this element.

**---**

## JAVASCRIPT
**---**