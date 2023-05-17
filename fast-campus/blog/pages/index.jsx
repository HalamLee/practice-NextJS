import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
// import { getSortedPostsData } from '../lib/posts'; => CSR 방식에서는 사용하지 못함.
import { useEffect, useState } from 'react';

// SSG로 렌더링하기
// export async function getStaticProps() {
//   console.log('SSG');
//   // build 전: SSR처럼 동작하기 때문에 서버(터미널)에서 출력된다.
//   // build 후: 정적사이트이기 때문에 출력되지 않는다.
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// SSG로 렌더링 + 만들어둔 api 호출해서 사용
export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/posts');
  // getStaticProps 에서 fetch를 쓸 때는 상대경로 주소가 아닌 절대경로 주소로 써야 한다.
  // => 'api/posts'가 아닌 'http://localhost:3000' 사용
  const json = await response.json();

  return {
    props: {
      allPostsData: json.allPostsData,
    },
  };
}

// SSR로 렌더링하기
// export async function getServerSideProps() {
//   console.log('SSR'); // 터미널에서 출력된다.
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// 위 두 가지 방식을 모두 주석처리하면 CSR 방식으로 렌더링하게 되는데,
// 그때에는 fs를 쓰지 못한다. (gray-matter를 쓰기 위해 설치한 라이브러리를 불러와야 하는데 못씀)
// fs는 node.js 방식이기 때문에 fs를 쓰지 못하고(서버 사이드에서만 사용 가능),
// Next.js에서 제공하는 API Routes를 이용해야 한다.

// 기존(SSG, SSR에서는): export default function Home({ allPostsData }) {} 이렇게 Home 컴포넌트에 props로 바로 넘기지만
// 아래 코드처럼 사용해야 CSR 방식으로 렌더링할 수 있다.
// => useState를 이용해 초기값은 빈 배열을 두고 useEffect 에서 API를 호출해서 사용한다.
// 이때, 만들어둔 API에서는 gray-matter를 사용하는 함수를 써 데이터를 불러오고, 그것을 클라이언트에게 넘겨준다.

export default function Home({ allPostsData }) {
  // CSR 방식
  // export default function Home() {
  // const [allPostsData, setAllPostsData] = useState([]);
  // useEffect(() => {
  //   fetch('/api/posts')
  //     .then((res) => res.json())
  //     .then((data) => setAllPostsData(data.allPostsData));
  // }, []);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>배움의 즐거움을 느끼는 중 🚀</p>
        <br />
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
