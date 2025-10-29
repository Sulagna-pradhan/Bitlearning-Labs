// import React from 'react';
// import { useSearchParams } from 'react-router';

// type FilterTypes = string | number | boolean | null | undefined;

// const deserializeValue = (
//   value: string | null,
// ): string | number | boolean | null => {
//   if (!value) return value;
//   if (value.toLowerCase() === 'true') return true;
//   if (value.toLowerCase() === 'false') return false;
//   const numberValue = Number(value);
//   if (!Number.isNaN(numberValue)) return numberValue;
//   return value;
// };

// const serializeValue = (value: FilterTypes): string | null => {
//   if (value === null || value === undefined) return null;
//   if (typeof value === 'string') return value;
//   if (typeof value === 'number') return value.toString();
//   if (typeof value === 'boolean') return value ? 'true' : 'false';
//   throw new Error(`Invalid filter value type: ${typeof value}`);
// };

// function useQueryFilter<K extends string>(filterNames: readonly K[]) {
//   type Filters = Record<K, string | number | boolean | null>;
//   type FP = Partial<Record<K, FilterTypes>>;

//   const [searchParams, setSearchParams] = useSearchParams();

//   const filters = React.useMemo(() => {
//     return Object.fromEntries(
//       filterNames.map((name) => [
//         name,
//         deserializeValue(searchParams.get(name)),
//       ]),
//     ) as Filters;
//   }, [searchParams, filterNames]);

//   function setFilter(name: K, value: FilterTypes | (() => FilterTypes)) {
//     setSearchParams((params) => {
//       const next = new URLSearchParams(params);
//       const v = typeof value === 'function' ? value() : value;
//       const serialized = serializeValue(v);
//       serialized === null ? next.delete(name) : next.set(name, serialized);
//       return next;
//     });
//   }

//   function setFilterInBatch(p: FP | (() => FP)) {
//     setSearchParams((prev) => {
//       const next = new URLSearchParams(prev);
//       const updates: FP = typeof p === 'function' ? p() : p;

//       for (const [name, value] of Object.entries(updates)) {
//         const filterName = name as K;
//         const filterValue = value as FilterTypes;
//         const serialized = serializeValue(filterValue);
//         serialized === null
//           ? next.delete(filterName)
//           : next.set(filterName, serialized);
//       }

//       return next;
//     });
//   }

//   return { filters, setFilter, setFilterInBatch };
// }

// export default useQueryFilter;
