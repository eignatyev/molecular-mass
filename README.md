# molecular-mass

Calculate molecular mass in atomic mass units

## npm package

## Install

```_
yarn add molecular-mass
```

## Use CLI

```_
yarn molecular-mass H20 # => 18.02
```

## Use API

```ts
import { calculateMolecularMass } from 'molecular-mass';

console.log(calculateMolecularMass('H2O')); // => 18.02
```

## Source code

### Clone

```_
git clone https://github.com/eignatyev/molecular-mass.git
cd molecular-mass
```

### Build and use

```_
yarn
yarn build              # compile the project
node bin/index.js H20   # => 18.02
```

### Run unit tests

```_
yarn test
```
