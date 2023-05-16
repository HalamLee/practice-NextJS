import { useRouter } from 'next/router';
import { useState } from 'react';
import css from 'styled-jsx/css';

export async function getServerSideProps() {
  console.log('server');

  return {
    props: {},
  };
}

export default function ShallowRouting() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { status = 'initial' } = router.query;

  return (
    <>
      <div>
        <h1>Clicked: {String(clicked)} </h1>
        <h1>Status: {status}</h1>
        <button
          onClick={() => {
            alert('edit');
            setClicked(true);
            location.replace('/shallow-routing?status=editing');
          }}>
          edit(replace)
        </button>
        <span> 로컬 state 유지 안 됨(리렌더)</span>
        <br />
        <button
          onClick={() => {
            alert('edit');
            setClicked(true);
            router.push('/shallow-routing?status=editing');
          }}>
          edit(router.push)
        </button>
        <span> 로컬 state 유지 / data fetching은 일어남</span>
        <br />
        <button
          onClick={() => {
            alert('edit');
            setClicked(true);
            router.push('/shallow-routing?status=editing', undefined, {
              shallow: true,
            });
          }}>
          edit(shallow)
        </button>
        <span> 로컬 state 유지 / data fetching 안 일어남</span>
      </div>

      <style jsx>{style}</style>
    </>
  );
}

const style = css`
  div {
    width: 100vw;
    height: 300px;
    padding-left: 10px;
    padding-top: 10px;
  }

  button {
    margin-bottom: 10px;
    padding: 5px;
  }
`;
