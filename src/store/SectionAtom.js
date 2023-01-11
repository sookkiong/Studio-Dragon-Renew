import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const sectionOnState = atom({
  key: "sectionOnState",
  default: "#home",
});

export const scrollOnState = atom({
  key: "scrollOnState",
  default: 0,
});
