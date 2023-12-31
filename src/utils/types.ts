export type ListItemType = {
  label: string;
  value: string;
  subtext?: string;
  id?: string;
};

export type ListSectionType = {
  [sectionId: string]: {
    sectionTitle: string;
    listItems: ListItemType[];
  };
};

export type ListDataType = {
  [aircraft: string]: ListSectionType;
};

export type userPrefsType = {
  allExpanded: boolean;
  theme: string;
};
