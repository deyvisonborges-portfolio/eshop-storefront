export default function Page({
  params,
}: {
  params: { categoryId: string; itemId: string };
}) {
  console.log(params);
  return (
    <div>
      <p>{params.categoryId}</p>
      <p>{params.itemId}</p>
    </div>
  );
}
