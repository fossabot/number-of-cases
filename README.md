# Number-of-Cases
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsamchon%2Fnumber-of-cases.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsamchon%2Fnumber-of-cases?ref=badge_shield)

## Outline
Number of Case Generator for TypeScript (JavaScript).

Symbol                    | Class
--------------------------|----------------------
<sub>n</sub>P<sub>r</sub> | Permutation
n!                        | Factorial
<sub>n</sub>∏<sub>r</sub> | RepeatedPermutation
A x B x ... x Z           | CartesianProduct
<sub>n</sub>C<sub>r</sub> | Combination



## Usage
### Installation
```bash
npm install --save number-of-cases
```

### Common Features
```typescript
interface CaseGenerator<Iterator, ReverseIterator>
{
    // FREQUENCE ACCESSORS
    size(): number;
    begin(): Iterator;
    end(): Iterator;

    // REVERSE ITERATION IS ALSO POSSIBLE
    rbegin(): ReverseIterator;
    rend(): ReverseIterator;

    // ES2015, THEN FOR-OF ITERATION IS ALSO POSSIBLE
    [Symbol.iterator]: IterableIterator<Array<number>>;
}

interface Iterator
{
    get value(): Array<number>;

    prev(): Iterator;
    next(): Iterator;
    equals(obj: Iterator): boolean;
}
```

```typescript
import { CartesianProduct } from "number-of-cases";

function main(): void
{
    let generator = new CartesianProduct(5, 4); // 5C4
    console.log("n(5C4) =", generator.size());

    for (let it = generator.begin(); !it.equals(generator.end()); it = it.next())
    {
        let aCase: number[] = it.value;
        console.log("  -", aCase);
    }
}
main();
```

```typescript
for (let it = generator.rbegin(); !it.equals(generator.rend()); it = it.next())
{
    let aCase: number[] = it.value;
    console.log("  -", aCase);
}
```

```typescript
for (let aCase of generator)
    console.log("  -", aCase);
```

### Random Accessor
```typescript
interface RandomCaseGenerator<Iterator, ReverseIterator>
    extends CaseGenerator<Iterator, ReverseIterator>
{
    at(index: number): Array<number>;
}
```

Most of Case Generator classes, except the `Combination` class, provide a random accessor `at()`. By that method `at()`, you can access to a specific case through not full iteration, but the special index number.

  - Permutation
  - Factorial
  - RepeatedPermutation
  - CartesianProduct
  - ~~Combination~~

```typescript
import { Permutation } from "number-of-cases";

function main(): void
{
    let generator = new Permutation(7, 3);

    console.log(generator.at(13));
    console.log(generator.at(31));
    console.log(generator.at(9999)); // throw an out_of_range error.
}
main();
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsamchon%2Fnumber-of-cases.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsamchon%2Fnumber-of-cases?ref=badge_large)