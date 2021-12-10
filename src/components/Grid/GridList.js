import GridItem from "./GridItem";

export default function GridList({ list }) {
  console.log("GridList");

  let gridList = null;

  if (Array.isArray(list))
    gridList = list.map((item) => <GridItem key={item.mal_id} item={item} />);

  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {gridList}
    </div>
  );
}
