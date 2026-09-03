import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type BearStore = {
  bears: number;
  addBear: () => void;
};

export const useBearStore = create<BearStore>()(
  devtools(
    (set) => ({
      bears: 0,
      addBear: () =>
        set((state) => ({ bears: state.bears + 1 }), undefined, 'addBear'),
    }),
    { name: 'BearStore' },
  ),
);

type FishStore = {
  fishes: number;
  addFish: () => void;
};

export const useFishStore = create<FishStore>()(
  devtools(
    (set) => ({
      fishes: 0,
      addFish: () =>
        set((state) => ({ fishes: state.fishes + 1 }), undefined, 'addFish'),
    }),
    { name: 'FishStore' },
  ),
);
