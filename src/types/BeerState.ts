type BeerState = {
  beer: {
    choosenBeer: number | null;
    surprise: boolean;
  };
};

export type RootState = ReturnType<() => BeerState>;
