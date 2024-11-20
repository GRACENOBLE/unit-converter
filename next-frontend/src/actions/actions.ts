"use server";

export const GetUnits = async ({
  value,
  from,
  to,
}: {
  value: number;
  from:
    | ""
    | "nm"
    | "μm"
    | "mm"
    | "cm"
    | "m"
    | "km"
    | "in"
    | "yd"
    | "ft-us"
    | "ft"
    | "fathom"
    | "mi"
    | "nMi";
  to:
    | ""
    | "nm"
    | "μm"
    | "mm"
    | "cm"
    | "m"
    | "km"
    | "in"
    | "yd"
    | "ft-us"
    | "ft"
    | "fathom"
    | "mi"
    | "nMi";
}) => {
  console.log(value, from, to);
};
