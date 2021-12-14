export interface IGroup {
  id: string;
  heading: string;                // clickable text in accordion's group header, check accordion heading below for using html in header
  useHeadingTemplate?: boolean;  
  showChevron?: boolean;
  content: string;
  useContentTemplate?: boolean;
  isDisabled?: boolean;           // if true — disables accordion group
  isOpen?: boolean;               // is accordion group open or closed. This property supports two-way binding
  panelClass?: string;            // default value: panel-default; provides an ability to use Bootstrap's contextual panel classes (panel-primary, panel-success, panel-info, etc...). list of all available classes: https://getbootstrap.com/docs/3.3/components/#panels-alternatives
}