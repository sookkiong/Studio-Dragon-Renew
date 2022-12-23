import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "lang",
});

export const langOnState = atom({
  key: "langOnState",
  default: "kor",
  effects_UNSTABLE: [persistAtom],
});
