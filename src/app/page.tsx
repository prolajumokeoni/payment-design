import Editor from "./components/Editor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Questions from "./components/Questions";

export default function Home() {
  return (
   <div>
    <Header />
    <Editor />
    <Questions />
    <Footer />
   </div>
  )
}
