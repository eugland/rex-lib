export interface ITab {
  id: string;
  heading: string;
  useHeadingTemplate?: boolean;   
  content?: string;
  customClass?: string;
  active: boolean;
  disabled?: boolean;
  removable?: boolean;
}