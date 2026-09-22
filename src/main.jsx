import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

const Product=({name,desc,kind}) => (
  <a className={"product "+kind} href="#">
    <strong>{name}</strong><span>{desc}</span><b>→</b>
  </a>
);

function App(){
  return <div>
    <header><a href="#top">株式会社創正</a><nav><a href="#products">事業・製品</a><a href="#about">会社</a><a href="#contact">連絡</a></nav></header>
    <main id="top">
      <section className="hero">
        <div><small>株式会社創正</small><h1>つくる。<br/>なおす。<br/>考える。</h1><p>ソフトウェアや電子機器など、対象に合わせて仕事をしています。</p></div>
        <aside><strong>創正</strong><span>2026</span></aside>
      </section>
      <section className="products" id="products">
        <div className="section-head"><small>事業・製品</small><h2>いま、やっていること。</h2></div>
        <div className="product-list">
          <Product name="Iro" desc="アプリ" kind="yellow"/>
          <Product name="Sousei-line" desc="ソフトウェアの製造・検品工程" kind="blue"/>
          <Product name="電子機器" desc="修理・製作など" kind="pink"/>
        </div>
      </section>
      <section className="about" id="about"><small>会社について</small><h2>株式会社創正</h2><p>会社情報は公開内容の確定後に掲載します。</p></section>
      <section className="contact" id="contact"><small>お問い合わせ</small><h2>仕事や製品について、<br/>ご連絡ください。</h2><a href="#">連絡する →</a></section>
    </main>
    <footer><b>株式会社創正</b><span>© 2026</span></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);