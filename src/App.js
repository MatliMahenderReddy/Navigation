import React from 'react';
import SideMenu from "./Layouts/SideMenu";
import { Layout } from 'antd'; // Import Layout from 'antd'
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
function App() {
  return (
    <div>
    <Layout>
  <Header/>
  <Layout>
    <SideMenu/>
  </Layout>
  <Footer/>
</Layout>
    </div>
  );
}

export default App;
