export default function Page({
  params,
}: {
  params: { locale: string; slug_id: string }
}) {
  console.log('test ', params.slug_id)
  return <div>Test Page test par slug</div>
}
