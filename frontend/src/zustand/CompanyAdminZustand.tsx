import { create } from "zustand";
import type { ZustandTypes } from "../types/CompanyAdmin/ZustandTypes";

export const UseCompanyZutand = create<
ZustandTypes>((set) => ({
    selectedTab: "uploaddocuments",
    setSelectedTab: (selectedTab: string) => set({ selectedTab: selectedTab }),
    isEdit: "",
    setIsEdit: (isEdit) => set({ isEdit: isEdit })
  }))


