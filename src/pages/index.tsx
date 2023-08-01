import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

const inter = Inter({ subsets: ['latin'] })
import NewsComponent from '@/components/NewsComponent';
function useDebounceValue(value: number, time=300){
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(()=> {
    console.log("calling debounce");
    
    const timeout = setTimeout(() => {
      setDebounceValue(value => (value + 1) % 2);
    }, time)

    return () => {
      clearTimeout(timeout);
    }
  }, [value, time]);

  return debounceValue;
}
export default function Home() {
  // const [news, setNews] = useState([]);
  const [item, setItem] = useState(0);
  const [loading, setLoading] = useState(false);
  const debounceValue = useDebounceValue(item);
  console.log(debounceValue);
  const [translate, setTranslate] = useState(0)
  

  const handleScroll = (e: any) => {
    e.preventDefault()
    setTranslate(-190)
  
    setItem(c => (c + 1)%2);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div onWheel={(e) => handleScroll(e)} className={clsx({transform: "translateY(" + translate +"%"},'h-screen-full w-3/5 mx-auto overflow-hidden my-5 animate-[]')}>
      <NewsComponent key={item} slug={debounceValue} />

    </div>
  );
}
