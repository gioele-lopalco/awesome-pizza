'use client';

import { Flex, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Home = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      router.push('/customer');
    }
  }, [isMounted, router]);

  return (
    !isMounted && (
      <Flex align="center" gap="middle">
        <Spin size="large" />
      </Flex>
    )
  );
};

export default Home;
