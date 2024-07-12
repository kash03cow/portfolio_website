import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Card as NextCard, Image as NextImage, Link as NextLink, Spacer as NextSpacer } from '@nextui-org/react';
import keshav from '../assets/keshav_photo.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Card = styled(NextCard)`
  max-width: 24rem;
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;
`;

const Image = styled(NextImage)`
  border-radius: 50%;
  width: 9rem;
  height: 9rem;
  object-fit: cover;
`;

const Link = styled(NextLink)`
  color: #0070f3;
  &:hover {
    color: #005bb5;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 1rem;
`;

const App = () => {
  return (
    <Container>
      <Card>
        <div className="flex flex-col items-center">
          <Image
            src={keshav}
            alt="Keshav Bansal"
          />
          <NextSpacer y={1} />
          <h2 className="text-2xl font-bold text-center">Keshav Bansal</h2>
          <NextSpacer y={0.5} />
          <div className="flex flex-col items-center space-y-2">
            <span className="p-2">
                <Link  href="https://github.com/your-github" target="_blank">GitHub</Link>
                </span>
            <span className="p-2">
                <Link  href="https://linkedin.com/in/your-linkedin" target="_blank">LinkedIn</Link>
                </span>
            <span className="p-2">
                <Link  href="https://www.codechef.com/users/your-codechef" target="_blank">Codechef</Link>
                </span>
            <span className="p-2">
                <Link  href="https://www.instagram.com/your-instagram" target="_blank">Instagram</Link>
                </span>
            <span className="p-2">
                <Link  href="https://leetcode.com/your-leetcode" target="_blank">LeetCode</Link>
                </span>
          </div>
          <NextSpacer y={0.5} />
          <p className="text-center">Phone: +1234567890</p>
          <p className="text-center">Email: your-email@example.com</p>
        </div>
      </Card>
    </Container>
  );
};

export default App;
