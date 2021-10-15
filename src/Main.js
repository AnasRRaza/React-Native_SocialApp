import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigation from './Navigation';
import AuthProvider from './Provider/Auth';
import PostsProvider from './Provider/Posts';

const Main = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PostsProvider>
          <Navigation />
        </PostsProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default Main;
