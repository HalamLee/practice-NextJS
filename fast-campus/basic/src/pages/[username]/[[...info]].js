import { useRouter } from 'next/router';

export default function Blog() {
  const router = useRouter();
  const { username, info } = router.query;
  return (
    <>
      <h1>
        {username} {info}
      </h1>
    </>
  );
}
