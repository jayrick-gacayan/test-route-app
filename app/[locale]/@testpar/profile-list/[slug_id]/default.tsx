export default function Default({
  params,
}: {
  params: { locale: string; slug_id: string }
}) {
  console.log('test ', params.slug_id)
  return <div>Default profile-list slug</div>
}
