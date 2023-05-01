import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Grid category="latest" heading="Latest" />
        <Grid category="trending" heading="Trending" />
        <Grid category="sports" heading="Sports" />
        <Grid category="world" heading="World News" />
        <Grid category="entertainment" heading="Entertainment" />
        <Grid category="health" heading="Health" />
        <Grid category="business" heading="Business" />
        <Grid category="education" heading="Education" />
        <Grid category="politics" heading="Politics" />
        <Grid category="techonology" heading="techonology" />

      </main>
      <Footer/>
    </>
  );
};
const Latest = () => {
  return (
    <>
      <Header />
      <main>
        <Grid category="latest" heading="Latest" />
      </main>
      <Footer/>
    </>
  );
};
const Trending = () => {
  return (
    <>
      <Header />
      <main>
        <Grid category="trending" heading="Trending" />
      </main>
      <Footer/>
    </>
  );
};
const Sports = () => {
  return (
    <>
      <Header />
      <main>
        <Grid category="sports" heading="Sports" />
      </main>
      <Footer/>
    </>
  );
};
const World = () => {
  return (
    <>
      <Header />
      <main>
        <Grid category="world" heading="World News" />
      </main>
      <Footer/>
    </>
  );
};
const Entertainment = () => {
  return (
    <>
      <Header />
      <main>
        <Grid category="entertainment" heading="Entertainment" />
      </main>
      <Footer/>
    </>
  );
};
const Health = () => {
  return (
    <>
      <Header />
      <main>
        <Grid category="health" heading="Health" />
      </main>
      <Footer/>
    </>
  );
};
const Business = () => {
  return (
    <>
      <Header />
      <main>
        <Grid category="business" heading="Business" />
      </main>
      <Footer/>
    </>
  );
};
const Education = () => {
  return (
    <>
      <Header />
      <main>
        <Grid category="education" heading="Education" />
      </main>
      <Footer/>
    </>
  );
};
const Politics = () => {
  return (
    <>
      <Header />
      <main>
        <Grid category="politics" heading="Politics" />
      </main>
      <Footer/>
    </>
  );
};
const Techonology = () => {
  return (
    <>
      <Header />
      <main>
        <Grid category="techonology" heading="techonology" />
      </main>
      <Footer/>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/latest" Component={Latest} />
        <Route path="/trending" Component={Trending} />
        <Route path="/sports" Component={Sports} />
        <Route path="/world" Component={World} />
        <Route path="/entertainment" Component={Entertainment} />
        <Route path="/health" Component={Health} />
        <Route path="/business" Component={Business} />
        <Route path="/education" Component={Education} />
        <Route path="/politics" Component={Politics} />
        <Route path="/techonology" Component={Techonology} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
