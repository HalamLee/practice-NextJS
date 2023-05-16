import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Blog() {
  const router = useRouter();
  const { username, info, uid } = router.query;
  const [name, setName] = useState('?');

  // useEffect(() => {
  //   fetch('/api/user')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setName(data.name);
  //     });
  // }, []);

  useEffect(() => {
    if (uid != null) {
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
        });
    }
  }, [uid]);

  return (
    <>
      <h1>
        {username} {info}
      </h1>

      <h1>Name: {name}</h1>
    </>
  );
}
