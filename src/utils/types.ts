export type ListItemType = {
  label: string;
  value: string;
  subtext?: string;
};

export type ListSectionType = {
  [sectionTitle: string]: ListItemType[];
};

export type ListDataType = {
  [aircraft: string]: ListSectionType;
};

export type userPrefsType = {
  allExpanded: boolean;
  theme: string;
};
