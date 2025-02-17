export type CellType = "number" | "string" | "boolean" | "object" | "date" | "virtual";
export type SheetSection = "header" | "table" | "footer";

export type CellDescription = {
  type: CellType;
  fieldName: string;
  section: SheetSection;
  address?: string;
  setValue?: (rawCellvalue: string | undefined, result: ResultOfImport) => any;
  validate?: (val: any) => boolean;
};

export type SheetDesciptionOptions = {
  startTable?: number;
  endTable?: number;
  content: Array<CellDescription>;
};
export type ImportFileDesciptionOptions = {
  sheets: SheetDesciptionOptions[];
};

export type ResultOfImport = {
  header?: {};
  footer?: {};
  table?: any[];
};
